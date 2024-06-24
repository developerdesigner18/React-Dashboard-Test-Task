import { Avatar, AvatarGroup, Box, LinearProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
   {
      field: 'task',
      headerName: 'Task',
      width: 200,
      sortable: false,
   },
   {
      field: 'due',
      headerName: 'Due',
      width: 120,
      sortable: false,
   },
   {
      field: 'member',
      headerName: 'Member',
      sortable: false,
      width: 160,
      renderCell: () => (
         <Box width="100%" height="100%" display="flex" alignItems="center">
            <AvatarGroup max={4}>
               <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
               <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
               <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/4.jpg" />
               <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/5.jpg" />
            </AvatarGroup>
         </Box>
      )
   },
   {
      field: 'progress',
      headerName: 'Progress',
      type: 'number',
      width: 120,
      align: 'left', // Align content to the left
      headerAlign: 'left',
      sortable: false,
      renderCell: (params) => (
         <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
               <LinearProgress
                  variant="determinate"
                  value={params.value}
                  sx={{
                     '& .MuiLinearProgress-bar': {
                        backgroundColor: '#E64C12',
                     },
                  }}
               />
            </Box>
            <Box minWidth={35}>
               <span>{`${params.value}%`}</span>
            </Box>
         </Box>
      ),
   },
];

const rows = [
   { id: 1, task: 'Create branded collateral', due: 'Oct 30, 2023', progress: 25 },
   { id: 2, task: 'Develop brand guidelines document', due: 'Nov 04, 2023', progress: 25 },
   { id: 3, task: 'Refine UX/UI for product pages', due: 'Nov 10, 2023', progress: 100 },
   { id: 4, task: 'Collaborate on website redesign', due: 'Oct 23, 2023', progress: 100 },
   { id: 5, task: 'Conduct A/B testing on homepage', due: 'Oct 23, 2023', progress: 100 },
   { id: 6, task: 'Develop social media graphics', due: 'Oct 23, 2023', progress: 100 },
   { id: 7, task: 'Finalize logo variations', due: 'Nov 04, 2023', progress: 100 },
   // { id: 8, task: 'Develop brand guidelines document', due: 'Nov 04, 2023', progress: 25 },
   // { id: 9, task: 'Refine UX/UI for product pages', due: 'Nov 10, 2023', progress: 100 },
];

const TaskTable = () => {
   return (
      <div className='h-[500px] w-full'>
         <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
         // hideFooter={true}
         />
      </div>
   );
};

export default TaskTable;
