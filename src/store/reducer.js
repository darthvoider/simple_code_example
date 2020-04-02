import { CLOSE_SIDEBAR, SET_ACTIONS, SET_ACTIVE_ITEM, SET_RESOURCES, TOGGLE_SIDEBAR } from './types';

export const initialState = {
    resources: [],
    actions: [],
    activeItemId: "1",
    isSidebarOpened: false,
};

export function reducer(state, payload) {
    switch (payload.type) {
        case SET_RESOURCES:
            return {...state, resources: payload.resources};
        case SET_ACTIONS:
            return {...state, actions: payload.actions};
        case SET_ACTIVE_ITEM:
            return {...state, activeItemId: payload.activeItemId};
        case TOGGLE_SIDEBAR:
            return {...state, isSidebarOpened: !state.isSidebarOpened};
        case CLOSE_SIDEBAR:
            return {...state, isSidebarOpened: false};
        default:
            return state;
    }
}
