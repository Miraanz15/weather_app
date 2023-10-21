import React, {useState, useEffect} from 'react';
import styles from './css/TempApp.module.css';

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState(null);

    useEffect(() => {
       
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
                 <i class="fa-solid fa-street-view"></i> {city }</h2>
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