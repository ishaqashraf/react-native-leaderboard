import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Alert, Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '@/redux/actions/users';
import Loading from '@/components/Loading';
import SearchInput from '@/components/SearchInput';
import UserList from '@/components/UserList';
import { IRootState } from '@/redux';
import { IUserProps } from '@/redux/types';

const LeaderBoard: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector(
    (state: IRootState) => state.usersReducer
  );

  const [query, setQuery] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<IUserProps[]>([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleSearch = async () => {
    setFilteredUsers([]);
    try {
      const userArray = Object.values(users) as IUserProps[];

      const filteredResults = userArray.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase().trim())
      );

      if (filteredResults.length === 0) {
        Alert.alert(
          'User Not Found',
          'This username does not exist! Please specify an existing username!'
        );
        return;
      }

      let chosenUser: IUserProps =
        filteredResults.length === 1
          ? filteredResults[0]
          : await new Promise<IUserProps>((resolve) => {
              Alert.alert(
                'Multiple users found!',
                'Select one from the list',
                filteredResults
                  .sort((a, b) => b.bananas - a.bananas)
                  .map((user) => ({
                    text: `${user.name} (${user.stars} stars)`,
                    onPress: () => resolve(user),
                  }))
              );
            });

      const sortedUserList = userArray.sort((a, b) => b.bananas - a.bananas);
      const chosenUserRank =
        sortedUserList.findIndex((user) => user.uid === chosenUser.uid) + 1;

      const topTenUsers = sortedUserList.slice(0, 10);
      const isUserInTopTen =
        chosenUser.bananas >= topTenUsers[topTenUsers.length - 1].bananas;

      const updatedTopTenUsers = isUserInTopTen
        ? topTenUsers.map((user, index) => ({
            ...user,
            rank: index + 1,
            isHighlighted: user.uid === chosenUser.uid,
          }))
        : [
            ...topTenUsers.slice(0, 9).map((user, index) => ({
              ...user,
              rank: index + 1,
              isHighlighted: user.uid === chosenUser.uid,
            })),
            { ...chosenUser, rank: chosenUserRank, isHighlighted: true },
          ];

      setFilteredUsers(updatedTopTenUsers);
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert('Error', 'An error occurred while searching');
      console.error(error);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container}>
      <SearchInput value={query} onChange={setQuery} onSearch={handleSearch} />
      {filteredUsers.length > 0 && <UserList users={filteredUsers} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    margin: 16,
  },
});

export default LeaderBoard;
