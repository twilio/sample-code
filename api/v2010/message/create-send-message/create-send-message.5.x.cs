// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
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
            body: "This is the ship that made the Kessel Run in fourteen parsecs?",
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            mediaUrl: Promoter.ListOfOne(new Uri("https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg")),
            to: new Twilio.Types.PhoneNumber("+15558675310")
        );

        Console.WriteLine(message.Sid);
    }
}
