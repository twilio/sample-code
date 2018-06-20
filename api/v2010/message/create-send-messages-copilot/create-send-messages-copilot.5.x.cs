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
            body: "Phantom Menace was clearly the best of the prequel trilogy.",
            messagingServiceSid: "MG9752274e9e519418a7406176694466fa",
            to: new Twilio.Types.PhoneNumber("+441632960675")
        );

        Console.WriteLine(message.Sid);
    }
}
