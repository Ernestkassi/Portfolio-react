import React from "react";

function Education() {
    return <section id="education" className="education">
        <h1 className="heading"> Mes <span> Formations </span></h1>
        

        <div className="box-container">
            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>Nov 2017-Juil 2019</span>
                <h3>BTS, Informatique Développeur d'Application</h3>
                <p>Pendant l'année 2017 à 2019 j'ai suivi une formation de deux ans à l'université Internationale Privée d'Abidjan à la fin de laquelle j'ai obtenu un Brevet de Technicien Suppérieur en Développement Informatique</p>
            </div>
        </div>
        <div className="box-container">
            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>Oct 2016-Juil 2017</span>
                <h3>Baccalauréat Série D</h3>
                <p>Parachever sept années d'étude secondaire suivi au Lycée Municipal De Mafere par un Baccalauréat serie D a été d'une joie trés immense</p>
            </div>
        </div>
        <div className="box-container">
            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>Sept 2013-Juin 2014</span>
                <h3>BEPC</h3>
                <p>Brevet d'Etudes du Premier Cycle du second degré obtenu au Lycée Municipal De Mafere</p>
            </div>
        </div>
</section>
}
export default Education;