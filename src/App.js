import { useState } from 'react';
import './App.css';

function App() {
 
  return (
    <div className='App'>
      <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(55)
  const increaseCount = () =>setCount(count +1 );
  const decreaseCount = () =>setCount(count -1 );
  // const increaseCount = () =>{
  //   const newCount = count + 1; 
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Increase</button>
    </div>
  )
}



// products.map(product => <Product name={product.name} price= {product.price}></Product>)
// const products = [
//   {name:'labtop', price:5200},
//   {name:'Phone', price:4200},
//   {name:'watch', price:200},
//   {name:'bike', price:50000},
// ]

// function Product(props){
//   return(
//     <div className='Product'>
//       <h3>name : {props.name} </h3>
//       <p>price :  {props.price}</p>
//     </div>
//   )
// }

export default App;
