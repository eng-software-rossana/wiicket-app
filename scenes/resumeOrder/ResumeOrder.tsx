import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Button from '../../components/button/Button';
import PCComponent from '../../components/pcComponent/PcComponent';
import TotalCost from '../../components/totalCost/TotalCost';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { pcBuildStyles } from '../pcBuild/pcBuildStyles';

const products: any = {
  cpu: [
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
    {
      productID: '3',
      title:
        'Processador AMD Ryzen 5 5500, Cache 19MB, 3.6GHz (4.2GHz Max Turbo), AM4, Sem Vídeo',
      cost: 819.9,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/320799/processador-amd-ryzen-5-5500-cache-19mb-3-7ghz-4-2ghz-max-turbo-am4-100-100000457box_1647636796_gg.jpg',
      description: 'Processador AMD Ryzen 5 5500 - Descrição Padrão',
    },
    {
      productID: '4',
      title: 'Processador Intel Pentium Gold G6400, Cache 4MB, 4.00 GHz',
      cost: 339.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/125554/processador-intel-pentium-gold-g6400-processor-cache-4mb-4-00-ghz_1600435408_gg.jpg',
      description: 'Processador Intel Pentium Gold G6400 - Descrição Padrão',
    },
    {
      productID: '5',
      title: 'Processador AMD Ryzen 9 5900X, Cache 70MB, 3.7GHz',
      cost: 3859.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/129460/processador-amd-ryzen-9-5900x-cache-70mb-3-8ghz-4-7ghz-max-turbo-am4-100-100000061wof_1604585280_gg.jpg  ',
      description: 'Processador AMD Ryzen 9 5900X - Descrição Padrão',
    },
  ],
  gpu: [
    {
      productID: '6',
      title: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 3070 Ti Gaming OC LHR',
      cost: 3599.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/167207/placa-de-video-gigabyte-aorus-nvidia-geforce-rtx-3070-ti-gaming-oc-lhr-rgb-8g-gddr6x-dlss-ray-tracing-gv-n307tgaming-oc-8gd_1625595458_p.jpg',
      description:
        'Placa de Vídeo NVIDIA GeForce RTX 3070 Ti - Descrição Padrão',
    },
    {
      productID: '7',
      title:
        'Placa de Vídeo XFX Speedster SWFT210 AMD Radeon RX 6600 XT, 8GB GDDR6',
      cost: 1299.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/187640/placa-de-video-xfx-speedster-swft210-amd-radeon-rx-6600-xt-8gb-gddr6-16gbps-amd-rdna-2-architecture-rx-66xt8dfdq-_1628682117_p.jpg',
      description: 'RX 6600 XT - Descrição Padrão',
    },
    {
      productID: '8',
      title:
        'Placa de Vídeo ZOTAC GAMING GeForce RTX 3060 Twin Edge - 15 Gbps, 12GB, GDDR6',
      cost: 2899.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/148656/placa-de-video-zotac-gaming-geforce-rtx-3060-twin-edge-15-gbps-12gb-gddr6-ray-tracing-zt-a30600e-10m_1613994258_gg.jpg',
      description:
        'Placa de Vídeo ZOTAC GAMING GeForce RTX 3060 - Descrição Padrão',
    },
    {
      productID: '9',
      title:
        'Placa de Vídeo Zotac GAMING GeForce NVIDIA GTX 1660 Twin Fan 6GB GDDR5',
      cost: 1799.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/158629/placa-de-video-zotac-gaming-geforce-gtx-1660-twin-fan-6gb-gddr5-zt-t16600m-10m_1632494195_gg.jpg',
      description:
        'Placa de Vídeo Zotac GAMING GeForce NVIDIA GTX 1660 - Descrição Padrão',
    },
    {
      productID: '10',
      title: 'Placa de Vídeo ASUS AMD Radeon RX 6700 XT, 16 Gbps, 12GB GDDR6',
      cost: 5499.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/150480/placa-de-video-asus-amd-radeon-rx-6700-xt-16-gbps-12gb-gddr6-tuf-rx6700xt-o12g-gaming_1615392084_gg.jpg',
      description:
        'Placa de Vídeo ASUS AMD Radeon RX 6700 XT - Descrição Padrão',
    },
  ],
  motherboard: [
    {
      productID: '11',
      title: 'Placa-Mãe Asus TUF Gaming B550M-Plus, AMD B550, mATX, DDR4',
      cost: 3599.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/115216/placa-mae-asus-tuf-gaming-b550m-plus-amd-b550-matx-ddr4_1638447289_p.jpg',
      description: 'Placa-Mãe Asus TUF Gaming B550M-Plus - Descrição Padrão',
    },
    {
      productID: '12',
      title: 'Placa Mãe MSI H510M-A PRO, Intel LGA1200, mATX, DDR4',
      cost: 1299.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/302590/placa-mae-msi-intel-lga1200-matx-ddr4-h510m-a-pro_1642523398_p.jpg',
      description: 'Placa Mãe MSI H510M-A PRO - Descrição Padrão',
    },
    {
      productID: '13',
      title: 'Placa-mãe Asus PRIME H610M-A D4, LGA 1700 H610, mATX, DDR4',
      cost: 1299.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/302590/placa-mae-msi-intel-lga1200-matx-ddr4-h510m-a-pro_1642523398_p.jpg',
      description: 'Placa-mãe Asus PRIME H610M-A D4 - Descrição Padrão',
    },
    {
      productID: '14',
      title: 'Placa-Mãe Gigabyte B550M DS3H, AMD AM4, Micro ATX, DDR4',
      cost: 1299.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/114782/placa-mae-gigabyte-b550m-ds3h-amd-am4-micro-atx-ddr4_1594906287_p.jpg',
      description:
        'Placa-Mãe Gigabyte B550M DS3H, AMD AM4, Micro ATX, DDR4 - Descrição Padrão',
    },
    {
      productID: '15',
      title: 'Placa-Mãe ASRock B450M Steel Legend, AMD AM4, mATX, DDR4',
      cost: 709.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/100672/placa-mae-asrock-b450m-steel-legend-amd-am4-matx-ddr4-90-mxb9y0-a0uayz_placa-mae-asrock-b450m-steel-legend-amd-am4-matx-ddr4-90-mxb9y0-a0uayz_1552586908_gg.jpg',
      description: 'Placa Mãe MSI H510M-A PRO - Descrição Padrão',
    },
  ],
  memory: [
    {
      productID: '16',
      title: 'Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz, DDR4, CL18, Preta',
      cost: 399.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_p.jpg',
      description: 'Memória XPG Spectrix D45G, RGB, 8GB - Descrição Padrão',
    },
    {
      productID: '17',
      title: 'Memória Corsair Vengeance LPX 8GB, 3200MHz, DDR4, CL16, Preta',
      cost: 399.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/229176/memoria-corsair-vengeance-lpx-8gb-3200mhz-ddr4-cl16-preta-cmk8gx4m1e3200c16_1631635307_p.jpg',
      description: 'Memória Corsair Vengeance LPX 8GB - Descrição Padrão',
    },
    {
      productID: '18',
      title:
        'Memória XPG Spectrix D41 TUF, RGB, 8GB, 3200MHz, DDR4, CL16, Preta',
      cost: 457.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/166059/memoria-xpg-spectrix-d41-tuf-rgb-8gb-3200mhz-ddr4-cl16-preta-ax4u32008g16a-sb41_1629126214_p.jpg',
      description:
        'Memória XPG Spectrix D41 TUF, RGB, 8GB, 3200MHz, DDR4, CL16, Preta - Descrição Padrão',
    },
    {
      productID: '19',
      title: 'Memória XPG Gammix D30, 8GB, 3200MHz, DDR4, CL19',
      cost: 289.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/155567/memoria-xpg-gammix-d30-8gb-3200mhz-ddr4-cl19-ax4u32008g16a-sb30_1622639642_p.jpg',
      description:
        'Memória XPG Gammix D30, 8GB, 3200MHz, DDR4, CL19 - Descrição Padrão',
    },
    {
      productID: '20',
      title:
        'Memória Gamer Husky Gaming, Blizzard, RGB, 8GB, 3200Mhz, DDR4, CL19',
      cost: 299.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/155667/memoria-gamer-husky-gaming-blizzard-rgb-8gb-3200mhz-ddr4-cl19_1624879649_p.jpg',
      description:
        'Memória Gamer Husky Gaming, Blizzard, RGB, 8GB, 3200Mhz, DDR4, CL19 - Descrição Padrão',
    },
  ],
  storage: [
    {
      productID: '21',
      title:
        'SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação 450MB/s',
      cost: 179.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/85198/85198_index_p.jpg',
      description: 'SSD Kingston A400, 480GB, SATA - Descrição Padrão',
    },
    {
      productID: '22',
      title: 'SSD Adata SU650, 240GB, SATA, Leitura 520MB/s, Gravação 450MB/s',
      cost: 189.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/105015/ssd-adata-su650-240gb-sata-leitura-520mb-s-gravacao-450mb-s-asu650ss-240gt-r_ssd-adata-su650-240gb-sata-leitura-520mb-s-gravacao-450mb-s-asu650ss-240gt-r_1570554676_p.jpg',
      description: 'SSD Adata SU650, 240GB, SATA - Descrição Padrão',
    },
    {
      productID: '23',
      title: 'SSD 256GB Sata Iii 6.0 Gb/s Kzk',
      cost: 150.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/sync_mirakl/342774/SSD-256GB-Sata-Iii-6-0-Gb-s-Kzk_1654883804_p.jpg',
      description: 'SSD 256GB Sata Iii 6.0 Gb/s Kzk - Descrição Padrão',
    },
    {
      productID: '24',
      title:
        'SSD Patriot Burst Elite 240GB, 2.5´, SATA III, Leitura: 450MB/s e Gravação: 320MB/s',
      cost: 235.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/155125/ssd-patriot-burst-elite-240gb-2-5-sata-iii-leitura-555mb-s-e-gravacao-500mb-s-pbe240gs25ssdr_1620916040_p.jpg',
      description:
        'SSD Patriot Burst Elite 240GB, 2.5´, SATA III, Leitura: 450MB/s e Gravação: 320MB/s - Descrição Padrão',
    },
    {
      productID: '25',
      title:
        'SSD Lexar NQ100 SATAIII, 240GB, Sata, Leituras: 550Mb/s e Gravações: 445Mb/s',
      cost: 189.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/128074/ssd-lexar-nq100-sataiii-240gb-sata-leituras-550mb-s-e-gravacoes-445mb-s-lnq100x240g-rnnng_1606739086_gg.jpg',
      description:
        'SSD Lexar NQ100 SATAIII, 240GB, Sata, Leituras: 550Mb/s e Gravações: 445Mb/s - Descrição Padrão',
    },
  ],
  casePC: [
    {
      productID: '26',
      title:
        'Gabinete Gamer Redragon Wheel Jack, Mid Tower, Lateral e Frontal em Vidro',
      cost: 300.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/104484/gabinete-gamer-redragon-wheel-jack-mid-tower-rgb-lateral-e-frontal-em-vidro-gc-606bk_gabinete-gamer-redragon-wheel-jack-mid-tower-rgb-lateral-e-frontal-em-vidro-gc-606bk_1571930874_p.jpg',
      description:
        'Gabinete Gamer Redragon Wheel Jack, Mid Tower - Descrição Padrão',
    },
    {
      productID: '27',
      title: 'Gabinete Redragon GRAPPLE, Branco',
      cost: 544.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/130989/gabinete-redragon-grapple-branco-gc-607wh_1605008049_p.jpg',
      description: 'Gabinete Redragon GRAPPLE - Descrição Padrão',
    },
    {
      productID: '28',
      title:
        'Gabinete Gamer Redragon Grapple, Mid Tower, RGB, Lateral em Vidro',
      cost: 299.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/110045/gabinete-gamer-redragon-grapple-mid-tower-rgb-lateral-em-vidro-gc-607bk_1590151480_p.jpg',
      description:
        'Gabinete Gamer Redragon Grapple, Mid Tower, RGB, Lateral em Vidro - Descrição Padrão',
    },
    {
      productID: '29',
      title:
        'Gabinete Gamer Redragon Wheel Jack White, Mid Tower, RGB, Lateral e Frontal em Vidro, Branco',
      cost: 289.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/107181/gabinete-gamer-redragon-wheel-jack-white-mid-tower-rgb-lateral-e-frontal-em-vidro-branco-gc-606wh_1593800492_p.jpg',
      description:
        'Gabinete Gamer Redragon Wheel Jack White, Mid Tower, RGB, Lateral e Frontal em Vidro, Branco - Descrição Padrão',
    },
    {
      productID: '30',
      title:
        'Gabinete Gamer Redragon Strafe Infernal Dragon, Mid Tower, Lateral em Vidro Temperado, Preto',
      cost: 279.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/152767/gabinete-gamer-redragon-strafe-infernal-dragon-mid-tower-lateral-em-vidro-temperado-preto-gc-706if_1617999314_p.jpg',
      description:
        'Gabinete Gamer Redragon Strafe Infernal Dragon, Mid Tower, Lateral em Vidro Temperado, Preto - Descrição Padrão',
    },
  ],
  psu: [
    {
      productID: '31',
      title: 'Fonte XPG Core Reactor, 850W, ATX, 80 Plus Gold Modular',
      cost: 1299.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/103282/fonte-xpg-core-reactor-850w-80-plus-gold-modular_fonte-xpg-core-reactor-850w-80-plus-gold-modular_1571154124_p.jpg',
      description:
        'A XPG CORE REACTOR é uma fonte de alimentação modular 80 Plus Gold equipada com capacitores 100% japoneses. É confiável, eficiente em termos de energia, e facilita a criação de uma construção organizada.',
    },
    {
      productID: '32',
      title: 'Fonte Corsair CV550, 550W, 80 Plus Bronze',
      cost: 799.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/108257/fonte-corsair-cv550-550w-80-plus-bronze-cp-9020210-br_1575657760_p.jpg',
      description:
        'As fontes de alimentação CV da CORSAIR são ideais para fornecer energia para seu novo PC doméstico ou de trabalho, com eficiência 80 PLUS Bronze garantida para proporcionar máxima potência para seu sistema continuamente.',
    },
    {
      productID: '33',
      title:
        'Fonte Corsair RM850x, 850W, 80 Plus Gold, Full Modular, Bivolt, Preto',
      cost: 899.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/311382/fonte-corsair-rm850x-850w-80-plus-gold-full-modular-bivolt-preto-cp-9020200-na_1645477868_p.jpg',
      description:
        'Fonte Corsair RM850x, 850W, 80 Plus Gold, Full Modular, Bivolt, Preto - Com eficiência 80 PLUS Bronze garantida para proporcionar máxima potência para seu sistema continuamente.',
    },
    {
      productID: '34',
      title: 'Fonte EVGA 700W, 80 Plus White',
      cost: 850.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/99506/fonte-evga-700w-80-plus-white-100-w1-0700-k_fonte-evga-700w-80-plus-white-100-w1-0700-k_1549994192_p.jpg',
      description:
        'Fonte EVGA 700W, 80 Plus White máxima potência para seu sistema continuamente.',
    },
    {
      productID: '35',
      title: 'Fonte Nox 600W 80 Plus Bronze Semi-Modular Hummer X',
      cost: 599.99,
      imgURI:
        'https://images.kabum.com.br/produtos/fotos/96856/96856_3_1538136700_p.jpg',
      description: 'Fonte Nox 600W 80 Plus Bronze Semi-Modular Hummer X',
    },
  ],
};
//[[{}],[{},{}],[{},{},{}]]
const ResumeOrder = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { clearOrder, cartItems } = useContext(CartContext) as ShoppingList;

  // const order = products.map(product => (
  //   <PCComponent
  //     key={product.productID}
  //     productID={product.productID}
  //     title={product.title}
  //     cost={product.cost}
  //     imgURI={product.imgURI}
  //     description={product.description}
  //   />
  // ));
  const categories: any = Object.values(products);
  const order = categories.map(cat =>
    cat.map(prod =>
      cartItems.includes(prod.productID) ? (
        <PCComponent
          key={prod.productID}
          productID={prod.productID}
          title={prod.title}
          cost={prod.cost}
          imgURI={prod.imgURI}
          description={prod.description}
        />
      ) : null,
    ),
  );

  // const order = cartItems.map(id =>
  //   //const product = api.getProduct(id);
  //   product.map(attr => {
  //     <PCComponent
  //       key={attr.productID}
  //       productID={attr.productID}
  //       title={attr.title}
  //       cost={attr.cost}
  //       imgURI={attr.imgURI}
  //       description={attr.description}
  //     />;
  //   }),
  // );

  return (
    <View style={pcBuildStyles.page}>
      <Text style={pcBuildStyles.title}>Resumo do Pedido</Text>
      <TotalCost />
      <ScrollView contentContainerStyle={pcBuildStyles.scrollView}>
        {order}
      </ScrollView>
      <View style={pcBuildStyles.navigationView}>
        <Button
          style={pcBuildStyles.navigationButton}
          text="Voltar à Loja"
          textStyle={pcBuildStyles.navigationText}
          onPress={() => {
            //console.log(totalCost);
            clearOrder();
            navigation.navigate('TabHome', { screen: 'Loja' });
          }}
        />
        <Button
          style={pcBuildStyles.navigationButton}
          text="Finalizar Pedido"
          textStyle={pcBuildStyles.navigationText}
          onPress={() => {
            //api.createOrder(componentList);
            navigation.navigate('Payment');
          }}
        />
      </View>
    </View>
  );
};

export default ResumeOrder;
