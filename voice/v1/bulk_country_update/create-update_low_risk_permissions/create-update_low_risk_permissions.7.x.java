// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.voice.v1.voicepermission.BulkCountryUpdate;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        BulkCountryUpdate bulkCountryUpdate = BulkCountryUpdate.creator(
                "[ { \"iso_code\": \"US\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }, { \"iso_code\": \"DE\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }, { \"iso_code\": \"FR\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }, { \"iso_code\": \"GB\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" } , { \"iso_code\": \"IN\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }, { \"iso_code\": \"IL\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" } , { \"iso_code\": \"JP\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" } , { \"iso_code\": \"BR\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }]")
            .create();

        System.out.println(bulkCountryUpdate.getUpdateCount());
    }
}