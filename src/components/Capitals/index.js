import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    selectedCapitalId: 'NEW_DELHI',
  }

  handleCapitalChange = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  render() {
    const {selectedCapitalId} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      item => item.id === selectedCapitalId,
    )

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="dropdown-container">
            <div className="cont">
              <select
                id="capitalDropdown"
                className="capital-dropdown"
                value={selectedCapitalId}
                onChange={this.handleCapitalChange}
              >
                {countryAndCapitalsList.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="label">is capital of which country?</p>
            </div>
          </div>
          <div className="country-container">
            <p className="country">
              {selectedCountry ? selectedCountry.country : ''}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
