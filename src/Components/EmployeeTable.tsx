import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const columns: GridColDef[] = [
   {
      field: 'name',
      headerName: 'EMPLOYEE NAME',
      width: 200,
      sortable: false,
   },
   {
      field: 'employeeId',
      headerName: 'EMPLOYEMENT ID',
      width: 200,
      sortable: false,
   },
   {
      field: 'email',
      headerName: 'EMAIL',
      width: 200,
      sortable: false,
   },
   {
      field: 'role',
      headerName: 'ROLE',
      width: 200,
      sortable: false,
   },
   {
      field: 'status',
      headerName: 'STATUS',
      width: 150,
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
      headerName: '', // No header name to display
      width: 100,
      sortable: false,
      align: "right",
      renderCell: () => (
         <KeyboardArrowDownIcon />
      ),
   },
];

const rows = [
   { id: 1, name: 'Darrel Steward', employeeId: '#E3041', email: 'darrelstew@mail.com', role: 'Sr. Project Manager', status: 'Active' },
   { id: 2, name: 'Wade Warren', employeeId: '#E3042', email: 'wadewarr@mail.com', role: 'Jr. Developer', status: 'Active' },
   { id: 3, name: 'Jerome Bell', employeeId: '#E3043', email: 'jeromebell@mail.com', role: 'Sr. Human Resources', status: 'Active' },
   { id: 4, name: 'Marvin McKinney', employeeId: '#E3043', email: 'marvinmck@mail.com', role: 'Sr. Developer', status: 'Active' },
   { id: 5, name: 'Brooklyn Simmons', employeeId: '#E3044', email: 'brooklynsimm@mail.com', role: 'Sr. Product Designer', status: 'Active' }
];

const EmployeeTable = () => {
   return (
      <div style={{ height: 400, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            hideFooter={true}
         />
      </div>
   );
};

export default EmployeeTable;
