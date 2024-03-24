import React, { useEffect, useState } from 'react'
import {
  Filters,
  IModal,
  IProduct,
  IProductById,
  IProductSend,
  IUser,
  PageTitle
} from './types'
import { Helmet } from 'react-helmet'
import MyProductsTable from '../../../components/portal/table/product'
import TopButton from '../../../components/portal/button/top'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import {
  createProductAction,
  listAllProductsAction,
  listByIdProductsAction,
  removeProductAction,
  updateProductAction
} from '../../../store/product/product.action'
import { SContainerTop } from './styled'
import { SContainer, TitlePage } from '../../../assets/styled'
import DialogModal from '../../../components/dialog/index'
import FormCreateProduct from '../../../components/modal/product/create'
import FormUpdateProduct from '../../../components/modal/product/update'
import FormUpdateRemove from '../../../components/modal/product/remove'

const MyProductsPage: React.FC<PageTitle> = ({ title }) => {
  const [modal, setModal] = useState<IModal>({status: false, id: null, type: 1})
  const user: IUser = useAppSelector((state) => state.auth.user)
  const product: IProduct[] = useAppSelector((state) => state.product.all)
  const productById: IProductById = useAppSelector((state) => state.product.productid)
  const dispatch = useAppDispatch()

  const filters: Filters = {
    userId: user.id,
    category: '',
    offset: 0,
    limit: 1000,
    search: '',
    order: ''
  }

  useEffect(() => {
    dispatch(listAllProductsAction(filters))
  }, [dispatch])

  const toogleModal = (type = 1, id = null) => {
    if (id) {
      dispatch(listByIdProductsAction(id)).then(() =>
        setModal({ type, id, status: true })
      )
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = (form: IProductSend) => {
    switch (modal.type) {
      case 1:
        dispatch(createProductAction(form)).then(() => {
          dispatch(listAllProductsAction(filters))
          setModal({ status: false })
        })
        return

      case 2:
        dispatch(updateProductAction({ id: modal.id, data: form })).then(() => {
          dispatch(listAllProductsAction(filters))
          setModal({ status: false })
        })
        return

      case 3:
        if (modal?.id) {
          dispatch(removeProductAction(modal.id)).then(() => {
            dispatch(listAllProductsAction(filters))
            setModal({ status: false })
          })
        }
        return

      default:
        return false
    }
  }

  return (
    <>
      <Helmet title={title} />
      <SContainer>
        <SContainerTop>
          <TitlePage>Serviços</TitlePage>
          <TopButton
            title="Adicionar Serviço"
            onClick={() => toogleModal(1, null)}
          />
        </SContainerTop>
        <MyProductsTable result={product} modal={toogleModal} />
        <DialogModal
          title="Serviço"
          open={modal.status || false}
          close={closeModal}
        >
          <>
            {modal.type === 1 ? (
              <FormCreateProduct submit={submitForm} />
            ) : null}
            {modal.type === 2 ? (
              <FormUpdateProduct data={productById} submit={submitForm} />
            ) : null}
            {modal.type === 3 ? (
              <FormUpdateRemove
                open={modal.status}
                close={closeModal}
                remove={submitForm}
              />
            ) : null}
          </>
        </DialogModal>
      </SContainer>
    </>
  )
}

export default MyProductsPage
