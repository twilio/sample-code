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

        var message = MessageResource.Create(
            body: "All in the game, yo",
            from: new Twilio.Types.PhoneNumber("+5571981265145"),
            to: new Twilio.Types.PhoneNumber("+5571981265131")
        );

        Console.WriteLine(message.Sid);
    }
}
