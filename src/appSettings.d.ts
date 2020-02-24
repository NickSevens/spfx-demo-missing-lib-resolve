declare interface IAppSettings {
  webApiBaseUrl: string;
}

declare module "appSettings" {
  const appSettings: IAppSettings;
  export = appSettings;
}
