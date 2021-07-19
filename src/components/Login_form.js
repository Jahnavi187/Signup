import React from 'react';
import validate from './Form_validation/validateInfo';
import useForm from './Form_validation/useForm';
import './Form_validation/Form.css';
import { Button } from '@material-ui/core';


const FormLogin = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1 className="welcome">
                    Welcome Back !
                </h1>

                <div className='form-inputs'>
                {errors.email && <p>{errors.email}</p>}
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='stefan@gmail.com'
                        value={values.email}
                        onChange={handleChange}
                    />
                    
                </div>
                <div className='form-inputs'>

                    <label className='form-label'>Password</label>
                    <input

                        className='form-input'
                        type='password'
                        name='password'

                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <p >
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </p>

                <Button variant="outlined" color="primary" className="btn" type="submit">
                    LogIn
                </Button>

                <span className='form-input-login'>

                    Don't have an account? Signup <a href='http://localhost:3000/Signup'> here</a>
                </span>

            </form>
        </div >
    );
};

export default FormLogin;