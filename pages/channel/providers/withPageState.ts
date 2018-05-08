import { compose } from "recompose";
import withChannelData, { ChannelProps } from "./withChannel";
import { SingletonRouter, withRouter } from "next/router";
import { DataProps } from "react-apollo";

interface IRouterProps {
    router: SingletonRouter;
}

export type PageState = ChannelProps & IRouterProps;

export default compose<PageState, {}>(
    withRouter,
    withChannelData,
);
