import gql from "graphql-tag";

export default gql`
    query ChannelDetails($channelId: ID!) {
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
