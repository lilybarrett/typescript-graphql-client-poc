import React from "react";
import gql from "graphql-tag";
import { graphql, QueryProps, ChildProps } from "react-apollo";
import { channels } from "../data/queries";
import { ChannelsListQuery } from "models";

export type ChannelsProps = ChildProps<{}, ChannelsListQuery>;
const withChannelsData = graphql<ChannelsListQuery, {}>(channels, {
    options: { pollInterval: 5000 },
});

export default withChannelsData;
