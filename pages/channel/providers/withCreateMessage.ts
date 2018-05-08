import { createMessage } from "../data/mutations";
import { CreateMessageMutation, CreateMessageMutationVariables } from "models";
import { graphql, ChildProps, MutationProps, Mutation } from "react-apollo";

export type CreateMessageProps = ChildProps<CreateMessageMutationVariables, CreateMessageMutation> & {
    createMessage: CreateMessageProps["mutate"],
};

export default graphql<CreateMessageMutationVariables, CreateMessageMutation>(createMessage, {
    name: "createMessage",
    options: ({ text, messageUser, messageChannelId }) => ({
        variables: { text, messageUser, messageChannelId },
    }),
});

