// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Autopilot.V1.Assistant;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var styleSheet = new Dictionary<string, Object>()
        {
            {"style_sheet", new Dictionary<string, Object>()
                {
                    {"voice", new Dictionary<string, Object>()
                        {
                            {"say_voice", "Polly.Joanna"}
                        }}
                }}
        };

        var styleSheetResource = StyleSheetResource.Update(
            styleSheet: styleSheet,
            pathAssistantSid: "UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(styleSheetResource.AssistantSid);
    }
}
