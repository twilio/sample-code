// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Preview.Understand;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var initiationActions = new Dictionary<string, Object>()
        {
            {"actions", new object [] {
                new Dictionary<string, Object>()
                {
                    {"say", new Dictionary<string, Object>()
                        {
                            {"speech", "Hello! How can I help you"}
                        }}
                }
            }}
        };

        var assistant = AssistantResource.Update(
            uniqueName: "quickstart-assistant",
            initiationActions: initiationActions,
            pathSid: "UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(assistant.FriendlyName);
    }
}
