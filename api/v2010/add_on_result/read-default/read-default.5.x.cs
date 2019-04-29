// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Recording;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var addOnResults = AddOnResultResource.Read(
            pathReferenceSid: "REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            limit: 20
        );

        foreach(var record in addOnResults)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
