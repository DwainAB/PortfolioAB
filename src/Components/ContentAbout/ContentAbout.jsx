import React from "react";
import "./ContentAbout.css"
import AboutImg from "../../Assets/Pictures/aboutimg.png"

function ContentAbout(){
    return(
        <div className="container-about">
            <div className="about-left">
                <div class="card-about">
                    <div class="tools-about">
                        <div class="circle-about">
                        <span class="red box"></span>
                        </div>
                        <div class="circle-about">
                        <span class="yellow box"></span>
                        </div>
                        <div class="circle-about">
                        <span class="green box"></span>
                        </div>
                    </div>
                    <div class="card__content-about">
                        <p className="text-me-about">Du collège au lycée je n'étais pas très attiré par l'école, j'avais souvent de mauvaises notes, non pas parce que je n'y arrivais pas mais plûtot parce que je ne voulais pas travailler. Ma vie se résumait au jeux vidéos et à l'informatique.  A la fin du lycée je commençais sincèrement à me poser des questions sur mon avenir et ce que je voulais faire. J'ai tout d'abord commencer par m'intérésser aux ecoles d'audio visuel mais le prix était exorbitant, à l'époque je ne connaissais pas encore le développement web. Ce n'est qu'après plusieurs mois et d'inombrables vidéos à ce sujet que je commence à m'y intérésser. Depuis petit je m'intéraissais à l'informatique il me semblait donc logique que c'était la voie vers laquelle me tourner. Cependant, je pensais que les études pour être développeur web n'étaient que pour les personnes ayant de très bonnes notes à l'école, je voyais un avenir de développeur web s'envoler suite à des erreurs que j'ai pu faire dans le passé.. Malgrés tout je n'ai pas baisser les bras, j'ai commencé à apprendre le développement web en autodidacte. Pour commencer, comprendre le web et son fonctionnement, puis les base de html css, mes premières pages web  ne ressemblaient à rien. Cela peut être un préjugé mais j'ai réellement commencé avec un "Hello wold" et j'avais l'impression d'être le nouveau Mark Zuckerberg ! Je me suis vite pris d'attache au développement web au point où j'en suis tomber amoureux, pour moi c'était une évidence il fallait que j'en fasse mon métier à tout prix. Je codais tous les jours pour m'améliorer, puis un jours j'ai reçu un mail de Pole Emploi présentant la formation de développeur web chez OpenClassRooms. C'était formation où n'importe qui pouvait s'inscrire, je voyais là une grande opportunité pour atteindre mon objectif, j'ai donc décidé de m'y intérésser de plus prêt, mais la formation était payante. Je n'ai encore une fois pas baisser les bras et j'ai cherché du travail pour pouvoir me payer cette formation. J'ai alors trouvé un poste d'animateur d'école. Ce travail m'a permis d'avoir du temps pour la formation et surtout de pouvoir la payer. Une fois la formation intégrée, j'étais le plus heureux, je faisais enfin ce qui me plaisais avec un but bien précis: obtenir le diplome, et c'est chose faite. J'ai finis la formation et obtenu un diplome de niveau bac +2 néanmoins ,je sentais que je pouvais aller plus loin et décrocher encore plus de compétences afin d'atteindre l'objectif que je m'étais fixé "faire parti des meilleurs développeurs web". Lors de cette formation, j'ai entendu parler de plusieurs écoles, dont une qui correspondait à ce que je recherchais , l'école 42. J'ai donc suivi le processus d'inscription, tout d'abord des tests en ligne puis 1 mois de sélection plus connu sous le nom de "piscine". Cependant j'ai arreté en plein milieu de ce mois de sélection car un évènement est arrivé sans prévenir dans ma vie... J'ai appris que j'allais devenir père. J'ai donc dû tout arreter et trouver un travail pour pouvoir subvenir aux besoins ma fille. Je n'ai malgés tout jamais oublié cet objectif d'être développeur web et j'ai donc repris mon apprentissage en autodidacte. J'ai  commencé à travailler en CDD pour pouvoir par la suite de mon contrat avoir l'allocation chômage et reprendre là où je m'étais arreté. J'ai alors récemment terminé mon contrat et repris mes études mais cette fois ci à l'école HETIC. Je suis à HETIC depuis le début de l'année et me voila aujourd'hui à la recherche d'une alternance me permettant d'atteindre mon objectif !</p>
                    </div>
                </div>
            </div>
            <div className="about-central">
                <h1 className="title-about">Qui je suis ?</h1>
            </div>
            <div className="about-right">
                <img className="imgabout" src={AboutImg} alt="" />
            </div>
        </div>
    )
}

export default ContentAbout