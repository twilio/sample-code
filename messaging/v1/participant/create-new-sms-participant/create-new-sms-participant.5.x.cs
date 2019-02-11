// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Messaging.V1.Session;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var participant = ParticipantResource.Create(
            userAddress: "+1847234xxxx",
            twilioAddress: "<YOUR COMPANY'S PHONE NUMBER VIA TWILIO>",
            pathSessionSid: "CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(participant.Sid);
    }
}
