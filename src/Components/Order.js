import React from 'react';
import {VscLoading} from 'react-icons/vsc';
import httpConnection from '../httpConnection';
import { connect } from 'react-redux';
import {changeComponent } from '../actions';

import './Order.scss';
class Order extends React.Component {
    state = {
        WARE_CODE: '',
        WARE_COUNT: '',
        ON_REQUEST: false,
    }

    render() {
        const insert = async (e) => {
            this.setState({ON_REQUEST: true});
            let response = await httpConnection.httpJsonConnection("/wro/insert", {wrCount:this.state.WARE_COUNT, wrCode:this.state.WARE_CODE,ref:false}, );
            await alert(JSON.stringify(response));            
            await this.props.onChangeComponent();            
            await this.setState({ON_REQUEST: false});
        }

        const onChangeInput = (e) => {
            console.log(e.target.id);
            if (e.target.id === "input-warecode")
                this.setState({ WARE_CODE: e.target.value });
            else
                this.setState({ WARE_COUNT: e.target.value });
        }
        return (
            <div id="Order">
                {
                    (() => {
                        if (this.state.ON_REQUEST === false) {
                            return (                            
                                <div id="Order-form-wrapper">
                                    <form id="Order-form" action="/order/insert" method="post">
                                        <p> 제품 수주 </p>
                                        <label>
                                            <p>제품 코드  &nbsp;</p>
                                            <input type="text" id="input-warecode" value={this.state.WARE_CODE} onChange={onChangeInput} />
                                        </label>
                                        <label>
                                            <p>제품 개수  &nbsp;</p>
                                            <input type="text" id="input-warecount" value={this.state.WARE_COUNT} onChange={onChangeInput} />
                                        </label>
                                    </form>
                                    <input id="Order-form-button" type="button" value="수주" onClick={insert} />
                                </div>)
                        } else {
                            return (
                                <div id="Loading">
                                <VscLoading class="Loading-icon">
                                </VscLoading>
                                <div class="inner"/>
                                </div>
                            )
                         }
                    })()
                }
            </div>
        );
    }
}
let mapStateToProps = (state, undefined) => {
    return {
        currentMainComponent: state.counter.currentMainComponent
    };
  };

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeComponent: () => dispatch(changeComponent("OrderResult")),
    }
}
Order = connect(mapStateToProps, mapDispatchToProps)(Order);
export default Order;