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

        var syncMapPermission = SyncMapPermissionResource.Update(
            read: true,
            write: true,
            manage: true,
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathMapSid: "MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathIdentity: "PathIdentity"
        );

        Console.WriteLine(syncMapPermission.ServiceSid);
    }
}
