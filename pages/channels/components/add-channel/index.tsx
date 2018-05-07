import * as React from "react";
import provider, { ProviderProps } from "./providers";

const AddChannel: React.SFC<ProviderProps> = ({ handleKeyUp }) => {
  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};

export default provider(AddChannel);

