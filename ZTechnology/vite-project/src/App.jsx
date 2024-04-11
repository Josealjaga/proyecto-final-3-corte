import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import ClientsPage from './pages/ClientsPage';
import ProductsPage from './pages/ProductsPage';
import QuotesPage from './pages/QuotesPage';
import { NewClientForm } from './components/NewClientForm';
import { NewProductForm } from './components/NewProductForm';
import NewQuotesForm from './components/NewQuotesForm';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage /> } />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/newClients" element={<NewClientForm />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/newProducts" element={<NewProductForm />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/newQuotes" element={<NewQuotesForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;