// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var outgoingCallerId = OutgoingCallerIdResource.Update(
            friendlyName: "My Second Line",
            pathSid: "PNe536d32a3c49700934481addd5ce1659"
        );

        Console.WriteLine(outgoingCallerId.FriendlyName);
    }
}
