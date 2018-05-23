// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Fax.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var fax = FaxResource.Create(
            from: "Jack",
            sipAuthPassword: "secret",
            sipAuthUsername: "jack",
            to: "sip:kate@example.com",
            mediaUrl: new Uri("https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf")
        );

        Console.WriteLine(fax.Sid);
    }
}
