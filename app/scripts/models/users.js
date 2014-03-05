var User = require("../models/user");
var Backbone = require("backbone");
module.exports = Backbone.Collection.extend({
    url:"/users/",
    model: User
});
