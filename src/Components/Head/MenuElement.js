import React from 'react'
import { connect } from 'react-redux';
import { addTab, changeComponent } from '../../actions';

class MenuElement extends React.Component{
    render() {
        const onClickMenuElement = (e) => {
            this.props.onAddTab({tabName:e.target.value, componentName:e.target.name});
            this.props.onChangeComponent(e.target.name);
        }

        return(
            <li>
                <input type="button" 
                    name={this.props.name} 
                    value={this.props.value} 
                    onClick={onClickMenuElement}/>
            </li>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddTab: (tab) => dispatch(addTab(tab)),
        onChangeComponent: (component) => dispatch(changeComponent(component)),
    }
}
MenuElement = connect(undefined, mapDispatchToProps)(MenuElement);
export default MenuElement