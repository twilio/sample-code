// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Notify.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var service = ServiceResource.Update(
            facebookMessengerPageId: "your_page_id",
            friendlyName: "Another Awesome Service",
            messagingServiceSid: "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(service.FriendlyName);
    }
}
