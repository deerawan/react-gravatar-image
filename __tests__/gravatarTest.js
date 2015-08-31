/** @jsx React.DOM */
jest.dontMock('../src/gravatar.jsx');

describe('Gravatar', function() {
  it('display correct gravatar image url', function() {
    var React = require('react/addons');
    var Gravatar = require('../src/gravatar.jsx');
    var TestUtils = React.addons.TestUtils;
    var gravatar = TestUtils.renderIntoDocument(
      <Gravatar email="deerawan@gmail.com" />
    );
    var image = TestUtils.findRenderedDOMComponentWithTag(
      gravatar, 'img');
    expect(image.getDOMNode().src).toEqual('http://gravatar.com/avatar/71a6523c5915c0ee79a79a137c1b2be0');

  });
});