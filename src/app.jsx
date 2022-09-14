import { runApp, config } from 'ice';
import { Toast } from 'antd-mobile';

const appConfig = {
  app: {
    rootId: 'root',
  },
  router: {
    type: 'browser',
  },
  request: {
    baseURL: config.baseURL,
    interceptors: {
      request: {
        onConfig: (cfg) => {
          return cfg;
        },
        onError: (error) => {
          return Promise.reject(error);
        },
      },
      response: {
        onConfig: (response) => {
          if (response?.status !== 200) Toast.show({ icon: 'fail', content: 'success: false' });
          return response;
        },
        onError: (error) => {
          const { data, status, headers } = error.response;
          Toast.show({
            icon: 'fail',
            content: `
              data: ${data}
              status: ${status}
              headers: ${headers}
              `,
          });
          // eslint-disable-next-line no-console
          console.error(error.response);
          return Promise.reject(error);
        },
      },
    },
  },
};
runApp(appConfig);
