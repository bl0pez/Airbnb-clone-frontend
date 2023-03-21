import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layouts';
import { AccountPage, PlacesPage } from '../pages/private';

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Layout />}>
                <Route path="account" element={<AccountPage />} />
                <Route path="bookings" element={<AccountPage />} />
                <Route path="places" element={<PlacesPage />} />
                <Route path="places/:action" element={<PlacesPage />} />
            </Route>
            <Route path='*' element={<Navigate to="accoun" />} />
        </Routes>
    )
}
