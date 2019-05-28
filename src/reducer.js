import {CHANGE_SEARCH_FIELD} from "./constans";

const initialState = {
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            console.log('action payload  ' + action.payload.toString());
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}