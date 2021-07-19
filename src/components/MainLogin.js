import React, { useState } from 'react';
import './Form_validation/Form.css';
import FormLogin from './Login_form';
import FormSuccess from './FormSuccess';
import Footer from './MainFooter/Footer';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (

        <>
            <div className='form-container'>

                {/*{!isSubmitted ? (

                    <FormLogin submitForm={submitForm} />
                ) : (
                    <FormSuccess />*/}

                {isSubmitted ? (<FormSuccess />) :

                    (
                        <div className='form-container'>
                            <FormLogin submitForm={submitForm} />
                            <div className='form-content-right'>
                                <img className='form-img' src='img/login-bg.jpg' alt='mars' />
                            </div>
                        </div>


                    )}


            </div>
            <Footer />
        </>
    );
};

export default Form;