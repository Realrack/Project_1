import React from 'react';
import WebView from 'react-native-webview';
import BaseView from '../../components/baseView.component';
import BackButton from '../../components/backButton.component';
import Loader from '../../components/loader.component';

export default function BatchesScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  return (
    <BaseView>
      <Loader loading={loading} />
      <BackButton
        onLoad={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        onPress={() => navigation.goBack()}
      />
      <WebView source={{uri: 'https://indiancoding.com/courses.html'}} />
    </BaseView>
  );
}
