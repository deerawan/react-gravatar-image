React Gravatar
================================
A react component to show gravatar thumbnail

## Install
```
npm install react-gravatar-image --save
```

## Usage
```javascript
var React = require('React');
var Gravatar = require('../gravatar');

var App = React.createClass({
  render: function() {
    return (
      <Gravatar email="deerawan@gmail.com" />
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);
```

## Options

Available Options

- **email**: Gravatar email
- **size**: determine image size
- **defaultImage**: default image when an email address has no matching Gravatar image
- **forceDefault**: force default image to always load
- **rating**: image rating to determine if an image is appropriate for a certain audience
- **ssl**: serve Gravatar via SSL

More detail explanation about Gravatar options please [click here](http://en.gravatar.com/site/implement/images/)

Example syntax using all options

```javascript
<Gravatar email="deerawan@gmail.com" size="200" defaultImage="404" forceDefault="y" rating="pg" ssl="true" />
```

