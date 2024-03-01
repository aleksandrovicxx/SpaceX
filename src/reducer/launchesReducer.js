export const initialState = {
  launches: [],
  loading: false,
  error: null,
};

 const launchesReducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_LAUNCHES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_LAUNCHES_SUCCES' :
            return {
                ...state,
                loading: false,
                launches: action.paylaod
            }
        case 'FETCH_LAUNCHES_FAILURE' :
            return {
                ...state,
                loading: false,
                error: action.paylaod
            }

        default:
            return state
    }
}

export default launchesReducer