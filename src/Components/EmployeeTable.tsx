import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';

const columns: GridColDef[] = [
   {
      field: 'name',
      headerName: 'EMPLOYEE NAME',
      flex: 1,
      minWidth: 200,
      sortable: false,
      renderCell: (params) => (
         <div className='flex items-center gap-2'>
            <Avatar
               alt="Remy Sharp"
               src={params.row.image}
               sx={{ width: 24, height: 24 }}
            />
            <span>{params.value}</span>
         </div>
      )
   },
   {
      field: 'employeeId',
      headerName: 'EMPLOYEMENT ID',
      flex: 1,
      minWidth: 200,
      sortable: false,
   },
   {
      field: 'email',
      headerName: 'EMAIL',
      flex: 1,
      minWidth: 200,
      sortable: false,
   },
   {
      field: 'role',
      headerName: 'ROLE',
      flex: 1,
      minWidth: 120,
      sortable: false,
   },
   {
      field: 'status',
      headerName: 'STATUS',
      flex: 1,
      minWidth: 120,
      sortable: false,
      renderCell: (params) => (
         <div className='flex items-center gap-2'>
            <TaskAltIcon className='text-green-800' />
            <span>{params.value}</span>
         </div>
      )
   },
   {
      field: 'arrow',
      headerName: '',
      width: 100,
      sortable: false,
      align: "right",
      renderCell: () => (
         <KeyboardArrowDownIcon />
      ),
   },
];

const rows = [
   { id: 1, name: 'Darrel Steward', employeeId: '#E3041', email: 'darrelstew@mail.com', role: 'Sr. Project Manager', status: 'Active', image: 'https://mui.com/static/images/avatar/1.jpg' },
   { id: 2, name: 'Wade Warren', employeeId: '#E3042', email: 'wadewarr@mail.com', role: 'Jr. Developer', status: 'Active', image: 'https://mui.com/static/images/avatar/2.jpg' },
   { id: 3, name: 'Jerome Bell', employeeId: '#E3043', email: 'jeromebell@mail.com', role: 'Sr. Human Resources', status: 'Active', image: 'https://mui.com/static/images/avatar/3.jpg' },
   { id: 4, name: 'Marvin McKinney', employeeId: '#E3043', email: 'marvinmck@mail.com', role: 'Sr. Developer', status: 'Active', image: 'https://mui.com/static/images/avatar/4.jpg' },
   { id: 5, name: 'Brooklyn Simmons', employeeId: '#E3044', email: 'brooklynsimm@mail.com', role: 'Sr. Product Designer', status: 'Active', image: 'https://mui.com/static/images/avatar/5.jpg' }
];

const EmployeeTable = () => {
   return (
      <div style={{ width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            hideFooter={true}
         />
      </div>
   );
};

export default EmployeeTable;
