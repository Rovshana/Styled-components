import React from 'react'
import { StyledCard } from './styles/StyledCard.styled'


export function Card({el: { title, body, image}}) {
     return (
        <>
        <StyledCard>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`${image}`}  alt="."/>
            </div>
        </StyledCard>
            
        </>
    )
}
