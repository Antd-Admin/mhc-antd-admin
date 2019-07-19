import _defineProperty from 'babel-runtime/helpers/defineProperty';
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {Icon} from 'antd'
import './index.less'

class Progress extends React.Component{
    static propTypes = {
        className: PropTypes.string,
        prefix: PropTypes.string,
        type: PropTypes.string,
        percent: PropTypes.number,
        showInfo: PropTypes.bool,
        status: PropTypes.string,
        format: PropTypes.func,
        strokeWidth: PropTypes.number,
        width: PropTypes.number,
        style: PropTypes.object,
        normalColor: PropTypes.string,
        exceptionColor: PropTypes.string,
        successColor: PropTypes.string,
        bgColor: PropTypes.string
      }
    
       static defaultProps = {
         type: 'line',
          percent: 0,
         showInfo: true,
         className: '',
         prefix: 'mhc',
         strokeWidth: 10
      }
      constructor(props){
          super(props)
      }
      init =()=>{
        let _props = this.props;
        type = _props.type,
        percent = _props.percent,
        showInfo = _props.showInfo,
        status = _props.status,
        className = _props.className,
        prefix = _props.prefix,
        format = _props.format,
        strokeWidth = _props.strokeWidth,
        width = _props.width,
        style = _props.style,
        normalColor = _props.normalColor,
        exceptionColor = _props.exceptionColor,
        successColor = _props.successColor,
        bgColor = _props.bgColor;
        

       }
      getCurrentColor =()=> {
        if (this.props.percent < 100 && this.props.status === 'exception') {
          return this.props.exceptionColor || this.props.normalColor;
        }
        if (this.props.percent >= 100) {
          return this.props.successColor;
        }
        return this.props.normalColor;
      };
      renderInfoCont =()=> {
        let infoCont ;
        if (this.props.format) {
          infoCont = format(this.props.percent);
        } else {
          infoCont = this.props.percent + '%';
          if (this.props.percent >= 100) {
            infoCont = React.createElement(Icon, {
              type: this.props.type === 'circle' ? 'check' : 'check-circle',
              style: {
                color: this.getCurrentColor()
              }
            });
          } else if (this.props.status === 'exception') {
            infoCont = React.createElement(Icon, {
              type: this.props.type === 'circle' ? 'close' : 'close-circle',
              style: {
                color: this.getCurrentColor()
              }
            });
          }
        }
        return infoCont;
      };
      renderProgressCont = (progressWidth,containerCls,statusCls)=> {
        let progressCont;
        switch (this.props.type) {
          case 'circle':
            progressCont = React.createElement(
              'div',
              {
                className: statusCls,
                style: {
                  width: progressWidth,
                  height: progressWidth
                }
              },
              React.createElement('div', {
                className: this.props.prefix + '-progress-wrapper',
                style: {
                  borderRadius: progressWidth,
                  borderWidth: this.props.strokeWidth,
                  borderColor: this.props.bgColor
                }
              }),
              React.createElement(
                'svg',
                { className: this.props.prefix + '-progress-inner' },
                React.createElement('circle', {
                  className: this.props.prefix + '-progress-inner-path',
                  cx: progressWidth / 2,
                  cy: progressWidth / 2,
                  r: (progressWidth - this.props.strokeWidth) / 2,
                  style: {
                    stroke: this.getCurrentColor(),
                    strokeWidth: this.props.strokeWidth,
                    strokeDasharray: Math.PI * (progressWidth - this.props.strokeWidth),
                    strokeDashoffset: Math.PI * (progressWidth - this.props.strokeWidth) * (100 - this.props.percent) / 100
                  }
                })
              ),
              this.props.showInfo ? React.createElement(
                'div',
                {
                  className: this.props.prefix + '-progress-info',
                  style: { lineHeight: progressWidth + 'px' }
                },
                this.renderInfoCont()
              ) : null
            );
            break;
          case 'line':
          default:
            progressCont = React.createElement(
              'div',
              { className: statusCls },
              React.createElement(
                'div',
                {
                  className: this.props.prefix + '-progress-wrapper',
                  style: {
                    background: this.props.bgColor,
                    width: progressWidth,
                    height: this.props.strokeWidth,
                    borderRadius: this.props.strokeWidth
                  }
                },
                React.createElement('div', {
                  className: this.props.prefix + '-progress-inner',
                  style: {
                    background: this.getCurrentColor(),
                    width: this.props.percent + '%',
                    height: this.props.strokeWidth,
                    borderRadius: this.props.strokeWidth
                  }
                })
              ),
              this.props.showInfo ? React.createElement(
                'div',
                { className: this.props.prefix + '-progress-info' },
                this.renderInfoCont()
              ) : null
            );
            break;
        }
        return progressCont;
      };
       
      circle = ()=>{
        const {
          className,
         prefix,
         type,
         percent,
         showInfo, 
         status,
         format,
         strokeWidth,
         width,
         style,
         normalColor,
         exceptionColor,
         successColor,
         bgColor
        } = this.props
        let progressWidth = this.props.width || (type == 'circle' ? 132 : 580);
        // let infoCont ;
        // infoCont = this.props.percent + '%';
        //   if (this.props.percent >= 100) {
        //     infoCont = React.createElement(Icon, {
        //       type: this.props.type === 'circle' ? 'check' : 'check-circle',
        //       style: {
        //         color: this.getCurrentColor()
        //       }
        //     });
        //   } else if (this.props.status === 'exception') {
        //     infoCont = React.createElement(Icon, {
        //       type: this.props.type === 'circle' ? 'close' : 'close-circle',
        //       style: {
        //         color: this.getCurrentColor()
        //       }
        //     });
        //   }
        return (
          <div className={prefix+'-progress'+ ' '+ prefix+'-progress-circle'} 
             style={{
               width: progressWidth,
               height: progressWidth
              }}
          >
          <div>
                <div className={prefix + '-progress-wrapper'}
                      style={{
                        borderRadius: progressWidth,
                        borderWidth: strokeWidth,
                        borderColor: "#f8f8f8"
                    }}
                >
               </div>
               <svg className={prefix + '-progress-inner'}>
                 <circle className={prefix + '-progress-inner-path'}
                  cx={ progressWidth / 2}
                  cy={progressWidth / 2}
                  r={(progressWidth - strokeWidth) / 2}
                  style={{
                    stroke:this.getCurrentColor(),
                    strokeWidth:strokeWidth,
                    strokeDasharray: Math.PI * (progressWidth - strokeWidth),
                    strokeDashoffset: Math.PI * (progressWidth - strokeWidth) * (100 - percent) / 100
                  }}
                 >
                 </circle>
               </svg>
               {
                 showInfo?<div className={ prefix + '-progress-info'}
                      style={{
                       lineHeight: progressWidth + 'px',  
                    }}
                    
                 >
                 {percent + '%'}
                 {/* {
                   percent>=100?<Icon type={type === 'circle' ? 'check' : 'check-circle'} style={{ color: '#4b0' }}></Icon>:
                   <Icon type={type === 'circle' ? 'check' : 'check-circle'} style={{ color: '#f44' }}></Icon>
                 } */}
                 </div>
                
                 :null
               }
              </div>
          </div>

        )
      }
      render(){
        let _cx2;
        let progressWidth = this.props.width || (this.props.type === 'circle' ? 132 : 580);

        let containerCls = cx(this.props.prefix + '-progress',this.props.prefix + '-progress-' + this.props.type, _defineProperty({}, this.props.className, !!this.props.className));

        let statusCls = cx((_cx2 = {}, _defineProperty(_cx2, this.props.prefix + '-progress-inprogress', this.props.percent < 100 && this.props.status !== 'exception'), _defineProperty(_cx2, this.props.prefix + '-progress-exception', this.props.percent < 100 && this.props.status === 'exception'), _defineProperty(_cx2, this.props.prefix + '-progress-success', this.props.percent >= 100), _cx2));
        const {
          className,
           prefix,
          type,
          percent,
         showInfo, 
         status,
         format,
         strokeWidth,
         width,
         style,
         normalColor,
         exceptionColor,
         successColor,
         bgColor,
         ...props,
        } = this.props
        console.log(333)
        console.log(type);
        switch(type){
            case 'circle':
              return this.circle();
            case 'line':
                return 0;
        }
      }
}
export default Progress