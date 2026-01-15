import { Route, Routes } from 'react-router-dom';
import { Home, NotFound } from '@/pages';

function App() {
  return (
    <main className="font-inter flex min-h-full w-full max-w-full flex-1 flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
