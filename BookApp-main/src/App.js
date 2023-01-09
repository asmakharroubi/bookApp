import './App.css';
import AddTask from './components/AddTask/AddTask';
import ListTask from './components/ListTask/ListTask';

function App() {
  return (
    <div className="App">
      <h1 className="title">List To Do</h1>

      <AddTask />
    
      <ListTask />
    </div>
  );
}

export default App;
