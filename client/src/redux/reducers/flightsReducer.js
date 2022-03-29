const initialData = {
    flights : [],

};

export const flightsReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_ALL_FLIGHTS' : {
             return{
                 ...state,
                 flights : action.payload
             }
         }
         
         default:return state
     }

}

