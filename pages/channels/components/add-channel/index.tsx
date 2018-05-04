import * as React from "react";
import { graphql } from "react-apollo";
import { channels} from "../../data/queries";
import gql from "graphql-tag";

const AddChannel = () => {
  const handleKeyUp = async (evt) => {
    if (evt.keyCode === 13) {
        evt.persist();
        alert("Channel added");
        // mutate({
        //     variables: { name: evt.target.value },
        //     refetchQueries: [ { query: channels }],
        // })
        // .then((res) => {
        evt.target.value = "";
        // });
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

export default AddChannel;
