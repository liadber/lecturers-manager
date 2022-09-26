I choosed to implement the functionality of filtering lecturers by Language on the server-side.
A good design is when the server repnosible to the logic bussiness computing,
The given models of the assigenment restict you to have a languages dictionary (id-name) and 
it's better practice to save this kind of dictionary in one place (to avoid duplicating and missyncronized problems).
The server must have this dictionary anyway so I think it's better to computing this query in the server instead of informing the client on this languages' dictionary.
