// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.pricing.v2.voice.Number;
import com.twilio.type.PhoneNumber;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Number number = 
            Number.fetcher(new com.twilio.type.PhoneNumber("+15017122661"))
            .setOriginationNumber(
                new com.twilio.type.PhoneNumber("+15108675310"))
            .fetch();

        System.out.println(number.getOutboundCallPrices());
    }
}