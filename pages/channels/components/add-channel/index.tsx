import * as React from "react";
import provider, { ProviderProps } from "./providers";

const AddChannel: React.SFC<ProviderProps> = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyPress={onChange}
    />
  );
};

export default provider(AddChannel);

