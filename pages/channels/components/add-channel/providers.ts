import { compose, withHandlers } from "recompose";
import { withCreateChannel, CreateChannelProps } from "../../providers";

export interface EventProps {
    onChange: (event) => void;
}

export const withEventHandlers = withHandlers<CreateChannelProps, EventProps>({
    onChange: (props) => (event) => {
        const {
            addChannel,
        } = props;

        const payload = {
            variables: {
                name: event.target.value,
            },
        };
        addChannel(payload);
    },
});

export type ProviderProps = EventProps;

export default compose<ProviderProps, {}>(
    withCreateChannel,
    withEventHandlers,
);
