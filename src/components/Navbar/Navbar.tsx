import React, { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { DataContext } from '../../context';

const Navbar: FC = () => {
    const {setShowLiked, showLiked} = useContext(DataContext)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowLiked(!showLiked)
    };
    return (
        <Box sx={{ flexGrow: 1, ml: 3, mt: 1 }}>
            <FormGroup>
                <FormControlLabel
                control={
                    <Switch
                    color="success"
                    checked={showLiked}
                    onChange={handleChange}
                    aria-label="login switch"
                    />
                }
                label={showLiked ? 'RETURN ALL' : 'SHOW ONLY LIKED IMAGES'}
                />
            </FormGroup>
        </Box>
    );
};

export default Navbar;