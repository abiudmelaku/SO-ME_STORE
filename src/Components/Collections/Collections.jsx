import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Preview from '../Preview_Collections/previewCollections'
import{switchObjToArraySelect} from '../../Selectors/Selectors'
import { createPartialResponse } from 'workbox-range-requests'

const Collections = ({coll_data}) =>{
    console.log(coll_data)
    return(coll_data.map(({id,...spreadProps}) =>  <Preview key={id} {...spreadProps}/>))

}

const mapStateToProps = createStructuredSelector(
    {
        coll_data:switchObjToArraySelect
    }
)
export default connect(mapStateToProps)(Collections);