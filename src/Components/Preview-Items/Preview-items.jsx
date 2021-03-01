import React from 'react'
import './Preview-items.scss'
import {connect} from 'react-redux'
import {addToCart} from '../../Redux/actions'
import Custom_button from '../Custom-Button/Custom_button'

const Preview_items = ({items , addToCart})=>{
    const {name,price,imageUrl} = items
    return(
        <div className='collection-item'>
           <div className='image'
           style={{backgroundImage: `url(${imageUrl})`}}
           > </div>
           <div className='collection-footer'>
               <span className='name'>{name}</span>
               <span className='price'>{price}</span>

           </div>
           <Custom_button inverted onClick={()=>addToCart(items)}>Add to Cart</Custom_button>

        </div>
    )
}
const mapDispatchwithProps = dispatch => (
    {
        addToCart: item => dispatch(addToCart(item))
    }
)

export default connect(null,mapDispatchwithProps)(Preview_items)