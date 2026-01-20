import { Route, Routes } from 'react-router-dom';
import { Home, NotFound } from '@/pages';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
