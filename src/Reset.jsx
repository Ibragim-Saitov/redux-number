import { useDispatch } from 'react-redux';
import './App.css'

function Reset() {


  const dispatch = useDispatch()

  
  const reset = () =>{
    dispatch({
        type: 'reset'
    })
  }

  return (
  <button className='btn-3' onClick={reset}>
    reset
  </button>
  );
}

export default Reset;