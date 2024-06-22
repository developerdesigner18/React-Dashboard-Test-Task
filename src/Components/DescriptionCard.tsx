import { Card, CardContent, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface DescriptionCardProps {
   title: string,
   count: string | number,
   percentage?: string,
   isPositive?: boolean,
   showMore?: boolean,
}

const DescriptionCard = ({ title, count, percentage, isPositive, showMore = true }: DescriptionCardProps) => {
   return (
      <Card variant="outlined">
         <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between">
               <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  <PeopleIcon style={{ marginRight: 8 }} />
                  {title}
               </Typography>
            </Box>
            <Typography variant="h4" component="div">
               {count}
            </Typography>
            {
               showMore &&
               <Box display="flex" alignItems="center" mt={1}>
                  {isPositive ? (
                     <ArrowUpwardIcon style={{ color: 'green', marginRight: 4 }} />
                  ) : (
                     <ArrowDownwardIcon style={{ color: 'red', marginRight: 4 }} />
                  )}
                  <Typography variant="body2" style={{ color: isPositive ? 'green' : 'red' }}>
                     {percentage} last month
                  </Typography>
               </Box>
            }
         </CardContent>
      </Card>
   )
};

export default DescriptionCard;
