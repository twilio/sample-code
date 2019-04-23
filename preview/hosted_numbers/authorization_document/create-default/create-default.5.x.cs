// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Preview.HostedNumbers;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var authorizationDocument = AuthorizationDocumentResource.Create(
            hostedNumberOrderSids: Promoter.ListOfOne("hosted_number_order_sids"),
            addressSid: "ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            email: "email",
            contactTitle: "contact_title",
            contactPhoneNumber: "contact_phone_number"
        );

        Console.WriteLine(authorizationDocument.Sid);
    }
}
