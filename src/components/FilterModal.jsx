import React from "react";

import './FilterModal.css';

function PriceInput() {
    return (
        <div className="input-text">
            <label htmlFor="price_filter_min">
                <div className="label">preço mínimo</div>
                <div className="price-unit">R$</div>
                <div className="price-input">
                    <input type="text" autoComplete="off" />
                </div>
            </label>
        </div>
    )
}

function FilterModal() {
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
                        <h2>Faixa de preço</h2>
                        <h3>O preço médio por noite é [R$ 242]</h3>
                        <PriceInput />-<PriceInput />
                        <h2>Tipo de lugar</h2>
                        <h2>Quartos e camas</h2>
                        <h2>Tipos de propriedade</h2>
                        <h2>Comodidades</h2>
                        <h2>Opção de reserva</h2>
                        <h2>Recursos de acessibilidade</h2>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Remover filtros</button>
                        <button type="button" className="btn btn-primary">Filtrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterModal;