import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';



const DefinitionSearch = () => {

    const [word, setWord] = useState('');
    const navigate = useNavigate();

    return(
        <form className='flex justify-center space-x-2 max-w-[300px]' onSubmit={()=>{
            navigate('/dictionary/'+word)
          }}>
              <div style={{textAlign: 'center'}}>

                  <input type="text" placeholder='Enter a word to search' className='shrink mr-2 min-w-0 px-2 rounded py-1' onChange={(e)=>{
                      setWord(e.target.value)
                  }}/>
                  <Button className='bg-transparent-400 hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded' type='submit'>Search</Button>
              </div>
          </form>
    )
}
export default DefinitionSearch