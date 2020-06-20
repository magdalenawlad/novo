import { ALERT } from "../constants";

const initialState = {
    alerts: [],
    topAlertIndex: 0
}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
    case ALERT.CREATE_ALERT:{
        return { ...state,
            alerts: [...state.alerts, {
                type: action.alert.type,
                text: action.alert.text
            }],
            topAlertIndex: state.alerts.length
        };
    }

    case ALERT.CLOSE_ALERT:
        return {
            ...state,
            alerts: state.alerts.filter((item, index) => index !== state.topAlertIndex),
            topAlertIndex: state.topAlertIndex - 1
        };
    default:
        return state;
    }
};

export default alertReducer;
