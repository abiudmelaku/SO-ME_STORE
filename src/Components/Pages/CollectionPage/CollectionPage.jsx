import React from 'react'

// import {createStructuredSelector} from 'reselect'
import Collections from '../../Collections/Collections'
import CollectionSection from '../../Pages/CollectionSectionPage/CollectionSection'
import {Route,Switch} from "react-router-dom";

// import{collectionDataSelect} from '../../../Selectors/Selectors'


const CollectionPage = ({match , sectionData}) => {
    // console.log(match)
        return(
            <div>

                     <Route  exact path={`${match.path}`} component={Collections}/>
                     <Route   path={`${match.path}/:sectionId`} component={CollectionSection}/>
                   

            </div>
            
           
        )
    
}




export default CollectionPage