import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate } from "k6/metrics";
import { CONFIG } from '../config.js';
import { HTTP_STATUS_CODE } from '../enums/status.js';

export let requestDuration = new Trend('request_duration');
export let requestFailRate = new Rate('request_fail_rate');
export let requestSuccessRate = new Rate('request_success_rate');
export let requestCount = new Rate('request_count');

export default function () {
    const GET_WEATHER_FORECAST = `${CONFIG.BASE_URL}/WeatherForecast`;

    const params = {
        headers: {
            'Authorization': `Bearer ${CONFIG.TOKEN}`,
            'Accept': 'application/json'
        },
    };

    let res = http.get(GET_WEATHER_FORECAST, params);

    requestDuration.add(res.timings.duration);

    const passed = check(res, {
        'max duration is 1s': (r) => r.timings.duration < CONFIG.LIMIT_TIME_DURATION,
        'status is 200': (r) => r.status === HTTP_STATUS_CODE.SUCCESS,
    });

    if (passed) {
        requestSuccessRate.add(1);
    } else {
        requestFailRate.add(1);
    }

    requestCount.add(1);
}
