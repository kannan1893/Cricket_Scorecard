
import {useSelector, useDispatch} from 'react-redux'
import {ones,twos,fours,sixes,wicket} from './action'
import {useState} from 'react'
import './App.css'

function App() {
  
  const select = useSelector(state=>state)
  let dispatch = useDispatch()

  const[defaultId, setDefaultId] = useState(1)

  function out(){
    dispatch(wicket(defaultId))
    setDefaultId(defaultId+1)
  }

  return (
    <div className="App">
     <h1 style={{textAlign:"center"}}> SCORE BOARD</h1>
     <table className='table'>
     <thead>
          <tr>
            <th>NAME</th>
            <th>RUNS</th>
            <th>WICKET</th>
          </tr>
      </thead>
     {select.team.map((e,i)=>{
      return   (     
        <tbody key={i}>
          <tr><td>{e.name}</td><td>{e.runs}</td><td>{e.wicket}</td></tr>
        </tbody>)      
     })}
     </table><br/><br/>
     <div className='bottom'>    
     <button onClick={()=>dispatch(ones(defaultId))}>Ones</button>
     <button onClick={()=>dispatch(twos(defaultId))}>twos</button>
     <button onClick={()=>dispatch(fours(defaultId))}>fours</button>
     <button onClick={()=>dispatch(sixes(defaultId))}>sixes</button>
     <button onClick={out}>wicket</button>
     <h2>Total Score:{select.team[0].runs+select.team[1].runs+select.team[2].runs+select.team[3].runs+select.team[4].runs+select.team[5].runs+select.team[6].runs+select.team[7].runs+select.team[8].runs+select.team[9].runs+select.team[10].runs}</h2>
     </div>     
    </div>
  );
}

export default App