import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from './components/common/Loading';
import routes from './routes/index.jsx'
import './App.css'
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  const element = useRoutes(routes);

  
  return (
    <>
      <Suspense fallback={<Loading />}>
            <ScrollToTop />

        {element}
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;