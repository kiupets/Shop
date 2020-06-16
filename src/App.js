import React from 'react'
import { Provider } from './context/userContext'
import { Provider as ToggleProvider } from './context/renderToogleContext'
import UserWeapper from './components/userWrapper/UserWrapper'

import './App.css'


function App() {
  return (
    <Provider>
      <ToggleProvider>
        <UserWeapper />
      </ToggleProvider>
    </Provider>
  )
}
export default App
