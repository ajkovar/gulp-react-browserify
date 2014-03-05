/** @jsx React.DOM */
var React = require("react");
var BackboneMixin = require("./backbone-mixin");
var User = require("../models/user")

module.exports = React.createClass({
    mixins: [BackboneMixin],
    getInitialState: function(){
          return {
              model: new User({
                  id: parseInt(this.props.routeParams[0])
              })};
    },
    componentWillMount: function(){
        this.state.model.fetch();
    },
    submitForm: function(event){
        event.preventDefault();
        this.state.model.save();
    },
    render: function() {
      return (
        <form>
            {JSON.stringify(this.state)}
            <div className="form-group">
                <label>First Name</label>
                <input className="form-control" valueLink={this.linkState('firstName')} type="text" name="name"></input>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input className="form-control" valueLink={this.linkState('lastName')} type="text" name="name"></input>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" valueLink={this.linkState('email')} type="text" name="email"></input>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" checkedLink={this.linkState('admin')} type="checkbox" name="email"></input>
            </div>
            <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
        </form>
      );
    }
});
