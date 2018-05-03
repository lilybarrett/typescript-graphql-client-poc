import * as React from "react";
import { ChannelDetailsWithData, Page } from "components";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { graphql } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Row, Col } from "react-bootstrap";
import gql from "graphql-tag";
import "cross-fetch/polyfill";

interface IChannelPageProps {
    url: any;
}

const client = new ApolloClient({
    ssrMode: true,
    // server-side-rendering mode
    link: new HttpLink({ uri: "http://localhost:4000/graphql"}),
    cache: new InMemoryCache(),
});

const ChannelPage: React.SFC<IChannelPageProps> = (props) => {
    const channelToQuery = props.url.query.channelId;
    return (
        <ApolloProvider client={client}>
            <Row>
                <Col xs={12}>
                    <ChannelDetailsWithData channelToQuery={channelToQuery}/>
                </Col>
            </Row>
        </ApolloProvider>
    );
};

export default ChannelPage;
