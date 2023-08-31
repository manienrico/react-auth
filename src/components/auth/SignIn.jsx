import React,{useState} from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn =(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            console.log(userCredentials)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={signIn}>
            <h1>Sign in</h1>
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
                Login
             </button>
        </form>
    </div>
  )
}

export default SignIn