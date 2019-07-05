import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./interests'),
  loading: Loading,
})
const LoadableInterests = (props) => <LoadableComponent {...props} />
export default LoadableInterests