import React from 'react'
import styled from 'styled-components'
import {BsThreeDots} from "react-icons/bs"
function Comments() {
  return (
    <CommentContainer>
      <Comment>
            <ImageContainer>
                <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
            </ImageContainer>
            <CommentInfo>
                <CommentAuthor>
                    Ibrahim Chahboune
                </CommentAuthor>
                <CommentContent>
                   Lorem ipsum dolor sit,
                </CommentContent>
            </CommentInfo>
            <CommentOptions>
                <BsThreeDots />
            </CommentOptions>
      </Comment>
    </CommentContainer>
  )
}

export default Comments



const CommentContainer = styled.div`

`

const Comment = styled.div`
    display: flex;
    gap: 5px;
    align-items: start;
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


const CommentContent = styled.div`
    font-size: .75rem;
`

const CommentAuthor = styled.div`
    font-size: .8rem;
    font-weight: 500;
`
const CommentInfo = styled.div`
    background-color: #F0F2F5;
    padding: 3px 12px;
    border-radius: 12px;
`

const CommentOptions = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
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

