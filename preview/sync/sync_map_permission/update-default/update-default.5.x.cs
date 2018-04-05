// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Preview.Sync.Service.SyncMap;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var syncMapPermission = SyncMapPermissionResource.Update(
            pathServiceSid: "ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathMapSid: "MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathIdentity: "PathIdentity",
            read: true,
            write: true,
            manage: true
        );

        Console.WriteLine(syncMapPermission.AccountSid);
    }
}
