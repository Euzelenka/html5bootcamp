const movieReducer = (state = [],action) => {

switch(action.type){

case 'ADD_MOVIE':
let stateCopy = [...state,action.payload];
localStorage.setItem('movies',JSON.stringify(stateCopy));
return stateCopy

case 'DELETE_MOVIE':
stateCopy = state.filter( x => x.id !== action.payload);
localStorage.setItem('movies',JSON.stringify(stateCopy));
return stateCopy
    
case 'UPDATE_MOVIE':

stateCopy = state.map((movie) => {
    const {id,title,category,rating} = action.payload;
    if(movie.id === id)
    {
        movie.title = title;
        movie.category = category;
        movie.rating = rating;
    }
    return movie;
})
localStorage.setItem('movies',JSON.stringify(stateCopy));
return stateCopy

default:
    return state;
}

}
export default movieReducer;