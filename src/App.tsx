import { Loader, Navbar, Services, Welcome, Transactions, Footer } from './components';

const App = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
