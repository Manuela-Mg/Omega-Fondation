import * as React from "react";
import './Pellicule.scss';
import { Carousel } from 'react-carousel-minimal';
import imge1 from '../../imagesTemp/orph/IMG_5122.png';
import imge2 from '../../imagesTemp/orph/IMG_5135.png';
import imge3 from '../../imagesTemp/orph/IMG_5154.png';
import imge4 from '../../imagesTemp/orph/IMG_5164.png';
import imge5 from '../../imagesTemp/orph/IMG_5482.png';
import imge6 from '../../imagesTemp/orph/IMG_5485.png';
import imge7 from '../../imagesTemp/orph/IMG_5486.png';
import img1 from '../../imagesTemp/orph/IMG_5491.png';
import img2 from '../../imagesTemp/orph/IMG_5499.png';
import img3 from '../../imagesTemp/orph/IMG_5522.png';
import img4 from '../../imagesTemp/orph/IMG_9724.png';
import img5 from '../../imagesTemp/orph/IMG_9727.png';
import img6 from '../../imagesTemp/orph/IMG_9728.png';
import img7 from '../../imagesTemp/orph/IMG_9729.png';


const Pellicule = () => {
  const data = [
    {
      image: img7,
    },
    {
      image: imge1,
    },
    {
      image: img2,
    },
    {
      image: imge3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img7,
    },
    {
      image: img1,
    },
    {
      image: img3,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: imge7,
    },
    {
      image: img1,
    },
    {
      image: imge2,
    },
    {
      image: img3,
    },
    {
      image: imge4,
    },
    {
      image: imge5,
    },
    {
      image: imge6,
    },
    {
      image: img7,
    },
    {
      image: imge7,
    },


  ];

    return (
        <>
        <div className="pell-box">
          <div className="deco-box">
          <p>O M E G A</p>
          <p>E G A</p>
          <p>M E G</p>
          <p> G A</p>
          <p> M E</p>
          <p>E G A</p>
          <p>O M E</p>
          <p>M E G A</p>
          </div>
          <div className="rec-box" style={{ textAlign: "center" }}>
            <h2 className="h-text">Voyage Humanitaire au Congo Brazzaville</h2>
            
            <div style={{
              padding: "0 30px"
            }}>
              <Carousel
                class="carousel-control"
                data={data}
                time={2000}
                width="850px"
                height="500px"
                radius="30px"
                slideNumber={false}
                // slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={false}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "700px",
                  margin: "40px auto",
                  fit: "center"
                }}
              />
            </div>
            <div className="text-pell">
                <div className="textp-ctr">
                <h3>Orphelinat  <span style={
                  {
                    marginLeft : "8px",
                  }
                }>Notre Dame de la Divine </span></h3>
                <p>
                Oméga Fondation était en voyage humanitaire au Congo Brazzaville !

                <br /><br />Grande première pour notre fondation, nous avons eu l’occasion Penelove, Djeferson et moi-même, Dylan, de nous rendre à Brazzaville, pour des œuvres de bienfaisance.
                Nous avons rendu visite à l’orphelinat « Notre Dame de la Divine » situé à Brazzaville, dans le quartier de Asecna, dirigé par maman Augustine.
                Elle s’occupe, avec l’aide de 5 autres encadrants, d’une trentaine d’enfants âgés de 0 à 15 ans.

                <br /><br />Au delà des dons matériels et alimentaires <span>(Ventilateur, huile, riz, sardine, couche pour enfants, ballons de foot etc..) </span>qui ont pu être fait, c’est le don de l’amour que nous avons voulu leurs transmettre, leurs faire ressentir qu’ils ne sont pas oubliés, que chacune de leurs vies est importantes, car elles le sont.
                Ces temps d’échanges, de jeux et de rigolades ont été fréquent lors de nos visites que vous pourrez retrouver sous forme de vlog qui sort le vendredi 12 Mai 2023 sur notre Instagram <span>@OmegaFondation.</span>

                <br /><br />Nous rendons d’excellente actions de grâce à Dieu
                </p>

              </div>
              
            </div>

          </div>
        </div>
        </>
    
    );
}



export default Pellicule;