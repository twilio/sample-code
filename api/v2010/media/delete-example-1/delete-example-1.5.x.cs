// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Message;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        MediaResource.Delete(
            pathMessageSid: "MM800f449d0399ed014aae2bcc0cc2f2ec",
            pathSid: "ME557ce644e5ab84fa21cc21112e22c485"
        );
    }
}
