declare module "dashbot" {
  interface DashbotPlatforms {
    alexa: DashbotPlatform;
  }

  interface DashbotConfig {}

  class DashbotPlatform {
    public logOutgoing(rawEvent: any, reply: any): Promise<any>;
    public logIncoming(rawEvent: any): Promise<any>;
    public logIntegration({ logGroupName: string }): DashbotPlatform;
  }
  function dashbot(apiKey: string, config: DashbotConfig): DashbotPlatforms;
  export default dashbot;
}
