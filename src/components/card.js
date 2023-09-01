import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../App.css';
import {getData, handleUpdate} from '../DataModel';


function Cards({instantlyCloseCard}){
    const [data,setData] = useState([])

    useEffect(()=>{
        getData().then(res=>{
            if(res.length === 0){
                let data = {
                    'header': '嘿嘿',
                    'text': '已经看完所有的啦',
                }
                setData([data]);
            }
            else{
                setData(res)
                for(let item of res){
                    handleUpdate(item.id, item)
                }
            }
        })
    },[])

    return(
        <div className="card">
            <Card>
                <button className= "cardCloseBtn" onClick={instantlyCloseCard}>X</button>
                <Card.Body>
                        {data.map((item) =>(
                            <div className= "scrollComponent">
                            <Card.Title>{item.header}</Card.Title>
                                <Card.Text>
                                    {item.text}
                            </Card.Text>
                            </div>
                            )
                        )}
                </Card.Body>
            </Card>

        </div>
    )
}
export default Cards;