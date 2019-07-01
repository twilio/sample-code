// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Video.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var groupingSid = new List<string> {
            "ParticipantSid"
        };

        var recordings = RecordingResource.Read(groupingSid: groupingSid, limit: 20);

        foreach(var record in recordings)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
