// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var conference = ConferenceResource.Update(
            announceUrl: new Uri("http://www.myapp.com/announce"),
            pathSid: "CFbbe46ff1274e283f7e3ac1df0072ab39"
        );

        Console.WriteLine(conference.FriendlyName);
    }
}
