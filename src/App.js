import React from "react";
import {BrowserRouter as Router , Route, Link, Redirect, Switch} from "react-router-dom"

function Home (){
  return<>
      <Link to="/next"> <button>Next</button> </Link>
      <button>Prev</button>
      <button>State</button>
      </>
}

function Next (props){
  return<>
      <Link to="/"><button>1</button></Link>
      <Link to="/prev"><button>2</button></Link>
      <Link to="/next/3"><button>3</button></Link>
      
      <Route path="/next/:number" component={Number} />

      </>
}

function Number({match}){
  console.log(match)
  return <>{match.params.number}</>
}

function Prev (){
  return <Redirect to="/" />
}

function Err (){
  return <>ERR</>
}


function App(){
  return  (<Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/next" component={Next}/>
            <Route path="/prev" component={Prev}/>
            <Route component={Err} />
          </Switch>
          </Router>
 )
}

export default App;