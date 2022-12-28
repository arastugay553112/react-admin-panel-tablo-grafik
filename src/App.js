import React,{useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar,Footer,Sidebar,ThemeSettings} from './components';

import {Eticaret,Siparis,Takvim,Calisan,Yigin,Piramid,
Musteri,Kanban,Area,Pie,Finansal,RenkEslemesi,RenkSecici
,Editor,Line,Bar} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {

  const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode}=useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}} >
          <TooltipComponent content="Ayarlar" position="Top">
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl
            hover:bg-light-gray text-white' 
            style={{background:currentColor,borderRadius:'50%'}}
            onClick={()=>setThemeSettings(true)}>
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg 
          bg-white'>
            <Sidebar />
            </div>
        ):(
          <div className='w-0 dark:bg-secondary-dark-bg'>
           <Sidebar />
          </div>
        )}
        <div className={
          `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
          ${activeMenu ? ' md:ml-72 '
          : 'flex-2' }`
        }> 
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
        <div>
          {themeSettings && <ThemeSettings />}

          {/* Gösterge Paneli*/}
          <Routes>
            <Route path='/' element={<Eticaret />} />
            <Route path='/eticaret' element={<Eticaret />} />

          {/*Sayfalar */}
          <Route path='/siparis' element={<Siparis />} />
          <Route path='/calisan' element={<Calisan />} />
          <Route path='/musteri' element={<Musteri />} />

           {/*Apps */}
          <Route path='/kanban' element={<Kanban />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/takvim' element={<Takvim />} />
          <Route path='/renk-secici' element={<RenkSecici />} />

            {/*Grafikler */}
          <Route path='/cizgi' element={<Line />} />
          <Route path='/area' element={<Area />} />
          <Route path='/bar' element={<Bar />} />
          <Route path='/pie' element={<Pie />} />
          <Route path='/finansal' element={<Finansal />} />
          <Route path='/renk-eslemesi' element={<RenkEslemesi />} />
          <Route path='/piramid' element={<Piramid />} />
          <Route path='/yigin' element={<Yigin />} />
         </Routes>
        </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App