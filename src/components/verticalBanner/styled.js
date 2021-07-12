import styled from 'styled-components'

export const VerticalBannerStyled = styled.div`
    
    img {
        width: 98%;
        // height: 90%;

        border-radius: 20px;
    }

    .likeButton {
        position: absolute;
        margin-left: 20%;
        margin-top: -22%;
        background: #FFF;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 24px;

        .heart {
            width: 21px;
            height: 17px;
        }
    }
`