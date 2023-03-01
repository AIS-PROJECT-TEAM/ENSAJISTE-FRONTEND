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
                  <CommentText>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ducimus dolore, esse laborum autem cumque ipsum perferendis amet exercitationem veniam molestias voluptate accusamus. Sequi doloribus ipsam veniam, nihil asperiores molestiae.
                  </CommentText>
                  <CommentImage>
                    <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
                  </CommentImage>
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
    max-width: calc(100% - 110px);
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

const CommentText = styled.div`

`
const CommentImage = styled.div`
    max-width: 200px;
    max-height: 200px;

    img {
        width: 100%;
        object-fit: cover;
    }
`

