// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Preview.Sync.Service.SyncList;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var syncListPermission = SyncListPermissionResource.Update(
            read: true,
            write: true,
            manage: true,
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathListSid: "ESXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathIdentity: "pathIdentity"
        );

        Console.WriteLine(syncListPermission.ServiceSid);
    }
}
