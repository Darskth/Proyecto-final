import React, { Component } from "react"

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""

        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)

    }
    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })

    }

    render() {
        return (

            
            <div className="ed-grid">
                <h1><center> Bienvenido, inicia tu Resgistro y prueba nuestro nuevo servicio QR </center></h1>	
                <h1>REGISTRO</h1>

                <form>

                    <div className="form_item">
                        <label>Apellidos Completos</label>
                        <input type="text"
                        />
                    </div>

                    <div className="form_item">
                        <label>Nombres Completos</label>
                        <input type="text"
                            onChange={this.cambiarNombre}/>
                    </div>

                    <div className="form_item">
                        <label>Telefono:</label>
                        <input type="text"
                         />
                    </div>

                    <div className="form_item">
                        <label>Dirección:</label>
                        <input type="text"
                         />
                    </div>

                    <div className="form_item">
                        <label>Email:</label>
                        <input type="email"
                            onChange={this.cambiarCorreo}/>
                    </div>

                    <div className="form_item">
                       {/* <input className="button full" type="submit" value="Enviar" />*/}
                        <center><a href="http://localhost:3000/NuevoQr" className="button">Enviar</a> </center>
                    </div>
                </form>

                <div>
                    <h2>{`Hola.. ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>

                


            </div>


        )
    }

}

export default Formulario;

