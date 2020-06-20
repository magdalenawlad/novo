import { ALERT } from "../constants";

const createAlert = alert => ({
    type: ALERT.CREATE_ALERT,
    alert
});

const closeAlert = () => ({
    type: ALERT.CLOSE_ALERT
});

export { createAlert, closeAlert };
