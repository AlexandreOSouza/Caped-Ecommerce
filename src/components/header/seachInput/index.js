import React from 'react'
import { SeachInputStyled } from './styled'

import search_logo from '../../../assets/search.svg'

function InputSearch() {
    return (
        <SeachInputStyled>
            <label for="search-input" >
                <img src={search_logo} alt="Search Icon"/>
            </label>
            <input id="search-input" type="text" placeholder="Search store"/>
        </SeachInputStyled>
    )
}

export default InputSearch