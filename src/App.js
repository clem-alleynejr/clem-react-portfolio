import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomeAboutProjects from './components/HomeAboutProjects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeAboutProjects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
 