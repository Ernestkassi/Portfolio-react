import React from "react";

function Contact() {
    return (
        <div id="contact">
            <h1 className="message"><span>Contactez</span>-moi</h1>
            <form>
                <label for="nom">Nom </label>
                <input type="text" name="name" placeholder="Veuillez saisir votre nom"/>

                <label for="email">E-mail </label>
                <input type="email" name="email" placeholder="Renseignez votre Mail"/>

                <label for="message"><span>Message</span></label>
                <textarea name="message" placeholder="Votre Message"></textarea>
                
                <button type="submit" ><span>Envoyer</span></button>
            </form>
        </div>
    );
}
export default Contact;