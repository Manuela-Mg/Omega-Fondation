import React from "react";
import './Articles.scss';

const Articles = () => {
    document.title = "Articles - Omega";

    return (
        <>
            <div className="articles-box">
                <div className="top-box">
                    <h1>Articles</h1>
                    <p>Découvrez toutes nos activités, missions et visites.</p>
                </div>

                <div className="blog-box">

                    <div className="box-ctr">
                        <div className="boxes-box">
                            <div className="inline-box">
                                <div className="orph-box">

                                </div>
                                <span>✦</span>
                            </div>
                            
                            <div className="appear-box">

                            </div>
                        </div>
                        

                        <div className="open-butt">
                            <h3>Voyage Humanitaire</h3>
                            <h3>au Congo Brazzaville</h3>

                            <p className="inner-text">
                            Grande première pour notre fondation,
                            nous avons eu l'occasion de nous rendre
                            à Brazzaville pour des oeuvres...
                            </p>
                            <a href="/Pellicule-Orphelinat" className="see">
                                <p>EXPLOREZ <span>→</span></p>
                            </a>
                            
                        </div>
                        
                    </div>
                    
                    <div className="box-ctr">
                        <div className="boxes-box">
                            <div className="inline-box">
                                <div className="hosto-box">

                                </div>
                                <span>✦</span>
                            </div>

                            <div className="appear-box2">
                                
                            </div>
                        </div>
                        

                        <div className="open-butt">
                            <h3>Visite de l'hôpital Armand</h3>
                            <h3>Trousseau - Distribution</h3>
                            <h3>de Cadeaux</h3>

                            <p className="inner-text">
                            L'hôpital Armand Trousseau,
                            est un centre de référence souvent labellisé
                            au titre des maladies rares. Nous avons eu l'opportunité
                            d'y faire une distribution de jeux, etc...
                            </p>
                            <a href="/Pellicule-Hopital" className="see">
                                <p>EXPLOREZ <span>→</span></p>
                            </a>

                        </div>

                    </div>
                    
                </div>
            </div> 
        </>
    );
}

export default Articles;