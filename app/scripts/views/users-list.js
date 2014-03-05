/** @jsx React.DOM */
var React = require("react");
var BackboneMixin = require("./backbone-mixin");
var app = require("../app");
var Users = require("../models/users");

module.exports = React.createClass({
    mixins: [BackboneMixin],
    getInitialState: function() {
        return {collection: new Users()};
    },
    componentWillMount: function() {
        var self = this;
        this.state.collection.fetch({
            data: {campaign_id:3},
            success: function(){
                self.render()
            }
        })
    },
    userClick: function(user){
        app.navigate("/users/"+user.get("id"))
    },
    render: function() {
        var self = this;
        var userRows = this.state.collection.map(function(user, i){
            return (
                <tr onClick={self.userClick.bind(self, user)} key={i}>
                    <td>{user.get("firstName")}</td>
                    <td>{user.get("lastName")}</td>
                    <td>{user.get("email")}</td>
                    <td>{user.get("admin").toString()}</td>
                </tr>
            )
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {userRows}
                </tbody>
            </table>  
        );
    }
});
