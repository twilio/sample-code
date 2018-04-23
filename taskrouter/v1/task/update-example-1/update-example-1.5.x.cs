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

        var task = TaskResource.Update(
            assignmentStatus: TaskResource.StatusEnum.Canceled,
            reason: "waiting too long",
            pathWorkspaceSid: "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathSid: "WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(task.TaskQueueFriendlyName);
    }
}
