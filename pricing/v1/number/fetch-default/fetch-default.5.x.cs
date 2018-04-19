// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Pricing.V1.Voice;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var number = NumberResource.Fetch(
            pathNumber: new Twilio.Types.PhoneNumber("+15017122661")
        );

        Console.WriteLine(number.Number);
    }
}
