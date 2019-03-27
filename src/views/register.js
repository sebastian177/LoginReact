import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registrar extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        this.Link("/login.js");
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Ingresa tu nombre" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Contraseña</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Ingresa tu contraseña" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Ingresa tu email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> Estoy de acuerdo con las condiciones <a href="/" className="FormField__TermsLink">Terminos de servicio</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Registrar</button> <Link to="/sign-in" className="FormField__Link">Ya estoy registrado</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default Registrar;
