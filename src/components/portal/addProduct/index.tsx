import React, { useState, useEffect, ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import * as moment from 'moment'
import { Col, Form } from 'react-bootstrap'
import { Select } from '@material-ui/core'
import Loading from '../../../components/loading/form/index'
import {
  fieldValidate,
  isNotValid
} from '../../../util/validations/form-service'
import './styled.scss'
import { IAddProduct, ICategory, IProduct, IUser } from './types'
import { formatMoney, getMoney } from '../../../util/helpers/format'
import {
  finishLoadingCategory,
  listAllCategory,
  loadingCategory
} from '../../../store/category/category.reducer'
import { listAllCategoryAction } from '../../../store/category/category.action'

const AddProduct: React.FC<IAddProduct> = ({ submit }) => {
  const [formValidate, setFormValidate] = useState({} as IProduct)
  const [form, setForm] = useState({} as IProduct)
  const [file, setFile] = useState<string | Blob>('')
  const category: ICategory[] = useAppSelector((state) => state.category.all)
  const user: IUser = useAppSelector((state) => state.auth.user)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(listAllCategoryAction())
  }, [dispatch])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target
    const message = fieldValidate(name, value, form)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const previewImg = ({ target }: any) => {
    const picture = target.files[0]
    setFile(picture)
  }

  const submitForm = () => {
    const formData = new FormData()
    formData.append('files', file)

    const newForm: IProduct = {
      userId: user.id,
      title: form.title,
      category: form.category,
      description: form.description,
      deliveryTime: form.deliveryTime,
      features: `${form.feature1},${form.feature2},${form.feature3},${form.feature4},${form.feature5}`,
      price: formatMoney(form.price)
    }

    Object.keys(newForm).map((k) => formData.append(k, newForm[k]))
    submit(formData)
  }

  return (
    <div className="add">
      <div className="container">
        <h1>Novo Serviço</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Título</label>
            <input
              type="text"
              value={form.title || ''}
              onChange={handleChange}
              name="title"
              placeholder="ex: Edição de vídeo..."
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.title}</p>
            </div>

            <label htmlFor="">Categoria</label>
            <select name="category" onChange={handleChange}>
              {category.length ? (
                category.map((item: ICategory) => (
                  <option value={item.id}>{item.name}</option>
                ))
              ) : (
                <></>
              )}
            </select>

            <div className="mt-1">
              <p className="text-danger">{formValidate.category}</p>
            </div>

            <label htmlFor="">Images</label>
            <input
              accept="image/*"
              type="file"
              multiple
              name="images"
              onChange={previewImg}
            />

            <label htmlFor="">Descrição</label>
            <textarea
              value={form.description || ''}
              onChange={handleChange}
              name="description"
              placeholder="ex: Realizo a edição do seu vídeo com as melhores ferramentas do mercado..."
              cols={0}
              rows={6}
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.description}</p>
            </div>
            <input
              type='submit'
              className='submit'
              onClick={submitForm}
              // disabled={isNotValid(form, formValidate)}
              value='Cadastrar'
            />
          </div>

          <div className="details">
            <label htmlFor="">Tempo de entrega</label>
            <input
              type="text"
              value={form.deliveryTime || ''}
              onChange={handleChange}
              name="deliveryTime"
              placeholder="ex: 1 mês..."
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.deliveryTime}</p>
            </div>

            <label htmlFor="">Features</label>
            <input
              type="text"
              name="feature1"
              value={form.feature1 || ''}
              onChange={handleChange}
              placeholder="ex: Adobe Premiere Pro..."
            />
            <input
              type="text"
              name="feature2"
              value={form.feature2 || ''}
              onChange={handleChange}
              placeholder="ex: After Effects..."
            />
            <input
              type="text"
              name="feature3"
              value={form.feature3 || ''}
              onChange={handleChange}
              placeholder="ex: Audition..."
            />
            <input
              type="text"
              value={form.feature4 || ''}
              onChange={handleChange}
              name="feature4"
              placeholder="ex: Illustrator..."
            />
            <input
              type="text"
              value={form.feature5 || ''}
              onChange={handleChange}
              name="feature5"
              placeholder="ex: Sony Vegas Pro..."
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.price}</p>
            </div>

            <label htmlFor="">Preço</label>
            <input
              type="text"
              maxLength={12}
              value={getMoney(form.price) || ''}
              onChange={handleChange}
              name="price"
              placeholder="ex: R$ 450,50..."
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
