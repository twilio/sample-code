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

        var conferences = ConferenceResource.Read(
            status: ConferenceResource.StatusEnum.InProgress,
            dateCreatedAfter: new DateTime(2009, 07, 06)
        );

        foreach(var record in conferences)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
