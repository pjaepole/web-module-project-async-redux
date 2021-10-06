

const initialState={
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
    error:'',
    memes:[]
};

export const reducer =(state=initialState, action)=>{
    switch (action.type){
        default:
            return state
    }
}