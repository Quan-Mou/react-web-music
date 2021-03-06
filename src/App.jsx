import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store/index"
import routes from "./router"
import Header from './components/app-header'
import Footer from './components/app-footer'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </HashRouter>
    </Provider>
  )
})

export default App