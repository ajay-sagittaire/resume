import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./work'),
  loading: Loading,
})
const LoadableWork = (props) => <LoadableComponent {...props} />
export default LoadableWork