import React from 'react';
import BaseView from '../../components/baseView.component';
import Text from '../../components/text.component';

const CartScreen = () => {
  return (
    <BaseView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>This is cart Screen.</Text>
    </BaseView>
  );
};
export default CartScreen;
