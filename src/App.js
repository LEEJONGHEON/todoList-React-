import './App.css';
import { List } from '@mui/material';
import Todo from './component/Todo';
import AddTodo from './component/AddTodo';
const items = [
  {
      id: 1,
      title: 'hello world1',
      done: true
  },
  {
      id: 2,
      title: 'hello world2',
      done: false
  }
];

const TodoList = items.map(item => <Todo key={item.id} item={item}/>);

function App() {
  return (
    <div className='App'>
      <AddTodo />
      <List>
        {TodoList}
      </List>
    </div>
  );
}

export default App;
