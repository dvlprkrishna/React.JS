import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom';
import NotFound from '../component/NotFound';
import DefinitionSearch from '../component/DefinitionSearch';

export default function Definition() {
  const navigate = useNavigate();

    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false)
    let {search} = useParams();
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ search;


    useEffect(()=>{
      fetch(url)
      .then((response) => {
        if(response.status === 404){
          setNotFound(true)
        } else {
          return response.json()
        }

        if(!response.ok){
          setError(true)
          throw new Error('something went wrong')
        }
      })
      .then((data) => {
        setWord(data[0].meanings)
      })
      .catch((e)=>{
        console.log(e.message)
      })

    }, [])

    if(notFound){
      return (
        <>
          <NotFound/>
          <Link to='/dictionary'>Search another Defination</Link>
        </>
        )
    }
    if(error){
      return (
        <>
          <p>something went wrong, try again?</p>
          <Link to='/dictionary'>Search another Defination</Link>
        </>
        )
    }

      return (
        <>

            {word ? <>
              <h1>Here is a Definition: </h1>
                {word.map((meaning)=>{
                return <p key={uuidv4()}>{meaning.partOfSpeech} : {meaning.definitions[0].definition}</p>
              })}
              <p>Search again - </p>
              <DefinitionSearch/>
            </> :  <p>Searching...</p>}

        </>
      )

}

