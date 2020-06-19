import React, {useCallback} from 'react';
import { withRouter } from 'react-router'
import PropTypes from "prop-types";
import { Button } from './index';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton"
import ChevronLeft from "@material-ui/icons/ChevronLeft"

const Header = ({ history, allowReturn, label, actions }) => {
    const goBack = useCallback(() => history.goBack(), [history])
    return (
        <Box display="flex">
            {allowReturn && (
                <Box px={1} display="flex" alignItems="center">
                    <IconButton
                        disableRipple
                        disableFocusRipple
                        onClick={goBack}
                    >
                        <ChevronLeft />
                    </IconButton>
                </Box>
            )}
            <Box px={1} flex={1} display="flex" alignItems="center"><Typography variant='h5'>{label}</Typography></Box>
            {actions && !!actions.length && (
                <Box px={1} display="flex" alignItems="center">
                    {actions.map((action) => <Button key={action.name} {...action} />)}
                </Box>
            )}
        </Box>
    );
}

const propTypes = {
    allowReturn: PropTypes.bool,
    label: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired,
        startIcon: PropTypes.element
    }))
}

Header.propTypes = propTypes;
export default withRouter(Header);
