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

        var call = CallResource.Create(
            url: new Uri("http://twimlets.com/message?Message%5B0%5D=Hello%20from%20your%20subaccount"),
            to: new Twilio.Types.PhoneNumber("+16518675310"),
            from: new Twilio.Types.PhoneNumber("+14158141829")
        );

        Console.WriteLine(call.Sid);
    }
}
