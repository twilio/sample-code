// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Notify.V1.Service;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var apn = new Dictionary<string, Object>()
        {
            {"aps", new Dictionary<string, Object>()
                {
                    {"alert", new Dictionary<string, Object>()
                        {
                            {"title", "Bob alert"},
                            {"body", "Bob, you just received a badge"}
                        }},
                    {"badge", 1}
                }}
        };

        var identity = new List<string> {
            "00000001"
        };

        var notification = NotificationResource.Create(
            apn: apn,
            identity: identity,
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(notification.Sid);
    }
}
