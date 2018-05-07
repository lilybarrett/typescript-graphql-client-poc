import { createChannel } from "../data/mutations";
import { CreateChannelMutation, CreateChannelMutationVariables } from "models";
import { graphql, ChildProps, MutationProps, Mutation } from "react-apollo";

export type CreateChannelProps = ChildProps<CreateChannelMutationVariables, CreateChannelMutation> & {
    createChannel: CreateChannelProps["mutate"],
};

export default graphql<CreateChannelMutationVariables, CreateChannelMutation>(createChannel, {
    name: "createChannel",
    options: ({ name }) => ({
        variables: { name },
    }),
});

