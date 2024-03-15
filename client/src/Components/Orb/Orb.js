import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width, height} = useWindowSize()

    console.log(width, height)

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

    const OrbStyled = styled.div`
        width: 50vh;
        height: 50vh;
        position: absolute;
        border-radius: 30%;
        margin-left: -47vh;
        margin-top: -57vh;
        background: linear-gradient(180deg, #T489N9 0%, #F2994A 100%);
        filter: blur(300px);
        animation: ${moveOrb} 10s alternate linear infinite;
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb