import { ReactNode } from 'react';
import { Paper } from '@mui/material';

interface TaskWrapperProps {
   heading: String,
   children: ReactNode,
   headerIcon: ReactNode
}

const TaskWrapper = ({ children, heading, headerIcon }: TaskWrapperProps) => {
   return (
      <div className="border bg-white rounded-xl flex flex-col">
         <div className='p-2 px-4 flex justify-between items-center border-b'>
            <p>{heading}</p>
            <Paper className='p-1'>
               {headerIcon}
            </Paper>
         </div>
         {children}
      </div>
   )
};

export default TaskWrapper;
