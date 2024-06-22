import { Box, Avatar, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

const SidebarHeaderContainer = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: '',
   padding: '1rem',
   backgroundColor: '#f0f4f8',
   borderBottom: '1px solid #e0e0e0',
});

const SidebarHeader = () => {
   return (
      <SidebarHeaderContainer>
         <Avatar sx={{ bgcolor: '#ff5722' }}>U</Avatar>
         <Box ml={2} flex="1">
            <Typography variant="body1" fontWeight="bold">
               User Name
            </Typography>
            <Typography variant="body2" color="textSecondary">
               Role
            </Typography>
         </Box>
         <IconButton edge="end">
            <MenuIcon />
         </IconButton>
         <button>Dashboard</button>
      </SidebarHeaderContainer>
   );
};

export default SidebarHeader;
