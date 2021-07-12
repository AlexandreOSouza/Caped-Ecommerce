import HorizontalBanner from "../../horizontalBanner"
import { HorizontalBannerContainertStyled } from "./styled"

const HorizontalBannerContainer = ({image1, image2}) => {
    return (
        <HorizontalBannerContainertStyled>
            <HorizontalBanner image={image1}/>
            <HorizontalBanner image={image2}/>
        </HorizontalBannerContainertStyled>
    )
}

export default HorizontalBannerContainer