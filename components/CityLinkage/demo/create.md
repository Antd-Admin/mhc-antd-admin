---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

城市联动

````jsx

import { CityLinkage } from 'mhc-antd-admin';

class App extends React.Component {
     constructor(props){
        super(props);
        this.state = {
            fieldNames:{
                label: 'name', value: 'code', children: 'sub' 
            }
        }
    }
    onChange =(value)=> {
       console.log(value);
    }
  render() {
      console.log(223)
      
    return (
      <CityLinkage onChange={this.onChange} fieldNames={this.state.fieldNames}/>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````