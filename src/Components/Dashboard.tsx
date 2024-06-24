import { styled } from '@mui/system';
import { Grid, Paper, Typography, Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import DescriptionCard from './DescriptionCard';
import TaskWrapper from './TaskWrapper';
import TaskTable from './TaskTable';
import EmployeeTable from './EmployeeTable';
import ScheduleCalendar from './ScheduleCalendar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const DashboardHeaderContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   padding: '8px',
   backgroundColor: '#fff',
   borderBottom: '1px solid #e0e0e0',
});

const Dashboard = () => {
   return (
      <div className='w-full h-full flex flex-col rounded-lg'>
         <DashboardHeaderContainer>
            <Typography variant="h5">
               <LightModeIcon className='text-yellow-400' /> Good morning, Dean!
            </Typography>
            <Box display="flex" alignItems="center">
               <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Quick search"
                  InputProps={{
                     endAdornment: <SearchIcon />
                  }}
                  style={{ marginRight: 16 }}
               />
               <Paper className='p-2'>
                  <CalendarTodayIcon />
               </Paper>

               <Paper className='p-2 ml-4'>
                  <NotificationsActiveIcon />
               </Paper>
            </Box>
         </DashboardHeaderContainer>

         <div className='flex justify-between items-center py-4 bg-gray-100'>
            <Paper className='w-fit p-2 flex justify-center items-center gap-3'>
               <CalendarTodayIcon />
               Monthly
               <KeyboardArrowDownIcon />
            </Paper>

            <div className='flex justify-center items-center gap-4'>
               <Paper className='w-fit p-2 flex justify-center items-center gap-3'>
                  <CalendarTodayIcon />
                  Export
               </Paper>
               <Button variant="contained" color="error" startIcon={<AddIcon />}>
                  New entry
               </Button>
            </div>
         </div>

         <div className='bg-gray-100 pb-4'>
            <Grid container spacing={3}>
               <Grid item xs={12} md={6} lg={3}>
                  <DescriptionCard title="Total Employees" count={234} percentage="+5%" isPositive={true} />
               </Grid>
               <Grid item xs={12} md={6} lg={3}>
                  <DescriptionCard title="New Employees" count={12} percentage="+3%" isPositive={true} />
               </Grid>
               <Grid item xs={12} md={6} lg={3}>
                  <DescriptionCard title="Resigned Employees" count={4} percentage="-2%" isPositive={false} />
               </Grid>
               <Grid item xs={12} md={6} lg={3}>
                  <DescriptionCard title="Active Jobs" count={10} percentage="0%" isPositive={true} />
               </Grid>
            </Grid>
         </div>

         <Grid container spacing={1}>
            <Grid item xs={12} lg={6}>
               <TaskWrapper heading={"Today's Task"} headerIcon={<AddIcon />}>
                  <TaskTable />
               </TaskWrapper>
            </Grid>
            <Grid item xs={12} lg={6}>
               <TaskWrapper heading={"Schedule"} headerIcon={<AddIcon />}>
                  <ScheduleCalendar />
               </TaskWrapper>
            </Grid>
         </Grid>

         <Box my={4}>
            <TaskWrapper heading={"Employees"} headerIcon={<MoreHorizIcon />}>
               <EmployeeTable />
            </TaskWrapper>
         </Box>

         <TaskWrapper heading={"Emplyee Payrolls"} headerIcon={<MoreHorizIcon />}>
            <div className='bg-gray-100 p-2'>
               <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={2}>
                     <DescriptionCard title="Payrolls" count={234} showMore={false} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                     <DescriptionCard title="Drafts" count={12} showMore={false} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                     <DescriptionCard title="Overdue" count={4} showMore={false} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                     <DescriptionCard title="Failed" count={5} showMore={false} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                     <DescriptionCard title="Scheduled" count={24} showMore={false} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                     <DescriptionCard title="Paid" count={36} showMore={false} />
                  </Grid>
               </Grid>
            </div>
         </TaskWrapper>
      </div>
   );
};

export default Dashboard;
