import React, {useState} from 'react'
import Navbar from './Navbar';
import styled from "styled-components"

const LayoutContainer = ({children}) => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <div className="LayoutContainer">
        {/* Navbar */}
        <Navbar toggle={toggle} handleToggle={handleToggle} />
        {/* Header Navigation */}
        <Header className={toggle == true ? "active" : ""}>
            Test
        </Header>
        {/* Content Wrapper*/}
        <ContentWrapper className={toggle == true ? "active" : ""}>
            {children}
        </ContentWrapper>

    </div>
  )
}

export default LayoutContainer


const ContentWrapper = styled.div`
    position: absolute;
    left: 60px;
    width: calc(100% - 240px);
    z-index: 1;
    transition: all .5s ease;
    overflow-y: auto;
    @media (max-width: 768px){
            width: 100%;
    }

    &.active {
        left: 240px;

        @media (max-width: 768px){
            left: 60px !important;
            width: 100%;
        }
    }
`

const Header = styled.div`
    position: fixed;
    height: 55px;
    top:0;
    border-bottom: 0.1px solid lightgrey;
    padding: 10px 5px;
    width: 100%;
    z-index: 1;
    background-color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    color: black;
    margin-left: 60px;
    transition: all .5s ease !important;

    &.active {
        margin-left: 240px;
    }
`