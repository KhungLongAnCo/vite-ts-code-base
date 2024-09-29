import { MENU } from 'defines'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to={MENU.ABOUT}>About</Link>
    </div>
  )
}
