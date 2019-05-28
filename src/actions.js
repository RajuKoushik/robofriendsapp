import {CHANGE_SEARCH_FIELD} from "./constans";

export const setSearchField = (text) => {
    console.log(text);

    console.log('0000Think the firsttt');

    return {
        type: 'CHANGE_SEARCH_FIELD',
        payload: text,
    }
}