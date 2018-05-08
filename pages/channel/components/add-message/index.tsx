import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import gql from "graphql-tag";
// import { channelDetailsQuery } from "../channel-details";

interface IMutateProps {
  text: string;
  messageUser: string;
}

interface IOwnProps {
  channelToQuery: string;
}

const AddMessage: React.SFC<IOwnProps & ChildProps<any, IMutateProps>> = (props) => {
  // const { messageChannelId, messageUser, channelToQuery } = props;
  // const { messageUser, channelToQuery } = props;
  // const handleKeyUp = (evt) => {
  //   if (evt.keyCode === 13) {
  //     // keycode is for the Return or Enter key
  //     evt.persist();
  //     props.mutate({
  //       variables: {
  //         text: evt.target.value, messageUser: "Lily", messageChannelId: parseInt(channelToQuery, 10),
  //       },
  //       refetchQueries: [ { query: channelDetailsQuery, variables: { channelId: parseInt(channelToQuery, 10) } } ],
  //     }).then((res) => {
  //       evt.target.value = "";
  //     });
  //   }
  // };

  return (
    <div>
      <input
        type="text"
        placeholder="New message"
        // onKeyUp={handleKeyUp}
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

const CreateMessageWithMutation = graphql<any, IOwnProps, {}>(
  createMessageMutation,
)(AddMessage);

export default CreateMessageWithMutation;
