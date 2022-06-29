import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

import './scss/App.scss';  //* sass import ediyoruz
import data from './data'; //* data import ettik

function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Footer />
    </>
  );
}

export default App;

//? yarn add sass ile  package.json sass yükledik.