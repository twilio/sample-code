// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Queue;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var member = MemberResource.Update(
            url: new Uri("https://example.com"),
            method: Twilio.Http.HttpMethod.Get,
            pathQueueSid: "QUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathCallSid: "CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(member.CallSid);
    }
}
