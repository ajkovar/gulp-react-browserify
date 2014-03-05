
var Backbone = require("backbone");
// Backbone.sync = function(method, model) {
//   console.log(arguments);
//   model.id = 1;
// };
module.exports = Backbone.Model.extend({
    url: "/users/2"
})
