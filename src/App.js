import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'


function App() {


  const [info, setInfo] = useState([]);
  const [infos, setInfos] = useState([]);



  function gerarPessoas(e) {
    e.preventDefault();
    axios.get(`https://randomuser.me/api/?results=10`).then(data => {
      setInfo(data.data.results.slice(0,5));
      setInfos(data.data.results.slice(5,10))
      console.log(info)
    }).catch((e) => { e = ("erro") })
  }

 
  return (
    <div className="App">
      <h1>Gerador de Usuarios</h1>
      <p>Clique em gerar para gerar uma nova informação</p>
      <button onClick={gerarPessoas}>gerar</button>
      <div className="imagens">
        {info.map((respInfo) => {
          return <div>
            <div className="info">
              <img src={respInfo.picture.large} alt/>
              <p>{respInfo.name.first} - {respInfo.dob.age} - {respInfo.phone}</p>
              <p>{respInfo.email} - {respInfo.gender}</p>
              <p>{respInfo.location.city} - {respInfo.location.state}</p>
            </div>
            
          </div>
        })}
      </div>
      <div className="imagens">
        {infos.map((respInfo) => {
          return <div>
            <div className="info">
              <img src={respInfo.picture.large} alt/>
              <p>{respInfo.name.first} - {respInfo.dob.age} - {respInfo.phone}</p>
              <p>{respInfo.email} - {respInfo.gender}</p>
              <p>{respInfo.location.city} - {respInfo.location.state}</p>
            </div>
            
          </div>
        })}
      </div>
    </div>
  );

}
export default App;