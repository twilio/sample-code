// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Chat.V2;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var service = ServiceResource.Update(
            notificationsAddedToChannelEnabled: true,
            notificationsAddedToChannelSound: "default",
            notificationsAddedToChannelTemplate: "A New message in ${CHANNEL} from ${USER}: ${MESSAGE}",
            pathSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(service.FriendlyName);
    }
}
