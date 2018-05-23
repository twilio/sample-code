// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.joda.time.DateTime;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<Message> messages = Message.reader()
            .setDateSent(new DateTime(2016, 8, 31, 0, 0))
            .setFrom(new com.twilio.type.PhoneNumber("+15017122661"))
            .setTo(new com.twilio.type.PhoneNumber("+15558675310"))
            .read();

        for(Message record : messages) {
            System.out.println(record.getSid());
        }
    }
}