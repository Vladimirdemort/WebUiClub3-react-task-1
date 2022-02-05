import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';

import Footer from 'components/Footer/Footer';
import Container from './components/Container';
import Header from './components/Header/Header';
import CatalogPage from 'pages/CatalogPage';
import errorImage from './pages/error.jpg';
import './App.css';

const HomeView = lazy(() =>
  import('./pages/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const NotFoundView = lazy(() =>
  import('./pages/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  return (
    <Container>
      <Header />

      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Routes>
          <Route path="" element={<HomeView />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route
            path="*"
            element={
              <NotFoundView
                errorImage={errorImage}
                messadge="Ошибка 404: страница не найдена :("
              />
            }
          />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer />
    </Container>
  );
}
