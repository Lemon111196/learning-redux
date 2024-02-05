
import { Provider } from 'react-redux'
import './App.css'
import Todo from './pages/todo'
import store from './redux/store/store'

function App() {

  return (
    <Provider store={store}>
      <div>
        <Todo></Todo>
      </div>
    </Provider>
  )
}

export default App
