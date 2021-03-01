import React from 'react'
import './menuItems.scss'
import { Route, Link , withRouter} from "react-router-dom";
import Custom_button from '../Custom-Button/Custom_button'
const Menu_Items = ({title , imageUrl ,size,linkUrl,history,match}) => 

    (
        <div className = {`${size} menu-item`}  style = {{backgroundImage:`url(${imageUrl})`}} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className = 'background-image'  style = {{backgroundImage:`url(${imageUrl})`}}>
            </div>
                <div className = 'content' >
                    <h1 className = 'title'>{title}</h1>
                    <span className = 'subtitle'>Shop now</span>
                
                </div>
          

        </div>
        

                
    )

export default withRouter(Menu_Items);