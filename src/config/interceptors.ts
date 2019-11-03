import axios from 'axios-observable';
import { refreshToken } from 'core/services/auth/auth.service';

// Adds access token to every request
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
    if (token !== null && !(config.headers && config.headers['X-Auth-Token'])) {

      let request_headers = {
        ...config.headers,
        'X-Mock': 'no',
        'Accept-Language': 'pt-BR',
        Authorization: `Bearer ${token}`,
      }
      if (localStorage.getItem('company_id')) {
        request_headers = {
          ...request_headers, 
          'X-Company-Id': localStorage.getItem('company_id')
        }
      }
      return {
        ...config,
        headers: request_headers,
        withCredentials: false,
      };
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// Try to refresh the token whenever a request is unauthorized
let isRefreshing = false;
let subscribers: ReadonlyArray<(token: string) => void> = [];
axios.interceptors.response.use(undefined, err => {
  const config = err.config;
  const status = err.response && err.response.status;

  if (status === 401 && err.data.error_description !== 'Invalid user credentials') {
    if (!isRefreshing) {
      isRefreshing = true;
      const rToken = localStorage.getItem('refresh_token');
      if (rToken !== null) {
        refreshToken(rToken)
          .toPromise()
          .then(response => {
            const { data } = response;
            isRefreshing = false;
            onRefreshed(data.access_token);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            subscribers = [];
          })
          .catch(() => {
            console.log('Fail refreshing token');
          });
      }
    }
    const requestSubscribers = new Promise(resolve => {
      subscribeTokenRefresh((token: string) => {
        const originalRequest = {
          ...config,
          headers: {
            ...config.headers,
            // 'X-Mock': 'no',
            'Accept-Language': 'pt-BR',
            Authorization: `Bearer ${token}`,
          },
        };
        resolve(new axios(originalRequest));
      });
    });
    return requestSubscribers;
  }
  return Promise.reject(err);
});

(window as any).axios = axios;

const subscribeTokenRefresh = (cb: (token: string) => void) => {
  subscribers = [...subscribers, cb];
};

const onRefreshed = (token: string) => {
  subscribers.map(cb => cb(token));
};
