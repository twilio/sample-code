// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.notify.v1.service.Notification;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Notification notification = 
            Notification.creator("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setBody("Knok-Knok! This is your first Notify SMS")
            .setIdentity(Promoter.listOfOne("00000001"))
            .create();

        System.out.println(notification.getSid());
    }
}