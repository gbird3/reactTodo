var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if(text.lenght > 0){
      this.refs.todo.value = '';
      this.props.onAddItem(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit} className="addTodo-form">
          <input type="text" placeholder="What do you need to do?" ref="todoText"/>
            <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
