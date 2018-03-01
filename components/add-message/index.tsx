import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const AddMessage = (props) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.target.value = "";
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

export default AddMessage;
