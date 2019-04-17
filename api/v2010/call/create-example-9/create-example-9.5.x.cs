// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var call = CallResource.Create(
            sipAuthPassword: "secret",
            sipAuthUsername: "jack",
            url: new Uri("http://www.example.com/sipdial.xml"),
            to: new Twilio.Types.PhoneNumber("sip:kate@example.com"),
            from: new Twilio.Types.PhoneNumber("Jack")
        );

        Console.WriteLine(call.Sid);
    }
}
