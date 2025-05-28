import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Crew from './assets/pages/crew/Crew'
import Tech from './assets/pages/tech/Tech'
import Destination from './assets/pages/destination/Destination'
import Moon from './assets/components/planets/Moon'
import Europa from './assets/components/planets/Europa'
import Mars from './assets/components/planets/Mars'
import Titan from './assets/components/planets/Titan'
import Anousheh from './assets/pages/crew/Anousheh'
import Douglas from './assets/pages/crew/Douglas'
import Mark from './assets/pages/crew/Mark'
import Victor from './assets/pages/crew/Victor'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />}>
          <Route index element={<Douglas />} />
          <Route path="douglas" element={<Douglas />} />
          <Route path="anousheh" element={<Anousheh />} />
          <Route path="mark" element={<Mark />} />
          <Route path="victor" element={<Victor />} />
        </Route>
        <Route path="/destination" element={<Destination />}>
          <Route index element={<Moon />} />
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </>
  )
}

export default App
