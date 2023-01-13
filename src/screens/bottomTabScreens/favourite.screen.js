import React from 'react';
import BaseView from '../../components/baseView.component';
import Text from '../../components/text.component';

const FavouriteScreen = () => {
  return (
    <BaseView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text fs={30} color={'#000'}>
        This is Favourite Screen.
      </Text>
    </BaseView>
  );
};

export default FavouriteScreen;
