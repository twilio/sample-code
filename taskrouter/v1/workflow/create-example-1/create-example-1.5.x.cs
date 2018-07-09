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

        var configuration = JsonConvert.SerializeObject(new Dictionary<string, Object>()
        {
            {"task_routing", new Dictionary<string, Object>()
                {
                    {"filters", new object [] {
                        new Dictionary<string, Object>()
                        {
                            {"expression", "type=='sales'"},
                            {"targets", new object [] {
                                new Dictionary<string, Object>()
                                {
                                    {"queue", "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
                                }
                            }}
                        },
                        new Dictionary<string, Object>()
                        {
                            {"expression", "type=='marketing'"},
                            {"targets", new object [] {
                                new Dictionary<string, Object>()
                                {
                                    {"queue", "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
                                }
                            }}
                        },
                        new Dictionary<string, Object>()
                        {
                            {"expression", "type=='support'"},
                            {"targets", new object [] {
                                new Dictionary<string, Object>()
                                {
                                    {"queue", "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
                                }
                            }}
                        }
                    }},
                    {"default_filter", new Dictionary<string, Object>()
                        {
                            {"queue", "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
                        }}
                }}
        }, Formatting.Indented);

        var workflow = WorkflowResource.Create(
            assignmentCallbackUrl: new Uri("http://example.com"),
            fallbackAssignmentCallbackUrl: new Uri("http://example2.com"),
            taskReservationTimeout: 30,
            friendlyName: "Sales, Marketing, Support Workflow",
            configuration: configuration,
            pathWorkspaceSid: "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(workflow.Sid);
    }
}
