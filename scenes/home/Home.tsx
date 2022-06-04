import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { headerBarStyles } from './headerBarStyles';
import Product from '../../components/product/Product';
import { TouchableOpacity } from 'react-native-gesture-handler';

const scrollViewStyle = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
  },
  headerScroll: { height: 40, fontFamily: 'verdana' },

  categoriesScroll: { padding: 8, borderWidth: 0.6 },
});

const json_data = [
  {
    productID: '1',
    title:
      'Placa de Vídeo GALAX GeForce RTX 3060 (1-Click OC) LHR, 15 Gbps, 12GB GDDR6',
    cost: 'R$3.599,90',
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/150657/placa-de-video-galax-geforce-rtx-3060-1-click-oc-15-gbps-12gb-gddr6-ray-tracing-dlss-36nol7md1voc_1614253646_gg.jpg',
  },
  {
    productID: '2',
    title:
      'Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo), AM4, Vídeo Integrado, 6 Núcleos',
    cost: 'R$1.299,00',
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/181088/processador-amd-ryzen-5-5600g-3-9ghz-4-4ghz-max-turbo-am4-video-integrado-6-nucleos-100-100000252box_1627588230_p.jpg',
  },
];

const categories_data = [
  {
    name: 'Processador',
  },
  {
    name: 'Placa de vídeo',
  },
  {
    name: 'Placa Mãe',
  },
  {
    name: 'Memória RAM',
  },
  {
    name: 'Armazenamento',
  },
  {
    name: 'Gabinete',
  },
];

const products = json_data.map(product => (
  <Product
    key={product.productID}
    productID={product.productID}
    title={product.title}
    cost={product.cost}
    imgURI={product.imgURI}
  />
));

const categories = categories_data.map(category => (
  <TouchableOpacity
    style={scrollViewStyle.categoriesScroll}
    key={category.name}>
    <Text>{category.name}</Text>
  </TouchableOpacity>
));

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(searchText);
  };

  const [active, setActive] = React.useState('');
  return (
    <>
      <View>
        <Appbar.Header style={headerBarStyles.headerColor}>
          <TextInput
            theme={{ roundness: 20 }}
            mode={'outlined'}
            placeholder="Buscar Produtos..."
            onSubmitEditing={handleSearch}
            style={headerBarStyles.searchBar}
            onChangeText={newText => setSearchText(newText)}
            value={searchText}
          />
        </Appbar.Header>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={scrollViewStyle.headerScroll}>
        {categories}
      </ScrollView>
      <ScrollView contentContainerStyle={scrollViewStyle.scroll}>
        <TouchableOpacity>
          <Image source={require('../../assets/home/monte.png')} />
        </TouchableOpacity>
        {products}
      </ScrollView>
    </>
  );
};

export default Home;
