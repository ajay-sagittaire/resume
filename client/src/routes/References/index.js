import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./references'),
  loading: Loading,
})
const LoadableReferences = (props) => <LoadableComponent {...props} />
export default LoadableReferences