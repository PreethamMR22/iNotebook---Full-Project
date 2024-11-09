import React, { useContext } from 'react'
import Notes from '../component/Notes'
const Home = (props) => {
  const {showAlert}=props;
  return (
    <div className='my-3'>    
<Notes showAlert={showAlert}/>
    </div>
  )
}

export default Home
