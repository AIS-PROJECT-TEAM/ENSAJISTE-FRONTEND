import React from 'react'
import styled from "styled-components"
import Post from "./Post"
import InputBox from "./InputBox"
import {AiFillInfoCircle} from "react-icons/ai"



function Feed() {

    

  return (
    <FeedContainer>
      <FeedMain>
        <InputBox />
        <Post />
      </FeedMain>
      <FeedWidget>
        <WidgetContainer className="shadow">
          <Heading>
            <Title>Clubs</Title>
            <AiFillInfoCircle />
           </Heading> 
          <ClubsContainer>
            <Club>
              <Content>
                <ContentTitle></ContentTitle>
                <Description></Description>
              </Content>
            </Club>
          </ClubsContainer>
        </WidgetContainer>
      </FeedWidget>
    </FeedContainer>
  )
}

export default Feed

const FeedContainer = styled.div`
    display: flex;
    width: 100%;
`
const FeedMain = styled.section`
    flex: .6;
    padding: 10px;
`
const FeedWidget = styled.section`
    flex: .4;
    position: fixed;
    top: 35px;
    right: 0;
    width: 400px;
    padding-left: 40px;
    padding-right: 40px;
`

const WidgetContainer = styled.div`
  padding: 10px;
`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.div`
  font-size: .9rem;
  
`

const ClubsContainer = styled.div`

`
const Club = styled.div`

`
const Content = styled.div`

`
const ContentTitle = styled.div`

`

const Description = styled.div`

`




