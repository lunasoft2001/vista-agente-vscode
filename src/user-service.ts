export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export class UserService {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(u => u.email === email);
  }

  async createUser(email: string, name: string): Promise<User> {
    const newUser: User = { 
      id: Math.random().toString(36).substring(2, 9), 
      email, 
      name, 
      role: 'user' 
    };
    this.users.push(newUser);
    return newUser;
  }
}
