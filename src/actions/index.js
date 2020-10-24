export const CHANGE_COMPONENT = "CHANGE_COMPONENT";
export const ADD_TAB = "ADD_TAB";
export const REMOVE_TAB = "REMOVE_TAB";

export function changeComponent(component) {
    return {
        type: CHANGE_COMPONENT,
        component: component
    }
}

export function addTab(tab) {
    return {
        type: ADD_TAB,
        tab: tab
    }
}

export function removeTab(tab) {
    return {
        type: REMOVE_TAB,
        tab: tab
    }
}