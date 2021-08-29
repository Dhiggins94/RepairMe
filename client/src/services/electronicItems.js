import api from './api-config'

export const getAllElectronics = async () => {
  const resp = await api.get('/electronics')
  return resp.data
}

export const getElectronic = async (id) => {
  const resp = await api.get(`/electronics/${id}`)
  return resp.data
}