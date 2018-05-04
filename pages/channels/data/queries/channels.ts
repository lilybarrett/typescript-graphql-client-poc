import gql from "graphql-tag";

export default gql`
    query ChannelsListQuery {
        channels {
            id
            name
        }
    }
`;
