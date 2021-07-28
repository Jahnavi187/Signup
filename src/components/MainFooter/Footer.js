import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">
            <section
                className="d-flex justify-content-between p-4"
            >

                <div className="me-5" >

                    <a href="" className="text-dark me-4">
                        Hom
                    </a>
                    <a href="" className="text-dark me-4">
                        About Us
                    </a>
                    <a href="" className="text-dark me-4">
                        Blog
                    </a>
                    <a href="" className="text-dark me-4">
                        Contact Us
                    </a>
                </div>

                <div>

                    <a href="" className="text-dark me-4">
                        <i className="facebook square icon"></i>
                    </a>
                    <a href="" className="text-dark me-4">
                        <i className="linkedin icon"></i>
                    </a>
                    <a href="" className="text-dark me-4">
                        <i className="google icon"></i>
                    </a>

                </div>

            </section>



        </div>

    );
}

export default Footer;