import React from 'react'
import { HeaderStyle } from './styled'

import InputSearch from './seachInput'

import logo from '../../assets/caped-logo.svg'
import basket from '../../assets/basket.svg'
import person from '../../assets/person.svg'


function Header() {

    const headerOptions = ['products', 'story', 'manufacturing', 'packaging']

    return (
        <HeaderStyle>            
            <img className="logo" src={logo} alt="Caped Logo"/>
            <InputSearch className="input-search" />

            <div className="header-options">
                {headerOptions.map((option, index) => {
                    return (
                        <button key={index}>{option}</button>
                    )
                })}
            </div>

            <div className="header-actions">
                <button>
                    <img src={basket} alt="Bastket"/>
                </button>
                <button>
                    <img src={person} alt="Bastket"/>
                </button>
            </div>

        </HeaderStyle>
    )
}

export default Header