// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Recording.AddOnResult;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var payloads = PayloadResource.Read(
            pathReferenceSid: "REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathAddOnResultSid: "XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );

        foreach(var record in payloads) {
           Console.WriteLine(record.Sid);
        }
    }
}
