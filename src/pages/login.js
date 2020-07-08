import React, {useState} from 'react'
// import { navigate } from 'gatsby-link'
import {useAuth} from '../components/Firebase'
import Layout from '../components/Layout'
import {Link, navigate} from 'gatsby'
import { Form, Input, Button } from '../components/common'
import styled from 'styled-components';

const YetRegistered = styled.div`
  padding-top: 16px;
  padding-bottom: 8px;
  width: 100%;
  margin 0 auto;
  text-align: center;
`

const Login = () => {
  const [formValues, setFormValues] = useState({email:'', password:''});
  const {firebase} = useAuth();
  
  function handleSubmit(e){
    e.preventDefault(); 
    firebase.login({email: formValues.email, password: formValues.password}).then(() => navigate('/'));
  }

  function handleInputChange(e){
    e.persist();
    setFormValues(currentValues =>({
      ...currentValues,
      [e.target.name]: e.target.value 
    }))
  }

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
              <Input value={formValues.email} name="email" onChange={handleInputChange} placeholder="email" type="email" />
              <Input value={formValues.password} name="password" onChange={handleInputChange} placeholder="password" type="password" />
              <Button type="submit" block>
                Login
              </Button>
            </Form>
            <YetRegistered>Register from 
              <a href="/register"> Here</a>
            </YetRegistered>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Login;

