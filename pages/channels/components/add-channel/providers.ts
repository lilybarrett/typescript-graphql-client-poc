import { compose, withHandlers } from "recompose";
import { withCreateChannel, CreateChannelProps } from "../../providers";
import { channels } from "../../data/queries";

export interface EventProps {
    handleKeyUp: (event) => void;
}

export const withEventHandlers = withHandlers<CreateChannelProps, EventProps>({
    handleKeyUp: (props) => async (event) => {
        const {
            createChannel,
        } = props;

        const payload = {
            variables: {
                name: event.target.value,
            },
            refetchQueries: [ { query: channels }],
        };
        if (event.keyCode === 13) {
            createChannel(payload);
            event.target.value = "";
        }
    },
});

export type ProviderProps = EventProps;

export default compose<ProviderProps, {}>(
    withCreateChannel,
    withEventHandlers,
);
