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
            from: new Twilio.Types.PhoneNumber("Jack"),
            to: new Twilio.Types.PhoneNumber("sip:kate@example.com"),
            url: new Uri("http://www.example.com/sipdial.xml")
        );

        Console.WriteLine(call.AccountSid);
    }
}
