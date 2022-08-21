import React from "react";
import SoccerFieldImg from "./../images/SoccerField.png"
import defaultShirt from "./../images/default_shirt.png"

export default function SoccerField(){
    return(
        <div
        className="flex flex-col py-10 px-32 w-3/5 min-w-fit bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SoccerFieldImg})` }}

        >
            <div
            className="flex flex-row justify-around"
            >
                <img className="w-1/4" src={defaultShirt} alt="default T-shirt"/>
                <img className="w-1/4" src={defaultShirt} alt="default T-shirt"/>
            </div>
            <div
            className="flex flex-row justify-around"
            >
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
            </div>
            <div
            className="flex flex-row justify-around"
            >
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
            </div>
            <div
            className="flex flex-row justify-around"
            >
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
                <img src={defaultShirt} alt="default T-shirt"/>
            </div>
        </div>
    )
}