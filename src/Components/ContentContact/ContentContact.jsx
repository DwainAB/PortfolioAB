import React from "react";
import "./ContentContact.css"

function ContentContact(){
    return(
        <div className="container-contact">
            <div className="container-contact-left">
                <div className="card">
                    <div className="card2">
                        <form className="form">
                            <p id="heading">Contact</p>
                            <div className="input-container field">
                                <p className="bash-text">
                                    <span className="user">user</span><span className="vm">@name</span>:<span className="char">~</span>$
                                </p>
                                <input className="input" placeholder="git config --global user.name" type="text"/>
                            </div>
                            <div className="input-container field">
                                <p className="bash-text">
                                    <span className="user">user</span><span className="vm">@mail</span>:<span className="char">~</span>$
                                </p>
                                <input className="input" placeholder="git config --global user.email" type="email"/>
                            </div>
                            <div className="input-container field">
                                <p className="bash-text">
                                    <span className="user">user</span><span className="vm">@objet</span>:<span className="char">~</span>$
                                </p>
                                <input className="input" placeholder="git add 'Objet'" type="text"/>
                            </div>
                            <div className="input-container field">
                                <p className="bash-text input-message test">
                                    <span className="user">user</span><span className="vm">@message</span>:<span className="char">~</span>$
                                </p>
                                <input className="input input-message" placeholder="git commit -m 'message'" type="text"/>
                            </div>
                            <button className="button3">Git push</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-contact-right">

                <h1 className="title-contact">Contact</h1>
                <p className="text-contact">En tant qu'étudiant actuellement à la recherche d'une alternance, je vous laisse la possibilité de me contacter pour toute demande d'information. Je serai ravi de répondre à vos questions et de discuter de toute opportunité d'alternance qui pourrait correspondre à mes aspirations professionnelles.</p>
            </div>
        </div>
    )
}

export default ContentContact