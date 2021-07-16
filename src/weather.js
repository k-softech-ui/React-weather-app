import React, {useState} from 'react'
import {Button} from '@material-ui/core'

const Weather = () =>{
    const [city, setCity] = useState("");
    const [result, setResult] = useState("")
    const changeHandler = e => {
        setCity(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response => response.json()
        ).then(data => {
            const kelvin = data.main.temp;
            const celsius = kelvin-273.15
            console.log(celsius)
            setResult("Temparature at "+city +"\n "+Math.round(celsius)+" °C");
            setCity('');
        }).catch(err => console.log(err))
        }
    return (
        <div>
            <center>
                <div className = 'card'>
                    <div className='card-body'>
                        <h2 className='card-title'>Weather APP</h2>
                        <form onSubmit = {submitHandler}>
                            <input type='text' name="city" onChange={changeHandler} /> <br />
                            <Button variant="contained" color="secondary" style={{margin:'15px'}}>Get Temperature</Button>
                        </form>
                        <h1>{result}</h1>
                    </div>
                </div>
            </center>

        </div>
    )
}
export default Weather



