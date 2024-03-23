import React, { useEffect, useState } from 'react'
import {
  listAllCategoryAction,
  listCategoryByIdAction,
  createCategoryAction,
  updateCategoryAction,
  removeCategoryAction
} from '../../../../store/category/category.action'
import Title from '../../../../components/dashboard/title/index'
import DataListComponent from '../../../../components/dashboard/admin/category/index'
import DialogModal from '../../../../components/dialog/index'
import FormCategoryRegister from '../../../../components/dashboard/admin/category/form/register/index'
import FormCategoryUpdate from '../../../../components/dashboard/admin/category/form/update/index'
import Remove from '../../../../components/dashboard/admin/category/form/remove/index'
import { SButton } from '../styled'
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { CategoryProps, ICategory, IModal } from './types'

const Category: React.FC<CategoryProps> = (props) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState<IModal>({})
  const category: ICategory[] = useAppSelector((state) => state.category.all)
  const categoryById: ICategory = useAppSelector((state) => state.category.categoryid)
  const loading: boolean = useAppSelector((state) => state.category.loading)

  useEffect(() => {
    dispatch(listAllCategoryAction())
  }, [dispatch])

  const toggleModal = (type = 1, data: ICategory): void => {
    const id = data?.id || null
    if (id) {
      dispatch(listCategoryByIdAction(id)).then(() =>
        setModal({ type, id, status: true })
      )
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = async (formData: FormData): Promise<void> => {
    switch (modal.type) {
      case 1:
        dispatch(createCategoryAction(formData)).then(() => {
          setModal({ status: false })
          dispatch(listAllCategoryAction())
        })

        break

      case 2:
        dispatch(updateCategoryAction({ id: modal.id, data: formData })).then(() => {
            setModal({ status: false })
            dispatch(listAllCategoryAction())
          }
        )
        break

      case 3:
        dispatch(removeCategoryAction(modal.id)).then(() => {
          setModal({ status: false })
          dispatch(listAllCategoryAction())
        })
        break

      default:
        break
    }
  }

  const actions = (): JSX.Element => {
    return (
      <>
        <SButton onClick={() => toggleModal(1, null)}>Novo</SButton>
      </>
    )
  }

  return (
    <>
      <Helmet title={props.title} />
      <Title title="Categorias" actions={actions} />
      {!category?.length ? (
        <h6>Não há categorias disponiveis</h6>
      ) : (
        <DataListComponent
          data={category}
          loading={loading}
          modal={toggleModal}
        />
      )}

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
      </DialogModal>
    </>
  )
}

export default Category
