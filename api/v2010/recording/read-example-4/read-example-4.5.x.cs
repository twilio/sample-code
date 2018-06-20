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

        var recordings = RecordingResource.Read(
            dateCreatedBefore: new DateTime(2016, 10, 15, 0, 0, 0),
            dateCreatedAfter: new DateTime(2016, 10, 12, 0, 0, 0)
        );

        foreach(var record in recordings)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
