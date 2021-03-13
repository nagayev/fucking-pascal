import logo from './logo.svg';
import pascal from './pascal.webp';

import './App.css';
import { useState,useEffect } from 'react';

function Card(props){
  return (
    <div className="card">
      <h2>{props.data.header}</h2>
      <p>{props.data.content}</p>
    </div>
  );
}

function Header(props){
  return (
    <h1>{props.children}</h1>
  );
}

function CardsCollection(props){
 let cardsList = [];
 for(let i=0;i<props.cards.length;i+=props.step){
   cardsList.push(
    <div class="cards-row">
      {props.cards.slice(i,i+props.step).map((v,i)=>{
        return <Card data={v} key={i} />
      })}
    </div>
   );
 }
 return <div>{cardsList}</div>
}

function App() {
  const [cards,setCards] = useState([]);

  useEffect(()=>{
    fetch('things.json')
    .then(data=>data.json())
    .then(data=>setCards(data))
    .catch(err=>console.log(err));
  },[]);
  return (
    <div className="App">
      <Header>It's the fucking Pascal</Header>
      <CardsCollection cards={cards} step={3} />
      <img src={pascal} id="pascal" />
      <footer>
        (c) 2021 Made by Marat Nagayev
      </footer>
    </div>
  );
}

export default App;
