import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SubDescriptionCardProps {
   title: string;
   count: number;
   icon: ReactNode
}

const SubDescriptionCard = ({ title, count, icon }: SubDescriptionCardProps) => {
   return (
      <Card variant="outlined" sx={{ borderRadius: "6px" }} className='p-2 shadow-sm'>
         <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1" gutterBottom className='text-primary'>
               {title}
            </Typography>
         </Box>
         <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h4" fontSize="16px" fontWeight={700} component="div">
               <div className="flex items-center">
                  <div className='mr-2 inline-block'>{icon}</div>
                  {count}
               </div>
            </Typography>
         </Box>
      </Card>
   )
};

export default SubDescriptionCard;
