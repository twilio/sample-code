// Install the Java helper library from twilio.com/docs/java/install

import com.google.common.collect.Range;
import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.api.v2010.account.Notification;
import org.joda.time.LocalDate;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<Notification> notifications = Notification.reader()
            .setLog(1)
            .setMessageDate(
                Range.open(new LocalDate(2009, 7, 6), new LocalDate(2009, 7, 8)))
            .read();

        for(Notification record : notifications) {
            System.out.println(record.getSid());
        }
    }
}