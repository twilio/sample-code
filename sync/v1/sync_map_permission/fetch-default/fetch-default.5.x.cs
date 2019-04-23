// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Sync.V1.Service.SyncMap;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var syncMapPermission = SyncMapPermissionResource.Fetch(
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathMapSid: "MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathIdentity: "identity"
        );

        Console.WriteLine(syncMapPermission.ServiceSid);
    }
}
