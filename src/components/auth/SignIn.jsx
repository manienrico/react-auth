import React,{useState} from 'react'

const SignIn = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div className='sign-in-container'>
        <form>
            <h1>Sign in</h1>
            <input
             type='text'
             placeholder='Enter your Email'
             value={email}
             />
            <input
             type='password'
             placeholder='Enter password'
             value={password}
             />
        </form>
    </div>
  )
}

export default SignIn