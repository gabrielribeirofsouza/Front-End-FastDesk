const USERS_KEY = 'fastdesk_users';
const LOGGED_USER_KEY = 'fastdesk_logged_user';

export function initUsers() {
  const users = JSON.parse(localStorage.getItem(USERS_KEY));

  if (!users || users.length === 0) {
    const defaultUsers = [
      {
        id: 1,
        email: 'admin@fastdesk.com',
        password: '123456',
        role: 'admin'
      },
      {
        id: 2,
        email: 'user@fastdesk.com',
        password: '123456',
        role: 'user'
      },
      {
        id: 3,
        email: 'tecnichal@fastdesk.com',
        password: '123456',
        role: 'tecnichal'
      }
    ];

    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error('Usuário ou senha inválidos');
  }

  localStorage.setItem(
    LOGGED_USER_KEY,
    JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role
    })
  );

  return user;
}

export function logout() {
  localStorage.removeItem(LOGGED_USER_KEY);
}

export function getLoggedUser() {
  return JSON.parse(localStorage.getItem(LOGGED_USER_KEY));
}