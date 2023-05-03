import { Link, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const LinksAcordion = ({linkText, text}) => {
    return (
        <Link
            to={linkText}
            component={RouterLink}
            sx={{
                textDecoration: 'none',
                color: 'inherit'
            }}
        >
            <MenuItem sx={{ fontSize: '12px' }} >{text}</MenuItem>
        </Link>
    )
}
