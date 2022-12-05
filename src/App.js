import logo from './logo.svg'
import React from 'react'
// import { Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import Loading from './Loading'
import styled from 'styled-components'

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`

// const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      person: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        person: {
          firstName: "Ole",
          lastName: "Olsen",
          phoneNumber: "88888888"
        },
        loading: false
      })
    }, 1000)
  }

  render() {
    const {loading, error, person} = this.state

    if (loading) return <Loading />

    if (error) {
      return (
        <MainColumn>
          Sorry, but the person data is unavailable right now
        </MainColumn>
      )
    }

    return (
      // <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <p>{person.firstName} {person.lastName}: <span>{person.phoneNumber}</span></p>
        </MainColumn>
      // </Router>
    )
  }
}

export default App;
