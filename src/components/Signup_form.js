import React from 'react';
import validate from './Form_validation/validateInfo';
import useForm from './Form_validation/useForm';
import './Form_validation/Form.css'
import { Button } from '@material-ui/core';


const FormLogin = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1 className="join">
                    Join Mars by linking your email
                </h1>

                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='stefan@gmail.com'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
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
                <div className='form-inputs'>

                    <label className='form-label'> Confirm Password</label>
                    <input

                        className='form-input'
                        type='password'
                        name='password'

                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>



                <Button className="btn" variant="outlined" color="primary" type="submit">
                    SignUp
                </Button>


                <span className='form-input-login '>

                    Already have an account? Login <a href='http://localhost:3000/Login'>here</a>
                </span>
            </form>
        </div >
    );
};

export default FormLogin;