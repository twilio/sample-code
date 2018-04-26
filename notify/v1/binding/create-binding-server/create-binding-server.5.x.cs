// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Notify.V1.Service;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var binding = BindingResource.Create(
            endpoint: "XXXXXXXXXXXXXXX",
            tag: Promoter.ListOfOne("premium"),
            address: "gcm_device_token",
            bindingType: BindingResource.BindingTypeEnum.Gcm,
            identity: "00000001",
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(binding.Sid);
    }
}
