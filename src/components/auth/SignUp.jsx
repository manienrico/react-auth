import React,{useState} from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signUp =(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            console.log(userCredentials)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={signUp}>
            <h1>Create Account</h1>
            <input
             type='text'
             placeholder='Enter your Email'
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
             />
            <input
             type='password'
             placeholder='Enter password'
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}
             />
             <button type='submit'>
                Sign Up
             </button>
        </form>
    </div>
  )
}

export default SignUp