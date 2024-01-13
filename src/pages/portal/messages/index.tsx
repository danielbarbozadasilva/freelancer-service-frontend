import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { IUser, IConversation, IDataSend } from "./types";
import { finishLoadingConversation, listConversation, loadingConversation } from "../../../store/conversation/conversation.reducer";
import { listAllConversationAction } from "../../../store/conversation/conversation.action";
import { Helmet } from "react-helmet";
import FormMessages from "../../../components/portal/messages";
import "./Messages.scss";

const Messages: React.FC = () => {
  const dispatch = useAppDispatch()

  const user: IUser = useAppSelector((state) => state.auth.user)
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

 

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <>
    <Helmet title="Cadastrar" />
    <FormMessages />
  </>
  );
};

export default Messages;