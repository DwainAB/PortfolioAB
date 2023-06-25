import React from "react";
import "./ContentSkills.css"

function ContentSkills(){

    

    return(
        <div className="container-skills">
            <div className="circle-main">
                <div className="circle"><img className="circle-img" src="https://logos-marques.com/wp-content/uploads/2021/03/JavaScript-Logo.png" alt="" /></div>
                <div className="circle1"><img className="circle-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="" /></div>
                <div className="circle2"><img className="circle-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" /></div>
                <div className="circle3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="" className="circle-img-css" /></div>
                <div className="circle4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="" className="circle-img-figma" /></div>
                <div className="circle5"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="" className="circle-img-vs" /></div>
                <div className="circle6"><img src="https://seeklogo.com/images/G/github-octocat-logo-66D20700F0-seeklogo.com.png" alt="" className="circle-img-git" /></div>
                <div className="circle7"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" className="circle-img-react" /></div>
            </div>

            <div className="skills-container-text">

                <h1 className="title-skills">Mes compétences</h1>
                <p className="text-skills">Durant mon apprentissage j'ai pu acquérir plusieurs compétences côté serveur et côté client. <br />J'ai aussi beaucoup utilisé Figma
                pour faire des maquettes de site. <br />
                J'aime beaucoup me surpasser pour acquérir d'autres compétences. </p>
            </div>
        </div>
    )
}

export default ContentSkills