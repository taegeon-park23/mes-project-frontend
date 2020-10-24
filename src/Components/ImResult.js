import React from 'react';
import './ImResult.scss';
import httpConnection from '../httpConnection';
import {dateFormat} from '../dateFormat';
import InputCountDialog from '../Components/ImResult/InputCountDialog';

class MrResult extends React.Component {
    state = {
        tuple : []
    }

    componentDidMount = async () => {
        const onClickShowInputDialog = (e) => {
            const InputCountDialog = e.target.parentElement.lastElementChild;
            if(InputCountDialog.style.display ===  "none" ||
                InputCountDialog.style.display ===  "") 
                InputCountDialog.style.display = "block";
            else   
                InputCountDialog.style.display = "none";
        }  

        let response = await httpConnection.httpJsonConnection("/im/list", {});
        let tuple = await response.map( im =>(
            <tr>
                <td class="td-IM_CODE">{im.IM_CODE}</td>
                <td class="td-MR_CODE">{im.MR_CODE}</td>
                <td class="td-WR_NAME">{im.WR_NAME}</td>
                <td class="td-BSN_NAME">{im.BSN_NAME}</td>
                <td class="td-WR_COUNT">{im.WR_COUNT}</td>                
                <td class="td-IM_DATE">{(dateFormat('yyyy-MM-dd',new Date(im.IM_DATE)))}</td>
                <td class="td-REF">{im.REF? "완":"미완"}</td>
                <td class="td-LOT_NUMBER">{im.LOT_NUMBER}</td>
                <td class="td-button">
                    <input name={im.IM_CODE} type="button" value="검수" onClick={onClickShowInputDialog}/>
                    <InputCountDialog id={im.IM_CODE}
                        im={Object.assign({},im)}/>
                </td>                               
            </tr>
        ));
        await this.setState({tuple: tuple});
    }

    render() {              
        return(
            <div id="MrResult" class="XXXResult">            
                <table id="MrResultTable" className="ResultTable">
                    <caption>원자재 입고 기록 조회</caption>
                    <thead>
                        <tr>
                            <td class="td-IM_CODE">원자재 입고 코드</td>
                            <td class="td-MR_CODE">원자재 발주 코드</td>
                            <td class="td-WR_NAME">원자재</td>
                            <td class="td-BSN_NAME">발주처</td>
                            <td class="td-WR_COUNT">입고 개수</td>
                            <td class="td-IM_DATE">입고 날짜</td>
                            <td class="td-REF">품질검사 여부</td>
                            <td class="td-LOT_NUMBER">LOT_NUMBER</td>
                            <td class="td-button"><p>검사처리</p></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tuple ? this.state.tuple : null}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MrResult;