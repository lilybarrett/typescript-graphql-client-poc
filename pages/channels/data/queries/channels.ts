import gql from "graphql-tag";

export default gql`
    query ChannelsList {
        channels {
            id
            name
        }
    }
`;
