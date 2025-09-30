import React, {useEffect, useState} from 'react';


function ProfileGenerator() {

    const [profile, setProfile] = useState([]);
    const [inputValue, setInputValue] = useState("");


   async function  GetData(count) {
        const ran = Math.floor( 1 + Math.random() * 10000 )
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();
          setProfile(data)
    console.log(data)

    }
  

    useEffect(()=>{
        GetData(10);
    },[])
    
  

    return ( 
  
        <div>
            <div className='searchBar'>
                <input type='text' 
                onChange={(e) => {setInputValue(e.target.value)}} 
                value={inputValue}
                placeholder='Enter a number to view profiles'
                ></input>
                <button onClick={()=> GetData(Number(inputValue))} >Search</button>
            </div>
            
           <div className='profile'>
                {
                    profile.map((value)=> {
                      return(<div className='card' key={`${value.id}`}>
                                <img src={value.avatar_url} alt='img'></img>
                                <p>{value.login.charAt(0).toUpperCase()+value.login.slice(1)}</p>
                                <a href={value.html_url}>Visit Profile</a>
                            </div>
                      )    
                    })
                }
               
            </div> 

 </div>
     );
}

export default ProfileGenerator;