import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { IMessage, IUser, PageType } from "./types";
import "./styled.scss";
import { createMessage, finishLoadingMessage, loadingMessage } from "../../../store/message/message.reducer";
import { createMessageAction } from "../../../store/message/message.action";

const FormMessage: React.FC<PageType> = ({ submit }) => {
  const message = useAppSelector((state) => state.message.all)
  const loading = useAppSelector((state) => state.message.loading)
  const [form, setForm] = useState({} as IMessage)
  const user: IUser = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()

  const handleChange = ({ target }: any) => {
    const { value, name } = target
    setForm({
      ...form,
      userId: user.id,
      conversationId: ,
      [name]: value
    })
  }

  const submitForm = (e: any) => {
    e.preventDefault();

    dispatch(loadingMessage())
    createMessageAction(form).then((result) => {
      if (result) {
        dispatch(createMessage())
      }
      dispatch(finishLoadingMessage())
    })
  }

  return (
     <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Mensagens</Link>
        </span>
        {loading ? (
          "Carregando..."
        ) : (
          <div className="messages">
            {message.map((item: IMessage) => (
              <div className={item.userId === user.id ? "owner item" : "item"} key={item._id}>
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={submitForm}>
          <textarea name="description" onChange={handleChange} placeholder="Escreva uma mensagem..." />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormMessage;
