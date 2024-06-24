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
import WorkIcon from '@mui/icons-material/Work';
import SubDescriptionCard from './SubDescriptionCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DraftsIcon from '@mui/icons-material/Drafts';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NoEncryptionGmailerrorredIcon from '@mui/icons-material/NoEncryptionGmailerrorred';
import PositionedMenu from './Dropdown';

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
      <div className='w-full h-full flex flex-col rounded-lg border'>
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
                     endAdornment: <div className='bg-primary/30 px-2 rounded-md'>/</div>,
                     startAdornment: <SearchIcon className='text-primary' />,
                  }}
                  style={{ marginRight: 16 }}
               />
               <Paper className='p-2 border cursor-pointer'>
                  <CalendarTodayIcon />
               </Paper>

               <Paper className='p-2 ml-4 border cursor-pointer'>
                  <NotificationsActiveIcon />
               </Paper>
            </Box>
         </DashboardHeaderContainer>

         <div className='flex justify-between items-center py-4 px-2 bg-gray-100'>
            <PositionedMenu>
               <Paper className='border w-fit p-2 flex justify-center items-center gap-3'>
                  <CalendarTodayIcon />
                  Monthly
                  <KeyboardArrowDownIcon />
               </Paper>
            </PositionedMenu>

            <div className='flex justify-center items-center gap-4'>
               <Paper className='border w-fit p-2 flex justify-center items-center gap-3 cursor-pointer'>
                  <CalendarTodayIcon />
                  Export
               </Paper>
               <Button variant="contained" color="error" startIcon={<AddIcon />}>
                  New entry
               </Button>
            </div>
         </div>

         <div className='bg-gray-100 pb-4 px-2 border-b'>
            <Grid container spacing={3}>
               <Grid item xs={12} md={6} lg={3}>
                  <DescriptionCard title="Total Employees" count={234} percentage="+5%" isPositive={true} />
               </Grid>
               <Grid item xs={12} md={6} lg={3}>
                  <DescriptionCard title="New Employees" count={12} percentage="+3%" isPositive={true} />
               </Grid>
               <Grid item xs={12} md={6} lg={3}>
                  <DescriptionCard title="Resigned Employees" count={4} percentage="+2%" isPositive={true} />
               </Grid>
               <Grid item xs={12} md={6} lg={3}>
                  <DescriptionCard title="Active Jobs" icon={<WorkIcon />} count={10} percentage="0%" isPositive={true} />
               </Grid>
            </Grid>
         </div>

         <div className='p-2 bg-white'>
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
                        <SubDescriptionCard title="Payrolls" count={234} icon={<ShoppingBagIcon className='text-primary' />} />
                     </Grid>
                     <Grid item xs={12} md={6} lg={2}>
                        <SubDescriptionCard title="Drafts" count={12} icon={<DraftsIcon className='text-primary' />} />
                     </Grid>
                     <Grid item xs={12} md={6} lg={2}>
                        <SubDescriptionCard title="Overdue" count={4} icon={<CalendarTodayIcon className='text-primary' />} />
                     </Grid>
                     <Grid item xs={12} md={6} lg={2}>
                        <SubDescriptionCard title="Failed" count={5} icon={<NoEncryptionGmailerrorredIcon className='text-primary' />} />
                     </Grid>
                     <Grid item xs={12} md={6} lg={2}>
                        <SubDescriptionCard title="Scheduled" count={24} icon={<EditCalendarIcon className='text-primary' />} />
                     </Grid>
                     <Grid item xs={12} md={6} lg={2}>
                        <SubDescriptionCard title="Paid" count={36} icon={<AssignmentTurnedInIcon className='text-primary' />} />
                     </Grid>
                  </Grid>
               </div>
            </TaskWrapper>
         </div>
      </div>
   );
};

export default Dashboard;
