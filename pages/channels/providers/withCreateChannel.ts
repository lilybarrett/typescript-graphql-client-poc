import { addChannel } from "../data/mutations";
import { CreateChannelMutation, CreateChannelMutationVariables } from "models";
import { MutationProps, Mutation } from "react-apollo";
import { defaultProps } from "recompose";

type CreateChannelProps = MutationProps<CreateChannelMutation, CreateChannelMutationVariables>;
class CreateChannel extends Mutation<CreateChannelMutation, CreateChannelMutationVariables> { }
export default defaultProps<CreateChannelProps>({
    mutation: addChannel,
    children: null,
})(CreateChannel);
