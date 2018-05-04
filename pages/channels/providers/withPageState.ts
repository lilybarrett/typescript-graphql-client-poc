import { compose } from "recompose";
import withChannelsData, { ChannelsProps } from "./withChannels";
import { ChannelsListQuery } from "models/schema";
import { DataProps } from "react-apollo";

export type PageState = ChannelsProps;

export default compose<PageState, {}>(
    withChannelsData,
);
