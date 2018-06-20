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
            from: new Twilio.Types.PhoneNumber("+18180021216"),
            to: new Twilio.Types.PhoneNumber("+15624421212"),
            pathConferenceSid: "AgentConf12"
        );

        Console.WriteLine(participant.CallSid);
    }
}
