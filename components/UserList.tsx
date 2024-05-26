import React from 'react';
import DataTable from './DataTable';
import { IUserListProps, IColumnProps } from '@/redux/types';

const columns: IColumnProps[] = [
  {
    accessor: 'name',
    title: 'Name',
    sorting: true,
  },
  {
    accessor: 'rank',
    title: 'Rank',
  },
  {
    accessor: 'bananas',
    title: 'Bananas',
  },
];

const UserList: React.FC<IUserListProps> = ({ users }) => {
  return <DataTable cols={columns} rows={users} />;
};

export default UserList;
