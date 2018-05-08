import * as React from "react";
import { withPageState } from "../../providers";
// import CreateMessageWithMutation from "../add-message";

export default withPageState(({
    data: {
        channel: {
           channelMessages,
        },
    },
}) => {
    return (
        <>
            { channelMessages !== null && channelMessages !== undefined ?
                channelMessages.map( (message) => {
                    return (
                        <div key={message.id}>
                            {message.text} - {message.messageUser}
                        </div>
                        );
                    }) : null
            }
        </>
    );
});
