// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Notify.V1.Service;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var tag = new List<string> {
            "preferred device"
        };

        var binding = BindingResource.Create(
            endpoint: "endpoint_id",
            tag: tag,
            identity: "00000001",
            bindingType: BindingResource.BindingTypeEnum.Apn,
            address: "apn_device_token",
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(binding.Sid);
    }
}
