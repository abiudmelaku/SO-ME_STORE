import {createSelector} from 'reselect'
////////// Cart SELECTORS ////////
 export const cartSelect = st => st.cart 


 export const cartItemSlelect = createSelector([cartSelect ] , (item) =>(
    item.items_on_cart
));
export const cartVisibilitySelect = createSelector([cartSelect ] , (visible) =>(
    visible.visibility
));

 export const cartItemListSelect = createSelector([cartItemSlelect] , (itemLst) =>(
    itemLst.reduce((acc,currVal) =>(
        acc + currVal.quantity
    ),0)
))
export const totalCostSelect = createSelector([cartItemSlelect] , (itemLst) =>(
    itemLst.reduce((acc,cost) =>(
        acc + (cost.price * cost.quantity)
    ),0)
))

////////// User SELECTORS ////////
export const userSelect = st => st.user
export const currentUserSelect = createSelector([userSelect] , user =>(
    user.currentUser
))


////////// Section SELECTORS ////////
export const sectionLstSelect = st=>st.item
export const sectionsSelect = createSelector([sectionLstSelect] , itemLst => (
   itemLst.item_sections 
))


////////// Collection SELECTORS ////////

export const collectionSelect = st => st.collection
export const collectionDataSelect = createSelector([collectionSelect] , coll => (
    coll.collections 
 ))



 export const sectionDataSelect = id => createSelector([collectionDataSelect] , sectionData =>(
     sectionData[id]
 ))

 export const switchObjToArraySelect = createSelector([collectionDataSelect],(sectionData) =>{
     const keysLst = Object.keys(sectionData)
     return(
         keysLst.map(key => sectionData[key])
     )

 })



