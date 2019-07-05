import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./languages'),
  loading: Loading,
})
const LoadableLanguages = (props) => <LoadableComponent {...props} />
export default LoadableLanguages