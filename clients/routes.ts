import * as nextRoutes from "next-routes";

const routes = nextRoutes();
routes
.add("index", "/")
.add("channelpage", "/:channelId");

export default routes;
