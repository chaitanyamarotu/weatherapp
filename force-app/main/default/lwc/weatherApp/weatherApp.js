import { LightningElement } from 'lwc';
import getWeatherData from '@salesforce/apex/WeatherApiController.getWeatherData';

export default class WeatherApp extends LightningElement {
    city;
    weatherIcon;
    weatherText;
    statename;
    region;
    temperature;

    handleCity(event){
        this.city=event.target.value;
    }
    handleGetWeather(){
        getWeatherData({city:this.city})
        .then(response=>{
          let weatherParseData =JSON.parse(response);
          this.weatherIcon=weatherParseData.current.condition.icon;
          this.weatherText=weatherParseData.current.condition.text;
          this.statename=weatherParseData.location.name;
          this.region=weatherParseData.location.region;
          this.temperature=weatherParseData.current.temp_c;
        })
        .catch(error=>{
            console.log(error);
        })

    }
}