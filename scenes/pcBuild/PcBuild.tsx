import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { BackHandler, Text, ToastAndroid, View } from 'react-native';
import { ScrollView } from 'react-native';
import Button from '../../components/button/Button';
import PCComponent from '../../components/pcComponent/PcComponent';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { pcBuildStyles } from './pcBuildStyles';

enum categories {
  'Processador' = 0,
  'Placa de Vídeo' = 1,
  'Placa mãe' = 2,
  'Memória RAM' = 3,
  'Armazenamento' = 4,
  'Gabinete' = 5,
}

const categoriesLength = (
  Object.values(categories).filter(
    value => typeof value === 'string',
  ) as string[]
).length;

const cpu = [
  {
    productID: '1',
    title:
      'Processador Intel Core i5-10400, Cache 12MB, 2.9GHz (4.3GHz Max Turbo), LGA 1200',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_p.jpg',
    description: 'Processador Intel Core i5-10400 - Descrição Padrão',
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

const gpu = [
  {
    productID: '1',
    title: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 3070 Ti Gaming OC LHR',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/167207/placa-de-video-gigabyte-aorus-nvidia-geforce-rtx-3070-ti-gaming-oc-lhr-rgb-8g-gddr6x-dlss-ray-tracing-gv-n307tgaming-oc-8gd_1625595458_p.jpg',
    description: 'Placa de Vídeo NVIDIA GeForce RTX 3070 Ti - Descrição Padrão',
  },
  {
    productID: '2',
    title:
      'Placa de Vídeo XFX Speedster SWFT210 AMD Radeon RX 6600 XT, 8GB GDDR6',
    cost: 1299.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/187640/placa-de-video-xfx-speedster-swft210-amd-radeon-rx-6600-xt-8gb-gddr6-16gbps-amd-rdna-2-architecture-rx-66xt8dfdq-_1628682117_p.jpg',
    description: 'RX 6600 XT - Descrição Padrão',
  },
];

const mb = [
  {
    productID: '1',
    title: 'Placa-Mãe Asus TUF Gaming B550M-Plus, AMD B550, mATX, DDR4',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/115216/placa-mae-asus-tuf-gaming-b550m-plus-amd-b550-matx-ddr4_1638447289_p.jpg',
    description: 'Placa-Mãe Asus TUF Gaming B550M-Plus - Descrição Padrão',
  },
  {
    productID: '2',
    title: 'Placa Mãe MSI H510M-A PRO, Intel LGA1200, mATX, DDR4',
    cost: 1299.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/302590/placa-mae-msi-intel-lga1200-matx-ddr4-h510m-a-pro_1642523398_p.jpg',
    description: 'Placa Mãe MSI H510M-A PRO - Descrição Padrão',
  },
];

const ram = [
  {
    productID: '1',
    title: 'Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz, DDR4, CL18, Preta',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_p.jpg',
    description: 'Memória XPG Spectrix D45G, RGB, 8GB - Descrição Padrão',
  },
  {
    productID: '2',
    title: 'Memória Corsair Vengeance LPX 8GB, 3200MHz, DDR4, CL16, Preta',
    cost: 1299.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/229176/memoria-corsair-vengeance-lpx-8gb-3200mhz-ddr4-cl16-preta-cmk8gx4m1e3200c16_1631635307_p.jpg',
    description: 'Memória Corsair Vengeance LPX 8GB - Descrição Padrão',
  },
];

const storage = [
  {
    productID: '1',
    title: 'SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação 450MB/s',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/85198/85198_index_p.jpg',
    description: 'SSD Kingston A400, 480GB, SATA - Descrição Padrão',
  },
  {
    productID: '2',
    title: 'SSD Adata SU650, 240GB, SATA, Leitura 520MB/s, Gravação 450MB/s',
    cost: 1299.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/105015/ssd-adata-su650-240gb-sata-leitura-520mb-s-gravacao-450mb-s-asu650ss-240gt-r_ssd-adata-su650-240gb-sata-leitura-520mb-s-gravacao-450mb-s-asu650ss-240gt-r_1570554676_p.jpg',
    description: 'SSD Adata SU650, 240GB, SATA - Descrição Padrão',
  },
  {
    productID: '3',
    title: 'HD WD Red NAS, 4TB, 3.5´, SATA - WD40EFAX',
    cost: 649.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/114923/hd-western-digital-wd-red-nas-4tb-3-5-sata-wd40efax-_1593717903_gg.jpg',
    description: 'HD WD Red NAS, 4TB, SATA - Descrição Padrão',
  },
];

const pcCase = [
  {
    productID: '1',
    title:
      'Gabinete Gamer Redragon Wheel Jack, Mid Tower, Lateral e Frontal em Vidro',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/104484/gabinete-gamer-redragon-wheel-jack-mid-tower-rgb-lateral-e-frontal-em-vidro-gc-606bk_gabinete-gamer-redragon-wheel-jack-mid-tower-rgb-lateral-e-frontal-em-vidro-gc-606bk_1571930874_p.jpg',
    description:
      'Gabinete Gamer Redragon Wheel Jack, Mid Tower - Descrição Padrão',
  },
  {
    productID: '2',
    title: 'Gabinete Redragon GRAPPLE, Branco',
    cost: 1299.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/130989/gabinete-redragon-grapple-branco-gc-607wh_1605008049_p.jpg',
    description: 'Gabinete Redragon GRAPPLE - Descrição Padrão',
  },
];

const PcBuild = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [currentCategory, setCurrentCategory] = useState(0);
  const [selected, setSelected] = useState<string>('');
  const [componentList, setComponentList] = useState<string[]>([]);
  const [categoryComponents, setCategoryComponents] = useState<JSX.Element[]>(
    [],
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    setCategoryComponents(
      pcCase.map(product => (
        <PCComponent
          key={product.productID}
          productID={product.productID}
          title={product.title}
          cost={product.cost}
          imgURI={product.imgURI}
          description={product.description}
          selectedId={selected}
          setSelectedId={setSelected}
        />
      )),
    );
  }, [currentCategory, selected]);

  const addComponent = (componentId: string) => {
    setComponentList([...componentList, componentId]);
  };

  return (
    <View style={pcBuildStyles.page}>
      <Text style={pcBuildStyles.title}>Monte Seu PC</Text>
      <Text style={pcBuildStyles.category}>
        Categoria atual: {categories[currentCategory]}
      </Text>
      <ScrollView contentContainerStyle={pcBuildStyles.scrollView}>
        {categoryComponents}
      </ScrollView>
      <Button
        style={pcBuildStyles.continue}
        text="Adicionar"
        onPress={() => {
          //Adicionar o id do produto em uma lista
          if (
            (currentCategory === categories.Processador ||
              currentCategory === categories['Placa mãe'] ||
              currentCategory === categories['Memória RAM']) &&
            selected.length === 0
          ) {
            ToastAndroid.show(
              'Selecione pelo menos um componente nesta categoria',
              ToastAndroid.SHORT,
            );
          } else {
            if (selected !== '') {
              addComponent(selected);
            }
            if (currentCategory + 1 === categoriesLength) {
              console.log(componentList);
              navigation.navigate('ResumeOrder', {
                order: componentList,
              });
            } else {
              setSelected('');
              setCurrentCategory(currentCategory + 1);
            }
          }
        }}
      />
    </View>
  );
};

export default PcBuild;
