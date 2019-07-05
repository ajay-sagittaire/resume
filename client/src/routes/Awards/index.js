import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./awards'),
  loading: Loading,
})
const LoadableAwards = (props) => <LoadableComponent {...props} />
export default LoadableAwards