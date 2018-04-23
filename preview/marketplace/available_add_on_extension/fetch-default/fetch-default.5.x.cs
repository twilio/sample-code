// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Preview.Marketplace.AvailableAddOn;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var availableAddOnExtension = AvailableAddOnExtensionResource.Fetch(
            pathAvailableAddOnSid: "XBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathSid: "XFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(availableAddOnExtension.FriendlyName);
    }
}
