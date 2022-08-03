import React, { useState } from "react";
import styled from "styled-components";

import './FilterModal.css';

const ModalSection = styled.div`
    padding: 10px;

    border-bottom-width: 1px !important;
    border-bottom-style: solid !important;
    border-bottom-color: rgb(235, 235, 235) !important;
`;

function PriceInput(props) {
    return (
        <div className="input-text">
            <label htmlFor="price_filter_min">
                <div className="label">preço mínimo</div>
                <div className="price-unit">R$</div>
                <div className="price-input">
                    <input type="text" autoComplete="off"
                        value={props.value}
                        name={"price_"+props.name}
                        onChange={props.update}
                    />
                </div>
            </label>
        </div>
    )
}

const defaultFilters = {
    price_min: '',
    price_max: '',
    entire_space: 'true',
}

class FilterModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = defaultFilters;
    }
    
    reset() {
        this.setState(defaultFilters, () => {this.props.onSubmit(this.state)})
    }

    update = (e) => {
        console.log('update')
        const {name, value} = e.target;
        
        const newState = {
            ...this.state,
            [name]: value,
        };
        this.setState(newState, console.log(this.state));
    }

    Input = (props) => {
        return <input
            type={props.type}
            name={props.name}
            value={this.state[props.name]}
            onChange={this.update}
        />
    }

    render() {
        return (
            <div className="modal fade" id="filter-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filtros</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ModalSection>
                                <h2>Faixa de preço</h2>
                                <h3>O preço médio por noite é [R$ 242]</h3>
                                <PriceInput name='min' value={this.state.price_min} update={this.update} />-
                                <PriceInput name='max' value={this.state.price_max} update={this.update} />
                            </ModalSection>
                            <h2>Tipo de lugar</h2>
                            <this.Input
                                type="checkbox"
                                name="entire_space"
                            />Espaço inteiro
                            <input type="checkbox" />Quarto compartilhado
                            <input type="checkbox" />Quarto inteiro
                            <h2>Quartos e camas</h2>
                            <h3>Quartos</h3>
                            <h3>Camas</h3>
                            <h3>Banheiros</h3>
                            <h2>Tipos de propriedade</h2>
                            <button>casa</button>
                            <button>Apartamento</button>
                            <button>Casa de hóspedes</button>
                            <button>Hotel</button>
                            <h2>Comodidades</h2>
                            <input type="checkbox" name="" id="" />Wi-Fi
                            <input type="checkbox" name="" id="" />Máquina de Lavar
                            <input type="checkbox" name="" id="" />Ferro de passar
                            <input type="checkbox" name="" id="" />Cozinha
                            <input type="checkbox" name="" id="" />Ar-condicionado
                            <h2>Opção de reserva</h2>
                            <input type="checkbox" name="" id="" />Reserva instantânea
                            <input type="checkbox" name="" id="" />Self check-in
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {this.reset()}}>Remover filtros</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                                this.props.onSubmit(this.state);
                            }}>
                                Filtrar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterModal;