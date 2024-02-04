import React, { useCallback, useEffect } from 'react'
import { Filters, IProduct, IUser, PageTitle } from './types'
import { Helmet } from 'react-helmet'
import MyProductsTable from '../../../components/portal/table/product'
import BasicButton from '../../../components/portal/button'
import {
  finishLoadingProduct,
  listAllProduct,
  loadingProduct
} from '../../../store/product/product.reducer'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { listAllProductsAction } from '../../../store/product/product.action'
import { ContainerTop, ContainerTable } from './styled'
import Title from '../../../components/portal/title/product/index'
import { useNavigate } from 'react-router-dom'

const MyProductsPage: React.FC<PageTitle> = ({ title }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user: IUser = useAppSelector((state) => state.auth.user)
  const product: IProduct[] = useAppSelector((state) => state.product.all)

  const callProducts = useCallback(() => {
    dispatch(loadingProduct())
    const filters: Filters = {
      userId: user.id,
      category: '',
      offset: 0,
      limit: 1000,
      search: '',
      order: ''
    }
    listAllProductsAction(filters).then((result) => {
      if (result) {
        dispatch(listAllProduct(result))
      }
      dispatch(finishLoadingProduct())
    })
  }, [dispatch])

  useEffect(() => {
    callProducts()
  }, [callProducts])

  const toggleModal = (type = 1, data: any = {}) => {
    // const id = data?.id || null
    // if (id) {
    //   dispatch(loadingProduct())
    //   listCategoryByIdAction(id).then((result) => {
    //     if (result) {
    //       dispatch(listByIdCategory(result))
    //     }
    //     dispatch(finishLoadingCategory())
    //     setModal({ type, id, status: true })
    //   })
    // } else {
    //   setModal({ type, id, status: true })
    // }
  }

  const submitForm = async (form: any) => {
    //     await removeProductAction(modal.id as string).then(() => {
    //       dispatch(loadingProduct())
    //       dispatch(deleteProduct(modal.id as any))
    //       dispatch(finishLoadingProduct())
    //     })
    //     setModal({ status: false })
    //     callProducts()
    console.log('aquiii')
  }

  const onDeleteAction = (id: string): any => {
    // return (
    //   <DialogModal
    //     title="Serviço"
    //     open={modal.status || false}
    //     close={closeModal}
    //   >
    //     <Remove open={!!modal} close={closeModal} remove={submitForm as any} />
    //   </DialogModal>
    // )
  }

  const actions = () => null

  return (
    <>
      <Helmet title={title} />
      <ContainerTop>
        <Title title="Serviços" actions={actions} />
        <BasicButton title="Adicionar Serviço" />
      </ContainerTop>
      <ContainerTable>
          {!product?.length ? (
            <h6>Não há serviços disponiveis</h6>
          ) : (
            <MyProductsTable result={product} onRemove={submitForm} />
          )}
      </ContainerTable>
    </>
  )
}

export default MyProductsPage
