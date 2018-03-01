import * as React from "react";
import ChannelDetailsWithData from "../components/channel-details";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { graphql } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Page from "../components/page";
import { Row, Col } from "react-bootstrap";
import gql from "graphql-tag";
import "cross-fetch/polyfill";

const client = new ApolloClient({
    ssrMode: true,
    // server-side-rendering mode
    link: new HttpLink({ uri: "http://localhost:4000/graphql"}),
    cache: new InMemoryCache(),
});

const ChannelPage: React.SFC = (props) => {
    return (
        <ApolloProvider client={client}>
            <Row>
                <Col xs={12}>
                    <ChannelDetailsWithData />
                </Col>
            </Row>
        </ApolloProvider>
    );
};

export default ChannelPage;
