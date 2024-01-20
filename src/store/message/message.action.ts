import { listByIdMessageService, createMessageService } from '../../services/message.service'

export const listByIdMessageAction = async (id: string) => {
  try {
    const result = await listByIdMessageService(id)    
    return result.data
  } catch (error) {}
}

export const createMessageAction = async (data: object) => {
  try {
    const result = await createMessageService(data)    
    return result.data
  } catch (error) {}
}