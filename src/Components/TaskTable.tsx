import { Avatar, AvatarGroup, Box, LinearProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
   components: {
      MuiCheckbox: {
         styleOverrides: {
            root: {
               '&.Mui-checked': {
                  color: orange[600],
               },
            },
         },
      },
   },
});

const columns: GridColDef[] = [
   {
      field: 'task',
      headerName: 'Task',
      flex: 1,
      minWidth: 200,
      sortable: false,
   },
   {
      field: 'due',
      headerName: 'Due',
      flex: 1,
      minWidth: 120,
      sortable: false,
   },
   {
      field: 'member',
      headerName: 'Member',
      sortable: false,
      flex: 1,
      minWidth: 120,
      renderCell: () => (
         <Box width="100%" height="100%" display="flex" alignItems="center">
            <AvatarGroup max={4}>
               <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} />
               <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" sx={{ width: 24, height: 24 }} />
               <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/4.jpg" sx={{ width: 24, height: 24 }} />
               <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/5.jpg" sx={{ width: 24, height: 24 }} />
            </AvatarGroup>
         </Box>
      )
   },
   {
      field: 'progress',
      headerName: 'Progress',
      type: 'number',
      minWidth: 120,
      flex: 1,
      align: 'left',
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
   { id: 3, task: 'Refine UX/UI for product pages', due: 'Nov 10, 2023', progress: 36 },
   { id: 4, task: 'Collaborate on website redesign', due: 'Oct 23, 2023', progress: 46 },
   { id: 5, task: 'Conduct A/B testing on homepage', due: 'Oct 23, 2023', progress: 62 },
   { id: 6, task: 'Develop social media graphics', due: 'Oct 23, 2023', progress: 80 },
   { id: 7, task: 'Finalize logo variations', due: 'Nov 04, 2023', progress: 70 },
   { id: 8, task: 'Finalize social media graphics', due: 'Nov 04, 2023', progress: 70 },
];

const TaskTable = () => {
   return (
      <ThemeProvider theme={theme}>
         <div className='h-[500px] w-full'>
            <DataGrid
               rows={rows}
               columns={columns}
               checkboxSelection
               hideFooter={true}
            />
         </div>
      </ThemeProvider>
   );
};

export default TaskTable;
