import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home'
import { User } from './Pages/User'
import { About2 } from './Pages/About2'
import { AboutDetails } from './Pages/AboutDetails'


  export function RouterTest4() {
    return (
      <Router>
        <nav>
          <Link to = '/'>홈</Link> | <Link to = '/user/1'>사용자</Link> | <Link to = '/about'>도움말</Link>
        </nav>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path= '/user/:id' element = {<User/>}/>
          <Route path = '/about' element = {<About2/>}>
             <Route path = 'details' element = {<AboutDetails/>}/>                    
          </Route>
        </Routes>
      </Router>
    )
  }
  