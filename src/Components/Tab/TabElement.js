import React from 'react';
import {MdBackspace} from 'react-icons/md';
import {connect} from 'react-redux';
import {removeTab, changeComponent} from '../../actions/index';

class TabElement extends React.Component {
    render() {
        const onClickTabBackButton = () => {
            this.props.onRemoveTab(this.props.tabName);
        }

        const onClickChangeComponent = () => {
            this.props.onChangeComponent(this.props.componentName);
        }

        return (
            <li class="Tab-element">
                <p class="Tab-name" onClick={onClickChangeComponent}>{this.props.tabName}</p>
                <MdBackspace class="Tab-back-button" onClick={onClickTabBackButton}/>
            </li>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onRemoveTab: (tabName) => dispatch(removeTab(tabName)),
        onChangeComponent: (componentName) => dispatch(changeComponent(componentName)) 
    }
}
TabElement = connect(undefined, mapDispatchToProps)(TabElement);
export default TabElement