import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { IUser, IDataSend, PageTitle } from "./types";
import { finishLoadingConversation, listConversation, loadingConversation, updateConversation } from "../../../store/conversation/conversation.reducer";
import { listAllConversationAction, updateConversationAction } from "../../../store/conversation/conversation.action";
import { Helmet } from "react-helmet";
import FormMessages from "../../../components/portal/messages";

const Messages: React.FC<PageTitle> = ({ title }) => {  
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

  const handleSubmit = async (id: string, data: object)=>{
    dispatch(loadingConversation())
    await updateConversationAction(id, data).then(() => {
      dispatch(updateConversation())
      dispatch(finishLoadingConversation())
    })
    dispatch(loadingConversation())
    await listAllConversationAction(data).then((result) => {
      if (result) {
        dispatch(listConversation(result))
      }
      dispatch(finishLoadingConversation())
    })
  }

  return (
    <>
      <Helmet title={title} />
      <FormMessages submit={handleSubmit}/>
    </>
  );
};

export default Messages;