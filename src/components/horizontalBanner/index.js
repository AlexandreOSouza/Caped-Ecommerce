import { HorizontalBannerStyled } from "./styled"


const HorizontalBanner = ({image}) => {
    return (
        <HorizontalBannerStyled>
            <img src={image} alt="banner" />
        </HorizontalBannerStyled>
    )
}

export default HorizontalBanner