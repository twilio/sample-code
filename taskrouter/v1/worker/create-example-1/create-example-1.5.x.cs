// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Taskrouter.V1.Workspace;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var attributes = JsonConvert.SerializeObject(new Dictionary<string, Object>()
        {
            {"type", "support"}
        }, Formatting.Indented);

        var worker = WorkerResource.Create(
            attributes: attributes,
            friendlyName: "Support Worker 1",
            pathWorkspaceSid: "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(worker.Sid);
    }
}
