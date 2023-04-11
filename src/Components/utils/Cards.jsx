import React from "react";
import './Cards.scss';
import './FinalCards.scss';
import './CardsOrdi.scss';

export function Cards() {
    window.addEventListener("scroll", slideUp);

    function slideUp() {
        let slides = document.querySelectorAll('.slideUp');

        for(let i = 0; i < slides.length; i++) {
            let windowheight = window.innerHeight;
            let revealtop = slides[i].getBoundingClientRect().top;
            let revealpoint = 150;

            if(revealtop < windowheight - revealpoint && window.scrollY >= 200) {
                slides[i].classList.add('active');
            }
            else {
                slides[i].classList.remove('active');
            }
        }
    }

    return(
        <>
        <section className="cards-box">
            <button className="contr slideUp">
                <div className="img-one"></div>
                <div className="card-text">
                    <div className="number-one">
                        <p>01</p>
                    </div>
                </div>
                <div className="text-box">
                    <h3>Une Famille</h3>
                    <p>Ce qui nous réunit? Le même battement de coeur: tendre la main aux autres.<br></br>
                        Ensemble, nous nous unissons pour apporter de l'aide<br></br>
                        à ce qui en ont le plus besoin.<br></br>
                    </p>
                </div>
            </button>
                
            <button className="contr slideUp">
                <div className="img-two"></div>
                <div className="card-text">
                    <div className="number-two">
                        <p>02</p>
                    </div>
                </div>
                <div className="text-box">
                    <h3>En Mission</h3>
                    <p>Apporter de l'espoir à ceux qui ne pensent plus en avoir.
                        <br></br>Grâce à vos dons, nous donnons des vivres, et plus.
                        <br></br>Mais plus important, nous offrons de notre personne.
                    </p>
                </div>
            </button>

            <button className="contr slideUp">
                <div className="img-three"></div>
                <div className="card-text">
                    <div className="number-three">
                        <p>03</p>
                    </div>
                </div>
                <div className="text-box">
                    <h3>Des Volontaires</h3>
                    <p>Association à but non lucratif, nous aidons bénévolement<br></br>
                        comme nous souhaiterions être aidés.<br></br>
                        Vous souhaitez participer?<br></br>
                    </p>
                    <a href="/Contacts">Rejoignez nous!</a>
                </div>
            </button> 
        </section>

        <section className="cards-ordi">
            <div className="ctner">
                <div className="cards-one">
                    <button className="contr slideUp">
                        <div className="fcard-text"></div>
                        <div className="img1-card">
                            <div className="number-one">
                                <p>01</p>
                            </div>
                        </div>
                        <div className="text-box">
                            <h3>Une Famille</h3>
                            <p>Ce qui nous réunit? Le même battement de coeur: tendre la main aux autres.<br></br>
                                Ensemble, nous nous unissons pour apporter de l'aide<br></br>
                                à ce qui en ont le plus besoin.<br></br>
                            </p>
                        </div>
                    </button>
                    
                </div>
                
                <div className="cards-two">
                    <button className="contr slideUp">
                        <div className="scard-text"></div>
                        <div className="img2-card">
                            <div className="number-two">
                                <p>02</p>
                            </div>
                        </div>
                        <div className="text-box">
                            <h3>Des Volontaires</h3>
                            <p>Association à but non lucratif, nous aidons bénévolement<br></br>
                                comme nous souhaiterions être aidés.<br></br>
                                Vous souhaitez participer?<br></br>
                            </p>
                            <a href="/Contacts">Rejoignez nous!</a>
                        </div>
                    </button>
                </div>
            
                <div className="cards-three">
                    <button className="contr slideUp">
                        <div className="tcard-text"></div>
                        <div className="img3-card">
                            <div className="number-three">
                                <p>03</p>
                            </div>
                        </div>
                        <div className="text-box">
                            <h3>En Mission</h3>
                            <p>Apporter de l'espoir à ceux qui ne pensent plus en avoir.
                                <br></br>Grâce à vos dons, nous donnons des vivres, et plus.
                                <br></br>Mais plus important, nous offrons de notre personne.
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </section>

        <section className="final-cards">
            <button className="ctr slideUp">
                <div className="fcard-text"></div>
                <div className="img1-card">
                    <div className="number-one">
                        <p>01</p>
                    </div>
                </div>
                <div className="text-box">
                    <h3>Une Famille</h3>
                    <p>Ce qui nous réunit? Le même battement de coeur: tendre la main aux autres.<br></br>
                        Ensemble, nous nous unissons pour apporter de l'aide<br></br>
                        à ce qui en ont le plus besoin.<br></br>
                    </p>
                </div>
            </button>

            <button className="ctr slideUp">
                <div className="scard-text"></div>
                <div className="img2-card">
                    <div className="number-two">
                        <p>02</p>
                    </div>
                </div>
                <div className="text-box">
                    <h3>Des Volontaires</h3>
                    <p>Association à but non lucratif, nous aidons bénévolement<br></br>
                        comme nous souhaiterions être aidés.<br></br>
                        Vous souhaitez participer?<br></br>
                    </p>
                    <a href="/Contacts">Rejoignez nous!</a>
                </div>
            </button>
        
            <button className="ctr slideUp">
                <div className="tcard-text"></div>
                <div className="img3-card">
                    <div className="number-three">
                        <p>03</p>
                    </div>
                </div>
                <div className="text-box">
                    <h3>En Mission</h3>
                    <p>Apporter de l'espoir à ceux qui ne pensent plus en avoir.
                        <br></br>Grâce à vos dons, nous donnons des vivres, et plus.
                        <br></br>Mais plus important, nous offrons de notre personne.
                    </p>
                </div>
            </button>
        </section>
        
        </>
    )

}
