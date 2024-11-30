import React from "react";
import "./Card.css"
export default function Card(){
    return(
        <div className="Card">
            <div className="Imgpart">
                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="Test">
                <h3>Camera</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Rs-30000</p>
            </div>
        </div>
    )
}