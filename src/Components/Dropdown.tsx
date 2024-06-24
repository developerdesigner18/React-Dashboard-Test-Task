import { ReactNode, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface PositionedMenuProps {
   children: ReactNode
}

export default function PositionedMenu({ children }: PositionedMenuProps) {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div>
         <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            {children}
         </Button>
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
            sx={{
               '& .MuiPaper-root': {
                  width: '170px',
               },
            }}
         >
            <MenuItem onClick={handleClose}>Weekly</MenuItem>
            <MenuItem onClick={handleClose}>Monthly</MenuItem>
            <MenuItem onClick={handleClose}>Yearly</MenuItem>
         </Menu>
      </div>
   );
}