import gql from "graphql-tag";

export default gql`
    mutation CreateChannel($name: String!) {
        createChannel(name: $name) {
            id
            name
        }
    }
`;
