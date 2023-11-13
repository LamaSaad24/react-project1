import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Recipe from './Recipe';

export default function Resturant() {
    const [pizza, setPizza] = useState([]);
    const [turkey, setTurkey] = useState([]);
    const [fish, setFish] = useState([]);

    const getData = async (q) => {
        const { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${q}`);
        return data;
    }

    const fetchData= async()=>{
        const pizza = await getData("pizza");
        const turkey = await getData("turkey");
        const fish = await getData("fish");

        setPizza(pizza.recipes)
        setFish(turkey.recipes)
        setTurkey(fish.recipes)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <section>
            <ul class="nav justify-content-center bg-dark position-fixed" style={{ top:'40%',right:0,zIndex:1,flexDirection:'column' }}>
                <li class="nav-item">
                    <a class="nav-link active" href="#pizza">pizza</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#fish">fish</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#turkey">turkey</a>
                </li>
            </ul>
            <div className="container">
                <h2 className='text-center text-primary' id="pizza">pizza</h2>
                <div className="row">
                    {pizza.map((recipe)=><Recipe key={recipe.id} recipe={recipe} />)}
                </div>
                <hr />
                <h2 className='text-center text-primary' id="fish">fish</h2>
                <div className="row">
                    {fish.map((recipe)=><Recipe key={recipe.id} recipe={recipe} />)}
                </div>
                <hr />
                <h2 className='text-center text-primary'  id="turkey">turkey</h2>
                <div className="row">
                    {turkey.map((recipe)=><Recipe key={recipe.id} recipe={recipe} />)}
                </div>
            </div>
        </section>
    )
}
