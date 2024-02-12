import React from "react";
import "./tentang.css";
import AboutImg from "../../assets/Profile-avatar-PNG.png";


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <div className="about_container container grid">
                <img src={AboutImg} alt="" className="about_img" />

                <div className="about_data">
                  

                    <p className="about_description">
                        Nama Nicholas, saya seorang Junior Web Developer yang sedang mencari pengalaman,
                        mempunyai beberapa pengalaman mengerjakan projek individu maupun bersama tim.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About