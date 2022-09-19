import { useEffect, useState } from 'react';
import './App.css';

function App() {
 
  return (
    <div className='App'>
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] =useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } ,[]);

  return (
    <div>
      <h1>External User</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name = {user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div style={{border: '2px solid red', margin:'20px'}}>
      <h3>Name : {props.name}</h3>
      <h5>Email : {props.email}</h5>
    </div>
  )
}





// function Counter(){
//   const [count, setCount] = useState(55)
//   const increaseCount = () =>setCount(count +1 );
//   const decreaseCount = () =>setCount(count -1 );
//   // const increaseCount = () =>{
//   //   const newCount = count + 1; 
//   //   setCount(newCount);
//   // }
//   return (
//     <div>
//       <h1>count : {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Increase</button>
//     </div>
//   )
// }



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
