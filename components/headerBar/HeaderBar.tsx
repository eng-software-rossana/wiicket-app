import React, { useState } from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { headerBarStyles } from './headerBarStyles';

type Props = {
  title?: string;
};

const HeaderBar = (props: Props) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching');
    //homeSearch(searchText);
  };
  const handleKebab = () => {
    console.log('Kebab');
  };

  return (
    <Appbar.Header style={headerBarStyles.headerColor}>
      <Appbar.Action icon="dots-vertical" onPress={handleKebab} />
      <TextInput
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="Buscar Produtos..."
        onSubmitEditing={handleSearch}
        style={headerBarStyles.searchBar}
      />
      <Appbar.Action icon="cart" onPress={handleSearch} />
      {/* <Appbar.Action icon="account" onPress={handleSearch} /> */}
    </Appbar.Header>
  );
};

export default HeaderBar;
