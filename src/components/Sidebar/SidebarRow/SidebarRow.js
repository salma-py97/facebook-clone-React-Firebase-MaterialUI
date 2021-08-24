import { Avatar } from '@material-ui/core'
import './SidebarRow.css'

const SidebarRow = ({Icon, text, src}) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{text}</h4>
    </div>
  )
}

export default SidebarRow
