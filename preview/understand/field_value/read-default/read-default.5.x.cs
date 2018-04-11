// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Preview.Understand.Service.FieldType;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var fieldValues = FieldValueResource.Read(
            pathServiceSid: "UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathFieldTypeSid: "UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        foreach(var record in fieldValues)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
