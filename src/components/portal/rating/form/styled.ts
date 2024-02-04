import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'block',
    textAlign: 'justify',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: '20px',
    padding: '20px',
    border: '0.5px solid #ccc',
    [theme.breakpoints.down('md')]: {
      margin: '70px 150px 100px 150px'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '30px auto'
    }
  },
  title: {
    fontSize: 16,
    color: '#473F57'
  },
  notFound: {
    margin: '50px 0px 160px 145px'
  },
  text: {
    marginBottom: 12
  }
}))

export const SForm = styled(Form)`
  width: 100%;
  margin: 5% 0%;
  padding-bottom: 5%;
`

export const SButton = styled.button`
  display: flex;
  text-align: center;
  font-size: 16px;
  border: 1px solid #484058;
  padding: 5px 25px;
  background-color: #484058;
  color: #f8f9fa;
  margin: 30px 0px;
  &:hover {
    text-decoration: underline;
    background-color: #ccc;
    transition: 0.5s ease-out;
  }
  :disabled {
    text-align: center;
    font-size: 16px;
    border: 1px solid #484058;
    background-color: white;
    padding: 5px 25px;
    color: #473f56;
    margin: 30px 0px;
  }
`
