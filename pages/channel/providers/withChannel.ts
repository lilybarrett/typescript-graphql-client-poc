import React from "react";
import gql from "graphql-tag";
import { graphql, QueryProps, ChildProps } from "react-apollo";
import { channel } from "../data/queries";
import { ChannelDetailsQuery, ChannelDetailsQueryVariables } from "models";
import { SingletonRouter, withRouter } from "next/router";

interface IQueryProps {
    router: SingletonRouter;
}

export type ChannelProps = ChildProps<ChannelDetailsQueryVariables, ChannelDetailsQuery>;
const withChannelData = graphql<ChannelDetailsQuery, IQueryProps>(channel, {
    options: ({ router }) => ({ variables: { channelId: router.query.channelId }}),
    props: ({ data }) => ({
        data,
    }),
});

export default withChannelData;