/** @jsx React.DOM */
jest.dontMock('../src/gravatar.jsx');

var React = require('react/addons');
var Gravatar = require('../src/gravatar.jsx');
var TestUtils = React.addons.TestUtils;

describe('Gravatar', function() {
  it('should display gravatar image url', function() {
    var gravatar = TestUtils.renderIntoDocument(
      <Gravatar email="deerawan@gmail.com" />
    );
    var image = TestUtils.findRenderedDOMComponentWithTag(
      gravatar, 'img');
    expect(image.getDOMNode().src).toEqual('http://gravatar.com/avatar/71a6523c5915c0ee79a79a137c1b2be0');
  });

  it('should display gravatar image url with ssl', function() {
    var gravatar = TestUtils.renderIntoDocument(
      <Gravatar email="deerawan@gmail.com" ssl={true} />
    );
    var image = TestUtils.findRenderedDOMComponentWithTag(
      gravatar, 'img');
    expect(image.getDOMNode().src).toEqual('https://secure.gravatar.com/avatar/71a6523c5915c0ee79a79a137c1b2be0');
  });

  it('should display gravatar image url with all params', function() {
    var gravatar = TestUtils.renderIntoDocument(
      <Gravatar email="deerawan@gmail.com" size={200} defaultImage="404" forceDefault="y" rating="pg" />
    );
    var image = TestUtils.findRenderedDOMComponentWithTag(
      gravatar, 'img');
    expect(image.getDOMNode().src).toEqual(
      'http://gravatar.com/avatar/71a6523c5915c0ee79a79a137c1b2be0?size=200&default=404&forcedefault=y&rating=pg');
  });
});