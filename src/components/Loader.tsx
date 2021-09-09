import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';

const Loader: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      width="100%"
      height="100%"
      bgcolor="rgba(255, 255, 255, 0.7)"
      zIndex={1}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
