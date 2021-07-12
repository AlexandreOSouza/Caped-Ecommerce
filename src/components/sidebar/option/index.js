import React from 'react'
import { OptionStyled } from './styled'

const Option = ({icon, title}) => {
    return (
        <OptionStyled>
            <button><img src={icon} alt={title}/> {title}</button>
        </OptionStyled>
    )
}

export default Option