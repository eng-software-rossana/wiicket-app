import { Text } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { headerBarStyles } from './headerBarStyles';
//import { Drawer } from 'react-native-paper';

//const productList = backend.getProducts();

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(searchText);
  };

  const handleKebab = () => {
    console.log('Kebab');
  };

  const handleCart = () => {
    console.log('Cart');
  };
  const [active, setActive] = React.useState('');
  return (
    <View>
      {/* <Drawer.Section>
        <Drawer.Item
          label="Perfil"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Histórico de Compras"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section> */}
      <Appbar.Header style={headerBarStyles.headerColor}>
        {/* <Appbar.Action icon="menu" onPress={handleKebab} /> */}
        <TextInput
          theme={{ roundness: 20 }}
          mode={'outlined'}
          placeholder="Buscar Produtos..."
          onSubmitEditing={handleSearch}
          style={headerBarStyles.searchBar}
          onChangeText={newText => setSearchText(newText)}
          value={searchText}
        />
        {/* <Appbar.Action icon="cart" onPress={handleCart} /> */}
      </Appbar.Header>
      <View>
        <Text>Wicket</Text>
      </View>
      <Text>Aqui é a home :D</Text>
    </View>
  );
};

export default Home;
