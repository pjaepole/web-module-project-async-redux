import axios from 'axios'

export const MEME_FETCH_START ="MEME_FETCH_START";
export const MEME_FETCH_SUCCESS ="MEME_FETCH_SUCCESS";
export const MEME_FETCH_FAIL ="MEME_FETCH_FAIL";


export const getMeme=()=>dispatch=>{
    dispatch(memeFetchStart());

    axios.get('https://api.imgflip.com/get_memes')
    .then(resp=>{
    //    console.log('from action',resp.data.data.memes)
        dispatch(memeFetchSuccess(resp.data.data.memes))
    })
    .catch(error=>{
        dispatch(memeFetchFail(error))
    })
}


export const memeFetchStart=()=>{
    return ({type:MEME_FETCH_START})
}

export const memeFetchSuccess=(meme)=>{
    return ({type:MEME_FETCH_SUCCESS,payload:meme})
}

export const memeFetchFail=(error)=>{
    return ({type:MEME_FETCH_FAIL, payload:error})
}