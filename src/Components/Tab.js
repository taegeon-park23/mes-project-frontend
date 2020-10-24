import React from 'react'
import {AiFillQuestionCircle} from 'react-icons/ai';
import TabElement from './Tab/TabElement';
import {connect} from 'react-redux';
import './Tab.scss';

class Tab extends React.Component {
    render() {
        const tabs = this.props.tab.map((tab)=>(
            <TabElement componentName={tab.componentName} tabName={tab.tabName}/>))        
        return (
            <div id="Tab">
                <AiFillQuestionCircle class="Tab-help" />
                <ul class="Tab-list">
                    {tabs}
                </ul>
            </div>
        );
    }
}

let mapStateToProps = (state, undefined) => {
    return({
        tab: state.counter.tab
    });
}
Tab = connect(mapStateToProps, undefined)(Tab);
export default Tab;