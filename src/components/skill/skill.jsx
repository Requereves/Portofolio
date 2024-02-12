import React from "react";
import "./skill.css";
import FR from "./Fr";
import BE from "./Be";

const Skill = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skill</h2>

            <div className="skills_container container grid">
                <FR />

                <BE />
            </div>
        </section>
    )
}
export default Skill