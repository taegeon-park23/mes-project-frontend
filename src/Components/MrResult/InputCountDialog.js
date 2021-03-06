import React from 'react';
import './InputCountDialog.scss';
import httpConnection from '../../httpConnection';
import { connect } from 'react-redux';
import {changeComponent } from '../../actions';
class InputCountDialog extends React.Component {
    state = {
        inputCount : 1
    }
    render() {
        const onChangeInputCount = (e) => {
            if(e.target.value <= this.props.mr.WR_COUNT - this.props.mr.WR_COUNT_CUR
                && e.target.value > 0)
                this.setState({inputCount: e.target.value})
        }

        const onClickInputCount = async (e) => {
            e.target.parentElement.parentElement.style.display = "none";
            if(this.props.mr.WR_COUNT !== this.props.mr.WR_COUNT_CUR) {
                this.props.mr.WR_COUNT_CUR = this.state.inputCount;            
                let response = await httpConnection.httpJsonConnection("/im/insert", this.props.mr);    
                response ? alert(response.response) : await (()=>{
                     this.props.onChangeComponentLoading();
                     this.props.onChangeComponent();  })()             
            } else
                alert("이미 입고 처리가 완료되었습니다.");            
        }
        return(
            <div class="InputCountDialog">
                <label>
                    <input type="number" onChange={onChangeInputCount} value={this.state.inputCount}/>
                    <input type="button" value="입고" onClick={onClickInputCount}></input>
                </label>                
            </div>
        );
    }
 }

 let mapDispatchToProps = (dispatch) => {
    return {
        onChangeComponentLoading: () => dispatch(changeComponent("Loading")),
        onChangeComponent: () => dispatch(changeComponent("MrResult"))
    }
}
InputCountDialog = connect(undefined, mapDispatchToProps)(InputCountDialog);
 export default InputCountDialog;