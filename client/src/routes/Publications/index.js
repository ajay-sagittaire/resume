import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./publications'),
  loading: Loading,
})
const LoadablePublications = (props) => <LoadableComponent {...props} />
export default LoadablePublications