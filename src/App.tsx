import { Route, Routes } from 'react-router-dom';
import { Home, NotFound, Project } from '@/pages';
import { useThemeSync } from './hooks';

function App() {
  useThemeSync();

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:project_name" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
