import * as React from "react";
import { graphql } from "react-apollo";
import { channelsListQuery } from "../channels-list";
import gql from "graphql-tag";

const CreateChannel = ({ mutate }) => {
  const handleKeyUp = async (evt) => {
    if (evt.keyCode === 13) {
        evt.persist();
        mutate({
            variables: { name: evt.target.value },
            refetchQueries: [ { query: channelsListQuery }],
        })
        .then((res) => {
            evt.target.value = "";
        });
    }
  };
  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};

const createChannelMutation = gql`
    mutation createChannel($name: String!) {
        createChannel(name: $name) {
            id
            name
        }
    }
`;

const CreateChannelWithMutation = graphql(
    createChannelMutation,
)(CreateChannel);

export default CreateChannelWithMutation;
