import React, { PureComponent } from 'react'; 
import Row from '../playlist/components/row'
import './collection.css'
import Search from '../widgets/containers/search-container'


class Collection extends PureComponent{
    render(){
        const byRows = this.props.data.categories;
        return (
            <div className="Collection" >
                <Search />
                {
                    byRows.map((item)=>{
                        return < Row 
                                data = {item} 
                                key = {item.id}
                                handleClick = {this.props.handleClick}/>
                    })
                }
            </div>
        )
 
    }
}

export default Collection;