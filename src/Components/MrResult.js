import React from 'react';
import './MrResult.scss';
import httpConnection from '../httpConnection';
import {dateFormat} from '../dateFormat';
import InputCountDialog from '../Components/MrResult/InputCountDialog';

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

        let response = await httpConnection.httpJsonConnection("/mr/list", {});
        let tuple = await response.map( mr =>(
            <tr>
                <td class="td-MR_CODE">{mr.MR_CODE}</td>
                <td class="td-WR_NAME">{mr.WR_NAME}</td>
                <td class="td-BSN_NAME">{mr.BSN_NAME}</td>
                <td class="td-WR_COUNT">{mr.WR_COUNT}</td>
                <td class="td-WR_COUNT_CUR">{mr.WR_COUNT_CUR}</td>
                <td class="td-MR_DATE">{(dateFormat('yyyy-MM-dd',new Date(mr.MR_DATE)))}</td>
                <td class="td-LOT_NUMBER">{mr.LOT_NUMBER}</td>
                <td class="td-REF">{mr.REF? "완":"미완"}</td>
                <td class="td-button">
                    <input name={mr.mrCode} type="button" value="입고" onClick={onClickShowInputDialog}/>
                    <InputCountDialog id={mr.MR_CODE}
                        mr={Object.assign({},mr)}/>
                </td>
            </tr>
        ));
        await this.setState({tuple: tuple});
    }

    render() {              
        return(
            <div id="MrResult" class="XXXResult">            
                <table id="MrResultTable" className="ResultTable">
                    <caption>원자재 발주 조회</caption>
                    <thead>
                        <tr>
                            <td class="td-MR_CODE">원자재 발주 코드</td>
                            <td class="td-WR_NAME">원자재</td>
                            <td class="td-BSN_NAME">발주처</td>
                            <td class="td-WR_COUNT">원자재 개수</td>
                            <td class="td-WR_COUNT_CUR">입고 개수</td>
                            <td class="td-MR_DATE">원자재 발주 날짜</td>
                            <td class="td-LOT_NUMBER">LOT NUMBER</td>
                            <td class="td-REF">입고 완료 여부</td>
                            <td class="td-button"><p>입고처리</p></td>
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