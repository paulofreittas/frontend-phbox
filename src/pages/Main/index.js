import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import './styles.css';

export default class Main extends Component {
    state = {
        newBox: ''
    };

    handleSubmit = async e => {
        e.preventDefault();

        if (!this.state.newBox || this.state.newBox.trim().length === 0) return;

        const response = await api.post('boxes', {
            title: this.state.newBox
        });

        this.props.history.push(`/box/${response.data._id}`);
    };

    handleInputChange = e => {
        this.setState({ newBox: e.target.value });
    };

    render() {
        return (
            <div id='main-container'>
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt='Logo' />
                    <input
                        placeholder='Acessar um box'
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>Acessar</button>
                </form>
            </div>
        );
    }
}
