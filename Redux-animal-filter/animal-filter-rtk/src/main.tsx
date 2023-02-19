import ReactDOM from 'react-dom/client'
import AppWithProvider from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AppWithProvider />
  </QueryClientProvider>
)
