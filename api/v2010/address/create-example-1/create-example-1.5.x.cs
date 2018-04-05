// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var address = AddressResource.Create(
            city: "Berlin",
            customerName: "Customer 123",
            friendlyName: "Billing - Customer 123",
            isoCountry: "DE",
            postalCode: "10875",
            region: "Berlin",
            street: "1 Hasselhoff Lane"
        );

        Console.WriteLine(address.AccountSid);
    }
}
