import React from "react";
import PropTypes from 'prop-types'
import Register from './Register'


//const persona = {"nombre": "Carlos", "Apellido": "Bautista"}
//const curso = {"nombre": "React desde cero ", "imagen": "https://cdn-3.expansion.mx/dims4/default/5976b2e/2147483647/strip/true/crop/3864x2576+0+0/resize/1800x1200!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F55%2F73%2F6b4cecec48b88cabb07e8c4c1c3e%2Fistock-1132006407.jpg", "price": "$1200mxn"}

const Curso = ({nombre, imagen, price, Instructor}) => (
//const Curso =  props => (
    <>
  
        <article class="card">
            <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={imagen} alt="" />
            </div>
            <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 class="t5 s-mb-2 s-center">
                    {nombre}
                </h3>
                <div class="s-mb-2 s-main-center">
                    <div class="card__teacher s-cross-center">
                        <div class="card__avatar s-mr-1">
                            <div class="circle img-container">
                                <img src="https://e7.pngegg.com/pngimages/546/555/png-clipart-personal-trainer-physical-fitness-fitness-centre-fitness-professional-exercise-others-physical-fitness-logo.png" alt="" />
                            </div>
                        </div>
                        <span class="small">{Instructor}</span>
                       
                    </div>
                    <>
                 
                    </>
                </div>
                <div class="s-main-center">
                    <a class="button--ghost-alert button--tiny" href="#">{price}</a>
                </div>
            </div>
        </article>





    </>




)

Curso.prototype ={
    nombre : PropTypes.string,
    imagen: PropTypes.string,
    Price: PropTypes.string,
    Instructor: PropTypes.string
}

Curso.defaultProps ={
    nombre : "No hay curso disponible",
    imagen: "https://www.elektroinstrumentos.com/wp-content/uploads/2020/05/imagen-no-disponible.png",
    Price: "- - -",
    Instructor:"No hay Instructor disponible"

}


export default Curso;