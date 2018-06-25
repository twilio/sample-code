// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Proxy.V1.Service.Session;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var participant = ParticipantResource.Create(
            friendlyName: "Alice",
            identifier: "+15558675310",
            pathServiceSid: "KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathSessionSid: "KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(participant.Sid);
    }
}
