// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Linq;
using Twilio;
using Twilio.Rest.Video.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var videoCodecs = new [] {
            RoomResource.VideoCodecEnum.H264
        }.ToList();

        var room = RoomResource.Create(
            statusCallback: new Uri("http://example.org"),
            type: RoomResource.RoomTypeEnum.Group,
            uniqueName: "DailyStandupWithH264Codec",
            videoCodecs: videoCodecs
        );

        Console.WriteLine(room.Sid);
    }
}
