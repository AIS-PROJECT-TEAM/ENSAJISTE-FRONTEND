import React from 'react'
import { Card } from 'react-bootstrap'
import styled from "styled-components"
import {BsThreeDots} from "react-icons/bs"
import {GrLike} from "react-icons/gr"

function Feed() {
  return (
    <FeedContainer>
      <FeedMain>
        <PostContainer>
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
            <PostBody>
                <PostContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius facere laborum ut excepturi, rerum nobis ad magni a eaque dolorum nihil sit enim itaque, voluptatem, maiores voluptates. Iste, quae.
                </PostContent>
                <PostContentImage>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                </PostContentImage>
                <PostStats>
                    <LikeStats>
                        <GrLike />
                        <span className="like__count">100k</span>
                    </LikeStats>
                    <CommentStats>
                        Comment
                    </CommentStats>
                </PostStats>
            </PostBody>
            <Card.Footer>Footer</Card.Footer>
        </PostContainer>
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

const PostContainer = styled(Card)`
    margin: 0;
    padding: 0;
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
    font-weight: 500;
`
const PostInfo = styled.div`
    font-size: .6rem;
    color: #65676B;
`

const PostBody = styled(Card.Body)`
    border-bottom:none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
`

const PostContent = styled.div`
    font-size: .8rem;
    padding: 0 16px 16px;
`

const PostContentImage = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;

    img {
        width: 100%;
        max-height: 400px;
    }
`

const PostStats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px 16px;
`

const LikeStats = styled.div`
    display: flex;
`

const CommentStats = styled.div`

`
