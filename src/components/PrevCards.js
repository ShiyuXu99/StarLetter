import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../App.css';
import {getPrevData} from '../DataModel';
import Cards from "./card";
import { IoReturnDownBackOutline } from "react-icons/io5";



export function CardList({data,setShowList, handleOpenItem,setItem}){
    let handleData = (item)=>{
        setItem(item);
        handleOpenItem();
    }
    return(
        <div>
            <div className="scrollComponent">
                <Card.Body>
                    {data.map((item) =>(
                            <div>
                                <Card.Text>
                                    <button
                                        className="machineBack"
                                        onClick={() =>handleData(item)}
                                    >{item.header}</button>
                                </Card.Text>
                            </div>
                        )
                    )}
                </Card.Body>
            </div>
        </div>
    )
}

function PrevCards(props){
    const [data,setData] = useState([])
    const [showList, setShowList] = useState(true);
    const [showItem,setShowItem] = useState(false);
    const [item, setItem] = useState({})
    let handleClose = ()=>{
        props.close();
    }

    const handleOpenItem = ()=>{
        setShowList(false);
        setShowItem(true)

    }
    const handleBack=()=>{
        setShowList(true);
        setShowItem(false);
    }

    useEffect(()=>{
        getPrevData().then((res)=>{
            setData(res)
        })
    },[])



    return(
        <div className="card">
            <Card>
                <button className= "cardCloseBtn" onClick={handleClose}>X</button>
                { showList ? <CardList
                    setShowList = {setShowList}
                    data = {data}
                    handleOpenItem = {handleOpenItem}
                    setItem = {setItem}
                />: null }
                { showItem ?
                    <div>
                    <button className = "machineBack" onClick={handleBack}><IoReturnDownBackOutline/>主页</button>
                    <div className = "scrollComponent">
                        <Card.Body>
                                <div>
                                    <Card.Title>{item.header}</Card.Title>
                                    <Card.Text>
                                        {item.text}
                                    </Card.Text>
                                </div>
                    </Card.Body>
                    </div>
                    </div>
                    :null}
            </Card>
        </div>
    )
}
export default PrevCards;