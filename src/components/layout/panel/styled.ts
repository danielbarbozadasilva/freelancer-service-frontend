import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import styled from 'styled-components'

export const SListItemIcon = styled(ListItemIcon)`
  color: #aab4c1!important;
`
export const SListItemText = styled(ListItemText)`
  color: #aab4c1;
  &:hover {
    text-decoration: underline;
    color: #aab4c1;
    transition: 0.5s ease-out;
  }
`
