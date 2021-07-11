import React from 'react'
import { SeachInputStyled } from './styled'

import search_logo from '../../../assets/search.svg'

function InputSearch() {
    return (
        <SeachInputStyled>
            <img src={search_logo} alt="Search Icon"/>
            <input type="text" placeholder="Search store"/>
        </SeachInputStyled>
    )
}

export default InputSearch