import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Capital() {

    const capitals =  useLoaderData()


    // useEffect( () => {

    //     fetch('https://restcountries.com/v3.1/independent?status=true&fields=languages,capital')
    //     .then(res => {

    //         if(!res.ok){

    //             throw new Error('failed to fetch the data')

    //         }
    //         return res.json();
    //     })
    //     .then(data => {
      
    //     const capitals = data.map(country => country.Capital);
        
    //     setCapitals(capitals)

    // })
    // .catch(err => {

    //     console.error('error fetching the data' , err);
    // });

    // } ,[])

  return (
    <div>
            <h2 style={{ textAlign: 'center' }}>All Capitals : {capitals.Capital}</h2>
        </div>
  )
}

export default Capital

export const userwithLoader = async () => {

    const response = await fetch('https://restcountries.com/v3.1/independent?status=true&fields=languages,capital')
    
    return response.json()
  
  }