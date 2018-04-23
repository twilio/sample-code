// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Preview.Studio;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var flow = FlowResource.Fetch(pathSid: "FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

        Console.WriteLine(flow.FriendlyName);
    }
}
