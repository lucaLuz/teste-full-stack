export async function login(username: string, password: string) {
    const response = await fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    const users = await response.json();
  
    return users.find((user: { username: string; password: string }) => user.username === username && user.password === password);
  }
  