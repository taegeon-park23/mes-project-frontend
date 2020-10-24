import React from 'react';
import './OrderResult.scss';
import httpConnection from '../httpConnection';
import {dateFormat} from '../dateFormat';

class OrderResult extends React.Component {
    state = {
        tuple : []
    }
    componentDidMount = async () => {
        let response = await httpConnection.httpJsonConnection("/wro/list", {});
        let tuple = await response.map(wro=>(
            <tr>               
                <td className="td-WRO_CODE">{wro.WRO_CODE}</td>
                <td className="td-WR_NAME">{wro.WR_NAME}</td>
                <td className="td-WR_COUNT">{wro.WR_COUNT}</td>
                <td className="td-WR_DATE">{dateFormat('yyyy-MM-dd', new Date(wro.WRO_DATE))}</td>
                <td className="td-REF">{wro.REF?"완":"미완"}</td>
                <td className="td-LOT_NUMBER">{wro.LOT_NUMBER}</td>
            </tr>
        ));
        await this.setState({tuple: tuple});
    }

    render() {
        return(
            <div id="OrderResult" className="XXXResult">            
                <table id="OrderResultTable" className="ResultTable">
                    <caption>제품 수주 조회</caption>
                    <thead>
                        <tr>
                            <td className="td-WRO_CODE">수주 코드</td>
                            <td className="td-WR_NAME">제품명</td>
                            <td className="td-WR_COUNT">제품 개수</td>
                            <td className="td-WR_DATE">수주 날짜</td>
                            <td className="td-REF">원자재 발주 여부</td>
                            <td className="td-LOT_NUMBER">LOT NUMBER</td>
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

export default OrderResult;