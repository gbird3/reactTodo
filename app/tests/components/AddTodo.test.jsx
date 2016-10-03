var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo app', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddItem prop when text is entered', () => {
    var todoText = "Check Mail";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddItem={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddItem when no text is entered', () => {
    var todoText = "";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddItem={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
