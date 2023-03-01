import React, {useState} from 'react'
import styled from 'styled-components'
import {BsThreeDots} from "react-icons/bs"
function Comments() {

    const[toggle, setToggle] = useState(false) 

    const Options = styled.div`
        display: ${toggle == true ? "block": "none"};
        position: absolute;
        top: 15px;
        width: 150px;
        height: 400px;
        background-color:red;
    `

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
                    <a href="https://www.ibrahimchahboune.com/assets/images/image.JPG" download="downloads">
                        <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
                    </a>
                    
                  </CommentImage>
                </CommentContent>
            </CommentInfo>
            <CommentOptions>
                <BsThreeDots onClick={() => setToggle(!toggle)}/>
                <Options>
                    
                </Options>
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
    height: 100%;
    height: 100%;
`

const CommentOptions = styled.div`
    position: relative;
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
    width: 200px;
    height: 200px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
`

