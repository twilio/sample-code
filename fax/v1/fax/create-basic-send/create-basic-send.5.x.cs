// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
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
            from: "+15017122661",
            mediaUrl: new Uri("https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf"),
            to: "+15558675310"
        );

        Console.WriteLine(fax.Sid);
    }
}
