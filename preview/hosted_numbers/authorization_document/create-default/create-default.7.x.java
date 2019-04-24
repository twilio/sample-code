// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.preview.hostedNumbers.AuthorizationDocument;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        AuthorizationDocument authorizationDocument = 
            AuthorizationDocument.creator(
                Promoter.listOfOne("hosted_number_order_sids"),
                "ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "email",
                "contact_title",
                "contact_phone_number")
            .create();

        System.out.println(authorizationDocument.getSid());
    }
}