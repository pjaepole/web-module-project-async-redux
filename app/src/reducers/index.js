import { MEME_FETCH_START,MEME_FETCH_SUCCESS,MEME_FETCH_FAIL } from "../actions";

export const initialState={
    staticmemes:[
        {
            "id": "61579",
            "name": "One Does Not Simply",
            "url": "https://i.imgflip.com/1bij.jpg",
            "width": 568,
            "height": 335,
            "box_count": 2
        },
        {
            "id": "101470",
            "name": "Ancient Aliens",
            "url": "https://i.imgflip.com/26am.jpg",
            "width": 500,
            "height": 437,
            "box_count": 2
        }
    ],
    isFetching:false,
    error:''
};

export const reducer =(state=initialState, action)=>{
    switch (action.type){
        case MEME_FETCH_START:
            return{
                ...state,
                staticmemes:state.staticmemes,
                error:'',
                isFetching:true
            }
        case MEME_FETCH_SUCCESS:
            return{
                ...state,
                staticmemes: action.payload,
                isFetching:false,
                error:''
            }
        case MEME_FETCH_FAIL:
            return{
                ...state,
                staticmemes:state.staticmemes,
                error:action.payload,
                isFetching:false
            }
        default:
            return state
    }
}