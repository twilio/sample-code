// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var message = MessageResource.Create(
            to: new Twilio.Types.PhoneNumber("+15017122661"),
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            body: "Body"
        );

        Console.WriteLine(message.AccountSid);
    }
}
