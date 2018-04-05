// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.notify.v1.Service;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Service service = Service.updater("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setFacebookMessengerPageId("your_page_id")
            .setFriendlyName("Another Awesome Service")
            .setMessagingServiceSid(
                "your_twilio_messaging_service_sid")
            .update();

        System.out.println(service.getSid());
    }
}