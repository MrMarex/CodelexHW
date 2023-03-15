<template>
  <h1 class="page-heading">-Weather APP-</h1>
  <CustomLoading class="loader" v-if="isLoading" />
  <div class="weather__wrapper" v-else>
    <div class="weather__main">
      <form class="weather__main-search" @submit.prevent="searchCity">
        <input type="text" v-model="city" placeholder="Search for city" />
      </form>
      <div class="weather__main-heading">
        <span class="weather__main-heading-city">{{ weather.city_name }}</span>
        <span class="weather__main-heading-description">{{ weather.weather.description }}</span>
        <img class="weather__main-heading-image"
          :src="`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`" :alt="weather.weather.icon">
      </div>
      <div class="weather__description">
        <span class="weather__text--degree">{{ degreesCalc }}</span>
        <span class="weather__text--degree">°{{ temperatureUnit }}</span>
      </div>
      <div class="weather__description">
        <span class="weather__text">Last observation: </span>
        <span class="weather__text">{{ weather.ob_time }}</span>
      </div>
    </div>
    <div class="weather__info">
      <div class="weather__info-btn-wrap">
        <button v-for="unit in temperatureUnits" :key="unit"
          :class="unit === temperatureUnit ? 'weather__info-btn--active' : 'weather__info-btn'"
          @click="setTempUnit(unit)">
          °{{ unit }}
        </button>
      </div>
      <div class="weather__info-cards-wrap">
        <div class="weather__info-cards-list">
          <WeatherDetails cardTitle="Sunrise" :cardValue="weather.sunrise" />
          <WeatherDetails cardTitle="Sunset" :cardValue="weather.sunset" />
          <WeatherDetails cardTitle="Relative humidity" :cardValue="weather.rh" cardMeassureUnit="%" />
          <WeatherDetails cardTitle="Visibility" :cardValue="weather.vis" cardMeassureUnit="km" />
          <WeatherDetails cardTitle="Wind speed" :cardValue="weather.wind_spd" cardMeassureUnit="m/s" />
          <WeatherDetails cardTitle="Cloud coverage" :cardValue="weather.clouds" cardMeassureUnit="%" />
          <WeatherDetails cardTitle="Wind direction" :cardValue="weather.wind_cdir_full" />
          <WeatherDetails cardTitle="Air Quality Index" :cardValue="weather.aqi" />
          <WeatherDetails cardTitle="Pressure" :cardValue="weather.pres" cardMeassureUnit="mb" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import WeatherDetails from './components/WeatherDetails.vue';
import CustomLoading from './components/CustomLoading.vue';

type WeatherParamsType = {
  icon: string;
  description: string;
}

type WeatherType = {
  app_temp: number;
  aqi: number;
  city_name: string;
  clouds: number;
  dewpt: number;
  ob_time: string;
  pres: number;
  rh: number;
  snow: number;
  sunrise: string;
  sunset: string;
  vis: number;
  wind_cdir_full: string;
  wind_spd: number;
  weather: WeatherParamsType;
}

type ResponseType = {
  count: number;
  data: WeatherType[];
}

export default {
  created() {
    this.getWeatherByCity('Jelgava');
  },
  data() {
    return {
      isLoading: false,
      weather: {} as WeatherType,
      city: '',
      temperatureUnit: 'C',
      temperatureUnits: ['C', 'F']
    };
  },
  components: {
    WeatherDetails,
    CustomLoading
  },
  methods: {
    getWeatherByCity(city: string) {
      this.isLoading = true;
      axios
        .get<ResponseType>(`https://api.weatherbit.io/v2.0/current?city=${city}&key=eeb775a37cd14a55a6086fe6ebdd0d96`)
        .then(({ data }) => {
          this.weather = data.data[0];
          this.isLoading = false;
        })
        .catch((err: Error) => console.log(err));
    },
    searchCity() {
      this.getWeatherByCity(this.city);
      this.city = '';
    },
    setTempUnit(unit: string) {
      this.temperatureUnit = unit.toUpperCase();
    }
  },
  computed: {
    degreesCalc() {
      if (this.temperatureUnit === 'F') {
        return ((this.weather.dewpt * 1.8) + 32).toFixed(1);
      }
      return this.weather.dewpt;
    }
  }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Roboto+Condensed&display=swap');

.page-heading {
  color: white;
  font-size: 80px;
  text-align: center;
  font-family: 'Amatic SC', cursive;
}

.weather__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.weather__main-heading {
  align-self: center;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.weather__main-heading-description {
  color: #fff;
  font-family: 'Amatic SC', cursive;
  font-size: 40px;
}

.weather__main-search input[type="text"] {
  padding: 10px;
  border: 2px solid white;
  border-radius: 20px;
  font-size: 25px;
  color: #fff;
  background-color: #242424;
  text-align: center;
}

.weather__main-heading-city {
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
  font-family: 'Amatic SC', cursive;
}

.weather__items-row {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.weather__text {
  font-size: 20px;
  color: #fff;
}

.weather__text--degree {
  font-size: 50px;
  color: #000;
  background-color: white;
  padding: 10px;
}

.weather__info {
  margin-top: 10px;
  text-align: center;
}

.weather__info-btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  margin-right: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

.weather__info-btn--active {
  background-color: rgb(255, 255, 255);
  color: #000000;
  cursor: not-allowed;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  margin-right: 10px;
  padding: 10px 20px;
}

.weather__info-wrap {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}

.weather__info-cards-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 10px;
  gap: 20px;
  justify-content: center;
  border: 3px solid #fff;
  border-radius: 20px;
}
</style>