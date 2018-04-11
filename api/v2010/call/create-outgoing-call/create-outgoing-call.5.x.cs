// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var call = CallResource.Create(
            from: new Twilio.Types.PhoneNumber("+18180000000"),
            machineDetection: "Enable",
            to: new Twilio.Types.PhoneNumber("+1562300000"),
            url: new Uri("https://handler.twilio.com/twiml/EH8ccdbd7f0b8fe34357da8ce87ebe5a16")
        );

        Console.WriteLine(call.Sid);
    }
}
