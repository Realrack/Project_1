import React, {useState} from 'react';
import BaseView from '../../components/baseView.component';
import BackButton from '../../components/backButton.component';
import WebView from 'react-native-webview';
import Loader from '../../components/loader.component';

export default function EthicalHacking({navigation}) {
  const [loading, setLoading] = useState(false);

  return (
    <BaseView>
      <Loader loading={loading} />

      <BackButton onPress={() => navigation.goBack()} />
      <WebView
        onLoad={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        source={{uri: 'https://indiancoding.com/course-data-science.html'}}
      />
    </BaseView>
  );
}
