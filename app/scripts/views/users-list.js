/** @jsx React.DOM */
var React = require("react");
var BackboneMixin = require("./backbone-mixin");
var Backbone = require("backbone");
var User = require("../models/user");
var app = require("../app");
var Users = Backbone.Collection.extend({
    url:"/users/",
    model: User
});
module.exports = React.createClass({
    // mixins: [BackboneMixin],
    getInitialState: function() {
        return {models: new Users()};
    },
    componentWillMount: function() {
        var self = this;
        this.state.models.fetch({
            data: {campaign_id:3}
        })
    },
    userClick: function(user){
        app.navigate("/users/"+user.get("id"))
    },
    render: function() {
        var self = this;
        var userRows = this.state.models.map(function(user, i){
                return (
                    <tr onClick={self.userClick.bind(self, user)} key={i}>
                        <td>{user.get("firstName")}</td>
                        <td>{user.get("lastName")}</td>
                        <td>{user.get("email")}</td>
                        <td>{user.get("admin").toString()}</td>
                    </tr>
                )
            })
        return (
            <table className="table">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                </tr>
                {userRows}
            </table>  
        );
    }
});
