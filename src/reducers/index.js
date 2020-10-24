import { CHANGE_COMPONENT, ADD_TAB, REMOVE_TAB } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    tab: []
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case CHANGE_COMPONENT:
            return Object.assign({}, state, {
                currentMainComponent: action.component
            });
        case ADD_TAB:
            let redudance = false;
            state.tab.forEach((tab)=>{
                if(tab.tabName === action.tab.tabName)
                    redudance = true;
            })
            if(!redudance)
                return Object.assign({}, state, {
                    tab: state.tab.concat(action.tab)
                });
            else 
                return Object.assign({}, state, {});
        case REMOVE_TAB:
                const index = state.tab.indexOf(action.tabName);
                state.tab.splice(index, 1);

                    return Object.assign({}, state, {
                        tab: Array.prototype.concat(state.tab, []),
                        currentMainComponent: action.tab.componentName
                    });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counter,
    extra
});

export default counterApp;