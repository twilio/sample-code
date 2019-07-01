// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Linq;
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

        var mediaUrl = new [] {
            new Uri("https://demo.twilio.com/owl.png")
        }.ToList();

        var message = MessageResource.Create(
            body: "Hello there!",
            from: new Twilio.Types.PhoneNumber("+15555555555"),
            mediaUrl: mediaUrl,
            to: new Twilio.Types.PhoneNumber("+12316851234")
        );

        Console.WriteLine(message.Sid);
    }
}
