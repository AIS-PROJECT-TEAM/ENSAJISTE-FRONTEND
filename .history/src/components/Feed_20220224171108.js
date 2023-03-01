import React from 'react'
import { Card } from 'react-bootstrap'
import styled from "styled-components"
import {BsThreeDots} from "react-icons/bs"

function Feed() {
  return (
    <FeedContainer>
      <FeedMain>
        <Card>
            <PostHeader>
                <PostHeaderLeft>
                    <ImageContainer>
                        <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
                    </ImageContainer>
                    <PostHeaderLeftInfo>
                        <PostPublisher>Ibrahim Chahboune</PostPublisher>
                        <PostInfo>4h ago</PostInfo>
                    </PostHeaderLeftInfo>
                </PostHeaderLeft>
                <PostHeaderRight>
                    <BsThreeDots />
                </PostHeaderRight>
            </PostHeader>
            <Card.Body>Body</Card.Body>
            <Card.Footer>Footer</Card.Footer>
        </Card>
      </FeedMain>
      <FeedWidget>
        FeedWidget
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
`


const PostHeader = styled(Card.Header)`
    border-bottom: none;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PostHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`
const PostHeaderRight = styled.div`
    svg{
        width: 30px;
        padding: 5px;
        height: 30px;
        border-radius:50%;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover{
            background-color: rgba(0,0,0,.1);
        }
    }
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

const PostHeaderLeftInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

const PostPublisher = styled.div`
    font-size: .9rem;
`
const PostInfo = styled.div`
    font-size: .6rem;
    color: #65676B;
`