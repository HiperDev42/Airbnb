import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// CSS
import './Details.css'

// Data
import Data from '../Database.json';

// Components
import Gallery from '../components/Gallery';
import BookingFloat from './Details/components/BookingFloat';

const Separator = styled.div`
    border-top-width: 1px !important;
    border-top-style: solid !important;
    border-top-color: rgb(221, 221, 221);
`;

// Main content
function Details() {
    let { id } = useParams();
    const loc = Data.filter(i => { return i.id == id})[0];
    console.log("Location:", loc)

    return (
        <main className='container'>
            <h1>{loc.title}</h1>
            <Gallery img={loc.image}/>
            <div className="container-fluid">
                <div className="row">
                    <div style={{width: '58.333%'}}>
                        <div style={{height: '200vh'}}>
                            <div style={{
                                padding: '48px 0 24px 0',

                            }}>
                                <h2>[User name]</h2>
                                <ol style={{
                                    margin: '0',
                                    padding: '0',
                                }}>
                                    <li style={{display: 'inline-block'}}>{loc.beds} hóspedes<span> · </span></li>
                                    <li style={{display: 'inline-block'}}>{loc.rooms} quartos<span> · </span></li>
                                    <li style={{display: 'inline-block'}}>{loc.beds} camas<span> · </span></li>
                                    <li style={{display: 'inline-block'}}>{loc.bathrooms} banheiros</li>
                                </ol>
                            </div>
                            <div>
                                <Separator/>
                                <div style={{
                                    padding: '32px 0',
                                }}>
                                    <p>{loc.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BookingFloat loc={loc} />
                </div>
            </div>
        </main>
    )
}

export default Details;