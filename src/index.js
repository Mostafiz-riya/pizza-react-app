import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const pizzas=pizzaData;
const numPizzas=pizzas.length;

// create components//////

// main component
function App(){
  return (
    <div className='container'>
     <Header />
     <Menu/>
     <Footer/>
  
    </div>
  );
}


function Pizza(props){
  console.log(props);


// return multiple -------return 1
  if(props.pizzaObj.soldOut)
  return (
  <h3 style={{textAlign:"center"}}>sold</h3>)
  ;
//  return 2---------
  return(
      <div className='pizza'>
        <img src={props.pizzaObj.photoName} alt={props.name}/>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div> 
      );
  }
 
function Header(){
  // const style={color:"red",fontSize:"40px",textTransform:"upperCase"};
  const style={};
  return(
  <header className='header'>
    <h1 style={style} className='header'>First react pizza app</h1>
  </header>
  );
}

// parent  element of pizza props//////////////
function Menu()
{
  return(
  <main className='menu'>
    <h2>Our menu</h2>
    <p> authenticate pizza delivaery service with the bests taste</p>
    {numPizzas>0 ? (
    <ul className='pizzas'>
      {pizzas.map((pizza)=>
      ((<Pizza pizzaObj={pizza} key={pizza.name}/>)))}
    </ul>
    ):null}
  
    {/* <Pizza 
    name="salamino" 
    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
    photoName="pizzas/salamino.jpg" 
    price="650" />
    <Pizza
     name="funghi" 
     ingredients="Tomato, mozarella, mushrooms, and onion"
     photoName="pizzas/funghi.jpg" 
     price="550"
    />
    <Pizza
     name="Pizza Prosciutto" 
     ingredients="Tomato, mozarella, mushrooms, and onion"
     photoName="pizzas/Prosciutto.jpg" 
     price="750"
    />
     <Pizza
     name="Pizza Margherita" 
     ingredients="Tomato, mozarella, mushrooms"
     photoName="pizzas/Margherita.jpg" 
     price="700"
    /> */}
  </main>
  );
}

function Footer(){
  const hour=new Date().getHours();
  const open=10;
  const close=22;
  const isopen=hour>=open && hour <=close;
  console.log(isopen);
//   if(hour>=open && hour<=close)
//   alert("we are open");
// else
// alert("we are close now");
// // const service=hour>=open && hour<=close;
// // console.log(service);
  return(
<footer className='footer'>
{isopen ? 
 (
  <Order close={close} open={open}/>)
  /* {new Date().toLocaleDateString()} */
 :(
    <p>you are welcome between {open}:00  {close}:00</p>
    
 )
}
  </footer>
  )
};
function Order({close,open}){
  return (
    <div className='order'>
      <p>we are sorry {close}</p>
    <button className='btn'>Order</button>
    </div>
    )
};

// react expression create////////////
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
