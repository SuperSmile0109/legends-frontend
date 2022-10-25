import { 
    SET_DASHBOARD_TEXT, 
    SET_MAP_TEXT,
    SET_MAP_LINK,
    SET_COLLECT_TEXT,
    SET_OURTEAM_TEXT,
    SET_FAQS,
    SET_PARTNERS,
    SET_MEMBERS,
    SET_COLLECTIMGS,
    SET_CONTACTUS_TEXT,
    SET_AVAILABLES,
    SET_TOKENPRICE,
    SET_TOKENPERCENT,
    SET_SOCIALLINKS
} from '../action_types';

const INIT_STATE = {
    dashboardText: '',
    mapText: '',
    mapLink: '',
    collectText: '',
    ourteamText: '',
    contactUsText: '',
    tokenPrice: '',
    tokenPercent: '',
    faqs: [],
    partnerships: [],
    members: [],
    collectImgs: [],
    availables: [],
    socialLinks: []
};

const dashboardReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_DASHBOARD_TEXT:
            return {
                ...state,
                dashboardText: payload
            };
        case SET_MAP_TEXT:
            return {
                ...state,
                mapText: payload
            };
        case SET_MAP_LINK:
            return {
                ...state,
                mapLink: payload
            };
        case SET_COLLECT_TEXT:
            return {
                ...state,
                collectText: payload
            };
        case SET_COLLECTIMGS:
            return {
                ...state,
                collectImgs: payload
            };
        case SET_OURTEAM_TEXT:
            return {
                ...state,
                ourteamText: payload
            };
        case SET_FAQS:
            return {
                ...state,
                faqs: payload
            };
        case SET_PARTNERS:
            return {
                ...state,
                partnerships: payload
            };
        case SET_MEMBERS:
            return {
                ...state,
                members: payload
            };
        case SET_CONTACTUS_TEXT:
            return {
                ...state,
                contactUsText: payload
            };
        case SET_AVAILABLES:
            return {
                ...state,
                availables: payload
            };
        case SET_TOKENPRICE:
            return {
                ...state,
                tokenPrice: payload
            };
        case SET_TOKENPERCENT:
            return {
                ...state,
                tokenPercent: payload
            };
        case SET_SOCIALLINKS:
            return {
                ...state,
                socialLinks: payload
            };
        default: return { ...state };
    }
}

export default dashboardReducer;