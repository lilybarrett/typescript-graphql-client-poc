import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

export default withData({
    link: new HttpLink({
        uri: "http://localhost:4000/graphql",
        credentials: "same-origin",
    }),
});
