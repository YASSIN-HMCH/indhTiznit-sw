import React from 'react'
import './Progr1.css';
import inter from "../../photos/intervention.png"
import p1 from "../../photos/6-Programmes-1.jpg"

const programme1 = () => {
  return (
    <>
    <section class="container my-5">
  <div class="row align-items-center text-center text-md-start mb-4">
    <div class="col-md-8">
      <h1 class="fw-bold text-success">
         <span className='text-danger'>Programme 1 :</span> Rattrapage des Déficits en Infrastructures et Services Sociaux de Base
      </h1>
    </div>
    <div class="col-md-4 text-center mt-3 mt-md-0">
      <img src={p1} alt="Programme 1" class="img-fluid rounded" style={{ maxWidth: "100%", height: "auto" }} />
    </div>
  </div>

  
  <div class="card shadow-sm mb-4 border-0">
    <div class="card-body">
      <h3 class="text-success fw-bold">I. Contexte</h3>
      <p>
        En dépit des efforts déployés par les pouvoirs publics pour la lutte contre la pauvreté notamment
        en matière de réduction des disparités territoriales et sociales et de soutien à l’accès aux
        infrastructures et services sociaux de base, certains territoires défavorisés connaissent toujours
        des déficits.
      </p>
      <p>
        Pour remédier à cette situation, le programme de rattrapage des déficits en infrastructures et
        services de base dans les territoires sous-équipés s’est fixé comme objectifs :
      </p>
      <ul>
        <li>Améliorer les conditions de vie des populations vulnérables dans les douars défavorisés en matière de désenclavement, d’eau potable, d’électrification, de santé et d’éducation.</li>
        <li>Assurer un développement territorial intégré et garantir la convergence avec les autres programmes de développement.</li>
      </ul>
    </div>
  </div>

  <div class="card shadow-sm mb-4 border-0">
    <div class="card-body">
      <h3 class="text-success fw-bold">II. Interventions de l’INDH au titre de la 3ème Phase</h3>
      <p>
        Le programme de rattrapage des déficits en infrastructures et services de base dans les 
        territoires défavorisés cible les douars défavorisés et les centres ruraux sous équipés, à 
        travers deux axes principaux : 
      </p>
      <h5 class="fw-bold mt-3 text-danger">Axe 1 :</h5>
      <p>
        Soutien aux douars défavorisés dans le cadre de la mise en œuvre de la 
        composante INDH du programme de réduction des disparités territoriales et 
        sociales en milieu rural (PRDST). Il concerne cinq secteurs prioritaires : le 
        désenclavement, la santé, l’éducation, l’eau et l’électrification rurale. 
      </p>
      <h5 class="fw-bold mt-3 text-danger">Axe 2 :</h5>
      <p>
         Soutien à l’accès aux infrastructures, et services sociaux de base dans les 
        quartiers et centres ruraux sous-équipés en accompagnant les autres programmes 
        INDH par des micro-projets hors site tels que la réalisation d’une route de 
        connexion ou une passerelle pour faciliter l’accès aux unités d'enseignement 
        préscolaire.
      </p>
    </div>
  </div>

  <div class="card shadow-sm mb-4 border-0">
    <div class="card-body">
      <h3 class="text-success fw-bold">III. Modalités de Mise en Œuvre</h3>

      <h5 class="fw-bold text-danger">Axe 1 : <span className='text-dark'> Soutien aux douars défavorisés en vertu du programme de réduction des 
        disparités territoriales et sociales en milieu rural (volet INDH) : </span> </h5>
      <p>
        L’effort entamé dans le cadre du programme PRDST au titre de la période 2017-2018 
        doit être consolidé et poursuivi, afin d’honorer l’engagement de l’INDH au titre de la 
        période 2019-2023.    
      </p>
      <p>De même, les projets inscrits dans les plans régionaux de Réduction des Disparités 
        Territoriales et Sociales, doivent être préparés selon une approche de convergence, de 
        complémentarité et d’intégration. </p>
     <p>Les projets validés doivent faire l’objet des études techniques nécessaires et doivent être 
        saisis au niveau du système d’information (SI), pour procéder à la délégation des crédits 
        y afférents. </p>   


      <h5 class="fw-bold text-danger">Axe 2 : <span className='text-dark'> Soutien à l’accès aux infrastructures, aux équipements et aux services 
sociaux de base dans les quartiers et centres ruraux sous-équipés : </span> </h5>
      <p>
       Cet axe vient en complément au premier axe ainsi que les autres programmes de la 3ème 
       phase de l’INDH. <br />
       Les projets éligibles doivent émaner des diagnostics participatifs et portent sur des 
       actions d’accompagnement, qui permettent l’amélioration de l’accessibilité et les 
       conditions d’impact et de pérennisation des structures réalisées dans les autres 
       programmes. 
      </p>
    </div>
  </div>

  
  <div class="card shadow-sm mb-4 border-0">
    <div class="card-body">
      <h3 class="text-success fw-bold">1. Financement</h3>
      <p>
        Le programme est doté d’un budget total de <strong>4 MMDH</strong> répartis comme suit :
      </p>
      <ul>
        <li><strong>Axe 1 :</strong> 3 MMDH</li>
        <li><strong>Axe 2 :</strong> 1 MMDH, est consacrée au financement de cet axe au titre de la période 
            2020-2023.</li>
      </ul>
    </div>
  </div>


   <div className="card shadow-sm mb-5 border-0">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7 col-12">
            <h3 className="text-success fw-bold">
              2. Indicateurs de Résultats et de Performance
            </h3>

            <h5 className="fw-bold text-danger mt-3">Infrastructures de base</h5>
            <ul>
              <li>
                <strong>Eau potable :</strong> Pourcentage des ménages ayant accès à
                une source d’eau potable et raccordés au réseau.
              </li>
              <li>
                <strong>Électricité :</strong> Pourcentage des ménages raccordés au
                réseau électrique.
              </li>
              <li>
                <strong>Réseau routier :</strong> Pourcentage des ménages ayant accès
                à une route à moins de 1 km.
              </li>
            </ul>

            <h5 className="fw-bold text-danger mt-3">Services sociaux de base</h5>
            <ul>
              <li>
                <strong>Santé :</strong> Pourcentage de la population bénéficiaire.
              </li>
              <li>
                <strong>Éducation :</strong> Pourcentage de la population bénéficiaire.
              </li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-5 col-12 text-center mt-4 mt-md-0">
            <img
              src={inter}
              alt="Indicateurs de performance"
              className="img-fluid rounded shadow-sm bg-light"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  
</section>
    </>
  )
}

export default programme1