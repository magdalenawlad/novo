import React from "react";
import PropTypes from "prop-types";
import MaterialButton from "@material-ui/core/Button";

const propTypes = {
    action: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    startIcon: PropTypes.element,
    variant: PropTypes.oneOf(["contained", "outlined", "text"]),
    disabled: PropTypes.bool
}

const defaultProps = {
    variant: "contained",
    action: () => {}
}

const Button = ({ action, label, startIcon, disabled, variant }) => (
    <MaterialButton
        variant={variant}
        color="primary"
        startIcon={startIcon}
        onClick={action}
        disabled={disabled}
    >
        {label}
    </MaterialButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
