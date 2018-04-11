// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var call = CallResource.Create(
            from: new Twilio.Types.PhoneNumber("+18668675310"),
            method: Twilio.Http.HttpMethod.Get,
            statusCallback: new Uri("https://www.myapp.com/events"),
            statusCallbackEvent: Promoter.ListOfOne("initiated"),
            statusCallbackMethod: Twilio.Http.HttpMethod.Post,
            to: new Twilio.Types.PhoneNumber("+14155551212"),
            url: new Uri("http://demo.twilio.com/docs/voice.xml")
        );

        Console.WriteLine(call.Sid);
    }
}
