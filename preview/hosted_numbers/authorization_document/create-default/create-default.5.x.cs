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
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var authorizationDocument = AuthorizationDocumentResource.Create(
            hostedNumberOrderSids: Promoter.ListOfOne("HostedNumberOrderSids"),
            addressSid: "ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            email: "Email",
            contactTitle: "ContactTitle",
            contactPhoneNumber: "ContactPhoneNumber"
        );

        Console.WriteLine(authorizationDocument.Sid);
    }
}
