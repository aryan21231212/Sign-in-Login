import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Signup = () => {
    
  return (
    <Container>
      <form action="#">
        <div className='toggle'>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/"><button id='sign'>Signup</button></Link>
        </div>
        <h2>Signup Form</h2>
      
      <div className='input'>
        <span><input type="email" placeholder='Email Address' /></span>
        <span><input type="password" placeholder='Password'/></span>
        <span><input type="password" placeholder='Confirm password' /></span>
      </div>
      <div className='but'>
        <button>Signup</button>
      </div>
      </form>
    </Container>
  )
}

export default Signup

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form{
    border: 2px solid white;
    padding:10px; 
    background-color: white;
    width: 450px;
    border-radius:0.75rem;
    height: 500px;
  }
  .input{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .toggle{
    text-align: center;
  }
  .toggle button{
    background-color: #80808039;
    border: none;
    padding: 5px;
    font-size: 2rem;
    margin-left: 5px;
    width: 200px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  h2{
    margin: 2rem 0;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }
  input{
    padding: 10px;
    width: 400px;
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.3rem;
    border-radius: 0.25rem;
    border: 1px solid grey;
  }
  input::placeholder{
    color: gray;
  }

  .but{
    text-align: center;
  }
  .but button{
    margin: 2rem 0;
    padding: 10px;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 400px;
    background-color: #033452;
    color: white;
    border-radius: 0.5rem;
    border: none;
    font-weight: 600;
  }
  #sign{
    background-color:#033452 ;
    color: white;
  }
`