import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
const LoadableComponent = Loadable({
  loader: () => import('./notFound'),
  loading: Loading,
})
const LoadableNotFound = () => <LoadableComponent />
export default LoadableNotFound