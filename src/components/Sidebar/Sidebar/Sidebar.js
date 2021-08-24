import './Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EmojiFlagsSharpIcon from '@material-ui/icons/EmojiFlagsSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import MessageSharpIcon from '@material-ui/icons/MessageSharp';
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';



const Sidebar = () => {
  return (
    <div className="sidebar">
        <SidebarRow text="Salma EL BARMAKI" src="https://i.ibb.co/9YcthRy/Female-Developer.jpg" />
        <SidebarRow text="COVID-19 Information Center" Icon={AddCircleOutlineIcon} />
        <SidebarRow text="Pages" Icon={EmojiFlagsSharpIcon} />
        <SidebarRow text="Friends" Icon={PeopleAltSharpIcon} />
        <SidebarRow text="Messenger" Icon={MessageSharpIcon} />
        <SidebarRow text="MarketPlace" Icon={StorefrontSharpIcon} />
        <SidebarRow text="Videos" Icon={VideoLibrarySharpIcon} />
        <SidebarRow text="More" Icon={ExpandMoreSharpIcon} />

    </div>
  )
}

export default Sidebar
