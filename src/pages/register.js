import React, { useState, useContext } from "react"
import {Form, Input, Button} from '../components/common';
import {FirebaseContext} from '../components/Firebase';
import {useAuth} from '../components/Firebase'
import Layout from '../components/Layout'
import {Link, navigate} from 'gatsby'

const Register = () => {
  const {firebase} = useAuth();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleInputChange(e){
    e.persist();
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();

    if(formValues.password === formValues.confirmPassword){
      firebase.register({
        email: formValues.email,
        password: formValues.password
      }).then(() => navigate('/'))
  }
}

  return (
    <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
              <Input onChange={handleInputChange} value={formValues.email} placeholder="email" type="email" required name="email" />
              <Input onChange={handleInputChange} value={formValues.password} placeholder="password" type="password" required minLength={6} name="password" />
              <Input onChange={handleInputChange} value={formValues.confirmPassword} placeholder="confirm password" type="password" required minLength={6} name="confirmPassword" />
              <Button type="submit" block>
                Register
              </Button>
            </Form>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export default Register;