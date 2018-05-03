const routes = require("next-routes")();

routes
.add("index", "/")
.add("channelpage", "/:channelId");

export default routes;
