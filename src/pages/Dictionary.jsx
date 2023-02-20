import React, {useEffect, useState} from 'react'

const Dictionary = () => {
const [word, setWord] = useState('');

useEffect(()=>{
    console.log('updated'+ word)
});

  return (
    <>
        <div style={{textAlign: 'center'}}>
            <p>Searching Dictionary for the word - {word}</p>
            <input type="text" placeholder='Text' className='my-3' onChange={(e)=>{
                setWord(e.target.value)
            }}/>
        </div>
    </>
  )
}

export default Dictionary