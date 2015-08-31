
var React = require('react');
var md5 = require('md5');

var Gravatar = React.createClass({
  render: function() {
    var hash = md5(this.props.email);
    return (
      <img src={'http://gravatar.com/avatar/' + hash} />
    );
  }
});

module.exports = Gravatar;

