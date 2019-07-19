import React from 'react';
import PropTypes from 'prop-types';
import {Select,Cascader} from 'antd'
const Option = Select.Option;
import  cityData  from './onCity';
import Item from 'antd/lib/list/Item';
let cityOption,countryOption;
class CityLinkage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cityOptions:'',
            cityDataList:[],
            countryOptions:'',
            countryDataList:[]
        }
    }
    static propTypes = {
        data: PropTypes.array.isRequired,
        onCancel:PropTypes.func,
        onChange:PropTypes.func,
        fieldNames:PropTypes.object, 
        
      }
      static defaultProps = {
        data:[],
        onChange: () => null,
        onCancel:()=>null,
        fieldNames:{label: 'name', value: 'code', children: 'sub' }
      }

      handleProvinceChange = (value) => {
          let cityDataList=[];
          this.setState({
            cityDataList:[],
            countryDataList:[],
          },()=>{
            const cityOptionList = cityData.map((item,index)=>{
                if(item.code==value){
                    cityOption = item.sub;
                    console.log(cityOption)
                    cityOption.map((item1,index1)=>{
                        cityDataList.push(item1.name)
                    })
                }
              });
              this.setState({
                cityDataList,
                cityOptions:cityOption.map((item1,index1)=><Option key={item1.code}>{item1.name}</Option>)
              },()=>{
                  console.log(this.state.cityOptions)
              }) 
          })
          
      }
    
      onSecondCityChange = (value) => {
        let countryDataList=[];
        const cityOptionList = cityData.map((item,index)=>{
            item.sub.map((item1,index1)=>{
                if(item1.code==value){
                    countryOption = item1.sub;
                    console.log(countryOption) 
                    countryOption.map((item1,index1)=>{
                        countryDataList.push(item1.name)
                    })  
                }
            })
            
          });
          this.setState({
            countryDataList,
            countryOptions:countryOption.map((item1,index1)=><Option key={item1.code}>{item1.name}</Option>)
          },()=>{
              console.log(this.state.countryOptions)
          }) 
          
      }
    
      render(){
          const { data,onCancel,onChange,fieldNames,...props} = this.props;
        //   console.log(cityData)
          const provinceOptions = cityData.map((item,index) => <Option key={item.code}>{item.name}</Option>);
          return(
              <div>
                <Cascader
                fieldNames={fieldNames}
                options={cityData}
                onChange={onchange}
                />
                 <Select defaultValue="请选择" style={{ width: 150 }} onChange={this.handleProvinceChange} {...props}>
                    {provinceOptions}
                 </Select>
                 <Select value={this.state.cityDataList.length>0?this.state.cityDataList[0]:"请选择"} style={{ width: 150 }} onChange={this.onSecondCityChange} {...props}>
                    {this.state.cityOptions}
                 </Select>
                 <Select value={this.state.countryDataList.length>0?this.state.countryDataList[0]:"请选择"} style={{ width: 150 }} {...props}>
                    {this.state.countryOptions}
                 </Select>
            </div>
          )
      }

}
export default CityLinkage