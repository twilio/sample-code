// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Lookups.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var type = new List<string> {
            "carrier"
        };

        var phoneNumber = PhoneNumberResource.Fetch(
            countryCode: "US",
            type: type,
            pathPhoneNumber: new Twilio.Types.PhoneNumber("+15108675310")
        );

        Console.WriteLine(phoneNumber.CallerName);
    }
}
