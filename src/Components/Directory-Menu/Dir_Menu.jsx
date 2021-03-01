import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {sectionItems} from '.././../Redux/actions'
import {sectionsSelect} from '../../Selectors/Selectors'
import './dir_menu.scss';
import Menu_Items from '../Menu-item/Menu_Items'
const  Dir_Menu =  ({item_section}) =>{
        return(
            <div className = 'directory-menu'>
                {
                    item_section.map(({id,...spreadComponents },i) =>{ 
                        return(
                            <Menu_Items key = {id} {...spreadComponents} />
                        )
                    })
                }

            </div>
        )
    
}
const mapStateToProps = createStructuredSelector({
  item_section:sectionsSelect
})
export default  connect(mapStateToProps)(Dir_Menu);