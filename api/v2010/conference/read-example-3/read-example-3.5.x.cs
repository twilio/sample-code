// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var conferences = ConferenceResource.Read(
            dateCreated: MarshalConverter.DateTimeFromString("2009-07-06"),
            status: ConferenceResource.StatusEnum.Completed,
            limit: 20
        );

        foreach(var record in conferences)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
