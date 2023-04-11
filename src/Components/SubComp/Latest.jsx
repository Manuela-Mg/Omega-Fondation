import React from "react";
import { MidDark } from "../utils/MidDark";
import Galeria from "./Galeria";
import './Latest.scss';

class Latest extends React.Component {

    render () {
        return (
            <section className="latest-box">
                <div className="ctr reveal">
                    <div className="full-text">
                        <div className="first-text">
                                <h2>VISITATION</h2>
                            </div>
                        <div className="scd-text">
                            <h2>D<span>'</span>HOPITAUX</h2>
                        </div>   
                    </div>
                    <div className="temp-text">
                        <h2>VISITATION</h2>
                        <h2>D<span>'</span>HOPITAUX</h2>
                    </div>
                    <div className="first-ctr">
                        <div className="circular-line"></div>
                        <div className="scd-line"></div>

                        <div className="scd-textbox">
                        
                            <span>"Il n'y a pas d'amour,
                            <br></br>il n'y a que 
                            <br></br>des preuves d'amour."</span>
                            <p><br></br><span className="fstar">＊</span> Distribution de jeux
                            <br></br><span className="fstar">＊</span> Dons de cadeaux <br></br>et autres</p>
                        </div>

                    </div>

                    <div className="img-first">
                    </div>

                    <div className="see-box">
                        <button className="see-more">
                        </button>
                        <a href="/Galerie" className="see">Voir Plus</a>
                    </div>


                    <div className="scd-ctr">
                        <div className="circular-line2"></div>
                        <div className="scd-line2"></div>

                        <div className="scd-textbox2">
                        
                            <span>"Il n'y a pas d'amour,
                            <br></br>il n'y a que 
                            <br></br>des preuves d'amour."</span>
                            <p><br></br><span className="fstar">＊</span> Distribution de jeux
                            <br></br><span className="fstar">＊</span> Dons de cadeaux <br></br>et autres</p>
                        </div>
                        <div className="straight"></div>
                        <div className="host-text">
                        
                            <span>L’hôpital Armand
                            <br></br>Trousseau</span>
                            <p>est un centre de référence souvent labellisé
                            <br></br>au titre des maladies rares.  Outre les maladies neurologiques et les handicaps,
                            <br></br>la prise en charge des enfants victimes de mauvais traitements
                            <br></br>est aussi une orientation à laquelle il attache beaucoup d’importance.
                            </p>
                        </div>

                    </div>

                </div>

                <MidDark _title={"Galerie"}/>
                <Galeria/>
            </section>
        );
    }
}

export default Latest;