import React, { useState } from 'react'
import styled from "styled-components"
import { Modal , Button } from "react-bootstrap"

function InputBox() {



    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <InputContainer className="shadow">
      <FormContainer>
          <ImageContainer>
            <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
          </ImageContainer>
          <Form>
              <div className="input" onFocus={handleShow}>
                What on your mind, Ibrahim
              </div>
          </Form>
      </FormContainer>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
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
        border: none;
        background: #F0F2F5;
        border-radius: 18px;
        min-height: 40px;
        padding: 5px 10px;

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