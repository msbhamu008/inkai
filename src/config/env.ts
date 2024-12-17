interface EnvConfig {
  dashboardUrl: string;
  apiUrl: string;
  apiKey: string;
  env: string;
}

const env: EnvConfig = {
  dashboardUrl: import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3001',
  apiUrl: import.meta.env.VITE_API_URL || 'https://api.ink.education',
  apiKey: import.meta.env.VITE_API_KEY || '',
  env: import.meta.env.MODE || 'development'
};

export default env;
