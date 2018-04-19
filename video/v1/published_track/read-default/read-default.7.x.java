// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.video.v1.room.participant.PublishedTrack;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<PublishedTrack> publishedTracks = PublishedTrack.reader(
                "RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .read();

        for(PublishedTrack record : publishedTracks) {
            System.out.println(record.getSid());
        }
    }
}