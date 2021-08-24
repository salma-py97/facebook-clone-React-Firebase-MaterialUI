
import './App.css';
import Feed from './components/Feed/Feed/Feed';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets/Widgets'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app__body">

        {/* Sidebar */}
        <Sidebar />
        
        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />
    
      </div>
    </div>
  );
}

export default App;
