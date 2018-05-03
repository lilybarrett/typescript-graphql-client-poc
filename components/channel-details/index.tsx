import * as React from "react";
import { ApolloClient } from "apollo-client";
import MessageList from "../../components/message-list";
import { ApolloProvider } from "react-apollo";
import { graphql, ChildProps } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Page from "../../components/page";
import { Row, Col } from "react-bootstrap";
import gql from "graphql-tag";
import "cross-fetch/polyfill";

interface IMutateProps {
    channelId: number;
}

interface IOwnProps {
    channelToQuery: string;
}

class ChannelDetails extends React.Component<IOwnProps & ChildProps<any, IMutateProps>, {}> {
    public render () {
        const { data: { loading, error, channel }, channelToQuery } = this.props;
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
                <MessageList messages={channel.channelMessages} channelToQuery={channelToQuery}/>
            </div>
        );
    }
}

export const channelDetailsQuery = gql`
    query ChannelDetailsQuery($channelId: ID!) {
        channel(id: $channelId) {
            id
            name
            channelMessages {
                id
                text
                messageUser
            }
        }
    }
`;

// const ChannelDetailsWithData = graphql<{}, IOwnProps & ChildProps<any, IMutateProps>, {}>(channelDetailsQuery, {
const ChannelDetailsWithData = graphql<any, IOwnProps, {}>(channelDetailsQuery, {
    options: (props: IOwnProps) => ({
        variables: { channelId: parseInt(props.channelToQuery, 10) },
    }),
})(ChannelDetails);

export default ChannelDetailsWithData;
