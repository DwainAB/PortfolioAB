import React from "react";
import "./ContentContact.css"

function ContentContact(){
    return(
        <div className="container-contact">
            <div className="container-contact-left">
                <div class="card">
                    <div class="card2">
                        <form class="form">
                            <p id="heading">Contact</p>
                            <div class="input-container field">
                                <p class="bash-text">
                                    <span class="user">user</span><span class="vm">@name</span>:<span class="char">~</span>$
                                </p>
                                <input class="input" placeholder="git config --global user.name" type="text"/>
                            </div>
                            <div class="input-container field">
                                <p class="bash-text">
                                    <span class="user">user</span><span class="vm">@mail</span>:<span class="char">~</span>$
                                </p>
                                <input class="input" placeholder="git config --global user.email" type="email"/>
                            </div>
                            <div class="input-container field">
                                <p class="bash-text">
                                    <span class="user">user</span><span class="vm">@objet</span>:<span class="char">~</span>$
                                </p>
                                <input class="input" placeholder="git add 'Objet'" type="text"/>
                            </div>
                            <div class="input-container field">
                                <p class="bash-text input-message test">
                                    <span class="user">user</span><span class="vm">@message</span>:<span class="char">~</span>$
                                </p>
                                <input class="input input-message" placeholder="Git commit -m 'message'" type="text"/>
                            </div>
                            <button class="button3">Git push</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-contact-right">

                <h1 className="title-contact">Contact</h1>
                <p className="text-contact">En tant qu'étudiant actuellement à la recherche d'une alternance, je vous laisse la possibilité de me contacter pour toute demande d'information. Je serai ravi de répondre à vos questions et de discuter de toute opportunité d'alternance qui pourrait correspondre à mes aspirations professionnelles</p>
            </div>
        </div>
    )
}

export default ContentContact