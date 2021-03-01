import React from 'react'
import {connect} from 'react-redux'
import Preview_items from '../../Preview-Items/Preview-items'
import { sectionDataSelect } from '../../../Selectors/Selectors';
import './CollectionSection.scss'
const CollectionSection = ({sectionData}) => {
        // console.log(sectionData)
        const{id , title} = sectionData
    return(
        <div className = 'collection-page'>
            <h1 className='title'>
                {title}
            </h1>
            <div className='items'>
                {
                sectionData.items.map(item =>(
                
                    <Preview_items key={item.id} items={item}/>
                
                ))
            }

            </div>
          
           
        
    </div>
    )

}
const mapStateToProps = (st , pr) =>{
    return(
        {
            sectionData:sectionDataSelect(pr.match.params.sectionId)(st)
        
        }

    )
   
}
    

export default connect(mapStateToProps)(CollectionSection);