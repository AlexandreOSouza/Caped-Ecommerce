import HorizontalBannerContainer from './horizontalBannerContainer'
import { MainContainerStyled } from './styled'

import w1 from '../../assets/banners/W1.png'
import w2 from '../../assets/banners/W2.png'

import w5 from '../../assets/banners/W5.png'
import w6 from '../../assets/banners/W6.png'

import woman1 from '../../assets/banners/woman-1.png'
import woman2 from '../../assets/banners/woman-2.png'
import woman3 from '../../assets/banners/woman-3.png'
import woman4 from '../../assets/banners/woman-4.png'

import VerticalBannerContainer from './verticalBannerContainer'


const MainContainer = () => {
    return (
        <MainContainerStyled>
            <HorizontalBannerContainer image1={w1} image2={w2}/>
            <VerticalBannerContainer image1={woman1} image2={woman2} />
            <VerticalBannerContainer image1={woman3} image2={woman4} />
            <HorizontalBannerContainer image1={w5} image2={w6}/>
        </MainContainerStyled>
    )
}

export default MainContainer