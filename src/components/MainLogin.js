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
           

                

                {isSubmitted ? (<FormSuccess />) :

                    (
                        <div className='form-container login-box'>
                            <FormLogin submitForm={submitForm} />
                            <div className='form-content-right img-box'>
                                <img className='form-img' src='img/login-bg.jpg' alt='mars' />
                            </div>
                        </div>


                    )}


           
            <Footer />
        </>
    );
};

export default Form;

