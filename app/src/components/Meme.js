import React from 'react'
import {connect} from 'react-redux'
const Meme =(props)=>{
    // console.log(props.staticmemes)
    return (
        <div>
            <p>this is from meme component</p>
            {props.staticmemes.map(staticmeme=>(
                <div>
                <img src={staticmeme.url}></img>
                <h3>{staticmeme.name}</h3>
                <button>get new meme</button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps= state=>{
//    console.log(state)  
   return{
       staticmemes:state.staticmemes
    }
}

export default connect(mapStateToProps)(Meme)