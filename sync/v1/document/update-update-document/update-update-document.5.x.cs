// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Sync.V1.Service;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var document = DocumentResource.Update(
            data: "{'led': 'ON'}",
            pathServiceSid: "default",
            pathSid: "BoardLED"
        );

        Console.WriteLine(document.UniqueName);
    }
}
