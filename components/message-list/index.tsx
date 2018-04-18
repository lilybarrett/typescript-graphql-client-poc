import * as React from "react";
import CreateMessageWithMutation from "../add-message";

interface IPageProps {
    channelToQuery: string;
    messages: any;
}

const MessageList: React.SFC<IPageProps> = (props) => {
    const { messages, channelToQuery } = props;
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
            <CreateMessageWithMutation channelToQuery={channelToQuery}/>
        </div>
  );
};
export default MessageList;
