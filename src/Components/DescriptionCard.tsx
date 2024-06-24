import { ReactNode } from 'react';
import { Card, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

interface DescriptionCardProps {
   title: string,
   count: string | number,
   percentage?: string,
   isPositive?: boolean,
   showMore?: boolean,
   icon?: ReactNode
}

const DescriptionCard = ({ title, count, percentage, isPositive, showMore = true, icon = <PeopleIcon /> }: DescriptionCardProps) => {
   return (
      <Card variant="outlined" sx={{ borderRadius: "6px" }} className='p-2 shadow-sm'>
         <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1" gutterBottom className='text-primary'>
               <div className='mr-2 inline-block'>{icon}</div>
               {title}
            </Typography>
         </Box>
         <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h4" fontSize="16px" fontWeight={700} component="div">
               {count}
            </Typography>
            {
               showMore &&
               <Box display="flex" alignItems="center">
                  {/* {isPositive ? (
                     <ArrowUpwardIcon style={{ color: 'green', marginRight: 4 }} />
                  ) : (
                     <ArrowDownwardIcon style={{ color: 'red', marginRight: 4 }} />
                  )} */}
                  <Typography variant="body2" style={{ color: isPositive ? 'green' : 'red' }}>
                     {percentage} last month
                  </Typography>
               </Box>
            }
         </Box>
      </Card>
   )
};

export default DescriptionCard;
