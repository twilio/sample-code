// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Studio.V1.Flow.Engagement;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var steps = StepResource.Read(
            pathFlowSid: "FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathEngagementSid: "FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        foreach(var record in steps)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
