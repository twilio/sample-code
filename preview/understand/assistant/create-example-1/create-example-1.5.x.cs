// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Preview.Understand;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var styleSheet = new Dictionary<string, Object>()
        {
            {"say_voice", "Polly.Joanna"}
        };

        var assistant = AssistantResource.Create(
            friendlyName: "Styled Assistant",
            uniqueName: "styled-assistant",
            styleSheet: styleSheet
        );

        Console.WriteLine(assistant.Sid);
    }
}
