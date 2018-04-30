// Install the Java helper library from twilio.com/docs/java/install

import com.google.common.collect.Range;
import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.api.v2010.account.Recording;
import org.joda.time.DateTime;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<Recording> recordings = Recording.reader()
            .setDateCreated(
                Range.greaterThan(new DateTime(2016, 10, 12, 0, 0)))
            .read();

        for(Recording record : recordings) {
            System.out.println(record.getSid());
        }
    }
}