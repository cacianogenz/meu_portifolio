
import React, { useState, useEffect } from 'react'
import './App.css';
import Profissional from './Profissional';
import Pessoal from './Pessoal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const [especial, setEspecial] = useState(false);

  var k1 = ""; var k2 = ""; var k3 = ""; var code = "";
  useEffect(() => {

    const pnProf = document.querySelector('.pnProf');
    const pnPess = document.querySelector('.pnPass');
    const evt = (e) => {
      // console.log("key " + e.code);
      console.log("s " + especial);

      k1 = k2;
      k2 = k3;
      k3 = e.code;
      code = k1 + k2 + k3;
      console.log(code);
      console.log(window.location.href);
      if (code == "KeyAKeyAKeyK" || code == "ArrowLeftArrowLeftKeyK") {
        console.log("especial " + especial);
        k1 = ""; k2 = ""; k3 = "";
        if (especial) {
          setEspecial(false);
        } else {
          setEspecial(true);
        }
        if (window.location.href.includes('/pessoal')) {
          window.location.href = "/";
        } else {
          window.location.href = '/pessoal';
        }
        // window.location.reload();
        console.log("especial after " + especial);
      }

      // if (e.code === "ArrowUp")   
    };

    // window.addEventListener('keyup', (e) => {

    console.log(pnPess);
    window.addEventListener('keyup', evt);
    // pnPess.addEventListener('keyup', evt);

  }, []);
  // const onScroll = () => {
  // function getEspecialUi() {
  //   console.log("getEspecialUi " + especial);
  //   if (especial) {
  //     return <section id='pnPass' className="App-header pnPass"
  //     >especial</section>
  //   }
  //   return <Profissional id="pnProf" className="pnProf" ></Profissional>
  // }



  return (
    <div  >
      <Router>
        <Routes>
          <Route path='/' exact
            element={<Profissional id="pnProf"
              className="pnProf" />
            } />

          <Route path='/pessoal' exact
            element={
              <Pessoal id='pnPass'
                className="App-header pnPass" />
            } />



        </Routes>
      </Router>
      {/* {getEspecialUi()} */}



    </div>
  );
}

export default App;
