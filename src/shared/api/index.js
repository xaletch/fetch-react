const API_URL = 'https://api.great-habits.ru/api/v1';

export const API_MASK = async (URL, DATA, METHOD, AUTH_TOKEN) => {
  try {
    const url = `${API_URL}/${URL}`;
    const res = await fetch(url, {
      method: METHOD,
      headers: {
        'Content-Type': 'application/json',
        ...(AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {})
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
  get: (URL, DATA, AUTH_TOKEN) => API_MASK(URL, DATA, 'GET', AUTH_TOKEN),
  post: (URL, DATA, AUTH_TOKEN) => API_MASK(URL, DATA, 'POST', AUTH_TOKEN),
  delete: (URL, DATA, AUTH_TOKEN) => API_MASK(URL, DATA, 'DELETE', AUTH_TOKEN),
  put: (URL, DATA, AUTH_TOKEN) => API_MASK(URL, DATA, 'PUT', AUTH_TOKEN),
};