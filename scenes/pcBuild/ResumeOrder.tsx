import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/RootStackParamList';

const ResumeOrder = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ResumeOrder'>>();
  const order = route.params.order;
  return (
    <View>
      <Text>"Resume Order: " {order}</Text>
    </View>
  );
};

export default ResumeOrder;
