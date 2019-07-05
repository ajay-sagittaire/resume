import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./volunteer'),
  loading: Loading,
})
const LoadableVolunteer = (props) => <LoadableComponent {...props} />
export default LoadableVolunteer