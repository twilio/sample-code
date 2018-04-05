// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Preview.HostedNumbers;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var authorizationDocument = AuthorizationDocumentResource.Create(
            hostedNumberOrderSids: Promoter.ListOfOne("HostedNumberOrderSids"),
            addressSid: "ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            email: "Email"
        );

        Console.WriteLine(authorizationDocument.Sid);
    }
}
