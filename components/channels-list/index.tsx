import * as React from "react";
import gql from "graphql-tag";
import { graphql, OptionProps } from "react-apollo";

const ChannelsList: React.SFC<OptionProps<{}, any>> = ({ data: { loading, error, channels }}) => {
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <ul>
            { channels.map((ch) => <li key={ch.id}>{ch.name}</li>) }
        </ul>
    );
};

const channelsListQuery = gql`
    query ChannelsListQuery {
        channels {
            id
            name
        }
    }
`;

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

export default ChannelsListWithData;
