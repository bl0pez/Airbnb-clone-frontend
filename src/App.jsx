import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layouts';
import { IndexPage, LoginPage } from './pages';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={<IndexPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
