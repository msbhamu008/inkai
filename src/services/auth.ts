interface User {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  instituteName: string;
  state: string;
  city: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

const USERS_KEY = 'ink_users';
const CURRENT_USER_KEY = 'ink_current_user';
const TOKEN_KEY = 'userToken';

const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const generateToken = (user: User): string => {
  // Generate a simple token using user ID and timestamp
  return btoa(`${user.id}:${Date.now()}`);
};

export const createUser = async (userData: Omit<User, 'id'>): Promise<AuthResponse> => {
  try {
    const users = getUsers();
    
    // Check if user already exists
    const existingUser = users.find(u => 
      (userData.email && u.email === userData.email) || 
      (userData.phone && u.phone === userData.phone)
    );
    
    if (existingUser) {
      return {
        success: false,
        message: 'User with this email or phone already exists'
      };
    }

    const newUser: User = {
      ...userData,
      id: Date.now()
    };

    users.push(newUser);
    saveUsers(users);
    
    // Generate and store token
    const token = generateToken(newUser);
    localStorage.setItem(TOKEN_KEY, token);
    
    // Set current user
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    return {
      success: true,
      message: 'User created successfully',
      user: newUser,
      token
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred while creating user'
    };
  }
};

export const loginUser = async (contact: string): Promise<AuthResponse> => {
  try {
    const users = getUsers();
    const user = users.find(u => u.email === contact || u.phone === contact);

    if (!user) {
      return {
        success: false,
        message: 'User not found'
      };
    }

    // Generate and store token
    const token = generateToken(user);
    localStorage.setItem(TOKEN_KEY, token);

    // Set current user
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

    return {
      success: true,
      message: 'Login successful',
      user,
      token
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred during login'
    };
  }
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem(CURRENT_USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
};
