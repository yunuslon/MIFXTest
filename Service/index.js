export const Login = result => {
  fetch('https://fe.dev.dxtr.asia/api/login', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'user@test.io',
      password: 'Test123.',
    }),
  })
    .then(response => response.json())
    .then(result)
    .catch(e => {
      console.log(e.message);
    });
};

export const Category = (token, result) => {
  fetch('https://fe.dev.dxtr.asia/api/category', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(result)
    .catch(e => {
      console.log(e.message);
    });
};

export const Product = (token, result) => {
  fetch('https://fe.dev.dxtr.asia/api/products', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(result)
    .catch(e => {
      console.log(e.message);
    });
};
