import * as React from "react";
import { Page } from "components";
import { Row, Col } from "react-bootstrap";
import { withData } from "providers";
import { compose } from "recompose";
import { withPageState, PageState } from "./providers";
import ChannelsList from "./components/channels-list";
import AddChannel from "./components/add-channel";

export default compose<PageState, {}>(
    withData,
    withPageState,
)(() => {
    return (
        <Page>
            <Row>
                <Col xs={12}>
                    <AddChannel />
                    <ChannelsList />
                </Col>
            </Row>
        </Page>
    );
});
