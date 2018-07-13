// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid at twilio.com/console
        // Provision API Keys at twilio.com/console/runtime/api-keys
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string apiKey = "SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string apiSecret = "your_api_secret";

        TwilioClient.Init(apiKey, apiSecret, accountSid);

        var message = MessageResource.Create(
            body: "Never gonna give you up.",
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            to: new Twilio.Types.PhoneNumber("+15558675310")
        );

        Console.WriteLine(message.Sid);
    }
}
