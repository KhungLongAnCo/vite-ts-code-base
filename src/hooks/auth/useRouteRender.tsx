import { AUTHENTICATION_ROUTERS, ROUTERS, STORAGE, UN_AUTHENTICATION_ROUTERS } from 'defines'
import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router'

const checkStringInObject = (obj: Record<string, string>, str: string): boolean => {
  return Object.values(obj).some((i) => i === str)
}

type Options = {
  noAuthen?: boolean
}

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem(STORAGE.ACCESS_TOKEN)
  useEffect(() => {
    const stayInAuth = checkStringInObject(AUTHENTICATION_ROUTERS, location.pathname)
    const stayUnAuth = checkStringInObject(UN_AUTHENTICATION_ROUTERS, location.pathname)
    if (accessToken && stayUnAuth) {
      navigate(ROUTERS.HOME)
      return
    }
    if (!accessToken && stayInAuth) {
      navigate(ROUTERS.LOGIN)
    }
  }, [accessToken])

  return <>{children}</>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useRouteRender = (node: ReactNode, options?: Options) => {
  return <Container>{node}</Container>
}
