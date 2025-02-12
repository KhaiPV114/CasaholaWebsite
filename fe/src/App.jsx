import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoutes';
import 'antd/dist/reset.css';  
const App = () => (
  <Provider store={store}>
    <ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
      <AppRoutes />
    </ConfigProvider>
  </Provider>
);

export default App;
