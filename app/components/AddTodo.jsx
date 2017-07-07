import React from 'react';
import TodoStore from '../stores/TodoStore';

export default class AddTodo extends React.Component {
  addTodo() {
    const newTodoName = this.refs.todoTitle.value;
    if (newTodoName) {
      name: newTodoName,
          TodoStore.addNewTodo({
      });
      TodoStore.emitChange();
      this.refs.todoTitle.value = '';
    }
  }

  render() {
    return (
      <div className="add-todo">
        <input type="text" placeholder="Todo four" ref="todoTitle" />
        <button className="add-button" onClick={this.addTodo.bind(this)}>
          Add Todo
        </button>
      </div>
    );
  }
}
