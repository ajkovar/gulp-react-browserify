module.exports = {
    componentDidMount: function() {
        this._boundForceUpdate = this.forceUpdate.bind(this, null);
        this.getBackboneObject().on("all", this._boundForceUpdate, this);
    },
    componentWillUnmount: function() {
        this.getBackboneObject().off("all", this._boundForceUpdate);
    },
    getBackboneObject: function() {
        return this.props.collection || this.props.model || this.state.model || this.state.collection;
    },
    linkState: function(key) {
        var Link = function(value, requestChange){
            this.value = value;
            this.requestChange = requestChange;
        };
        var component = this;
        return new Link(
            this.state.model.get(key),
            // ReactStateSetters.createStateKeySetter(this, key)
            function stateKeySetter(value) {
                // component.setState({key: value});
                component.state.model.set(key, value)
            }
        );
    }
}
