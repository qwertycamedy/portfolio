import { Route, Routes } from "react-router-dom";
import { Home, NotFound } from "@/pages";

function App() {
  return (
    <main className="font-inter mx-auto flex min-h-full w-full max-w-full flex-1 flex-col md:px-4 xl:px-8 pb-8 md:pt-0 pt-26">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
