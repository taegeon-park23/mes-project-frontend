import React from 'react';
import Order from './Order';
import OrderResult from './OrderResult';
import MrResult from './MrResult';
import WorkOrder from './WorkOrder';
import ImResult from './ImResult';
import WorkOrderStory from './WorkOrderStory';
import {VscLoading} from 'react-icons/vsc';
import { connect } from 'react-redux';

class Main extends React.Component {
    render() {
        const currentMainComponent = () => {
          console.log(this.props.currentMainComponent);                  
            switch(this.props.currentMainComponent) {
              case "Order":
                return (<Order />);
              case "OrderResult":
                return (<OrderResult/>);
              case "MrResult":
                return(<MrResult/>);
              case "WorkOrder":
                return(<WorkOrder/>);
              case "ImResult":
                return(<ImResult/>);
              case "WorkOrderStory":
                return(<WorkOrderStory/>);
              case "Loading":
                return(<div id="Loading">
                <VscLoading class="Loading-icon">
                </VscLoading>
                <div class="inner"/>
                </div>);
              default:
                return (<Order />);
            }
          }  
        return(
            currentMainComponent()  
        )
    }
}
let mapStateToProps = (state, undefined) => {
    return {
        currentMainComponent: state.counter.currentMainComponent
    };
  };
  
  Main = connect(mapStateToProps, undefined)(Main);
export default Main;