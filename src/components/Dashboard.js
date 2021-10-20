import React from 'react';
import { Anchor } from 'antd';
import $ from "jquery";
let { Link } = Anchor;

function Dashboart() {

    $(document).ready(function(){
     
        $("#menu").click(function(){
            $(this).toggleClass("fa-times");
              $("Header").toggleClass("toggle");
        })
        $(window).on("scroll load", function(){
            $("#menu").removeClass("fa-times");
            $("Header").removeClass("toggle");
        })
    })

    return <header>
                <div className="user">
                    <img src="images/CV.jpeg" alt=""/>
                    <h3 className="nom">Kassi Ahotchi Ernest</h3>
                    <p className="post">Developpeur Front End</p>
                </div>

                <nav class="barDeNavigation">
                    <Anchor className="ancrage">
                        <Link className="lien" href="#home" title="Accueil"/>
                        <Link className="lien" href="#about" title="A propos"/>
                        <Link className="lien" href="#education" title="Education"/>
                        <Link className="lien" href="#" title="Portfolio"/>
                        <Link className="lien" href="#contact" title="Me Contacter"/>
                    </Anchor>
                </nav>
                <div id="menu" class="fas fa-bars"></div>

            </header>
}

export default Dashboart;

