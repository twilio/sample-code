// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var incomingPhoneNumber = IncomingPhoneNumberResource.Create(
            friendlyName: "My Company Line",
            phoneNumber: new Twilio.Types.PhoneNumber("+15105647903"),
            voiceMethod: Twilio.Http.HttpMethod.Get,
            voiceUrl: new Uri("http://demo.twilio.com/docs/voice.xml")
        );

        Console.WriteLine(incomingPhoneNumber.Sid);
    }
}
