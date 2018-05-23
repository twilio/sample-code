// Install the Java helper library from twilio.com/docs/java/install

import com.google.common.collect.Range;
import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.api.v2010.account.Call;
import org.joda.time.DateTime;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<Call> calls = Call.reader()
            .setStartTime(Range.greaterThan(new DateTime(2009, 7, 4, 0, 0)))
            .setStatus(Call.Status.IN_PROGRESS)
            .read();

        for(Call record : calls) {
            System.out.println(record.getSid());
        }
    }
}