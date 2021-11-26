import {Button,Modal, Form} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import {addItem} from '../DataModel';
import { FaFeatherAlt } from "react-icons/fa";


function ModalField(props){

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    const [text, setText] = useState('');
    const [header, setHeader] = useState(date);
    const [name, setName] = useState('')
    let handleSubmit = ()=>{
        if(header === '' || text === ''){
            alert("请写标题和内容哦")
        }else{
            let data = {
                'header': header,
                'text': text,
                'name': name,
                'readStatus': false
            }
            addItem(data);
            props.onHide();
        }

    }

    let handleClose=()=>{
        props.onHide();
    }
    return(
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop={props.backdrop}
            keyboard={props.keyboard}
            centered
        >
        <Modal.Body className="modalBack">
            <Button variant="btn bg-transparent" className="mdcloseBtn" onClick={handleClose}>
                X
            </Button>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>收信人</Form.Label>
                    <Form.Control type="text"
                                  className="transparent-input"
                                  value={name}
                                  onChange={(e)=>setName(e.target.value)}/>
                    <Form.Label>标题</Form.Label>
                    <Form.Control type="text"
                                  className="transparent-input"
                                  value={header}
                                  onChange={(e)=>setHeader(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>正文</Form.Label>
                    <Form.Control as="textarea" className="transparent-input" rows={10} onChange={(e)=>setText(e.target.value)}/>
                </Form.Group>
            </Form>
            <Button variant="btn bg-transparent"  className="mdsubmitBtn" onClick={handleSubmit}>
                <FaFeatherAlt/> 投送
            </Button>

        </Modal.Body>

        </Modal>
    )
}

export default ModalField;