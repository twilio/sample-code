// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Sync.V1.Service;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var document = DocumentResource.Update(
            data: "{\"date_updated\": \"2018-02-14 12:24:33.889341\", \"movie_title\": \"On The Line\", \"show_times\": null, \"starring\": [\"Lance Bass\", \"Joey Fatone\"], \"genre\": \"Romance\"}",
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathSid: "MyFirstDocument"
        );

        Console.WriteLine(document.Sid);
    }
}
