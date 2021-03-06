
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from '../auth/reducers'
import account from '../account/reducers'
import payment from '../payment/reducers'
import app from '../app/reducers'
import market from '../market/reducers'
import trade from '../trade/reducers'
import lists from '../lists/reducers'

export default combineReducers({
  auth,
  account,
  payment,
  app,
  market,
  trade,
  lists,
  router: routerReducer
})
