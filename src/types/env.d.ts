export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      OPEN_WEATHER_MAP_TOKEN: string;
    }
  }
}
