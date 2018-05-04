import * as React from "react";
import { MessageList } from "components";
import { Row, Col } from "react-bootstrap";
import { withPageState } from "../../providers";

export default withPageState(({
    data: {
        loading,
        error,
        channelId,
        channel,
    },
}) => {
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (
        <div>
            <div>
                {channel.name}
            </div>
            {/* <MessageList messages={channel.channelMessages} /> */}
        </div>
    );
});