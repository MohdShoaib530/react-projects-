import './App.css'
import { useState } from 'react'
import { Sign } from './Button'

function App() {
   const [signIn,setSingUp] = useState(true)
  return (
    <div className='insta-wrapper'>
      <h1 className='insta-heading'>Instagram</h1>
      {signIn ? (
        <div className="signIn">
          <input type='text' placeholder='Phone Number, username or email' id='input'></input>
          <input type='text' placeholder='Password' id='input'></input><br></br>
          <Sign sign="SignIn"/>
          <h3 >Don't have account? <a onClick={() => setSingUp(!signIn)} id='sign'>SignUp</a></h3>
        </div>
      ) : (
        <div className='signUp'>
          <input type='text' placeholder='Phone Number or email' id='input'></input>
          <input type='text' placeholder='Full Name' id='input'></input>
          <input type='text' placeholder='Password' id='input'></input><br></br>
          <Sign sign="SignUp"/>
          <h3 >have an account <a onClick={() => setSingUp(!signIn)} id='sign'>SignIn</a></h3>
        </div>
      )}
    </div>
  )
}

export default App
