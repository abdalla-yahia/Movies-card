import ReactDom from 'react-dom/client'
import App from './App'
import Store from './Redux/store'
import { Provider } from 'react-redux'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
<Provider store={Store}>
    
  <App />
</Provider>
)