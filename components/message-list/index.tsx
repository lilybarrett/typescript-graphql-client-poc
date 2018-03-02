import * as React from "react";
import AddMessage from "../add-message";

const MessageList = ({ messages }) => {
    return (
        <div>
            { messages !== null && messages !== undefined ?
                messages.map( (message) => {
                    return (
                        <div key={message.id}>
                            {message.text} - {message.messageUser}
                        </div>
                        );
                    }) : null
            }
            <AddMessage />
        </div>
  );
};
export default MessageList;
