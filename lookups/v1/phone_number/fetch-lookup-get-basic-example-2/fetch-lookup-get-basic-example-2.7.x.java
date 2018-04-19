// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.lookups.v1.PhoneNumber;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        PhoneNumber phoneNumber = PhoneNumber.fetcher(
                new com.twilio.type.PhoneNumber("+15108675310"))
            .setCountryCode("US")
            .setType(Promoter.listOfOne("carrier"))
            .fetch();

        System.out.println(phoneNumber.getCallerName());
    }
}