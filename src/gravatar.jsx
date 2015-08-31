/** @jsx React.DOM */
var React = require('react');
var md5 = require('md5');

var Gravatar = React.createClass({
  propTypes: {
    email: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    defaultImage: React.PropTypes.string,
    forceDefault: React.PropTypes.string,
    rating: React.PropTypes.string,
    ssl: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      email: '',
      ssl: false
    }
  },
  buildParams: function() {
    var params = [];

    if (this.props.size) {
      params.push('size=' + this.props.size);
    }
    if (this.props.defaultImage) {
      params.push('default=' + this.props.defaultImage);
    }
    if (this.props.forceDefault === 'y') {
      params.push('forcedefault=' + this.props.forceDefault);
    }
    if (this.props.rating) {
      params.push('rating=' + this.props.rating);
    }

    return params.join('&');
  },
  buildUrl: function() {
    var url = (this.props.ssl)? 'https://secure.gravatar.com/avatar/' :
      'http://gravatar.com/avatar/';
    var urlWithHash = url + md5(this.props.email);
    var params = this.buildParams();
    if (params) {
      urlWithHash += '?' + params;
    }
    return urlWithHash;
  },
  render: function() {
    var url = this.buildUrl();
    return (
      <img {...this.props} src={url} />
    );
  }
});

module.exports = Gravatar;