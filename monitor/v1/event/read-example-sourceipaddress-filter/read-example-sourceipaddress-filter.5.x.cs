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

        var events = EventResource.Read(
            endDate: MarshalConverter.DateTimeFromString("2015-04-25"),
            sourceIpAddress: "104.14.155.29",
            startDate: MarshalConverter.DateTimeFromString("2015-04-25")
        );

        foreach(var record in events)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
