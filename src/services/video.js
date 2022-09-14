import { request } from 'ice';

export default {
  async uploadImage(data) {
    const fd = new FormData();
    Object.keys(data).forEach((k) => {
      fd.append(k, data[k]);
    });
    return request.post('/upload', fd, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  async create(data) {
    return request.post('/ffc/create', data);
  },

  async progress(taskId) {
    return request.get('/ffc/getTaskFile', {
      params: { taskId },
    });
  },
};
