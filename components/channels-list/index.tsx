import * as React from "react";
import gql from "graphql-tag";
import ListItem from "./list-item";
import { graphql, OptionProps } from "react-apollo";

const ChannelsList: React.SFC<OptionProps<{}, any>> = ({ data: { loading, error, channels }}) => {
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div>
            { channels.map((ch) => <ListItem key={ch.id}>{ch.name}</ListItem>) }
        </div>
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
