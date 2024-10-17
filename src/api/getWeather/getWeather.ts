import { http } from "../http";

interface Weather {
  description: string;
}

interface WeatherMain {
  temp: number;
}

interface WeatherFullInfo {
  name: string;
  weather: Array<Weather>;
  main: WeatherMain;
}

export async function getWeather(city: string): Promise<WeatherFullInfo> {
  const url = `https://api.openweathermap.org/data/2.5/weather`;

  const { data } = await http.get(url, {
    params: {
      q: city,
      appid: process.env.OPEN_WEATHER_MAP_TOKEN,
      lang: "ru",
      units: "metric",
    },
  });

  return data;
}
