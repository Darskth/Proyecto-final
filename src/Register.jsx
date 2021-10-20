import React from "react";
import Curso from './Curso'



const cursos = [
    {
        "nombre": "Remo",
        "imagen": "https://orangetheoryfitnessmexico.com/es-mx/wp-content/uploads/2020/11/row-1.jpg",
        "price": "1500mx",
        "Instructor": "Godinez Ivan"
    },

    {
        "nombre": "Cardio",
        "imagen": "https://orangetheoryfitnessmexico.com/es-mx/wp-content/uploads/2021/10/aus_workout_c002_desktop_trx-edited-e1633706190461-768x662.jpg",
        "price": "1000mx",
        "Instructor": "Esquivel Raul"
    },

    {
        "nombre": "Entrenamiento de Fuerza",
        "imagen": "https://orangetheoryfitnessmexico.com/es-mx/wp-content/uploads/2020/11/run.jpg",
        "price": "1000mx",
        "Instructor": "Jair Omar"
    },

    {
        "nombre": "Rutinas",
        "imagen": "https://paselibre.net/medios/2019/11/STEP-680x455.jpg",
        "price": "800mx",
        "Instructor": "Estrada Carlos"
    },


    {
        "nombre": "Fitness",
        "imagen": "https://paselibre.net/medios/2019/11/PORTADA-Size-for-Web.jpg",
        "price": "900mx",
        "Instructor": "Gharfuhs Edgar"
    },

    {
        "nombre": "Yoga",
        "imagen": "https://prd-cdn-emea1-joltx.pgsitecore.com/-/media/growing-families-version1/gf-es/article/inline-legacy-images/ejercicios-casa6.ashx?rev=5214a6c847944653be6c6346265fd7c4g",
        "price": "1750mx",
        "Instructor": "Ismael Oscar"
    }
]


const Register = () => (
<>
    <div className="ed-grid m-grid-3">
        {
           cursos.map(c=><Curso
            nombre={c.nombre}
            imagen={c.imagen}
            price={c.price}
            Instructor={c.Instructor} />)
        }
    </div>
</>


)


export default Register;