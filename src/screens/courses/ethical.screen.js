import React from 'react';
import BaseView from '../../components/baseView.component';
import BackButton from '../../components/backButton.component';
import WebView from 'react-native-webview';
import Loader from '../../components/loader.component';

export default function EthicalHacking({navigation}) {
  const [loading, setLoading] = useState(false);

  return (
    <BaseView>
      <Loader loading={loading} />

      <BackButton
        onLoad={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        onPress={() =>
          navigation.goBack('https://indiancoding.com/course-jquery.html')
        }
      />
      <WebView source={{uri: ''}} />
    </BaseView>
  );
}
