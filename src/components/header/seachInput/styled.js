import styled from 'styled-components'

export const SeachInputStyled = styled.div`
    padding: 0;
    margin: 0;

    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    height: 2vh;
    width: 13vw;

    position: relative;
    left: 15vw;

    input {
        border: none;
        margin-left: 1.5rem;
        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 22px;
        color: #000000;
    }

    input:focus {
        border: none;
        outline-offset: 0px;
        outline: none;
    }

    input::placeholder {
        color: #000000;
        opacity: 0.2;
    }
`