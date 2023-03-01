import React from 'react'
import styled from 'styled-components'

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
                    This is a comment
                </CommentContent>
            </CommentInfo>
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

`

const CommentAuthor = styled.div``
const CommentInfo = styled.div`
    background-color: #F0F2F5;
    padding: 0px 12px;
    border-radius: 12px;
`

