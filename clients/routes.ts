const routes = require("next-routes")();

routes
.add("channels", "/channels")
.add("channel", "/channels/:channelId");

export default routes;
