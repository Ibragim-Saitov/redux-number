import { useSelector, useDispatch } from 'react-redux';
import Reset from './Reset';
import './App.css';

const minusCounter = () =>{
  return 'minus'
}

function App() {

  const dispatch = useDispatch()

  const counter = useSelector(state => state)

  const plus = () =>{
  dispatch({
    type: 'plus',
    payload: 5
  })
  }

  const minus = () =>{
    dispatch({
      type: 'minus'
    })
  }

  return (
    <div className="App">
      {counter}
      <>
      <button className='btn' onClick={plus}>
        Plus
      </button>
      <button className='btn-2' onClick={minus}>
        Minus
      </button>
      <Reset/>
      </>
    </div>
  );
}

export default App;
