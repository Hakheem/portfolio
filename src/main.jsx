import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Lazy load the main App component
const App = lazy(() => import('./App.jsx'))

// Loading component for initial app load
const AppLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading Portfolio...</p>
    </div>
  </div>
)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<AppLoader />}>
      <App />
    </Suspense>
  </BrowserRouter>
)
