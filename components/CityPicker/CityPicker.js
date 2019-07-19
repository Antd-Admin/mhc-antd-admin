import React from 'react';
import PropTypes from 'prop-types';
import {ReactPicker} from 'react-picker';


class CityPicker extends React.Component {

  static propTypes = {
   
    data: PropTypes.array.isRequired,
    dataMap: PropTypes.object,
    selected: PropTypes.array,
    show: PropTypes.bool
  }

  static defaultProps = {
    data: [],
    dataMap: {id: 'name', items: 'sub'},
    selected: [],
    show: false
  }

  constructor(props) {
    super(props);
    const {data, selected, dataMap} = this.props;
    const {groups, newselected} = this.parseData(data, dataMap.items, selected);
    this.state = {
      groups,
      selected: newselected,
      picker_show: false,
      text: ''
    };
    //console.log(this.state.groups)
    this.updateGroup = this.updateGroup.bind(this);
    this.parseData = this.parseData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //@return array of group with options
  parseData(data, subKey, selected = [], group = [], newselected = []) {
    let _selected = 0;

    if (Array.isArray(selected) && selected.length > 0) {
      let _selectedClone = selected.slice(0);
      _selected = _selectedClone.shift();
      selected = _selectedClone;
    }

    if (typeof data[_selected] === 'undefined') {
      _selected = 0;
    }

    newselected.push(_selected);

    let item = data[_selected];

    var _group = JSON.parse(JSON.stringify(data));
    _group.forEach(g => delete g[subKey]);
    group.push({items: _group, mapKeys: {'label': this.props.dataMap.id}});

    if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
      return this.parseData(item[subKey], subKey, selected, group, newselected);
    } else {
      return {groups: group, newselected};
    }
  }


  updateGroup(inItem,selected, picker) {
    const {data, dataMap} = this.props;
    //validate if item exists

    const {groups, newselected} = this.parseData(data, dataMap.items, selected);

    let text = '';
    try {
      groups.forEach((group, _i) => {
        text += `${group['items'][selected[_i]][this.props.dataMap.id]} `;
      });
    } catch (err) {
      //wait
      text = this.state.text;
    }


    //console.log(groups)
    this.setState({
      groups,
      text,
      selected: newselected
    });

    //update picker
    picker.setState({
      selected: newselected
    });
  }

  handleChange() {
    if (this.props.onChange) this.props.onChange(this.state.text);
  }

  render() {
    return (
      <ReactPicker
        show={this.props.show}
        onGroupChange={this.updateGroup}
        onChange={this.handleChange}
        defaultSelect={this.state.selected}
        groups={this.state.groups}
        onCancel={this.props.onCancel}
      />
    );
  }
}

export default CityPicker;