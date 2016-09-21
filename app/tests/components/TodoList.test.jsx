var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('Todo app', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render one Todo componenet for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Something'
      }, {
        id: 2,
        text: 'Check mail'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

});
