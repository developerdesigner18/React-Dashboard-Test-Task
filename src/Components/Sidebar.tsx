import { List, ListItem, ListItemText, ListItemIcon, Divider, Avatar, Typography, IconButton, Paper } from '@mui/material';
import {
   Dashboard as DashboardIcon,
   People as PeopleIcon,
   Assignment as AssignmentIcon,
   Schedule as ScheduleIcon,
   TimeToLeave as TimeToLeaveIcon,
   EmojiEvents as EmojiEventsIcon,
   MonetizationOn as MonetizationOnIcon,
   AssignmentTurnedIn as AssignmentTurnedInIcon,
   Feedback as FeedbackIcon,
   Payment as PaymentIcon,
   Receipt as ReceiptIcon,
   AccountBalance as AccountBalanceIcon,
   Menu as MenuIcon
} from '@mui/icons-material';

const Sidebar = () => {
   const menuItems = [
      { text: 'Employee', icon: <PeopleIcon /> },
      { text: 'Onboarding', icon: <AssignmentIcon /> },
      { text: 'Leave', icon: <TimeToLeaveIcon /> },
      { text: 'Time tracking', icon: <ScheduleIcon /> },
      { text: 'Rewards', icon: <EmojiEventsIcon /> },
      { text: 'Costs', icon: <MonetizationOnIcon /> },
      { text: 'Compensation', icon: <MonetizationOnIcon /> },
      { text: 'Requests', icon: <AssignmentTurnedInIcon /> },
      { text: 'Feedback', icon: <FeedbackIcon /> },
   ];

   const financeItems = [
      { text: 'Payroll', icon: <PaymentIcon /> },
      { text: 'Invoices', icon: <ReceiptIcon /> },
      { text: 'Billing', icon: <AccountBalanceIcon /> },
   ];

   return (
      <div className="w-64 h-full">
         <div className='flex flex-col p-4 gap-4'>
            <div className='flex justify-between items-center'>
               <div className='flex items-center gap-4'>
                  <Avatar sx={{ bgcolor: '#ff5722' }}>U</Avatar>
                  <Typography variant="body1" fontWeight="bold">
                     User
                  </Typography>
               </div>

               <IconButton edge="end">
                  <MenuIcon />
               </IconButton>
            </div>
            <Paper className='flex items-center gap-8 p-2 cursor-pointer border'>
               <div className="text-gray-700">
                  <DashboardIcon />
               </div>
               <p>Dashboard</p>
            </Paper>
         </div>
         <Divider className="my-4" />
         <List>
            <ListItem>
               <ListItemText primary="Team management" />
            </ListItem>
            {menuItems.map((item, index) => (
               <ListItem key={index} className="hover:bg-gray-200">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
               </ListItem>
            ))}
            <Divider className="my-4" />
            <ListItem>
               <ListItemText primary="Finances" />
            </ListItem>
            {financeItems.map((item, index) => (
               <ListItem key={index} className="hover:bg-gray-200">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
               </ListItem>
            ))}
         </List>
      </div >
   );
};

export default Sidebar;
