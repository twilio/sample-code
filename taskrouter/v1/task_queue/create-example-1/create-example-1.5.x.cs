// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
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

        var taskQueue = TaskQueueResource.Create(
            targetWorkers: "languages HAS \"english\"",
            friendlyName: "English",
            reservationActivitySid: "WAea296a56ebce4bfbff0e99abadf16934",
            assignmentActivitySid: "WA21d51f4c72583766988f9860de3e130a",
            pathWorkspaceSid: "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(taskQueue.Sid);
    }
}
