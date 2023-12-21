import {useState} from 'react';

function Counter({src, height, width, children}) {
    
    return (
      <img src={src} height={height} width={width}>
        {children}
      </img>
    );
}
// function Counter() {
//     const [todos, setToDo] = useState(['Todo 1','Todo 2']);
    
//     return (
//       <ul>
//         {todos.map((todos) => <li>{todos}</li>)}
//         <button onClick={() => setToDo([...todos,'this is another todo'])}>click here</button>      
//       </ul>
//     );
// }
// function Counter() {
//     const [todos, setToDo] = useState(['Todo 1','Todo 2']);
  
//     return (
//       <ul>
//         {todos.map((todos) => <li>{todos}</li>)}
//         <button onClick={() => setToDo([...todos,'this is another todo'])}>click here</button>
//       </ul>
//     );
// }
// function Counter() {
//     const [isEditing, isLoggedIn] = useState(false);
  
//     return (
//       <div>
//         {/* Conditional rendering */}
//         {isEditing ? <input /> : <h3>This is a heading</h3>}
//         <br/>
//         <button onClick={() => isLoggedIn(!isEditing)}>click here</button>
//       </div>
//     );
// }
// function Counter(){
//     const [x,setCountX] = useState(0);
//     const [y,setCountY] = useState(0);

//     return (
//         <div>
//             Count:{x}
//             <button onClick={()=> setCountX(x+1)}>Incr </button>
//             <button onClick={()=> setCountX(x-1)}>Decr</button>
//             <br/>

//             Count:{y}
//             <button onClick={()=> setCountY(y+1)}>Incr </button>
//             <button onClick={()=> setCountY(y-1)}>Decr</button>
//         </div>
//     )
// }

export default Counter;