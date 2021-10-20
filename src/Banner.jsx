import React from "react";
import Formulario from './Formulario'


const Banner = () => (

    

<div>
    <div className="main-banner img-container" id="main-banner">
        <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portadagimnasio-1534612720.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" alt="" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">GLOFOX</p>
                    <p>~¿CUANTO VALE TU SALUD?~</p>
                    <a href= "http://localhost:3000/Formulario" className="button">Inicia tu registro</a>
                    <a href="https://www.smartfit.com.mx/gimnasios?uf=CDMX" className="button">Más Información</a>
                </div>
            </div>
        </div>
    </div>

    <h1><center>  <p>MORE LIFE</p>
      Prueba nuestro nuevo entrenamiento grupal inspirado por un coach, 
      respaldado por la ciencia y diseñado para 
      producir resultados de adentro hacia afuera. </center></h1>

      <center> 
      <img src="http://realestatemarket.com.mx/images/2021/05-mayo/2805/Centros-comerciales-y-gimnasios-aumentan-aforo-en-CDMX.jpg"  s_center alt="" />
      </center>

    </div>



)


export default Banner;