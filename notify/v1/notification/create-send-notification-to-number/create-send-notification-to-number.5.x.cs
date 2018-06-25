// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Notify.V1.Service;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var toBinding = new List<string> {
            JsonConvert.SerializeObject(new Dictionary<string, Object>()
            {
                {"binding_type", "sms"},
                {"address", "+1651000000000"}
            }, Formatting.Indented)
        };

        var notification = NotificationResource.Create(
            body: "Knok-Knok! This is your first Notify SMS",
            toBinding: toBinding,
            identity: Promoter.ListOfOne("Identity"),
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(notification.Sid);
    }
}
