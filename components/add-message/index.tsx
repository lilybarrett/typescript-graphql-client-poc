import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { channelDetailsQuery } from "../channel-details";

interface IMutateProps {
  text: string;
  messageChannelId: number;
  messageUser: string;
}

interface IOwnProps {
  channelToQuery: string;
}

const AddMessage: React.SFC<IOwnProps & ChildProps<any, IMutateProps>> = (props) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      // keycode is for the Return or Enter key
      evt.persist();
      props.mutate({
        variables: {
          text: evt.target.value, messageUser: "Lily", messageChannelId: 1,
        },
        refetchQueries: [ { query: channelDetailsQuery, variables: { channelId: 1 } } ],
      }).then((res) => {
        evt.target.value = "";
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New message"
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

const createMessageMutation = gql`
  mutation createChannelMessage($text: String, $messageUser: String, $messageChannelId: Int) {
    createChannelMessage(text: $text, messageUser: $messageUser, messageChannelId: $messageChannelId){
      messageChannelId
      text
      messageUser
    }
}
`;

const CreateMessageWithMutation = graphql(
  createMessageMutation,
)(AddMessage);

export default CreateMessageWithMutation;
