import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './layout'
import Navigation from './pages'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Navigation />
      </Layout>
    </QueryClientProvider>
  )
}
