// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.sync.v1.service.Document;

import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Document document = 
            Document.creator("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setData(
                new HashMap<String, Object>()
                {{
                    put("date_updated", "2018-02-14 12:24:31.843662");
                    put("movie_title", "On The Line");
                    put("show_times", new String [] {
                        "12:30:00Z",
                        "14:45:00Z",
                        "15:30:00Z",
                        "17:45:00Z"
                    });
                    put("starring", new String [] {
                        "Lance Bass",
                        "Joey Fatone"
                    });
                    put("genre", "Romance");
                }})
            .setTtl(1814400)
            .setUniqueName("MyFirstDocument")
            .create();

        System.out.println(document.getSid());
    }
}