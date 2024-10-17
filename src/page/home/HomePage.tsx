import { Button, ThemeControl } from 'components'
import { MENU } from 'defines'
import { useAuth } from 'hooks'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  const { logout, getDetailUser } = useAuth()
  useEffect(() => {
    getDetailUser('670fd545ee8caabf6ab58520')
  }, [])
  return (
    <div>
      <div className='flex items-center p-4 justify-between'>
        <ThemeControl />
        <Button type='primary' onClick={logout}>
          Logout
        </Button>
      </div>
      <h1>Homepage</h1>
      <Link to={MENU.ABOUT}>About</Link>
    </div>
  )
}
