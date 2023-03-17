import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layouts';
import { IndexPage, LoginPage, RegisterPage } from './pages';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />  
      </Route>
    </Routes>
  )
}

export default App
