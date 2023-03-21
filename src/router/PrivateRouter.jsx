import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layouts';
import { AcountPage } from '../pages/private/AcountPage';

import React from 'react'

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="accoun" element={<AcountPage />} />
            </Route>
            <Route path='*' element={<Navigate to="accoun" />} />
        </Routes>
    )
}
