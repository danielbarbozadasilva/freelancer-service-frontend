import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import {
  listAllCategoryAction,
  listCategoryByIdAction,
  createCategoryAction,
  updateCategoryAction,
  removeCategoryAction
} from '../../../../store/category/category.action'
import Title from '../../../../components/dashboard/title/index'
import DataList from '../../../../components/dashboard/admin/category/index'
import DialogModal from '../../../../components/dialog/index'
import FormCategoryRegister from '../../../../components/dashboard/admin/category/form/register/index'
import FormCategoryUpdate from '../../../../components/dashboard/admin/category/form/update/index'
import Remove from '../../../../components/dashboard/admin/category/form/remove/index'
import { SButton } from '../styled'
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { CategoryProps, IModal } from './types'

const Category: React.FC<CategoryProps> = (props) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState<IModal>({})
  const category = useAppSelector((state) => state.category.all)
  const categoryById = useAppSelector((state) => state.category.categoryid)
  const loading = useAppSelector((state) => state.category.loading)

  useEffect(() => {
    dispatch(listAllCategoryAction())
  }, [dispatch])

  const toggleModal = (type = 1, data: any = {}) => {
    const id = data?.id || null
    if (id) {
      dispatch(listCategoryByIdAction(id))
      setModal({ type, id, status: true })
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = async (form: any) => {
    switch (modal.type) {
      case 1:
        dispatch(createCategoryAction(form))
        setModal({ status: false })
        return

      case 2:
        dispatch(updateCategoryAction({ id: modal?.id, data: form }))
        setModal({ status: false })
        return

      case 3:
        dispatch(removeCategoryAction(modal.id as string))
        setModal({ status: false })
        dispatch(listAllCategoryAction())
        return

      default:
        return false
    }
  }

  const actions = () => (
    <SButton onClick={() => toggleModal(1, null)}>Novo</SButton>
  )

  return (
    <>
      <Helmet title={props.title} />
      <Title title="Categorias" actions={actions} />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          {!category?.length ? (
            <h6>Não há categorias disponiveis</h6>
          ) : (
            <DataList data={category} loading={loading} modal={toggleModal} />
          )}
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
            <Remove
              open={!!modal}
              close={closeModal}
              remove={submitForm as any}
            />
          ) : null}
        </>
      </DialogModal>
    </>
  )
}

export default Category
