import styled from 'styled-components'

export const HeaderStyle = styled.header`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 11vh;

    display: flex;
    align-items: center;

    .logo {
        position: relative;
        left: 3vw;
        top: 0.5rem;
    }

    .header-options {
        width: 25vw;
        height: 3vh;

        padding: 0;
        position: relative;

        left: 41vw;

        display: flex;
        justify-content: space-between;

        button {
            background: #FFF;
            border: none;
            
            font-family: 'Rubik', sans-serif;
            
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 22px;

            height: 100%;
            padding: 0 0.2vw;


            &:hover {
                cursor: pointer;
                border-bottom: 2px solid black;
            }

        }
    }

    .header-actions {
        position: relative;
        left: 46vw;
        width: 6vw;

        display: flex;
        justify-content: space-between;

        button {
            font-size: 0;
            background: #FFF;
            border: none;

            &:hover {
                cursor: pointer;
            }
        }
    }


`