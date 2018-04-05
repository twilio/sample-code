// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Notify.V1.Service;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var notification = NotificationResource.Create(
            apn: "{\"aps\":{\"alert\":{\"title\":\"Short title for Watch.\"}}}",
            body: "This is the body for all Bindings",
            data: "{\"custom_key1\":\"custom value 1\",\"custom_key2\":\"custom value 2\"}",
            fcm: "{\"notification\":{\"title\":\"New alert\",\"body\":\"Hello Bob!\"}}",
            identity: Promoter.ListOfOne("00000001"),
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            title: "Generic loooooooong title for all Bindings"
        );

        Console.WriteLine(notification.Sid);
    }
}
