import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'

import LoadingIndicator from './LoadingIndicator'
import { router, auth } from '../utils'
import { queries } from '../constants'

class SessionLoader extends React.PureComponent {
  state = {
    loading: true,
    errorMsg: null,
  }

  componentDidMount() {
    this._auth()
  }

  render() {
    const { loading, errorMsg } = this.state

    if (loading !== false) {
      return <LoadingIndicator />
    } else if (errorMsg) {
      const Redirect = router.createRedirect('/login')
      return <Redirect />
    } else {
      return this.props.children || null
    }
  }

  _auth = async () => {
    const { client } = this.props
    try {
      this.setState({ loading: true })

      const { jwt, payload } = await auth.getToken()

      client.mutate({
        mutation: queries.LOGIN,
        variables: {
          accessToken: jwt,
        },
      })
      this.setState({ loading: false })
    } catch (err) {
      console.error(err)
      // TODO error handling separate exceptions from session expiry
      this.setState({ errorMsg: err.message })
      router.push('/login')
    }
  }
}

SessionLoader.propTypes = {
  client: PropTypes.object.isRequired,
}

export default withApollo(SessionLoader)
