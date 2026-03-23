'use client';

import PageContainer from '@/components/layout/page-container';
import { DataTable } from '@/components/data-table/data-table';
import { DataTableToolbar } from '@/components/data-table/data-table-toolbar';
import { useDataTable } from '@/hooks/use-data-table';
import { columns, type Employee } from './columns';
import { DataTableAdvancedToolbar } from '@/components/data-table/data-table-advanced-toolbar';
import { DataTableFilterList } from '@/components/data-table/data-table-filter-list';
import { DataTableSortList } from '@/components/data-table/data-table-sort-list';

const data: Employee[] = [
  {
    id: '1',
    empId: 'ost006',
    name: 'ARVIND MAHTO',
    department: 'Production',
    designation: 'Sr.Machine Operator',
    dateOfJoining: '01/01/2020',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '2',
    empId: 'ost007',
    name: 'JAI PARKASH',
    department: 'Production',
    designation: 'Machine Operator',
    dateOfJoining: '15/03/2019',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '3',
    empId: 'ost008',
    name: 'SUNNY MANJHI',
    department: 'Quality Assurance',
    designation: 'Sr.Engineer',
    dateOfJoining: '10/06/2021',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '4',
    empId: 'ost009',
    name: 'ASHUTOSH KUMAR SINGH',
    department: 'Administration',
    designation: 'Office Coordinator',
    dateOfJoining: '22/08/2018',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '5',
    empId: 'ost010',
    name: 'VIRENDRA KUMAR',
    department: 'Sales Support & Logistics',
    designation: 'Manager Sales & Support',
    dateOfJoining: '05/11/2017',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '6',
    empId: 'ost011',
    name: 'VIRPAL SINGH',
    department: 'Production',
    designation: 'Sr.Machine Operator',
    dateOfJoining: '30/04/2020',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '7',
    empId: 'ost012',
    name: 'PANKAJ',
    department: 'Maintenance',
    designation: 'Electrical & Maintenance Engineer',
    dateOfJoining: '12/09/2019',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '8',
    empId: 'ost013',
    name: 'JAI KISHAN',
    department: 'Production',
    designation: 'Machine Operator',
    dateOfJoining: '18/02/2021',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'inactive'
  },
  {
    id: '9',
    empId: 'ost005',
    name: 'GULSHAN SHARMA',
    department: 'PVD',
    designation: 'Unit Head',
    dateOfJoining: '07/07/2016',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '10',
    empId: 'ost016',
    name: 'DEEPAK SHARMA',
    department: 'Production',
    designation: 'Process Engineer',
    dateOfJoining: '25/01/2022',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '11',
    empId: 'ost017',
    name: 'ROHIT VERMA',
    department: 'Quality Assurance',
    designation: 'QA Engineer',
    dateOfJoining: '14/05/2021',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'inactive'
  },
  {
    id: '12',
    empId: 'ost018',
    name: 'SURESH YADAV',
    department: 'Maintenance',
    designation: 'Maintenance Technician',
    dateOfJoining: '03/10/2020',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  },
  {
    id: '13',
    empId: 'ost019',
    name: 'MANOJ TIWARI',
    department: 'Administration',
    designation: 'HR Executive',
    dateOfJoining: '19/12/2018',
    masterBranch: 'OM SAI TOOLING SOLUTIONS',
    status: 'active'
  }
];

export default function EmployeePage() {
  const { table } = useDataTable({ data, columns, pageCount: 1 });

  return (
    <PageContainer>
      <DataTable table={table}>
        <DataTableAdvancedToolbar table={table}>
          <DataTableFilterList table={table} />
          <DataTableSortList table={table} />
        </DataTableAdvancedToolbar>
      </DataTable>
    </PageContainer>
  );
}
