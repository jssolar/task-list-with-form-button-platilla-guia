import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleText = () => {
    if (text !== '') setList(list.concat(text));
    setText('');
  };

  return (
    <>
      <div>
        <div className="card">
          <h4>Todo List React y Fetch</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={handleText} type={'submit'}>
              Tarea
            </button>
          </form>
          {
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        </div>
      </div>
    </>
  );
}

export default App;
