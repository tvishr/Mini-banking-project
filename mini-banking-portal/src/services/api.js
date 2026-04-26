const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

async function callApi(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.error || body.message || 'API request failed');
  }
  return body;
}

export function register({ username, email, password }) {
  return callApi('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
  });
}

export function login({ username, password }) {
  return callApi('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}

export function fetchAccounts(token) {
  return callApi('/accounts', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createAccount(accountType, token) {
  return callApi('/accounts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ accountType }),
  });
}

export function transferFunds(accountId, request, token) {
  return callApi(`/accounts/${accountId}/transfer`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(request),
  });
}
