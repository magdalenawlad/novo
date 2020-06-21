import React, { Fragment } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { closeAlert } from "../../redux/actions/alertActions";

const propTypes = {
    alerts: PropTypes.array,
    closeAlert: PropTypes.func,
    topAlertIndex: PropTypes.number
};
const DEFAULT_TYPE = "info"

const useStyles = makeStyles(theme => ({
    alert: {
        position: "fixed",
        visibility: "hidden",
        zIndex: 9999,
        minWidth: 200,
        width: "max-content",
        maxWidth: "80%",
        padding: 14,
        margin: "70px auto",
        left: 0,
        right: 0,
        borderRadius: 5,
        color: "white",
        cursor: "pointer"
    },
    alertOpened: {
        visibility: "visible"
    },
    infoType: {
        background: "black",
        opacity: 0.87
    },
    successType: {
        background: theme.colors.success,
        opacity: 0.87
    },
    errorType: {
        background: theme.colors.error,
        opacity: 0.87
    }
}));

const mapStateToProps = state => ({
    alerts: state.alert.alerts,
    topAlertIndex: state.alert.topAlertIndex
});

const mapDispatchToProps = dispatch => ({
    closeAlert: () => dispatch(closeAlert())
});

const Alerts = ({ alerts, closeAlert, topAlertIndex }) => {
    const classes = useStyles();
    return (
        <Fragment>
            {alerts ? alerts.map(({ type = DEFAULT_TYPE, text }, index) => (
                <div
                    key={`alert-${index}`}
                    className={cn(classes.alert, classes[`${type}Type`], {
                        [classes.alertOpened]: topAlertIndex === index
                    })}
                    onClick={closeAlert}
                >
                    <Typography variant="subtitle2">{text}</Typography>
                </div>)) : null
            }
        </Fragment>
    );
}

Alerts.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
