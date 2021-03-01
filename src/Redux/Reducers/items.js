import section from '../../utils/sections'
const sections = {
    item_sections:section

}
const itemReducer = (INITIAL_STATE = sections , action)=>{
    switch(action.type){
        default:
            return(
                {
                    ...INITIAL_STATE,
    
                }

            )
            
    }
}

export default itemReducer;