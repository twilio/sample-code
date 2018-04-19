// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Taskrouter.V1.Workspace.Worker;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var workerChannels = WorkerChannelResource.Read(
            pathWorkspaceSid: "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathWorkerSid: "WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        foreach(var record in workerChannels)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
