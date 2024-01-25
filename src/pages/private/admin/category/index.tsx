import React, { useCallback, useEffect, useState } from 'react'
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
import {
  createCategory,
  deleteCategory,
  finishLoadingCategory,
  listAllCategory,
  loadingCategory,
  updateCategory,
  listByIdCategory
} from '../../../../store/category/category.reducer'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { CategoryProps, IModal } from './types'

const Category: React.FC<CategoryProps> = (props) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState<IModal>({})
  const category = useAppSelector((state) => state.category.all)
  const categoryById = useAppSelector((state) => state.category.categoryid)
  const loading = useAppSelector((state) => state.category.loading)

  const callCategories = useCallback(() => {
    dispatch(loadingCategory())
    listAllCategoryAction().then((result) => {
      if (result) {
        dispatch(listAllCategory(result))
      }
      dispatch(finishLoadingCategory())
    })
  }, [dispatch])

  useEffect(() => {
    callCategories()
  }, [callCategories])

  const toggleModal = (type = 1, data: any = {}) => {
    const id = data?.id || null
    if (id){
      dispatch(loadingCategory())
      listCategoryByIdAction(id).then((result) => {
        if (result) {
          dispatch(listByIdCategory(result))
        }
        dispatch(finishLoadingCategory())
        setModal({ type, id, status: true })
      })
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = async (form: any) => {
    switch (modal.type) {
      case 1:
        await createCategoryAction(form).then(() => {
          dispatch(loadingCategory())
          dispatch(createCategory())
          dispatch(finishLoadingCategory())
        })
        setModal({ status: false })
        return

      case 2:
        await updateCategoryAction(modal?.id as string, form).then(() => {
          dispatch(loadingCategory())
          dispatch(updateCategory())
          dispatch(finishLoadingCategory())
        })
        setModal({ status: false })
        return

      case 3:
        await removeCategoryAction(modal.id as string).then(() => {
          dispatch(loadingCategory())
          dispatch(deleteCategory(modal.id as any))
          dispatch(finishLoadingCategory())
        })
        setModal({ status: false })
        callCategories()
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
