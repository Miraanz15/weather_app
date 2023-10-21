import React, {useState, useEffect} from 'react';
import styles from './css/TempApp.module.css';

const TempApp = () => {
    const [city, setCity] = useState('');
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
         const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=facda1a8f6127a406b3cb2fb384e40c7`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

         }

        fetchApi();
    }, []);
  
    const onChangeHandler = (event) => {
          console.log(event.target.value)
          setCity(event.target.value)
    }

  return (
    <>
    <div className={styles.box}>
        <div className={styles.inputData}>
            <input 
            className={styles.inputField}
            type='search' 
            value={city} 
            placeholder='Enter the city' 
            onChange={onChangeHandler}/>
        </div>
        <div className={styles.info}>
             <h2 className={styles.location}>
                 <i className="fa-solid fa-street-view"></i> {city }</h2>
             <h2 className={styles.temp}>Celsius</h2>
             <h3 className={styles.tempmin_max}>Min | Max</h3>
        </div>  
        <div className={`${styles.wave} ${styles.one}`}></div>
        <div className={`${styles.wave} ${styles.two}`}></div>
        <div className={`${styles.wave} ${styles.three}`}></div>
    </div>
    </>
  )
}

export default TempApp;