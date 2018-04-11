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
            to: new Twilio.Types.PhoneNumber("+15017122661"),
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            url: new Uri("https://example.com")
        );

        Console.WriteLine(call.Sid);
    }
}
