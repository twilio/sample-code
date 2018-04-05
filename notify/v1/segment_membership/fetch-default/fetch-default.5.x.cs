// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Notify.V1.Service.User;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var segmentMembership = SegmentMembershipResource.Fetch(
            pathServiceSid: "ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathIdentity: "NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            pathSegment: "PathSegment"
        );

        Console.WriteLine(segmentMembership.AccountSid);
    }
}
