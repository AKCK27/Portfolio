import React from 'react';
import './intro.scss'
import me from '../../assets/me.jpg'

const Intro = () => {
    return (
        <div className="Intro">
            {/* text */}
            <div className="intro--text">
                <p>
                "Bonjour et bienvenue sur mon portfolio! Je suis <span style={{ color: 'red', fontSize:"30px",fontWeight:"bolder"}}>Alpha</span>, 
                un développeur web passionné et dévoué. Depuis mon début en tant que développeur,
                 j'ai travaillé sur de nombreux projets passionnants et j'ai acquis de solides 
                 compétences en programmation et en résolution de problèmes. Sur ce site,
                  vous trouverez une sélection de mes travaux les plus récents et une liste de mes
                   compétences et expériences. Si vous avez des questions ou si vous souhaitez
                    travailler avec moi, n'hésitez pas à me contacter."
                </p>
                <a target="_blank" href="https://github.com/">
                <h2>About me</h2>
                </a>
                <hr/>
            </div>
            {/* Image */}
            <div className="intro--image">
                  <div className="image"><img src={me} alt={me} className="i--image"/></div>
                <div className="sub--description">
                  <div className="animation">
                  <div className="sub"><span>Creator</span></div>
                    <div className="sub"><span>Design</span></div>
                    <div className="sub"><span>Web Sites</span></div>
                    <div className="sub"><span>App Mobiles</span></div>
                    <div className="sub"><span>Business</span></div>
                </div>
                  </div>
            </div>
       
            
        </div>
    );
};

export default Intro;