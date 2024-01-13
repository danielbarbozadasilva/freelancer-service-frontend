import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { IMessage, IUser, PageType } from "./types";
import "./styled.scss";

const FormMessage: React.FC<PageType> = ({ submit }) => {
  const message: IMessage[] = useAppSelector((state) => state.message.all)
  const user: IUser = useAppSelector((state) => state.auth.user)
  const loading = useAppSelector((state) => state.message.loading)
  const [form, setForm] = useState({} as IMessage)

  const handleChange = ({ target }: any) => {
    const { value, name } = target
    setForm({
      ...form,
      userId: message[0].userId,
      conversationId: message[0].conversationId,
      [name]: value
    })
  }

  const submitForm = () => {
    submit(form)
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
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <div className="write">
          <textarea name="description" onChange={handleChange} placeholder="Escreva uma mensagem..." />
          <button onClick={submitForm}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default FormMessage;
