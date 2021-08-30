import api from './api-config'
// shows all electronic products
export const getAllElectronics = async () => {
  const resp = await api.get('/electronics')
  return resp.data
}
// shows one electronic products
export const getElectronic = async (id) => {
  const resp = await api.get(`/electronics/${id}`)
  return resp.data
}