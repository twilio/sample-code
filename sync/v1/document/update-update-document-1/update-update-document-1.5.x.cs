// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Sync.V1.Service;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var data = new Dictionary<string, Object>()
        {
            {"date_updated", "2018-02-14 12:24:33.889341"},
            {"movie_title", "On The Line"},
            {"show_times", null},
            {"starring", new object [] {
                "Lance Bass",
                "Joey Fatone"
            }},
            {"genre", "Romance"}
        };

        var document = DocumentResource.Update(
            data: data,
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathSid: "MyFirstDocument"
        );

        Console.WriteLine(document.UniqueName);
    }
}
