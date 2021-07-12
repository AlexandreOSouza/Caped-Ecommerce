import { VerticalBannerStyled } from "./styled"
import Heart from "react-animated-heart";
import { useState } from "react";

import heart from '../../assets/heart.svg'


const VerticalBanner = ({image}) => {
    const [isClick, setClick] = useState(false);
    return (
        <VerticalBannerStyled>
            <img src={image} alt="Banner"/>
            <div className="likeButton">
                <img className="heart" src={heart} alt="like" />
            </div>
        </VerticalBannerStyled>
    )
}

export default VerticalBanner