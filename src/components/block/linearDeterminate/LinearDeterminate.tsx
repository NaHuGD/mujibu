import * as React from 'react';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 100,
  [`&.${linearProgressClasses.root}`]: {
    backgroundColor: 'transparent',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 100,
    backgroundColor: '#37DDC9', //tailwind accent green
  },
}));

const StyledLinearProgressBase = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 100,
}));

interface ILinearDeterminate {
  value: number;
}

const LinearDeterminate: React.FC<ILinearDeterminate> = (props) => {
  const { value } = props;

  return (
    <Box className="flex items-center">
      <Box className="w-full mr-3 relative">
        <StyledLinearProgressBase
          className="opacity-50 absolute w-full"
          color="secondary"
          variant="determinate"
          value={0}
        />
        <StyledLinearProgress color="secondary" variant="determinate" {...props} />
      </Box>
      <Box className="text-right">
        <Typography className="opacity-60" variant="caption" color="secondary">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default LinearDeterminate;
