import React, { useState, useRef } from 'react'
import styled from "styled-components"
import { Modal , Button } from "react-bootstrap"
import { AiOutlinePicture } from "react-icons/ai"

function InputBox() {


    const fileRef = useRef(); 
    const [postContent, setPostContent] = useState("");
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(postContent)

      // Clear Data
      setPostContent("")
      handleClose();
    }

  return (
    <InputContainer className="shadow">
      <FormContainer>
          <ImageContainer>
            <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
          </ImageContainer>
          <Form>
              <div className="input" onClick={handleShow}>
                What on your mind, Ibrahim
              </div>
          </Form>
      </FormContainer>
      <Modal show={show} onHide={handleClose}>
        <PostHeader closeButton>
          <Modal.Title className="post__title">Créer un Post</Modal.Title>
        </PostHeader>
        <PostBody>
          <textarea autosize  value={postContent} onChange={e => setPostContent(e.target.value)} placeholder="What on your mind, Ibrahim"></textarea>
          <Fileoptions>
            <AiOutlinePicture onClick={e => fileRef.current.click()} />
            <input type="file" ref={fileRef} name="file" />
          </Fileoptions>

        </PostBody>
        <PostFooter>
          <Button onClick={handleSubmit} variant="primary">
            Post
          </Button>
        </PostFooter>
      </Modal>
    </InputContainer>
  )
}

export default InputBox


const InputContainer = styled.div`
    width: 100%;
    margin: 25px 0px;
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

const Form = styled.form`
    display: flex;
    flex: 1;
    width: 100%;

    .input {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content:start;
        border: none;
        background: #F0F2F5;
        border-radius: 18px;
        min-height: 40px;
        padding: 5px 10px;
        font-size: .8rem;
        color: grey;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
`

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    margin: 0 4px;
`

const PostHeader = styled(Modal.Header)`
  border-bottom: none;

  .post__title {
    font-size: 1.3rem;
    flex: 1 !important;
  }
`
const PostBody = styled(Modal.Body)`
  color: grey;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    font-size: 1.5rem;
    width: 100%;
    border: none;
    min-height: 150px;
    resize: none;
    

    &:focus {
      outline: none;
    }
  }
`
const PostFooter = styled(Modal.Footer)`
  border-top: none;
  margin-top: 5px !important;
  button {
    width: 100%;
  }
`

const Fileoptions = styled.div`
    display: flex;

    svg {
        height: 30px;
        width: 30px;
        padding: 5px;
        border-radius:50%;
        overflow: hidden;
        fill:  #45BD62;
        cursor: pointer;
        position: relative;

        

        &:hover {
            background-color: #CDCDCD;
        }

        &:hover::before {
              content:"test"
              position: absolute;
              bottom: 10px;
        }
    }

    input[type="file"] {
        display: none;
    }
`