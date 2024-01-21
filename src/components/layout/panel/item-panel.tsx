import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Menu } from '../../../routers';
import { useAppSelector } from '../../../hooks';


const ListMenu: React.FC = () => {
  const typeUser = useAppSelector((state) => state.auth.user.permissions);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleListItemClick = (event: React.MouseEvent, index: number) => {
    setSelectedIndex(index);
  };

  const authorizedRoutes = typeUser?.length? Menu.filter((route) => route.authorization.includes(typeUser[0])) : [];

  return (
    <div>
      {authorizedRoutes.map(({ title, route, icon }, i) => (
        <ListItem
          button
          component={Link}
          to={'/dashboard'+ route}
          key={i}
          selected={selectedIndex === i}
          onClick={(event) => handleListItemClick(event, i)}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </div>
  );
};

export default ListMenu;