import { compose } from "recompose";
import withChannelData, { ChannelProps } from "./withChannel";
import { SingletonRouter, withRouter } from "next/router";
import { ChannelDetailsQuery } from "models/schema";
import { DataProps } from "react-apollo";

interface IRouterProps {
    router: SingletonRouter;
}

export type PageState = ChannelProps & IRouterProps;

export default compose<PageState, {}>(
    withRouter,
    withChannelData,
);
