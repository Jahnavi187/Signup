import React, { useState } from 'react';
import './Form_validation/Form.css'
import FormSignup from './Signup_form';
import FormSuccess from './FormSuccess';

import Footer from './MainFooter/Footer';

const Signupform = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
           

                {/*<div className='form-content-right'>
                    <img className='form-img' src='img/login-bg.jpg' alt='mars' />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>*/}
                {isSubmitted ? (<FormSuccess />) :

                    (<div className='form-container'>
                        <FormSignup submitForm={submitForm} />
                        <div className='form-content-right img-box'>
                            <img className='form-img' src='img/login-bg.jpg' alt='mars' />
                        </div>
                    </div>
                    )}
           

            <Footer />
        </>
    );
};

export default Signupform;