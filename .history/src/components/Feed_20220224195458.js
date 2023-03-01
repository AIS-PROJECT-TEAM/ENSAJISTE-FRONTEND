import React from 'react'
import { Button, Card } from 'react-bootstrap'
import styled from "styled-components"
import {BsThreeDots} from "react-icons/bs"
import {AiFillLike} from "react-icons/ai"
import {BiComment, BiLike, BiCamera} from "react-icons/bi"

function Feed() {
  return (
    <FeedContainer>
      <FeedMain>
        <PostContainer className="shadow">
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
                        <BiLike />
                        <span className="like__count">100k</span>
                    </LikeStats>
                    <CommentStats>
                        87 Comments
                    </CommentStats>
                </PostStats>
            </PostBody>
            <PostFooter>
                <PostOptions>
                    <Button id="like__btn">
                        <BiLike />
                        <span>Like</span>
                    </Button>
                    <Button id="comment__btn">
                        <BiComment />
                        <span>Comment</span>
                    </Button>
                </PostOptions>
                <CommentSectionContainer>
                    <AddCommentSection>
                        <ImageContainer>
                            <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
                        </ImageContainer>
                        <AddCommentForm>
                            <div className="comment">
                                <input type="text" placeholder="Créer un commentaire..." />
                                <Fileoptions>
                                    <BiCamera />
                                    <input type="file" name="file" />
                                </Fileoptions>
                            </div>
                        </AddCommentForm>
                    </AddCommentSection>
                </CommentSectionContainer>
            </PostFooter>
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
    border-radius: 7px;
    width: 100%;
    border: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
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
    border-left: 1px solid #14A3FA;
`

const LikeStats = styled.div`
    display: flex;
    align-items: center;
    justify-content:start;
    gap: 3px;

    .like__count {
        font-size: .75rem;
        color: #65676B;
    }


    svg {
        fill : #14A3FA;
    }
`

const CommentStats = styled.div`
    font-size: .75rem;
    color: #65676B;
`

const PostFooter = styled(Card.Footer)`
    border-top: none;
    background: white;

    button {
        background-color: transparent;
        border: none;
        color: #65676B;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        flex-grow: 1;

        &:focus, &:hover {
            background-color:#CDCDCD;
            color: #65676B;
        }

        
    }
`

const PostOptions = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
        background-color: transparent;
        border: none;
        color: #65676B;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        flex-grow: 1;

        &:focus, &:hover {
            background-color:#CDCDCD;
            color: #65676B;
        }  
    }
`

const  CommentSectionContainer = styled.div`

`
const  AddCommentSection = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
const  AddCommentForm = styled.div`
    flex: 1;
    background-color: #F0F2F5;
    padding: 5px;
    border-radius: 20px;

    .comment {
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input[type="text"] {
        flex: 1;
        border: none;
        background-color:transparent;
        outline: none;
    }

`

const Fileoptions = styled.div`
    display: flex;

    svg {
        height: 25px;
        width: 25px;
        cursor: pointer;

        &:hover {
            background-color: #CDCDCD;
        }
    }

    input[type="file"] {
        display: none;
    }
`
