export interface IUserProps {
  uid: string;
  name: string;
  bananas: number;
  stars: number;
  isHighlighted?: boolean;
  rank?: number;
}

export interface IUserListProps {
  users: IUserProps[];
}

export interface IColumnProps {
  accessor: keyof IUserProps;
  title: string;
  sorting?: boolean;
}

export interface IDataTableProps {
  cols: IColumnProps[];
  rows: IUserProps[];
}

export interface ISearchInputProps {
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
}
