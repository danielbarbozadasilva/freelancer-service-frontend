import React, { useEffect, useCallback } from 'react'
import { Button, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
// import {
//   listAllCategories,
//   createCategory,
//   updateCategory,
//   editCategory,
//   removeCategory
// } from '../../../../store/category/category.action'
import Title from '../../../../components/dashboard/title/index'
import DataList from '../../../../components/dashboard/admin/category/index'
import DialogModal from '../../../../components/dialog/index'
import FormCategoryRegister from '../../../../components/dashboard/admin/category/form/register/index'
import FormCategoryUpdate from '../../../../components/dashboard/admin/category/form/update/index'
import Remove from '../../../../components/dashboard/admin/category/form/remove/index'
import { SButton } from '../styled'
import { Helmet } from 'react-helmet'

const Category = (props:any) => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState({})
  // const categories = useSelector((state) => state.category.all)
  // const categoryById = useSelector((state) => state.category.categoryById)
  // const loading = useSelector((state) => state.category.loading)

  // const callCategories = useCallback(() => {
  //   dispatch(listAllCategories())
  // }, [dispatch])

  // useEffect(() => {
  //   callCategories()
  // }, [callCategories])

  // const toogleModal = (type = 1, id = null) => {
  //   if (id) {
  //     dispatch(editCategory(id)).then(() =>
  //       setModal({ type, id, status: true })
  //     )
  //   } else {
  //     setModal({ type, id, status: true })
  //   }
  // }

  // const closeModal = () => setModal({ status: false, type: 1 })

  // const submitForm = (form) => {
  //   switch (modal.type) {
  //     case 1:
  //       dispatch(createCategory(form))
  //       setModal(false)
  //       return

  //     case 2:
  //       dispatch(updateCategory(modal.id, form))
  //       setModal(false)
  //       return

  //     case 3:
  //       dispatch(removeCategory(modal.id)).then(() => setModal(false))
  //       return

  //     default:
  //       return false
  //   }
  // }

  // const actions = () => (
  //   <SButton onClick={() => toogleModal(1, null)}>Novo</SButton>
  // )

  return (
    <>
      <Helmet title={props.title} />
      {/* <Title
        title="Categorias"
        subTitle="Página de Categorias"
        actions={actions}
      />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={categories} loading={loading} modal={toogleModal} />
        </Grid>
      </Grid>

      <DialogModal
        title="Categoria"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          {modal.type === 1 ? (
            <FormCategoryRegister submit={submitForm} />
          ) : modal.type === 2 ? (
            <FormCategoryUpdate submit={submitForm} data={categoryById} />
          ) : modal.type === 3 ? (
            <Remove open={!!modal} close={closeModal} remove={submitForm} />
          ) : null}
        </>
      </DialogModal> */}
    </>
  )
}

export default Category
