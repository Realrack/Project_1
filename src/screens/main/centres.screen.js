import React, {useState} from 'react';
import BaseView from '../../components/baseView.component';
import WebView from 'react-native-webview';
import BackButton from '../../components/backButton.component';
import Loader from '../../components/loader.component';

export default function CentresScreen({navigation}) {
  const [loading, setLoading] = useState(false);

  return (
    <BaseView>
      <Loader loading={loading} />
      <BackButton onPress={() => navigation.goBack()} />
      <WebView
        onLoad={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        source={{uri: 'https://indiancoding.com/locations.html'}}
      />
    </BaseView>
  );
}
