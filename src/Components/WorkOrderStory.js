import React from 'react';
import './WorkOrderStory.scss';
import httpConnection from '../httpConnection';
import { dateFormat } from '../dateFormat';

class WorkOrderStory extends React.Component {
    state = {
        tuple: []
    }
    componentDidMount = async () => {

        let response = await httpConnection.httpJsonConnection("/wos/list", {});
        let tuple = await response.map(wos => (
            <tr>
                <td className="td-WOS_CODE">{wos.WO_CODE}</td>
                <td className="td-WO_CODE">{wos.WO_CODE}</td>
                <td className="td-WR_NAME">{wos.WR_NAME}</td>
                <td className="td-WRP_NAME">{wos.WRP_NAME}</td>
                <td className="td-WR_COUNT">{wos.WR_COUNT}</td>
                <td className="td-WOS_STATE">{wos.WOS_STATE ? "완" : "미완"}</td>
                <td className="td-WO_SDATE">{wos.WOS_SDATE ? dateFormat('yyyy-MM-dd', new Date(wos.WOS_SDATE)) : "미정"}</td>
                <td className="td-WO_EDATE">{wos.WOS_EDATE ? dateFormat('yyyy-MM-dd', new Date(wos.WOS_EDATE)) : "미정"}</td>
                <td className="td-REF">{wos.REF ? "완" : "미완"}</td>
                <td className="td-LOT_NUMBER">{wos.LOT_NUMBER}</td>
            </tr>
        ));
        await this.setState({ tuple: tuple });
    }

    render() {
        return (
            <div id="WorkOrderStory" className="XXXResult">
                <table id="WorkOrderTable" className="ResultTable">
                    <caption>작업 지시 기록</caption>
                    <thead>
                        <tr>
                            <td className="td-WOS_CODE">작업지시기록 코드</td>
                            <td className="td-WO_CODE">작업지시 코드</td>
                            <td className="td-WR_NAME">공정품명</td>
                            <td className="td-WRP_NAME">공정</td>
                            <td className="td-WR_COUNT">개수</td>
                            <td className="td-WOS_STATE">공정상태</td>
                            <td className="td-WO_SDATE">시작일</td>
                            <td className="td-WO_EDATE">종료일</td>
                            <td className="td-REF">전체작업지시</td>
                            <td className="td-LOT_NUMBER">LOT_NUMBER</td>
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

export default WorkOrderStory;