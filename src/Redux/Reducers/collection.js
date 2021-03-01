import collData from '../../utils/shopData'
const coll = {
    collections:collData

}
const collectionReducer = (INITIAL_STATE = coll , action)=>{
    switch(action.type){
        default:
            return(
                {
                    ...INITIAL_STATE,
    
                }

            )
            
    }
}

export default collectionReducer;
