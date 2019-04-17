// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Address;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var dependentPhoneNumbers = DependentPhoneNumberResource.Read(
            pathAddressSid: "AD2a0747eba6abf96b7e3c3ff0b4530f6e"
        );

        foreach(var record in dependentPhoneNumbers)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
