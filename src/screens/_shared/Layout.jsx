import React from "react";
import PropTypes, {oneOf} from "prop-types";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const Layout = ({ maxWidth, children }) => (
    <Container maxWidth={maxWidth}>
        <Box my={4} p={3} clone>
            <Paper>
                {children}
            </Paper>
        </Box>
    </Container>
);

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    maxWidth: oneOf(["lg", "md", "sm", "xl", "xs", false]).isRequired
}

Layout.propTypes = propTypes;
export default Layout;
