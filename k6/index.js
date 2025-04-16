import weatherForecast from './scenarios/weather-forecast.js';
import { group, sleep } from 'k6';

export default () => {
    group('Endpoint Get Statements', () => {
        weatherForecast();
    });

    sleep(1);
}

