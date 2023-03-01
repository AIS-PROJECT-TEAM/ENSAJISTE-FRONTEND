import React, {useState} from 'react'
import styled from 'styled-components'
import {BsThreeDots} from "react-icons/bs"
import {GoReport} from "react-icons/go"
import {RiChatDeleteFill} from "react-icons/ri"
function Comments() {

    const[toggle, setToggle] = useState(false) 

    const Options = styled.div`
        display: ${toggle == true ? "block": "none"};
        position: absolute;
        top: 40px;
        right: 0;
        width: 250px;
        padding: 12px;
        border-radius: 12px;
        background-color:white;
        z-index: 1000;

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
                <BsThreeDots className="dots" onClick={() => setToggle(!toggle)}/>
                <Options className="shadow">
                    <Option>
                        <GoReport />
                        <span>Report</span>
                    </Option>
                    <Option>
                        <RiChatDeleteFill />
                        <span>Delete</span>
                    </Option>
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
    width: 100%;
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
    display: flex;
    align-items: start;
    flex-direction: column;
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
    width: 50px;
    display: flex;
    align-items: center;
    position: relative;
    .dots{
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
    margin-top: 5px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 12px;
    display: flex;
    justify-content: start;

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

const Option =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 12px;
    transition: all 0.3s ease-in-out;
    border-radius: 12px;
    margin: 5px 0px;
    cursor: pointer;
    color: #65676B;

    &:hover{
        background: #65676B;
        color: white;
    }
`

