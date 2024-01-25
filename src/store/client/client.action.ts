import { 
    listAllClientService,
    listClientByIdService,
    removeClientService,
    updateClientService
  } from '../../services/client.service'
import { toast } from 'react-toastify'

export const listAllClientAction = async () => {
  try {
    const result = await listAllClientService()  
    return result.data.data
  } catch (error) {}
}

export const listClientByIdAction = async (categoryid: string) => {
  try {
    const result = await listClientByIdService(categoryid)    
    return result.data.data
  } catch (error) {}
}

export const updateClientAction = async (categoryid: string, data: object) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    await updateClientService(categoryid, data, config)
    toast.success('Cliente atualizado com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
}

export const removeClientAction = async (id: string) => {
    try {
      await removeClientService(id)
      toast.success('Cliente excluido com sucesso!')
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
}