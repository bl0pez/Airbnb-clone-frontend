import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layouts';
import { AccountPage } from '../pages/private/AccountPage';

import React from 'react'

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Layout />}>
                <Route path="account" element={<AccountPage />} />
                <Route path="bookings" element={<AccountPage />} />
                <Route path="places" element={<AccountPage />} />
            </Route>
            <Route path='*' element={<Navigate to="accoun" />} />
        </Routes>
    )
}
