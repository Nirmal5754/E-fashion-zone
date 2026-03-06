import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './App/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>

<Provider store={store}>
  
   <App />

  
   <ToastContainer position='bottom-right' autoClose={4000}/>
</Provider>
   
  </StrictMode>,
)
