import { LinearProgress, Stack } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <Stack sx={{ width: '120%', color: 'grey.500' }} spacing={2}>
            <LinearProgress color="success" />
        </Stack>
    );
};

export default Loader;