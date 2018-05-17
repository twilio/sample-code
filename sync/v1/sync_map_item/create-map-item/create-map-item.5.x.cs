// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Sync.V1.Service.SyncMap;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var syncMapItem = SyncMapItemResource.Create(
            ttl: 864000,
            key: "steph_curry",
            data: "{'name': 'Stephen Curry', 'level': 30, 'username': 'spicy_curry'}",
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathMapSid: "Players"
        );

        Console.WriteLine(syncMapItem.Key);
    }
}
