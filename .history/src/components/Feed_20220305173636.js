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
        <Post file="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"  />
      </FeedMain>
      <FeedWidget>
        <WidgetContainer className="shadow">
          <Heading>
            <Title>Clubs</Title>
            <AiFillInfoCircle />
           </Heading> 
          <ClubsContainer>
            <Club>
              <ImageContainer>
                <img src="https://scontent.fcmn3-2.fna.fbcdn.net/v/t1.18169-9/22815594_2033982746815098_5162597656620051969_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFeS_u6Ccme7DoflkmpFZO77umj2qiP3iDu6aPaqI_eIL3XYefS0hdoyvk0C3LKsXmagkG4JbdwVjcCmTxBcLpL&_nc_ohc=bc1HFGLO9McAX85mxxr&_nc_ht=scontent.fcmn3-2.fna&oh=00_AT9KW8ZIatv7fGCKOqmcwFy2VN-dVkNM0w98W_9jZegnnw&oe=624677BE" />
              </ImageContainer>
              <Content>
                <ContentTitle>App In Science</ContentTitle>
                <Description>Description</Description>
              </Content>
            </Club>
            <Club>
              <ImageContainer>
                <img src="https://scontent.fcmn3-2.fna.fbcdn.net/v/t1.18169-9/22815594_2033982746815098_5162597656620051969_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFeS_u6Ccme7DoflkmpFZO77umj2qiP3iDu6aPaqI_eIL3XYefS0hdoyvk0C3LKsXmagkG4JbdwVjcCmTxBcLpL&_nc_ohc=bc1HFGLO9McAX85mxxr&_nc_ht=scontent.fcmn3-2.fna&oh=00_AT9KW8ZIatv7fGCKOqmcwFy2VN-dVkNM0w98W_9jZegnnw&oe=624677BE" />
              </ImageContainer>
              <Content>
                <ContentTitle>App In Science</ContentTitle>
                <Description>Description</Description>
              </Content>
            </Club>
            <Club>
              <ImageContainer>
                <img src="https://scontent.fcmn3-2.fna.fbcdn.net/v/t1.18169-9/22815594_2033982746815098_5162597656620051969_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFeS_u6Ccme7DoflkmpFZO77umj2qiP3iDu6aPaqI_eIL3XYefS0hdoyvk0C3LKsXmagkG4JbdwVjcCmTxBcLpL&_nc_ohc=bc1HFGLO9McAX85mxxr&_nc_ht=scontent.fcmn3-2.fna&oh=00_AT9KW8ZIatv7fGCKOqmcwFy2VN-dVkNM0w98W_9jZegnnw&oe=624677BE" />
              </ImageContainer>
              <Content>
                <ContentTitle>App In Science</ContentTitle>
                <Description>Description</Description>
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
    @media (max-width: 1000px) {
      flex: 1;
      width: 100%;
    }
`
const FeedWidget = styled.section`
    flex: .4;
    position: fixed;
    top: 35px;
    right: 0;
    width: 400px;
    padding-left: 40px;
    padding-right: 40px;

    @media (max-width: 1000px) {
      display: none;
    }
`

const WidgetContainer = styled.div`
  padding: 10px;
  border-radius: 7px;
`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  svg {
    fill: #4070F4;
  }
`
const Title = styled.div`
  font-size: .9rem;
  font-weight: 500;
`

const ClubsContainer = styled.div`

`
const Club = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: start;
  margin-bottom: 10px;
`
const Content = styled.div`

`
const ContentTitle = styled.div`
  font-size: .8rem;
  font-weight: 500;
`

const Description = styled.div`
  font-size: .7rem;
`

const ImageContainer = styled.div`
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius:50%;
    object-fit: cover;

    img{
        width: 100%;
    }
`




