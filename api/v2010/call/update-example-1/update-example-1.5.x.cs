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

        var call = CallResource.Update(
            method: Twilio.Http.HttpMethod.Post,
            url: new Uri("http://demo.twilio.com/docs/voice.xml"),
            pathSid: "CAe1644a7eed5088b159577c5802d8be38"
        );

        Console.WriteLine(call.To);
    }
}
