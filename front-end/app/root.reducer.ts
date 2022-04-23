import breadcrumbsReducer from './slices/breadcrumbs.slice'
import counterReducer from './slices/counter.slice'

const rootReducer = {
   breadcrumbs: breadcrumbsReducer,
   counter: counterReducer,
}

export default rootReducer
