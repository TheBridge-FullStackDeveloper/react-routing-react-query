import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About'
import CountryList from './components/CountryList/CountryList'
import CountrySpecific from './components/CountrySpecific/CountrySpecific'
import Query from './components/Query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<CountryList />} />
              <Route path="query" element={<Query />} />
              <Route path="query/:code" element={<CountrySpecific />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>,
)