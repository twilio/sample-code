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

        var participants = ParticipantResource.Read(
            pathConferenceSid: "CFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        foreach(var record in participants)
        {
           Console.WriteLine(record.CallSid);
        }
    }
}
