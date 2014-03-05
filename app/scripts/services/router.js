var Backbone = require("backbone");
var React = require("react");

var Router = function(container){
    this._router = new Backbone.Router();
    this.container = container;
};

Router.prototype = {
    addRoute: function(route, Component){
        var self = this;
        this._router.route(route, route, function(){
            console.log( arguments );

            var routeParams= Array.prototype.slice.call(arguments, 0);
            React.renderComponent(
                Component({ 
                    routeParams:routeParams
                }, null),
                self.container
            )
        })
    },
    navigate: function(url){
        this._router.navigate(url, {trigger:true})
    },
    start: function(){
        Backbone.history.start()
    }
}

module.exports = Router;
