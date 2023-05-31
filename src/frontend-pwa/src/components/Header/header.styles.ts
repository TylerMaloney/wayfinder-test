import styled from '@emotion/styled';
import typography from '../../typography';

export const HeaderWrapper = styled.header`
    background-color: #036;
    border-bottom: 2px solid #fcba19;
    padding: 0 65px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    top: 0;
    position: fixed;
    width: 100%;
    left: 0;
`;

export const Heading = styled.h2`
    ${typography.toString()}
    color: rgb(255, 255, 255);
    font-weight: 500;
    min-width: 150px;
    display: contents;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
`;

export const Image = styled.a`
    width: 175px;
    top: 10px;
    position: relative;
    height: 100%;
    padding-right: 10px;
`;

export const StyledSettingsButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0px;
    cursor: pointer;
    font-size: 1rem;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    right: 0;
    &:focus {
        outline: none;
    }
`;

export const StyledIcon = styled.img`
    width: 30px;
    height: 30px;
`;
