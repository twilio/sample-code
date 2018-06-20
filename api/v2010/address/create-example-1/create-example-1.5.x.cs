// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var address = AddressResource.Create(
            friendlyName: "Billing - Customer 123",
            customerName: "Customer 123",
            street: "1 Hasselhoff Lane",
            city: "Berlin",
            region: "Berlin",
            postalCode: "10875",
            isoCountry: "DE"
        );

        Console.WriteLine(address.Sid);
    }
}
