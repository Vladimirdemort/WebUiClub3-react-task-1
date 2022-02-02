import Hero from '../components/Hero/Hero';
import MainPage from 'components/MainPage/MainPage';
import Footer from 'components/Footer/Footer';

export default function HomeView() {
  return (
    <>
      <Hero text="Heading" />
      <MainPage />
      <Footer />
    </>
  );
}
