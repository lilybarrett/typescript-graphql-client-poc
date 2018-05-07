import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { withPageState } from "../../providers";
import ListItem from "./list-item";

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
        <>
            { channels.map((ch) => <a href={`/channels/${ch.id}`}><ListItem key={ch.id}>{ch.name}</ListItem></a>) }
        </>
    );
});
