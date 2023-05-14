import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}));

interface ICircularDeterminateProps {
  value: number;
  size: string;
}

const CircularDeterminate: React.FC<ICircularDeterminateProps> = (props) => {
  const { value, size } = props;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <StyledCircularProgress
        className="bottom-circle absolute z-0 text-secondary-10"
        variant="determinate"
        value={100}
        size={size}
      />
      <StyledCircularProgress variant="determinate" value={value} size={size} className="text-green-accent" />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" className="text-green-accent">{`${Math.round(
          value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularDeterminate;
