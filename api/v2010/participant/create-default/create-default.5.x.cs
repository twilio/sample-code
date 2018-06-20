// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Conference;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var participant = ParticipantResource.Create(
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            to: new Twilio.Types.PhoneNumber("+15017122661"),
            pathConferenceSid: "CFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(participant.CallSid);
    }
}
