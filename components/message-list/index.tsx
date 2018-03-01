import * as React from "react";
import AddMessage from "../add-message";

const MessageList = ({ messages }) => {
    return (
        <div>
            { messages.map( (message) => {
                return (
                    <div key={message.id}>
                        {message.text}
                    </div>
                    );
                })
            }
            <AddMessage />
        </div>
  );
};
export default MessageList;
