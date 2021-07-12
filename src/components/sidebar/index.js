import React from 'react'
import Option from './option'
import { SideBarStyled } from './styled'

import help_center from '../../assets/help-center.svg'

const SideBar = ({options}) =>  {
    return (
        <SideBarStyled>
            <span>Explore</span>
            <div className="options-wrapper">
                {options.map((option, index) => {
                    return (
                        <Option key={index} icon={option.icon} title={option.title} />
                    )
                })}
            </div>

            <button className="btn-help"><img src={help_center} alt="Help Center"/> Help Center</button>
        </SideBarStyled>
    )
}

export default SideBar