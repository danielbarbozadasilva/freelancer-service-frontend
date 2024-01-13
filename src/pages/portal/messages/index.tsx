import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { IUser, IConversation, IDataSend } from "./types";
import { finishLoadingConversation, listConversation, loadingConversation } from "../../../store/conversation/conversation.reducer";
import { listAllConversationAction } from "../../../store/conversation/conversation.action";
import { Helmet } from "react-helmet";
import FormMessages from "../../../components/portal/messages";

const Messages: React.FC = () => {
  const user: IUser = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()

  const data: IDataSend = {
    isSeller: user.isSeller,
    userId: user.id
  }

  useEffect(() => {
    dispatch(loadingConversation())
    listAllConversationAction(data).then((result) => {
      if (result) {
        dispatch(listConversation(result))
      }
      dispatch(finishLoadingConversation())
    })
  }, [dispatch])

  return (
    <>
    <Helmet title="Mensagens" />
    <FormMessages />
  </>
  );
};

export default Messages;