import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { IConversation, IUser, PageType } from "./types";
import "./styled.scss";
import moment from "moment";

const FormMessages: React.FC<PageType> = ({ submit }) => {
  const conversation: IConversation[] = useAppSelector((state) => state.conversation.all)
  const user: IUser = useAppSelector((state) => state.auth.user)
  const loading = useAppSelector((state) => state.conversation.loading)

  const handleRead = (id: string, isSeller: boolean) => {
    submit(id, { isSeller })
  }

  return (
    <div className="messages">
      {loading ? (
        "Carregando..."
      ) : (
        <div className="container">
          <div className="title">
            <h1>Mensagens</h1>
          </div>
          <table>
            <tr>
              <th>{user.isSeller ? "Buyer" : "Seller"}</th>
              <th>Ultimas mensagens</th>
              <th>Data</th>
              <th>Ação</th>
            </tr>
            {conversation.map((item: IConversation) => (
              <tr
                className={
                    (!user.isSeller && !item.readByBuyer)?
                  "active": ''
                }
                key={item.id}
              >
                <td>{user.isSeller ? item.buyerId : item.sellerId}</td>
                <td>
                  <Link to={`/message/${item.id}`} className="link">
                    {item?.lastMessage?.substring(0, 100)}...
                  </Link>
                </td>
                <td>{moment(item.updatedAt).fromNow()}</td>
                <td>
                  {((user.isSeller && !item.readBySeller) ||
                    (!user.isSeller && !item.readByBuyer)) && (
                    <button onClick={() => handleRead(item.id, user.isSeller)}>
                      Marcar como lido
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default FormMessages;
