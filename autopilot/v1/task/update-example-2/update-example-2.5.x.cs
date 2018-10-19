// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Autopilot.V1.Assistant;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var actions = new Dictionary<string, Object>()
        {
            {"actions", new object [] {
                new Dictionary<string, Object>()
                {
                    {"say", new Dictionary<string, Object>()
                        {
                            {"speech", "I was going to look for my missing watch, but I could never find the time."}
                        }}
                }
            }}
        };

        var task = TaskResource.Update(
            actions: actions,
            pathAssistantSid: "assistant_unique_name",
            pathSid: "task_unique_name"
        );

        Console.WriteLine(task.FriendlyName);
    }
}
