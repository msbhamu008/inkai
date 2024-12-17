import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-secret-key';
const USERS_KEY = 'ink_users';

export interface User {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
  password: string;
  instituteName: string;
  state: string;
  city: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: Omit<User, 'password'>;
}

// Helper function to get users from localStorage
const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Helper function to save users to localStorage
const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const createUser = async (userData: User): Promise<AuthResponse> => {
  try {
    console.log('Creating user:', { ...userData, password: '[REDACTED]' });
    
    const users = getUsers();
    
    // Check if user already exists
    const existingUser = users.find(u => 
      (userData.email && u.email === userData.email) || 
      (userData.phone && u.phone === userData.phone)
    );
    
    if (existingUser) {
      console.log('User already exists');
      return {
        success: false,
        message: 'User with this email or phone already exists'
      };
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = {
      ...userData,
      id: Date.now(),
      password: hashedPassword
    };

    users.push(newUser);
    saveUsers(users);

    console.log('User created successfully');
    const contact = userData.email || userData.phone;
    const token = jwt.sign({ contact }, JWT_SECRET, { expiresIn: '24h' });

    const { password, ...userWithoutPassword } = newUser;
    return {
      success: true,
      message: 'User created successfully',
      token,
      user: userWithoutPassword
    };
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred while creating user'
    };
  }
};

export const loginUser = async (contact: string, password: string): Promise<AuthResponse> => {
  try {
    console.log('Attempting login for contact:', contact);
    
    const users = getUsers();
    const user = users.find(u => u.email === contact || u.phone === contact);

    if (!user) {
      console.log('User not found');
      return {
        success: false,
        message: 'Invalid credentials'
      };
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log('Invalid password');
      return {
        success: false,
        message: 'Invalid credentials'
      };
    }

    console.log('Login successful');
    const token = jwt.sign({ contact }, JWT_SECRET, { expiresIn: '24h' });
    
    const { password: _, ...userWithoutPassword } = user;
    return {
      success: true,
      message: 'Login successful',
      token,
      user: userWithoutPassword
    };
  } catch (error) {
    console.error('Error during login:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred during login'
    };
  }
};

export const verifyToken = (token: string): { valid: boolean; contact?: string } => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { contact: string };
    return { valid: true, contact: decoded.contact };
  } catch (error) {
    console.error('Error verifying token:', error);
    return { valid: false };
  }
};
