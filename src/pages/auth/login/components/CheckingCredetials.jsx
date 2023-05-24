import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useAuthStore } from '../../../../hooks';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const CheckingCredetials = () => {

    const [open, setOpen] = useState(false)
    const { status } = useSelector(state => state.auth);

    useEffect(() => {
        if (status === 'checking') {
            setOpen(true);
        }else{
            setOpen(false);
        }
    }, [status])

    return (
        <Box>
            {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    );
}