// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Preview.Sync.Service.Document;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var documentPermission = DocumentPermissionResource.Update(
            pathServiceSid: "ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathDocumentSid: "ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathIdentity: "PathIdentity",
            read: true,
            write: true,
            manage: true
        );

        Console.WriteLine(documentPermission.AccountSid);
    }
}
