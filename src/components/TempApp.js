import React, {useState, useEffect} from 'react';
import styles from './css/TempApp.module.css';

const TempApp = () => {
    const [city, setCity] = useState('');   // getting value from user through input
    const [search, setSearch] = useState('');    // setting value to get respective city from api
    const [value, setValue] = useState({});            // setting api data to be used in the card
    const [available, setAvailable] = useState(false);  // to check if api received is valid or not
    
     


    useEffect(() => {
         const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=facda1a8f6127a406b3cb2fb384e40c7`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if(Object.keys(data).length > 2 ){
                setValue(data);
                setAvailable(true);
            }
            else{
                setValue({});
                setAvailable(false);
            }
            
         }

        fetchApi();
    }, [search]);

    
    const onChangeHandler = (event) => {
          console.log(event.target.value)
          setCity(event.target.value)
          setSearch(event.target.value);
    }


  return (
    <>
    <div className={styles.box}>
        <h1 className={styles.headingTop}>Live Weather</h1>
        <div className={styles.inputData}>
            <label for="inputField" id={styles.inputFieldLabel}>City <br /></label>
            <input 
            id={styles.inputField}
            type='search' 
            value={city} 
            placeholder='Enter the city' 
            onChange={onChangeHandler}/>
        </div>

        {available ?  (<div className={styles.info}>
             <h2 className={styles.location}>
                 <i className="fa-solid fa-street-view"></i>      {value.name}</h2>
             <h2 className={styles.temp}>{(value.main.temp - 273.15).toFixed(2)} &deg; Cel</h2>
             <h3 className={styles.tempmin_max}>Min {(value.main.temp_min - 273.15).toFixed(2)} &deg; Cel | Max {(value.main.temp_max - 273.15).toFixed(2)} &deg; Cel</h3>
        </div>) : (search ? (<div className={styles.message}>Sorry, City not found</div>) : (<div className={styles.message}>Please enter the City name</div>)  )}

    </div>
    </>
  )
}

export default TempApp;