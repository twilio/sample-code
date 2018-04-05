// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Sync.V1.Service.SyncList;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var syncListPermission = SyncListPermissionResource.Update(
            pathServiceSid: "ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathListSid: "ESaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathIdentity: "PathIdentity",
            read: true,
            write: true,
            manage: true
        );

        Console.WriteLine(syncListPermission.AccountSid);
    }
}
