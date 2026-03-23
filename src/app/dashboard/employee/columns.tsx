'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export interface Employee {
  id: string;
  empId: string;
  name: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  masterBranch: string;
  status: 'active' | 'inactive';
}

export const columns: ColumnDef<Employee>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    id: 'empId',
    accessorKey: 'empId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label='Emp Id' />
    ),
    enableSorting: true // adding this
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label='Name' />
    ),
    enableSorting: true, // adding this
    meta: { label: 'Name', variant: 'text' },
    enableColumnFilter: true
  },
  {
    id: 'department',
    accessorKey: 'department',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label='Department' />
    ),
    enableSorting: true // adding this
  },
  {
    id: 'designation',
    accessorKey: 'designation',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label='Designation' />
    )
  },
  {
    id: 'dateOfJoining',
    accessorKey: 'dateOfJoining',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label='Date Of Joining' />
    ),
    enableSorting: true // adding this
  },
  {
    id: 'masterBranch',
    accessorKey: 'masterBranch',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label='Master Branch' />
    )
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} label='Status' />
    ),
    cell: ({ cell }) => {
      const status = cell.getValue<Employee['status']>();
      return (
        <Badge variant={status === 'active' ? 'default' : 'secondary'}>
          {status === 'active' ? 'Active' : 'Inactive'}
        </Badge>
      );
    },
    meta: {
      label: 'Status',
      variant: 'multiSelect',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' }
      ]
    },
    enableColumnFilter: true
  },
  {
    id: 'actions',
    header: 'Action',
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon'>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem>View</DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem variant='destructive'>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableSorting: false,
    enableHiding: false
  }
];
