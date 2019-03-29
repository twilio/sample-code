// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Voice.V1.DialingPermissions;


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
            updateRequest: "[{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"CU\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"LV\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"SO\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"LT\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"GN\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"GM\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"MV\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"EE\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"ZW\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"TN\"}]"
        );

        Console.WriteLine(bulkCountryUpdate.UpdateCount);
    }
}
