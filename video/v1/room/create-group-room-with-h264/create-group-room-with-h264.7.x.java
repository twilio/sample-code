// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.video.v1.Room;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Room room = Room.creator()
            .setStatusCallback(URI.create("http://example.org"))
            .setType(Room.RoomType.GROUP)
            .setUniqueName("DailyStandupWithH264Codec")
            .setVideoCodecs(Promoter.listOfOne(Room.VideoCodec.H264))
            .create();

        System.out.println(room.getSid());
    }
}