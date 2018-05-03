import ChannelDetails from "./components/channel-details";
import { Row, Col } from "react-bootstrap";
import React from "react";
import { withData } from "providers";
import { compose } from "recompose";
import { withPageState, PageState } from "./providers";

export default compose<PageState, {}>(
    withData,
    withPageState,
)(() => {
    debugger;
    return (
        <Row>
            <Col xs={12}>
                <ChannelDetails />
            </Col>
        </Row>
    );
});
