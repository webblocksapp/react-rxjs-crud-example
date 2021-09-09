import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const CardSkeleton: React.FC = () => {
  return (
    <Box minHeight={200} height="100%" width="100%" position="relative">
      <Skeleton component="div" variant="rect" width="100%" height="100%" style={{ position: 'absolute' }} />
    </Box>
  );
};

export default CardSkeleton;
