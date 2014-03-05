var _ = require("underscore");
var $ = require("jquery");
var resources = {
    users: [
        {firstName:"Thomas", lastName:"Edison", email: "bob.barkley@email.com", admin: false},
        {firstName:"charles", lastName:"barkley", email: "bob.barkley@email.com", admin: false}
    ]
};

_(resources).values().forEach(function(resource){
    resource.forEach(function(item, i){
        item.id=i+1
    });
});

module.exports = function(method, model, options){
    _(resources).keys().forEach(function(resourceName){
        var response;
        var urlRegexp = new RegExp("\\/"+resourceName+"\\/(\\d+)$")

        if(model.url==="/"+resourceName+"/"){
            response = resources[resourceName]
        }
        else if(urlRegexp.test(model.url)){
            var id = parseInt(urlRegexp.exec(model.url)[1]);
            response = resources[resourceName].filter(function(resource){
                return resource.id===id
            })[0]
        }

        if(options && options.success){
            setTimeout(options.success, 10, response)
        }
    });
}
