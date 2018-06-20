// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Api.V2010.Account.Call;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var feedback = FeedbackResource.Update(
            issue: Promoter.ListOfOne(FeedbackResource.IssuesEnum.AudioLatency),
            qualityScore: 1,
            pathCallSid: "CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(feedback.DateCreated);
    }
}
