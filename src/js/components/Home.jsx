import React, { useState } from 'react';

function Home() {
  // guarda la lista de tareas
  const [todos, setTodos] = useState([
    { done: false, title: 'cocinar', id: Date.now() },
    { done: false, title: 'lavar los platos', id: Date.now() + 1 },
    { done: false, title: 'recoger la casa', id: Date.now() + 2 },
    { done: false, title: 'bañar al perro', id: Date.now() + 3 }
  ]);
  // guarda texto del input
  const [taskInput, setTaskInput] = useState('');
// maneja el envio de formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado, valor:", taskInput);
    if (taskInput.trim() === '') return;

    setTodos([
      ...todos,
      { title: taskInput, done: false, id: Date.now() }
    ]);
    setTaskInput('');
  };
// elimina la tarea segun su Id
  const deleteTask = (taskId) => {
    setTodos(todos.filter(task => task.id !== taskId));
  };
// recorre todas las tareas de la lista, y por cada una, crea un item en la lista que muestra su nombre y un botón para quitarla
  const tasksToRender = todos.map(task => (
    <li key={task.id}>
      <div className="view">
        <label>{task.title}</label>
        <button className="destroy" onClick={() => deleteTask(task.id)}></button>
      </div>
    </li>
  ));

  return (
    <section className="todoapp">
      <header className="header">
        <h1>ToDoList</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            autoFocus
            className="new-todo"
            placeholder="Que hay que hacer?"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </form>
      </header>
      <section className="main">
        <ul className="todo-list">
          {tasksToRender}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter(task => !task.done).length}</strong> por hacer
        </span>
      </footer>
    </section>
  );
};

export default Home