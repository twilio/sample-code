// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Notify.V1.Service.User;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var userBinding = UserBindingResource.Create(
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathIdentity: "NUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            bindingType: UserBindingResource.BindingTypeEnum.Apn,
            address: "Address"
        );

        Console.WriteLine(userBinding.Sid);
    }
}
