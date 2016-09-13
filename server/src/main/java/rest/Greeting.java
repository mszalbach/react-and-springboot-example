package rest;

/**
 * Created by foobarkilla on 11.09.16.
 */
public class Greeting {

    private final long   id;
    private final String content;



    public Greeting( long id, String content ) {
        this.id = id;
        this.content = content;
    }



    public long getId() {
        return id;
    }



    public String getContent() {
        return content;
    }
}
