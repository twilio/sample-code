// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Preview.Understand.Assistant.FieldType;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var fieldValue = FieldValueResource.Create(
            language: "Language",
            value: "Value",
            pathAssistantSid: "UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathFieldTypeSid: "UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(fieldValue.Sid);
    }
}
