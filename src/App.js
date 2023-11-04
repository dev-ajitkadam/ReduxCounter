import './App.css';
import { decNumber, incNumber } from './action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



function App() {
  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div >
      <h1 >Increment/Decrement Converter using React Redux</h1>
      <p>Current Value: {myState}</p>
       <div className='m1'>
       <button  onClick={()=>dispatch(decNumber())}>Decrement</button>
      <input
        type="number"
        value={myState}
        
      />
      
      <button  onClick={()=>dispatch(incNumber())}>Increment</button>
      </div>
      <footer>
    <p>&copy; 2023 dev_ajitkadam</p>
  </footer>
    </div>
  );
}

export default App;
