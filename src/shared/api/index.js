const API_URL = 'https://api.great-habits.ru/api/v1';

const AUTH_TOKEN = localStorage.getItem('auth_token') || '';

export const API_MASK = async (URL, DATA, METHOD) => {
  try {
    const url = `${API_URL}/${URL}`;
    const res = await fetch(url, {
      method: METHOD,
      headers: {
        'Content-Type': 'application/json',
        ...(AUTH_TOKEN && `Authorization: Bearer ${AUTH_TOKEN}`)
      },
      body: METHOD !== 'GET' ? JSON.stringify(DATA) : null,
    });

    return res.json();
  }
  catch (err) {
    console.log('Не удалось выполнить запрос. ', err);
    throw err;
  }
};

export const API = {
  get: (URL, DATA) => API_MASK(URL, DATA, 'GET'),
  post: (URL, DATA) => API_MASK(URL, DATA, 'POST'),
  delete: (URL, DATA) => API_MASK(URL, DATA, 'DELETE'),
  put: (URL, DATA) => API_MASK(URL, DATA, 'PUT'),
};