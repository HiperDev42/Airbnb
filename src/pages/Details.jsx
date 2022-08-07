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

const Amenity = (props) => { return (
    <div style={{
        display: 'flex',
        marginBottom: '24px',

    }}>
        <div style={{
            flexShrink: '0',
            minWidth: '24px',
        }}><i className={"fa-solid fa-"+(props.icon || 'check')}/></div>
        <div style={{ marginLeft: '16px' }}>
            <div style={{
                color: 'rgb(34, 34, 34)',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '20px',
                marginBottom: '4px',
            }}>{props.title}</div>
            <div style={{
                color: 'rgb(113, 113, 113)',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '20px',
            }}>{props.desc}</div>
        </div>
    </div>
)};

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
                            <div>
                                <Separator/>
                                <div style={{
                                    padding: '32px 0',
                                }}>
                                    {[
                                        {
                                            id: 'wifi',
                                            icon: 'wifi',
                                            title: 'Wi-Fi',
                                            desc: 'A estadia possui Wi-Fi disponível',
                                        },{
                                            id: 'washing_machine',
                                            icon: 'jug-detergent',
                                            title: 'Máquina de lavar roupa',
                                            desc: 'A estadia possui máquinas de lavar roupas',
                                        },{
                                            id: 'Ferro de passar',
                                            icon: 'shirt',
                                            title: 'Wi-Fi',
                                            desc: 'A estadia possui um ferro de passar roupas',
                                        },{
                                            id: 'kitchen',
                                            icon: 'kitchen-set',
                                            title: 'Cozinha',
                                            desc: 'A estadia possui uma cozinha',
                                        },{
                                            id: 'air_conditioning',
                                            icon: 'snowflake',
                                            title: 'Ar condicionado',
                                            desc: 'A estadia possui ar condicionado nos quartos',
                                        },
                                    ].map((amenity, index) => {
                                        if (loc.amenities[amenity.id])
                                            return <Amenity icon={amenity.icon} title={amenity.title} desc={amenity.desc}/>
                                    })}
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