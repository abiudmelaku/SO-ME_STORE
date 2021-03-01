import React from 'react'
import Preview_items from '../Preview-Items/Preview-items'
import './previewCollections.scss'

const Preview = ({title , items})=>{
    return(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((el,idx) => (idx < 4)).map( items => <Preview_items key={items.id} items={items}/>)
            }
           
        </div>
        


    </div>
    )
}
export default Preview;