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
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var call = CallResource.Create(
            machineDetection: "Enable",
            url: new Uri("https://handler.twilio.com/twiml/EH8ccdbd7f0b8fe34357da8ce87ebe5a16"),
            from: new Twilio.Types.PhoneNumber("+18180000000"),
            to: new Twilio.Types.PhoneNumber("+1562300000"),
            pathAccountSid: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(call.Sid);
    }
}
