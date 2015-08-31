/** @jsx React.DOM */
var React = require('React');
var Gravatar = require('../gravatar');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <h1><pre>&lt;Gravatar email="deerawan@gmail.com" /&gt;</pre></h1>
          <Gravatar email="deerawan@gmail.com" />
        </div>
        <div>
          <h1><pre>&lt;Gravatar email="deerawan@gmail.com" size="200" /&gt;</pre></h1>
          <Gravatar email="deerawan@gmail.com" size="200" />
        </div>
        <div>
          <h1><pre>&lt;Gravatar email="xxxxxxx@gmail.com" defaultImage="mm" /&gt;</pre></h1>
          <Gravatar email="xxxxxxx@gmail.com" defaultImage="mm" />
        </div>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);