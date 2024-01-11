import logo from './logo.svg';
import './App.css';
import Name from "./componets/name";
import Path from "./componets/path";
import Description from "./componets/descr";
import Pri from './componets/price';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
let myname = "azer"
  return (
    <React.Fragment>
     
      <div className='tittl'>
        <h1> my producet</h1>
      </div>
      <section className='card'>
        <div> <Path /> </div>
        <div><Name /> </div>
        <div>  <h2><Pri /> </h2></div>
        <div><h2> <Description /></h2> </div>
        {
        myname ? "hello there my name is azer": "hello there"
      }
      </section>
      {/* {
        myname==="azer" ? "hello there my name is azer": "hello there"
      }
       */}

    </React.Fragment>


  );
}
export default App;
