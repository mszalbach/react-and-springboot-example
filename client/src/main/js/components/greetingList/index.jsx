import React from "react";


export default ( {greetings} ) => (

<ul>
    {greetings.map( greeting =>
                            <li key={greeting.id}>{greeting.content}</li>

    )}

</ul>
);