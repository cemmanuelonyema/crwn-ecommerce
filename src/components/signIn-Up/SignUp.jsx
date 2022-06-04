
import React, { Component } from 'react';
import Button from '../button/Button';
import FormInput from '../form-input/Form-input';

class  SignUp extends Component { 
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert('passwords dont match');
            return;
        }
        try {
             const {user} = await auth.createUserWithEmailAndPassword(email, password);

           await  createUserProfileDocument(user, {displayName})
           this.setState({
               displayName: '',
               email: '',
               password: '',
               confirmPassword: ''
           })
        } catch (err) {
            console.error(err);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
            const {displayName, email, password, confirmPassword} = this.state

        return (
            <div className='sign-up'>
                <h2 className='title'> I do not have an account </h2>
                <p>   sign up with your email and password</p>
                <form onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' onChange={this.handleChange} value={displayName} label='Name'  required/> 
                <FormInput type='email' name='email' onChange={this.handleChange} value={email} label='Email'  required/> 
                <FormInput type='password' name='password' onChange={this.handleChange} value={password} label='Password'  required/> 
                <FormInput type='password' name='confirmPassword' onChange={this.handleChange} value={confirmPassword} label='Confirm password'  required/> 
                <Button type='submit'> Sign Up</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;