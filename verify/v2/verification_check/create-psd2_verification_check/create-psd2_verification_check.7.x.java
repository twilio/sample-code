// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.verify.v2.service.VerificationCheck;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        VerificationCheck verificationCheck = VerificationCheck.creator(
                "VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "1234")
            .setTo("+14159373912")
            .setAmount("€39.99")
            .setPayee("Acme Inc.")
            .create();

        System.out.println(verificationCheck.getSid());
    }
}