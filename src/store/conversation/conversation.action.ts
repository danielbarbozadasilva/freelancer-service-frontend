import { createConversationService, listAllConversationService, listByIdConversationService, updateConversationService } from "../../services/conversation.service"

export const listAllConversationAction = async (data: object) => {
  try {
    const result = await listAllConversationService(data)    
    return result.data
  } catch (error) {}
}
export const listByIdConversationAction = async (id: string) => {
  try {
    const result = await listByIdConversationService(id)    
    return result.data
  } catch (error) {}
}

export const createConversationAction = async (data: object) => {
  try {
    await createConversationService(data)    
  } catch (error) {}
}

export const updateConversationAction = async (id: string, data: object) => {
  try {
    await updateConversationService(id, data)    
  } catch (error) {}
}