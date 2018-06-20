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
            body: "McAvoy or Stewart? These timelines can get so confusing.",
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            statusCallback: new Uri("http://requestb.in/1234abcd"),
            to: new Twilio.Types.PhoneNumber("+15558675310")
        );

        Console.WriteLine(message.Sid);
    }
}
