import React from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends React.Component {
    state = { 
        email: '',
        message: '',
     }

    handleChange = e => {
        if (e.target.type === 'email') {
                this.setState({
                    email: e.target.value,
                })
            } else if (e.target.type === 'textarea') {
                this.setState({
                    message: e.target.value,
                })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            message: '',
        })
    }

    render() { 
        return ( 
            <>
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="email" className="form__email" placeholder="Adres e-mail" value={this.state.email} onChange={this.handleChange}/>
                <textarea className="form__text-area" placeholder="Wpisz wiadomość" value={this.state.message} onChange={this.handleChange}></textarea>
                <button className="form__button">Wyślij</button>
            </form>
            <Prompt 
            when={this.state.email || this.state.message}
            message="Zacząłeś wypełniać formularz. Czy na pwno chcesz przejść do innej podstrony?"
            />
            </>
         );
    }
}
 
export default ContactPage;