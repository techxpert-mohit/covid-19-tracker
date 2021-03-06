import  React from 'react';
import './App.css';
import {Cards, Chart, CountryPicker} from'./components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png'

class App extends React.Component{

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }
  render(){
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img classNam={styles.image} src={coronaImage} alt="COVID-19"></img>
        <Cards data={data}></Cards>
        <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    )
  }
}

export default App;
