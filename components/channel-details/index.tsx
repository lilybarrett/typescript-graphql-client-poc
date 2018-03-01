import * as React from "react";
import { ApolloClient } from "apollo-client";
import MessageList from "../../components/message-list";
import { ApolloProvider } from "react-apollo";
import { graphql, OptionProps } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Page from "../../components/page";
import { Row, Col } from "react-bootstrap";
import gql from "graphql-tag";
import "cross-fetch/polyfill";

class ChannelDetails extends React.Component<OptionProps<{}, any>> {
    public render () {
        const { loading, error, channel } = this.props.data;
        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>{error.message}</p>;
        }
        if (channel === null) {
            return <p>404</p>;
        }
        return (
            <div>
                <div>
                    {channel.name}
                </div>
                <MessageList messages={channel.channelMessages}/>
            </div>
        );
    }
}

export const channelDetailsQuery = gql`
  query ChannelDetailsQuery($channelId: ID!) {
    channel(id: $channelId) {
      id
      name
      channelMessages
    }
  }
`;

const ChannelDetailsWithData = graphql(channelDetailsQuery, {
    options: (props) => ({
        variables: { channelId: props },
    }),
})(ChannelDetails);

export default ChannelDetailsWithData;
