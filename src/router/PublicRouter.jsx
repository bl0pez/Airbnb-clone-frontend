import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../Layouts'
import { LoginPage, RegisterPage } from '../pages'

export const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/auth" element={<Layout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path='*' element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
