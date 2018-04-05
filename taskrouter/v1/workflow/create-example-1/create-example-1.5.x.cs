// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Taskrouter.V1.Workspace;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var workflow = WorkflowResource.Create(
            assignmentCallbackUrl: new Uri("http://example.com"),
            configuration: "{\"task_routing\": {\"filters\": [{\"expression\": \"type=='sales'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}, {\"expression\": \"type=='marketing'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}, {\"expression\": \"type=='support'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}], \"default_filter\": {\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}}}",
            fallbackAssignmentCallbackUrl: new Uri("http://example2.com"),
            friendlyName: "Sales, Marketing, Support Workflow",
            taskReservationTimeout: 30,
            pathWorkspaceSid: "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(workflow.AccountSid);
    }
}
