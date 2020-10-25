import React from 'react'
import { ImMenu } from 'react-icons/im';
import { TiUser } from 'react-icons/ti';
import MenuElement  from './Head/MenuElement';
import './Head.scss';

class Head extends React.Component {

    componentDidMount = () => {        
        const screenTest = (e) => {
            const App = document.getElementById("App");
            if(window.innerWidth>768) {
                const H_menus = document.getElementById("Head-menus");
                let H_menus_display = H_menus.style.display;
                if(H_menus_display === "none" || "") {
                    H_menus.style.display = "flex";
                }
            }
            App.style.height = window.innerHeight;
        }
        window.addEventListener("resize", screenTest);
    }

    render() {
        const onClickMenu = (e) => {
            const w_width = window.innerWidth;            
            if(w_width<768) {
                const H_menus = document.getElementById("Head-menus");
                let H_menus_display = H_menus.style.display;
                if(H_menus_display === "none" || "") {
                    H_menus.style.display = "flex";
                } else {
                    H_menus.style.display = "none";
                }
            }
        }

        const onChangeCheckMenus = (e) => {
            const w_width = window.innerWidth;
            alert(e);
            if(w_width>=768) {
                const H_menus = document.getElementById("Head-menus");
                let H_menus_visible = H_menus.style.visibility;
                alert(H_menus_visible);
            }
        }
        return (
            <div id="Head" onResize={onChangeCheckMenus}>
                <div className="Head-basic">
                    <ImMenu className="Head-menu" onClick={onClickMenu}/>
                    <div className="Head-title">
                        <p>YONAM MES</p>                        
                    </div>                                       
                    <div><ul id="Head-menus" >
                        <MenuElement name="Order" value="제품 수주"/>
                        <MenuElement name="OrderResult" value="수주 조회"/>
                        <MenuElement name="MrResult" value="원자재 발주 조회"/>
                        <MenuElement name="ImResult" value="원자재 입고 기록"/>
                        <MenuElement name="WorkOrder" value="작업 지시"/>
                        <MenuElement name="WorkOrderStory" value="작업 지시 기록"/>
                        <MenuElement name="ShowChart" value="분석 차트"/>                                                 
                        <li onClick={onClickMenu}>▲</li>
                    </ul></div>
                    <TiUser className="Head-auth" />                    
                </div>               
            </div>
        );
    }
}

export default Head;