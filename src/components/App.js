import { Provider } from 'react-redux'
import ResumeRouter from './ResumeRouter'
import store from './store'
import React from "react";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
     <Provider store={store}>
        <ResumeRouter />
      </Provider>
    </div>
  )
}

export default App