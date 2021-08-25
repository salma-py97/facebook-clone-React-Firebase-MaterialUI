import { useStateValue } from './StateProvider';
import './App.css';
import Feed from './components/Feed/Feed/Feed';
import Header from './components/Header/Header'
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets/Widgets'


function App() {
  // const user = null;

  const [{user}, dispatch] = useStateValue()
  return (
      <div className="app">
        {
        !user ? <Login/>: <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
        </>
      } </div>
  );
}

export default App;
