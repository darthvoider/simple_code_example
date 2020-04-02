import { CLOSE_SIDEBAR, SET_ACTIONS, SET_ACTIVE_ITEM, SET_RESOURCES, TOGGLE_SIDEBAR } from './types';

export const setResources = resources => ({
    type: SET_RESOURCES,
    resources
});

export const setActions = actions => ({
    type: SET_ACTIONS,
    actions
});

export const setActiveItemId = activeItemId => ({
    type: SET_ACTIVE_ITEM,
    activeItemId
});

export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR
});

export const closeSidebar = () => ({
    type: CLOSE_SIDEBAR
});
