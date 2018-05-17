// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
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

        var document = DocumentResource.Create(
            data: "{'date_updated': '2018-02-14 12:24:31.843662', 'movie_title': 'On The Line', 'show_times': ['12:30:00Z', '14:45:00Z', '15:30:00Z', '17:45:00Z'], 'starring': ['Lance Bass', 'Joey Fatone'], 'genre': 'Romance'}",
            ttl: 1814400,
            uniqueName: "MyFirstDocument",
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(document.Sid);
    }
}
