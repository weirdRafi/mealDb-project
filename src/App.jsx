import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Meal from './components/Meal/Meal';
import Detail from './components/Detail/Detail';

function App() {
 const [detail, setDetail] = useState([])

  const handleAddToDetails = (meal) => {
    const newDetail = [...detail, meal]
    // console.log(newDetail);
    setDetail(newDetail)
}

  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div className='row'>
        <div className='col-md-8'>
        <Meal handleAddToDetails={handleAddToDetails}></Meal>
        </div>
        <div className='col-md-4 sticky-top bg-success p-3 text-light rounded' > 
        <h2 className='text-center text-decoration-underline'>DETAILS</h2>
          {
            detail.map(d => <Detail d={d}></Detail>)
          }
        </div>
      </div>
    </div>
  )
}


export default App
