import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SketchPage from './pages/SketchPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:year/:slug" element={<SketchPage />} />
      </Routes>
    </Layout>
  )
}
