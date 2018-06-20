// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.IncomingPhoneNumber.AssignedAddOn;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var assignedAddOnExtension = AssignedAddOnExtensionResource.Fetch(
            pathResourceSid: "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathAssignedAddOnSid: "XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathSid: "XFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(assignedAddOnExtension.FriendlyName);
    }
}
