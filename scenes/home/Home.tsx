import React, { useContext, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { headerBarStyles } from './headerBarStyles';
import Product from '../../components/product/Product';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { CartContext, ShoppingList } from '../../context/CartContext';

const scrollViewStyle = StyleSheet.create({
  scroll: {
    display: 'flex',
    alignItems: 'center',
  },
  headerScroll: { height: 40 },

  categoriesScroll: {
    padding: 8,
    backgroundColor: '#FA8837',
  },

  buildPCTouchable: {
    width: 600,
    height: 180,
  },

  buildPC: {
    width: '100%',
    height: '100%',
  },

  categoryStyle: { fontFamily: 'verdana', color: '#FFFFFF' },
});

const json_data = [
  {
    productID: '1',
    title:
      'Placa de Vídeo GALAX GeForce RTX 3060 (1-Click OC) LHR, 15 Gbps, 12GB GDDR6',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/150657/placa-de-video-galax-geforce-rtx-3060-1-click-oc-15-gbps-12gb-gddr6-ray-tracing-dlss-36nol7md1voc_1614253646_gg.jpg',
    description: 'Placa de Vídeo RTX 3060 - Descrição Padrão',
  },
  {
    productID: '2',
    title:
      'Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo), AM4, Vídeo Integrado, 6 Núcleos',
    cost: 1299.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/181088/processador-amd-ryzen-5-5600g-3-9ghz-4-4ghz-max-turbo-am4-video-integrado-6-nucleos-100-100000252box_1627588230_p.jpg',
    description: 'Processador AMD Ryzen 5 5600G - Descrição Padrão',
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

const buildPCPath = '../../assets/home/PCBuild.jpg';

const products = json_data.map(product => (
  <Product
    key={product.productID}
    productID={product.productID}
    title={product.title}
    cost={product.cost}
    imgURI={product.imgURI}
    description={product.description}
  />
));

const categories = categories_data.map(category => (
  <TouchableOpacity
    style={scrollViewStyle.categoriesScroll}
    key={category.name}>
    <Text style={scrollViewStyle.categoryStyle}>{category.name}</Text>
  </TouchableOpacity>
));

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { clearOrder } = useContext(CartContext) as ShoppingList;
  const handleSearch = () => {
    console.log(searchText);
  };

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
        <TouchableOpacity
          style={scrollViewStyle.buildPCTouchable}
          onPress={() => {
            clearOrder();
            navigation.navigate('PcBuild');
          }}>
          <Image
            resizeMode="contain"
            style={scrollViewStyle.buildPC}
            source={require(buildPCPath)}
          />
        </TouchableOpacity>
        {products}
      </ScrollView>
    </>
  );
};

export default Home;
