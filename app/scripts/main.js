/** @jsx React.DOM */

var React = require("react");
var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;
Backbone.sync = require("./mock-backend");
var UsersList = require("./views/users-list");
var UserForm = require("./views/user-form");
var User = require("./models/user");

var app = require("./app");
app.addRoute("users", UsersList)
app.addRoute("users/:id", UserForm)
app.start()
