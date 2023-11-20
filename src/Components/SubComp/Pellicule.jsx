import * as React from "react";
import './Pellicule.scss';
import { Carousel } from 'react-carousel-minimal';
import imge1 from '../../imagesTemp/choose/2X4A9781.jpg';
import imge2 from '../../imagesTemp/choose/2X4A9784.jpg';
import imge3 from '../../imagesTemp/choose/2X4A9785.jpg';
import imge4 from '../../imagesTemp/choose/2X4A9787.jpg';
import imge5 from '../../imagesTemp/choose/2X4A9788.jpg';
import imge6 from '../../imagesTemp/choose/2X4A9829.jpg';
import imge7 from '../../imagesTemp/choose/2X4A9841.jpg';
import img1 from '../../imagesTemp/choose/2X4A9844-2.jpg';
import img2 from '../../imagesTemp/choose/2X4A9844.jpg';
import img3 from '../../imagesTemp/choose/2X4A9848.jpg';
import img4 from '../../imagesTemp/choose/2X4A9849.jpg';
import img5 from '../../imagesTemp/choose/2X4A9850.jpg';
import img6 from '../../imagesTemp/choose/2X4A9860.jpg';
import img7 from '../../imagesTemp/choose/2X4A9863.jpg';
import img8 from '../../imagesTemp/choose/2X4A9864.jpg';
import img9 from '../../imagesTemp/choose/2X4A9875.jpg';
import img10 from '../../imagesTemp/choose/2X4A9876.jpg';
import img11 from '../../imagesTemp/choose/2X4A9878.jpg';
import img12 from '../../imagesTemp/choose/2X4A9881.jpg';
import img13 from '../../imagesTemp/choose/2X4A9782.jpg';
import img14 from '../../imagesTemp/choose/2X4A9883.jpg';
import img15 from '../../imagesTemp/choose/2X4A9885.jpg';
import img16 from '../../imagesTemp/choose/2X4A9886.jpg';
import img17 from '../../imagesTemp/choose/2X4A9893.jpg';
import img18 from '../../imagesTemp/choose/2X4A9897.jpg';
import img19 from '../../imagesTemp/choose/2X4A9899.jpg';
import img20 from '../../imagesTemp/choose/2X4A9900.jpg';
import img21 from '../../imagesTemp/choose/2X4A9903.jpg';
import img22 from '../../imagesTemp/choose/2X4A9904.jpg';
import img23 from '../../imagesTemp/choose/2X4A9910.jpg';
import img24 from '../../imagesTemp/choose/2X4A9911.jpg';
import img25 from '../../imagesTemp/choose/2X4A9915.jpg';
import img26 from '../../imagesTemp/choose/2X4A9917.jpg';
import img27 from '../../imagesTemp/choose/2X4A9922.jpg';
import img28 from '../../imagesTemp/choose/2X4A9924.jpg';
import img29 from '../../imagesTemp/choose/2X4A9927.jpg';
import img30 from '../../imagesTemp/choose/2X4A9928.jpg';
import img31 from '../../imagesTemp/choose/2X4A9930.jpg';
import img32 from '../../imagesTemp/choose/2X4A9938.jpg';
import img33 from '../../imagesTemp/choose/2X4A9943.jpg';
import img34 from '../../imagesTemp/choose/2X4A9945.jpg';
import img35 from '../../imagesTemp/choose/2X4A9957.jpg';
import img36 from '../../imagesTemp/choose/2X4A9958.jpg';
import img37 from '../../imagesTemp/choose/2X4A9959.jpg';
import img38 from '../../imagesTemp/choose/2X4A9964.jpg';
import img39 from '../../imagesTemp/choose/2X4A9966.jpg';
import img40 from '../../imagesTemp/choose/2X4A9970.jpg';



const Pellicule = () => {
  const data = [
    {
      image: img12,
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
      image: img13,
    },
    {
      image: img8,
    },
    {
      image: img11,
    },
    {
      image: img9,
    },
    {
      image: img10,
    },
    {
      image: img14,
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
      image: img15,
    },
    {
      image: img16,
    },
    {
      image: img17,
    },
    {
      image: img18,
    },
    {
      image: img19,
    },
    {
      image: img20,
    },
    {
      image: img21,
    },
    {
      image: img22,
    },
    {
      image: img23,
    },
    {
      image: img24,
    },
    {
      image: img25,
    },
    {
      image: img26,
    },
    {
      image: img27,
    },
    {
      image: img28,
    },
    {
      image: img29,
    },
    {
      image: img30,
    },
    {
      image: img31,
    },
    {
      image: img32,
    },
    {
      image: img33,
    },
    {
      image: img34,
    },
    {
      image: img35,
    },
    {
      image: img36,
    },
    {
      image: img37,
    },
    {
      image: img38,
    },
    {
      image: img39,
    },
    {
      image: img40,
    },

  ];
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }

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
            <h2 className="h-text">VISITE et DISTRIBUTION DE CADEAUX</h2>
            
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
                <h3>Hôpital <span style={
                  {
                    marginLeft : "8px",
                  }
                }
                > Armand Trousseau</span></h3>
                <p>Centre de référence, il est souvent labellisé
                au titre des maladies rares.  
                <br></br>Outre les maladies neurologiques et les handicaps,la prise en charge des enfants victimes de mauvais traitements
                est aussi une orientation à laquelle il attache beaucoup d’importance.

                <br /><br />Dans un élan de compassion, l'équipe a organisé une distribution spéciale de cadeaux et de jouets pour apporter de <span>la joie</span> aux patients, en particulier aux enfants qui font face à des défis de santé.

                <br /><br />Chaque sourire suscité par les cadeaux offerts est une étincelle d'espoir dans le cœur de ces petites âmes courageuses. Cet acte de gentillesse va bien au-delà de la simple distribution matérielle ; il représente <span>l'amour incommensurable de Dieu</span> manifesté à travers les actions de ceux qui choisissent de servir et d'apporter du réconfort.

                <br /><br />Ces moments partagés à l'hôpital ne sont pas seulement des distributions de biens tangibles, mais des occasions d'exprimer un amour qui transcende les circonstances. <span>L'amour de Dieu</span> se manifeste dans chaque cadeau offert, chaque sourire échangé et chaque moment de réconfort partagé.
                </p>
                </div>
            </div>

          </div>
        </div>
        </>
    
    );
}



export default Pellicule;