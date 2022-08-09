import React from 'react';
import styled from 'styled-components';

const ModalSection = styled.div`
    padding: 10px;

    border-bottom-width: 1px !important;
    border-bottom-style: solid !important;
    border-bottom-color: rgb(235, 235, 235) !important;
`;

export const defaultFilters = {};

export class FilterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultFilters;
  }

  reset() {
    this.setState(defaultFilters, () => { this.props.onSubmit(this.state); });
  }

  update = (e) => {
    let name; let
      value;
    if (e.target.type == 'checkbox') {
      name = e.target.name;
      value = e.target.checked;
    } else {
      name = e.target.name;
      value = e.target.value;
    }

    const newState = {
      ...this.state,
      [name]: value,
    };
    this.setState(newState, console.log(this.state));
  };

  setValue = (name, value) => {
    const newState = {
      ...this.state,
      [name]: value,
    };
    this.setState(newState, console.log(this.state));
  };

  Input = (props) => (
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      value={this.state[props.name]}
      onChange={this.update}
    />
  );

  Checkbox = (props) => (
    <div className="form-check">
      <label className="form-check-label">
        <this.Input
          className={`form-check-input ${props.className}`}
          type="checkbox"
          name={props.name}
        />
        {props.text}
      </label>
    </div>
  );

  Button = (props) => {
    const state = this.state[props.name];
    return (
      <button
        className={`btn${(
          typeof state === 'undefined' ? props.default : state == props.value) ? ' btn-primary' : ' btn-secondary'}`}
        type="button"
        name={props.name}
        value={props.value}
        onClick={this.update}
      >
        {props.text ? props.text : props.value}
      </button>
    );
  };

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
                <this.Input
                  type="text"
                  name="price_min"
                />
                -
                <this.Input
                  type="text"
                  name="price_max"
                />
              </ModalSection>
              <ModalSection>
                <h2>Tipo de lugar</h2>
                <this.Checkbox name="entire_space" text="Enpaço inteiro" />
                <this.Checkbox name="shared_room" text="Quarto compartilhado" />
                <this.Checkbox name="entire_room" text="Quarto inteiro" />
              </ModalSection>
              <ModalSection>
                <h2>Quartos e camas</h2>
                <h3>Quartos</h3>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group mr-2" role="group" aria-label="First group">
                    <this.Button name="rooms" value="" text="Qualquer um" default />
                    <this.Button name="rooms" value="1" />
                    <this.Button name="rooms" value="2" />
                    <this.Button name="rooms" value="3" />
                    <this.Button name="rooms" value="4" />
                    <this.Button name="rooms" value="5" />
                    <this.Button name="rooms" value="6" />
                    <this.Button name="rooms" value="7" />
                    <this.Button name="rooms" value="8" text="8+" />
                  </div>
                </div>
                <h3>Camas</h3>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group mr-2" role="group" aria-label="First group">
                    <this.Button name="beds" value="" text="Qualquer um" default />
                    <this.Button name="beds" value="1" />
                    <this.Button name="beds" value="2" />
                    <this.Button name="beds" value="3" />
                    <this.Button name="beds" value="4" />
                    <this.Button name="beds" value="5" />
                    <this.Button name="beds" value="6" />
                    <this.Button name="beds" value="7" />
                    <this.Button name="beds" value="8" text="8+" />
                  </div>
                </div>
                <h3>Banheiros</h3>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group mr-2" role="group" aria-label="First group">
                    <this.Button name="bathrooms" value="" text="Qualquer um" default />
                    <this.Button name="bathrooms" value="1" />
                    <this.Button name="bathrooms" value="2" />
                    <this.Button name="bathrooms" value="3" />
                    <this.Button name="bathrooms" value="4" />
                    <this.Button name="bathrooms" value="5" />
                    <this.Button name="bathrooms" value="6" />
                    <this.Button name="bathrooms" value="7" />
                    <this.Button name="bathrooms" value="8" text="8+" />
                  </div>
                </div>
              </ModalSection>
              <ModalSection>
                <h2>Comodidades</h2>
                <this.Checkbox name="wifi" text="Wi-Fi" />
                <this.Checkbox name="washing_machine" text="Máquina de Lavar" />
                <this.Checkbox name="iron" text="Ferro de passar" />
                <this.Checkbox name="kitchen" text="Cozinha" />
                <this.Checkbox name="air_conditioning" text="Ar-condicionado" />
              </ModalSection>
              <ModalSection>
                <h2>Opção de reserva</h2>
                <this.Checkbox name="instant_reserve" text="Reserva instantânea" />
                <this.Checkbox name="self_checkin" text="Self check-in" />
              </ModalSection>
            </div>
            <div className="modal-footer">
              <button type="button" data-dismiss="modal" onClick={() => { this.reset(); }}>Remover filtros</button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.props.onSubmit(this.state);
                }}
              >
                Filtrar

              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterModal;
