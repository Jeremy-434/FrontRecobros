import { Navigate, Route, Routes } from 'react-router-dom';
import { MessagesComponent } from '../../../components';
import { LoginPage } from '../login';
import { Box } from '@mui/material';

export const AuthRoutes = () => {
    return (
        <Box>

            <Routes>

                {/* //* Inicio */}
                <Route path="/login" element={<LoginPage />} />

                <Route path="/*" element={<Navigate to="/login" />} />

            </Routes>

            <MessagesComponent />
        </Box>
    )
}
