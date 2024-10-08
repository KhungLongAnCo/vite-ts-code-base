import { ROUTERS, STORAGE } from 'defines'
import { useNavigate } from 'react-router'
import { FormLogin } from 'types'

export const useAuth = () => {
  const navigate = useNavigate()
  const login = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: FormLogin,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options?: {
      onSuccess?: () => void
    }
  ) => {
    // call api login to get access_token
    const fakeData = {
      access_token: 'Brear test'
    }
    localStorage.setItem(STORAGE.ACCESS_TOKEN, fakeData.access_token)
    navigate(ROUTERS.HOME)
  }

  const logout = () => {
    // call api
    localStorage.removeItem(STORAGE.ACCESS_TOKEN)
    navigate(ROUTERS.LOGIN)
  }

  return { login, logout }
}
