import React from "react";

function About () {
    return <section id="about" className="about">
        <h1 className="heading"> <span>A Propos </span>De Moi </h1>

        <div className="row">
            <div className="info">
                <h3> <span>  Nom : </span> Kassi Ahotchi Ernest</h3>
                <h3> <span>  Date de naissance : </span> 15/06/2000</h3>
                <h3> <span>  Qualification : </span> BTS</h3>
                <h3> <span>  Post : </span> Developpeur Front End</h3>
                <h3> <span>  Language : </span> Français / Anglais</h3>
                <a href="http://react.org" target="blank"> <button className="btn"> Télécharger Mon CV <i className="fas fa-download"></i></button> </a>
            </div>

            <div className="counter">
                <div className="box">
                    <span>2+</span>
                    <h3>Année d'expérience</h3>
                </div>
                <div className="box">
                    <span>10+</span>
                    <h3>Projet Complet</h3>
                </div>
                <div className="box">
                    <span>300+</span>
                    <h3>clients heureux</h3>
                </div>
                <div className="box">
                    <span>3+</span>
                    <h3>Certifications</h3>
                </div>
            </div>
        </div>
</section>
}
export default About;