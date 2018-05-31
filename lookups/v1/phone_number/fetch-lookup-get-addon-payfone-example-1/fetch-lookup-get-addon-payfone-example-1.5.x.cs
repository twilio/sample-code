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

        var addOns = new List<string> {
            "payfone_tcpa_compliance"
        };

        var addOnsData = new Dictionary<string, Object>()
        {
            {"payfone_tcpa_compliance.right_party_contacted_date", 20160101}
        };

        var type = new List<string> {
            "carrier"
        };

        var phoneNumber = PhoneNumberResource.Fetch(
            addOns: addOns,
            addOnsData: addOnsData,
            type: type,
            pathPhoneNumber: new Twilio.Types.PhoneNumber("+15108675310")
        );

        Console.WriteLine(phoneNumber.CallerName);
    }
}
