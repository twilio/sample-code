// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Queue;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var member = MemberResource.Fetch(
            pathQueueSid: "QU5ef8732a3c49700934481addd5ce1659",
            pathCallSid: "CA386025c9bf5d6052a1d1ea42b4d16662"
        );

        Console.WriteLine(member.CallSid);
    }
}
