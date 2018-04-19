// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Monitor.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var alerts = AlertResource.Read(
            endDate: MarshalConverter.DateTimeFromString("2015-04-30"),
            logLevel: "warning",
            startDate: MarshalConverter.DateTimeFromString("2015-04-01")
        );

        foreach(var record in alerts)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
