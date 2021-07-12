import VerticalBanner from "../../verticalBanner"
import { VerticalBannerContainerStyled } from "./styled"

const VerticalBannerContainer = ({image1, image2}) => {
    return (
        <VerticalBannerContainerStyled>
            <VerticalBanner image={image1}/>
            <VerticalBanner image={image2}/>
        </VerticalBannerContainerStyled>
    )
}

export default VerticalBannerContainer