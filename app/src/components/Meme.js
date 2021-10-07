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
        <div> <button onClick={handleMemeButtonClick}>get new memes</button>
           
            <p>this is from meme component</p>
            {console.log('staticmemes',props.staticmemes)}
            {props.staticmemes.map(staticmeme=>(
                
                <div key={staticmeme.id}>
                <img src={staticmeme.url}></img>
                <h3>{staticmeme.name}</h3>
               
                </div>
            ))}
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