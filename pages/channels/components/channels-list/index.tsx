import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { withPageState } from "../../providers";
import ListItem from "./list-item";
import AddChannel from "../add-channel";

export default withPageState(({
    data: {
        loading,
        error,
        channels,
    },
}) => {
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div>
            <AddChannel />
            { channels.map((ch) => <a href={`/channels/${ch.id}`}><ListItem key={ch.id}>{ch.name}</ListItem></a>) }
        </div>
    );
});
