import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ViewerPage from './pages/ViewerPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Grade1Page from './pages/Grade1Page';
import Grade2Page from './pages/Grade2Page';
import Grade3Page from './pages/Grade3Page';
import Grade2022_1Page from './pages/Grade2022_1Page';
import Grade2022_2Page from './pages/Grade2022_2Page';
import Grade2022_3Page from './pages/Grade2022_3Page';
import Grade2015_1Page from './pages/Grade2015_1Page';
import Grade2015_2Page from './pages/Grade2015_2Page';
import Grade2015_3Page from './pages/Grade2015_3Page';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative isolate">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grade/1" element={<Grade1Page />} />
          <Route path="/grade/2" element={<Grade2Page />} />
          <Route path="/grade/3" element={<Grade3Page />} />
          <Route path="/grade/2022/1" element={<Grade2022_1Page />} />
          <Route path="/grade/2022/2" element={<Grade2022_2Page />} />
          <Route path="/grade/2022/3" element={<Grade2022_3Page />} />
          <Route path="/grade/2015/1" element={<Grade2015_1Page />} />
          <Route path="/grade/2015/2" element={<Grade2015_2Page />} />
          <Route path="/grade/2015/3" element={<Grade2015_3Page />} />
          <Route path="/viewer" element={<ViewerPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
