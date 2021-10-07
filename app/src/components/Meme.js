import React from 'react'
import {connect} from 'react-redux'
import { getMeme,memeFetchStart } from '../actions'
import { reducer,initialState } from '../reducers'
const Meme =(props)=>{
    // console.log(props)
// const [state,dispatch]=useReducer(reducer,initialState)

const handleMemeButtonClick=()=>{
    // console.log(props)
  props.getMeme()
} 
    return (
        <div
           
         > <button onClick={handleMemeButtonClick}>Two is not enough, GET 100 MEMES</button>
           
            <p></p>
           <div
           style={{
               display:'flex',
               flexWrap:'wrap',
               
               
           }}>
                    {props.staticmemes.map(staticmeme=>(
                        
                            <div style={{
                                display:'flex', 
                                justifyContent:"center", 
                                flexDirection:'column',
                                alignItems:'center',
                                flexWrap:'wrap'
                                
                                ,width:'25%'
                                ,margin:' 3% 3%'
                            }} 
                                key={staticmeme.id}>
                            <img style={{width: '250px'}} src={staticmeme.url}></img>
                            <h3>{staticmeme.name}</h3>               
                            </div>
                    
                    ))}
            </div>
        </div>
    )
}

const mapStateToProps= state=>{
//    console.log(state)  
   return{
       staticmemes:state.staticmemes,
       isFetching:state.isFetching,
       error:state.error
    }
}

export default connect(mapStateToProps,{getMeme,memeFetchStart})(Meme)