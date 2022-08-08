import styled from "styled-components";

const locale = 'pt-br';
const currency = 'BRL';
const curFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
});

const Wrapper = styled.div`
    position: relative !important;
    width: 33.333% !important;
    margin-left: 8.333% !important;
    margin-right: 0% !important;
`;

const StickyWrapper = styled.div`
    position: sticky;
    top: 80px !important;
    z-index: 1 !important;
    width: 100% !important;
    display: inline-block !important;
    padding-right: 1px !important;
`;

const ReserveWrapper = styled.div`
    color: #222222 !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
`;

const Reserve = styled.div`
    margin-bottom: 16px !important;
`

const InputWrapper = styled.div`
    position: relative !important;
    flex: 1 1 0%;
`;

const Label = styled.div`
    position: absolute !important;
    top: 12px !important;
    left: 12px !important;
    right: 12px !important;
    margin: 0px !important;
    padding: 0px !important;
    pointer-events: none !important;
    font-size: 10px !important;
    line-height: 12px !important;
    color: rgb(34, 34, 34) !important;
    text-transform: uppercase !important;
    font-weight: 800 !important;
    max-width: 100% !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
`;

const InputValue = styled.div`
    min-height: 56px !important;
    width: 100% !important;
    border: none !important;
    outline: none !important;
    margin: 0px !important;
    padding: ${p => p.padding} !important;
    background-color: transparent !important;
    color: inherit !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: inherit !important;
    line-height: 18px !important;
    appearance: none !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
`;

const ReserveInputs = () => {
    return (
        <div style={{marginBottom: '16px'}}>
            <div style={{position: 'relative'}}>
                <div>
                    <div style={{
                        position: 'relative', backgroundColor: 'white',
                        borderRadius: '8px',
                    }}>
                        <div style={{ display: 'flex', }}>
                            <div style={{ width: '100%', }}>
                                <InputWrapper>
                                    <button style={{
                                        position: 'relative',
                                        display: 'flex',
                                        width: '100%',
                                        margin: '0px',
                                        border: 'none transparent',
                                        color: 'black',
                                        backgroundColor: 'transparent',
                                        borderRadius: '0px',
                                        boxShadow: 'none',
                                        cursor: 'pointer',
                                        padding: '0px',
                                        textAlign: 'left',
                                    }}>
                                        <div style={{
                                            position: 'relative',
                                            flex: '1 1 0%',
                                            padding: '0px',
                                            overflow: 'hidden',
                                        }}>
                                            <Label>Check-in</Label>
                                            <InputValue padding="26px 12px 10px">08/08/2022</InputValue>
                                        </div>
                                        <div style={{
                                            position: 'relative',
                                            flex: '1 1 0%',
                                            padding: '0px',
                                            overflow: 'hidden',
                                            borderLeft: '1px solid rgb(176, 176, 176)',
                                        }}>
                                            <Label>Check-out</Label>
                                            <InputValue padding="26px 12px 10px">15/08/2022</InputValue>
                                        </div>
                                    </button>
                                    <div style={{
                                        inset: '0px 0px -1px',
                                        borderRadius: '8px 8px 0px 0px',
                                        borderTopColor: 'black',
                                        borderRightColor: 'black',
                                        borderBottomColor: 'black',
                                        borderLeftColor: 'black',
                                        borderWidth: '1px',
                                        zIndex: '0',
                                        position: 'absolute',
                                        pointerEvents: 'none',
                                        borderStyle: 'solid',
                                    }}></div>
                                </InputWrapper>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ position: 'relative', width: '100%' }}>
                                <InputWrapper>
                                    <button style={{
                                        position: 'relative',
                                        display: 'flex',
                                        width: '100%',
                                        margin: '0px',
                                        border: 'none transparent',
                                        color: 'black',
                                        backgroundColor: 'transparent',
                                        borderRadius: '0px',
                                        boxShadow: 'none',
                                        cursor: 'pointer',
                                        padding: '0px',
                                        textAlign: 'left',
                                    }}>
                                        <div style={{
                                            position: 'relative',
                                            flex: '1 1 0%',
                                            padding: '0px',
                                            overflow: 'hidden',
                                        }}>
                                            <Label>Hóspedes</Label>
                                            <InputValue padding="26px 36px 10px 12px">1 hóspede</InputValue>
                                        </div>
                                    </button>
                                    <div style={{
                                        inset: '0px 0px -1px',
                                        borderRadius: '0px 0px 8px 8px',
                                        borderTopColor: 'black',
                                        borderRightColor: 'black',
                                        borderBottomColor: 'black',
                                        borderLeftColor: 'black',
                                        borderWidth: '1px',
                                        zIndex: '0',
                                        position: 'absolute',
                                        pointerEvents: 'none',
                                        borderStyle: 'solid',
                                    }}></div>
                                </InputWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (props) => {
    return (
        <Wrapper>
            <StickyWrapper>
                <div style={{paddingBottom: '48px'}}>
                    <ReserveWrapper>
                        <div style={{
                            marginTop: '48px',
                        }}>
                            <div css={`
                                border: 1px solid rgb(221, 221, 221);
                                border-radius: 12px;
                                padding: 24px;
                                box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
                            `}>
                                <div style={{
                                    color: 'rgb(34, 34, 34)'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexFlow:'row wrap',
                                        justifyContent: 'space-between',
                                        alignItems: 'baseline',
                                        marginBottom: '24px',
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                        }}>
                                            <span style={{
                                                overflow: 'initial',
                                                whiteSpace: 'inherit',
                                            }}>
                                                <span style={{
                                                    fontWeight: '600',
                                                    fontSize: '22px',
                                                    lineHeight: '26px',
                                                }}>
                                                    {curFormatter.format(props.loc.price)}
                                                </span>
                                                <span style={{
                                                    whiteSpace: 'nowrap',
                                                    fontWeight: '400',
                                                    fontSize: '16px',
                                                    lineHeight: '20px',
                                                    minWidth: 'initial',
                                                    overflow: 'initial',
                                                    textOverflow: 'initial',
                                                }}>&nbsp;noite
                                                </span>
                                            </span>
                                        </div>
                                        <div style={{marginTop: '8px'}}>
                                            <span style={{
                                                alignItems: 'baseline',
                                                display: 'flex',
                                                fontSize: '14px',
                                                lineHeight: '18px',
                                            }}>
                                                <button type='button' style={{
                                                    fontSize: 'inherit',
                                                    fontFamily: 'inherit',
                                                    fontWeight: 'inherit',
                                                    fontStyle: 'inherit',
                                                    fontVariant: 'inherit',
                                                    lineHeight: 'inherit',
                                                    appearance: 'none',
                                                    background: 'transparent',
                                                    border: '0px',
                                                    cursor: 'pointer',
                                                    margin: '0px',
                                                    padding: '0px',
                                                    userSelect: 'auto',
                                                    color: 'rgb(34, 34, 34)',
                                                    textDecoration: 'none',
                                                    outline: 'none',
                                                }}>
                                                    <span style={{
                                                        color: 'rgb(113, 113, 113)',
                                                        paddingLeft: '4px',
                                                        fontWeight: '600',
                                                        textDecoration: 'underline',
                                                    }}>
                                                        1 avaliação
                                                    </span>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <ReserveInputs/>
                                    <div style={{ flexShrink: '0', }}>
                                        <button type="button" style={{
                                            background: 'linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)',
                                            cursor: 'pointer',
                                            display: 'inline-block',
                                            margin: '0px',
                                            position: 'relative',
                                            textAlign: 'center',
                                            textDecoration: 'none',
                                            touchAction: 'manipulation',
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            fontWeight: '600',
                                            borderRadius: '8px',
                                            outline: 'none',
                                            padding: '14px 24px',
                                            border: 'none',
                                            color: 'rgb(255, 255, 255)',
                                            width: '100%',
                                        }}>
                                            <span>Reservar</span>
                                        </button>
                                    </div>
                                    <ul style={{
                                        color: 'rgb(34, 34, 34)',
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '18px',
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        listStyleType: 'none',
                                        margin: '8px 0px 0px',
                                        padding: '0px',
                                        textAlign: 'center',
                                    }}>
                                        <li style={{marginTop: '8px', whiteSpace: 'normal'}}>
                                            Você ainda não será cobrado
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ReserveWrapper>
                </div>
            </StickyWrapper>
        </Wrapper>
    )
}
