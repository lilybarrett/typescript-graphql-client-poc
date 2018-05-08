import gql from "graphql-tag";

export default gql`
    mutation CreateMessage($text: String, $messageUser: String, $messageChannelId: Int) {
        createChannelMessage(text: $text, messageUser: $messageUser, messageChannelId: $messageChannelId){
            messageChannelId
            text
            messageUser
        }
    }
`;
