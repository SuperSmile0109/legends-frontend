import api from '../../utils/api';
import { 
    SET_DASHBOARD_TEXT,
    SET_MAP_TEXT,
    SET_MAP_LINK,
    SET_COLLECT_TEXT,
    SET_OURTEAM_TEXT,
    SET_FAQS,
    SET_PARTNERS,
    SET_SOCIALLINKS,
    SET_MEMBERS,
    SET_COLLECTIMGS,
    SET_CONTACTUS_TEXT,
    SET_AVAILABLES,
    SET_TOKENPRICE,
    SET_TOKENPERCENT
 } from '../action_types';

export const dashboardTextAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/dashboardAction', formData);
        dispatch({
            type: SET_DASHBOARD_TEXT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const contactUsTextAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/contactUsAction', formData);
        dispatch({
            type: SET_CONTACTUS_TEXT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const mapAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/mapAction', formData);
        dispatch({
            type: SET_MAP_TEXT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const mapLinkAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/mapLinkAction', formData);
        dispatch({
            type: SET_MAP_LINK,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const collectAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/collectAction', formData);
        dispatch({
            type: SET_COLLECT_TEXT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const collectImgAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/collectImgAction', formData);
        dispatch({
            type: SET_COLLECTIMGS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const ourteamAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/ourteamAction', formData);
        dispatch({
            type: SET_OURTEAM_TEXT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const memberAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/teamAction', formData);
        dispatch({
            type: SET_MEMBERS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const faqsAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/faqsAction', formData);
        dispatch({
            type: SET_FAQS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const partnershipAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/partnershipAction', formData);
        dispatch({
            type: SET_PARTNERS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const socialLinkAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/socialLinkAction', formData);
        dispatch({
            type: SET_SOCIALLINKS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const availableAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/availableAction', formData);
        dispatch({
            type: SET_AVAILABLES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const tokenPriceAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/tokenPriceAction', formData);
        dispatch({
            type: SET_TOKENPRICE,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const tokenPercentAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/tokenPercentAction', formData);
        dispatch({
            type: SET_TOKENPERCENT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}