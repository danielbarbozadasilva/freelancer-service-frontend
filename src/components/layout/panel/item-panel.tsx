import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { Link } from '@reach/router'
import { useSelector } from 'react-redux'
import { Menu } from '../../../routers'
import {SListItemIcon, SListItemText} from './styled'

const ListMenu = () => {  
  // const { permissions }  = useSelector((state) => state.auth.user)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (event:any, index:any) => {
    setSelectedIndex(index)
  }

  const authorizedRoutes = Menu

  return (
    <div>
     {authorizedRoutes.map(({ title, route, icon }, i) => (
        <ListItem
          button
          component={Link}
          to={'/private' + route}
          key={i}
          selected={selectedIndex === i}
          onClick={(event) => handleListItemClick(event, i)}
        >
          <SListItemIcon>{icon}</SListItemIcon>
          <SListItemText primary={title} />
        </ListItem>
      ))} 
    </div>
  )
}

export default ListMenu
