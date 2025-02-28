import './App.css';
import {Space} from "antd"
import Header from './Components/Header';
import PageContent from './Components/PageContent';
import Footer from './Components/Footer';
import Sidebar from './Components/SideBar';


function App() {
 

  return (
    <>
      <div className="App">
       <Header/>
       <Space className='SideBarAndPageContent'>
        <Sidebar/>
        <PageContent/>
        </Space>
     <Footer/>

         </div>

    </>
  )
}

export default App
