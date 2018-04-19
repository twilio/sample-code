// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Preview.Sync.Service.SyncList;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var syncListItem = SyncListItemResource.Fetch(
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathListSid: "ESXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathIndex: 1
        );

        Console.WriteLine(syncListItem.Index);
    }
}
