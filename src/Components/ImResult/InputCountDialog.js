import React from 'react';
import './InputCountDialog.scss';
import httpConnection from '../../httpConnection';
import { connect } from 'react-redux';
import {changeComponent } from '../../actions';
class InputCountDialog extends React.Component {
    state = {
        inputCount : this.props.im.WR_COUNT
    }
    render() {
        const onChangeInputCount = (e) => {
            if(e.target.value <= this.props.im.WR_COUNT
                && e.target.value > this.props.im.WR_COUNT)
                this.setState({inputCount: e.target.value})
        }

        const onClickInputCount = async (e) => {
            e.target.parentElement.parentElement.style.display = "none";               
            let response = await httpConnection.httpJsonConnection("/im/updateRef", this.props.im);
            await (()=>{response ? alert(response.response) : 
                this.props.onChangeComponentLoading();
                this.props.onChangeComponent()})();                                       
        }
        return(
            <div class="InputCountDialog">
                <label>
                    <input type="number" onChange={onChangeInputCount} value={this.state.inputCount}/>
                    <input type="button" value="검수" onClick={onClickInputCount}></input>
                </label>                
            </div>
        );
    }
 }

 let mapDispatchToProps = (dispatch) => {
    return {
        onChangeComponentLoading: () => dispatch(changeComponent("Loading")),
        onChangeComponent: () => dispatch(changeComponent("ImResult"))
    }
}
InputCountDialog = connect(undefined, mapDispatchToProps)(InputCountDialog);
 export default InputCountDialog;