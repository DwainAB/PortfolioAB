import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter"
import "./ContentHome.css"
import CV from "../../Assets/Files/CV1506.pdf"
import ImgHome from '../../Assets/Pictures/2.png'

function ContentHome(){
    const [text] = useTypewriter({
        words : ['HTML/CSS !','Javascript !', 'React !', 'PHP !'],
        loop: {},
    })
    return(
        <div className="content-home">
            <div>
                <p className="home-goal">Seul objectif, être le meilleur !</p>
                <h1 className="home-title">Développeur <span className="title-home-color">{text}</span><Cursor/></h1>
                <p className="home-citation">Le web est comme un livre ouvert dont chaque page est une expérience à vivre. <br /> "Laurent Denis"</p>
                <button className="download-button">
                    <a className="cv-home" href={CV} download>
                        <div className="docs"><svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> CV</div>
                        <div className="download">
                            <svg className="home-svg css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                        </div>
                    </a>
                </button>
            </div>

            <div className="home-right">
                <img className="img-home" src={ImgHome} alt="" />
            </div>
        </div>
    )
}

export default ContentHome