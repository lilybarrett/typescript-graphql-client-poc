import * as React from "react";
import ChannelsListWithData from "../components/channels-list";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { graphql } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import "cross-fetch/polyfill";

const client = new ApolloClient({
    ssrMode: true,
    // server-side-rendering mode
    link: new HttpLink({ uri: "http://localhost:4000/graphql"}),
    cache: new InMemoryCache(),
});

const ChannelsPage: React.SFC = (props) => {
    return (
        <ApolloProvider client={client}>
            <ChannelsListWithData />
        </ApolloProvider>
    );
};

export default ChannelsPage;
