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
                            {"title", "Short title for Watch."}
                        }}
                }}
        };

        var data = new Dictionary<string, Object>()
        {
            {"custom_key1", "custom value 1"},
            {"custom_key2", "custom value 2"}
        };

        var fcm = new Dictionary<string, Object>()
        {
            {"notification", new Dictionary<string, Object>()
                {
                    {"title", "New alert"},
                    {"body", "Hello Bob!"}
                }}
        };

        var identity = new List<string> {
            "00000001"
        };

        var notification = NotificationResource.Create(
            apn: apn,
            body: "This is the body for all Bindings",
            data: data,
            fcm: fcm,
            identity: identity,
            title: "Generic loooooooong title for all Bindings",
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(notification.Sid);
    }
}
