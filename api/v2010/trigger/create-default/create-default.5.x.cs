// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Usage;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var trigger = TriggerResource.Create(
            callbackUrl: new Uri("https://example.com"),
            triggerValue: "TriggerValue",
            usageCategory: TriggerResource.UsageCategoryEnum.AnsweringMachineDetection
        );

        Console.WriteLine(trigger.Sid);
    }
}
