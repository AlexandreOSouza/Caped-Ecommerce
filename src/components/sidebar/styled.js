import styled from 'styled-components'

export const SideBarStyled = styled.div`
    padding: 0;
    margin: 0;

    padding-left: 3vw;
    padding-top: 3vh;
    padding-bottom: 6vh;

    width: 15vw;
    height: 80vh;

    display: flex;
    
    flex-direction: column;

    span {
        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 47px;
    }

    .options-wrapper {
        margin-top: 2vh;
    }

    .btn-help {
        position: relative;
        background-color: #FFF;
        border: none;
        padding: 12px 0px;
        font-family: 'Rubik',sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15.7099px;
        line-height: 24px;
        cursor: pointer;
        margin-top: auto;

        width: 8vw;

        img {
            padding-right: 1vw;
        }
    }

`