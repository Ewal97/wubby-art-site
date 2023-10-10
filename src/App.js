import Footer from './components/Footer.js';
import Header from './components/Header.js';
import CommissionList from './features/commissions/CommissionsList.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <CommissionList />
      <Footer />
    </div>
  );
}

export default App;
