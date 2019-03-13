// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Voice.V1.VoicePermission;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var bulkCountryUpdate = BulkCountryUpdateResource.Create(
            updateRequest: "[{'iso_code': 'US', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'true', 'high_risk_tollfraud_numbers_enabled': 'true'}]"
        );

        Console.WriteLine(bulkCountryUpdate.UpdateCount);
    }
}
