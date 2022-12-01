import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { MobileProvider } from './store';
import { AboutPage, SkillsPage } from './pages';
import { ExperiencePage } from './pages/Experience';
import { ResumePage } from './pages/Resume';


function App() {
  return (
    <MobileProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<AboutPage />}></Route>
          <Route path='/skills' element={<SkillsPage />}></Route>
          <Route path='/experience' element={<ExperiencePage />}></Route>
          <Route path='/resume' element={<ResumePage />}></Route>
        </Routes>
      </Layout>
    </MobileProvider>
  );
}

export default App;
