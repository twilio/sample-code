// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Monitor.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var events = EventResource.Read(
            actorSid: "USd0afd67cddff4ec7cb0022771a203cb1",
            resourceSid: "PN4aa51b930717ea83c91971b86d99018f"
        );

        foreach(var record in events)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
