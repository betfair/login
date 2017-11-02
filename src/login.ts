import * as request from "request";

export class Login {
  private username = "";
  private password = "";
  private appkey = "";

  constructor(username: string, password: string, appkey: string) {
    this.username = username;
    this.password = password;
    this.appkey = appkey;
  }

  public login(): Promise<string> {
    return new Promise((res, rej) => {
      request.post(
        {
          headers: {
            Accept: "application/json",
            "X-Application": this.appkey
          },
          method: "POST",
          url:
            "https://identitysso.betfair.com/api/login?username=" +
            this.username +
            "&password=" +
            this.password
        },
        (error, response, body) => {
          if (error) {
            rej("Error");
          }
          res(JSON.parse(body).token);
        }
      );
    });
  }
}
