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

        var call = CallResource.Create(
            method: Twilio.Http.HttpMethod.Get,
            sendDigits: "1234#",
            url: new Uri("http://demo.twilio.com/docs/voice.xml"),
            to: new Twilio.Types.PhoneNumber("+14155551212"),
            from: new Twilio.Types.PhoneNumber("+18668675310")
        );

        Console.WriteLine(call.Sid);
    }
}
