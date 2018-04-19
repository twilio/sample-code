// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Studio.V1.Flow;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var engagement = EngagementResource.Create(
            to: new Twilio.Types.PhoneNumber("+15017122661"),
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            pathFlowSid: "FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(engagement.Sid);
    }
}
