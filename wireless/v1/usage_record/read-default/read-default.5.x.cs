// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Wireless.V1.Sim;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var usageRecords = UsageRecordResource.Read(
            pathSimSid: "DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            limit: 20
        );

        foreach(var record in usageRecords)
        {
           Console.WriteLine(record.SimSid);
        }
    }
}
