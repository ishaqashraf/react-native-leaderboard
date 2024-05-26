import React, { useCallback, useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { ScrollView, StyleSheet } from 'react-native';
import { DataTable as Table } from 'react-native-paper';
import { IDataTableProps, IUserProps } from '@/redux/types';

const DataTable: React.FC<IDataTableProps> = ({ cols, rows }) => {
  const { highlightedColor, transparentColor } = Colors.light;
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [sortedData, setSortedData] = useState<IUserProps[]>([]);

  useEffect(() => {
    setSortedData(rows);
  }, [rows]);

  const onSort = useCallback(
    (accessor: keyof IUserProps) => {
      const sortedItems = sortedData
        .slice()
        .sort((a, b) =>
          sortAscending
            ? a[accessor]!.toString().localeCompare(b[accessor]!.toString())
            : b[accessor]!.toString().localeCompare(a[accessor]!.toString())
        );
      setSortedData(sortedItems);
    },
    [sortAscending, sortedData]
  );

  return (
    <Table testID='user-table' style={{ flex: 1 }}>
      <Table.Header style={{ marginBottom: 5 }}>
        {cols?.map((col, index) => (
          <Table.Title
            {...(col?.sorting && {
              sortDirection: sortAscending ? 'ascending' : 'descending',
              onPress: () => {
                setSortAscending(!sortAscending);
                onSort(col.accessor);
              },
            })}
            key={index}
            style={styles.row}
          >
            {col.title}
          </Table.Title>
        ))}
      </Table.Header>
      <ScrollView>
        {sortedData?.map((row) => (
          <Table.Row
            testID='user-row'
            style={{
              borderRadius: 15,
              backgroundColor: row.isHighlighted
                ? highlightedColor
                : transparentColor,
            }}
            key={row.uid}
          >
            <Table.Cell style={styles.row}>{row.name}</Table.Cell>
            <Table.Cell style={styles.row}>{row.rank}</Table.Cell>
            <Table.Cell style={styles.row}>{row.bananas}</Table.Cell>
          </Table.Row>
        ))}
      </ScrollView>
    </Table>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    flexGrow: 1,
  },
});

export default DataTable;
