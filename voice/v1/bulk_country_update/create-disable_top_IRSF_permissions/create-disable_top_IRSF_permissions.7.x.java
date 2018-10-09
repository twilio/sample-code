// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.voice.v1.voicepermission.BulkCountryUpdate;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        BulkCountryUpdate bulkCountryUpdate = BulkCountryUpdate.creator(
                "[{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"CU\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"LV\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"SO\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"LT\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"GN\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"GM\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"MV\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"EE\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"ZW\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"TN\"}]")
            .create();

        System.out.println(bulkCountryUpdate.getUpdateCount());
    }
}