import React from 'react';
import './WorkOrder.scss';
import httpConnection from '../httpConnection';
import { dateFormat } from '../dateFormat';
import InputCountDialog from '../Components/WorkOrder/InputCountDialog';

class WorkOrder extends React.Component {
    state = {
        tuple: []
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

        let response = await httpConnection.httpJsonConnection("/wo/list", {});
        let tuple = await response.map(wo => (
            <tr>
                <input type="hidden" name="WR_CODE" value={wo.WR_CODE}></input>
                <input type="hidden" name="WRP_CODE" value={wo.WRP_CODE}></input>
                <td className="td-WO_CODE">{wo.WO_CODE}</td>
                <td className="td-WRO_CODE">{wo.WRO_CODE}</td>
                <td className="td-WR_CODE">{wo.WR_NAME}</td>
                <td className="td-WRP_CODE">{wo.WRP_NAME}</td>
                <td className="td-WO_COUNT">{wo.WR_COUNT}</td>
                <td className="td-WO_COUNT_CUR">{wo.WR_COUNT_CUR}</td>
                <td className="td-WO_SDATE">{wo.WO_SDATE ? dateFormat('yyyy-MM-dd', new Date(wo.WO_SDATE)) : "미정"}</td>
                <td className="td-WO_EDATE">{wo.WO_EDATE ? dateFormat('yyyy-MM-dd', new Date(wo.WO_EDATE)) : "미정"}</td>
                <td className="td-REF">{wo.REF ? "완" : "미완"}</td>
                <td className="td-LOT_NUMBER">{wo.LOT_NUMBER}</td>
                <td class="td-button">
                    <input name={wo.WO_CODE} type="button" value="생산" onClick={onClickShowInputDialog}/>
                    <InputCountDialog id={wo.WO_CODE}
                        wo={Object.assign({},wo)}/>
                </td>
            </tr>
        ));
        await this.setState({ tuple: tuple });
    }

    render() {
        return (
            <div id="WorkOrder" className="XXXResult">
                <table id="WorkOrderTable" className="ResultTable">
                    <caption>작업 지시</caption>
                    <thead>
                        <tr>
                            <td className="td-WO_CODE">작업지시 코드</td>
                            <td className="td-WRO_CODE">제품 수주 코드</td>
                            <td className="td-WR_CODE">생상품명</td>
                            <td className="td-WRP_CODE">공정</td>
                            <td className="td-WO_COUNT">생산할 개수</td>
                            <td className="td-WO_COUNT_CUR">생산된 개수</td>
                            <td className="td-WO_SDATE">시작 날짜</td>
                            <td className="td-WO_EDATE">종료 날짜</td>
                            <td className="td-REF">완료</td>
                            <td className="td-LOT_NUMBER">LOT_NUMBER</td>
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

export default WorkOrder;