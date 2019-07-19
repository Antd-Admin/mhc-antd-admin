---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

点击文本复制。
````jsx
import React from 'react';
import '../CityPicker.less';
import { CityPicker} from 'mhc-antd-admin';
import cnCity from '../Citys';

class CityPickerDemo extends React.Component {

  state = {
    city_show: false,
    city_value: ''
  };

  _onChangeCity=(inItem)=> {
    this.setState({city_value: inItem, city_show: false})
  }

  render() {
    return (
      <section className="hello-react-city-picker">

        <input type="text" value={this.state.city_value} placeholder="select city" onClick={e => {
          e.preventDefault();
          this.setState({city_show: true})
        }} readOnly={true}/>
        <CityPicker
          data={cnCity}
          onCancel={e => this.setState({city_show: false})}
          onChange={(v)=>this._onChangeCity(v)}
          show={this.state.city_show}
        />
      </section>

    );
  }
}
;
ReactDOM.render(
  <CityPickerDemo />,
  mountNode
);
````