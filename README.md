# MVF_Tech_Test

### Running application

- Download project folder
- Open index.html
- Enter username into form
- User's favourite language will be displayed!

### My strategy

I struggled with a bit of analysis paralysis at the start of the test - having free-reign over the language, framework and library made me a little unsure about what to choose. I haven't had too much experience working with JavaScript or APIs so this seemed like a good opportunity to work with the language and do some learning. I decided to try and solve the test in the simplest way I could find, and then if there was time move on to a more involved solution making use of a framework.

Ultimately I feel very happy with my solution, despite it being quite rudimentary, I learned a huge amount and feel much more comfortable working under pressure in areas I'm not particularly familiar with.

If I had more time for this project my next steps would be to rework the whole test with TDD, I spiked all my code which is not best practice - but I also feel for my progress just getting stuck in was the most useful first step. I would also like to try React - I'm very keen to learn more about this library and this seems like a good project for it.



### Tuesday evening

I spent the first evening getting to grips with GraphiQL, I had only used it very briefly so saw this as a good opportunity to familiarise myself with it further. I managed to get it to query my GitHub account and search through a named repository and return the `primaryLanguage` of that repo. Whilst this isn't the solution to the task, I feel quite happy that this is a good step in the right direction.

![screenshot of GraphiQL query](https://github.com/josephtownshend/MVF_Tech_Test/blob/master/images/Screenshot_1.jpg)

### Wednesday

I spent today figuring out exactly how to start the test - I haven't used Javascript in a while but this feels like an appropriate use of the language and also a good opportunity to become more familiar with it. As a learning exercise I have decided to try and solve this tech test in its simplest form first before moving on to anything more complex. I have therefore decided to not use the V4 GraphQL api but V3.

I have managed to get a javascript script querying the GitHub API and returning an array populated with the primary language of each of a user's repositories.

```
["Ruby", "Ruby", "Ruby", "Ruby", "Java", "Ruby", null, "Ruby", "Ruby", "Ruby", "JavaScript", "Java", "Ruby", null, null, null, "Ruby", "JavaScript", "Ruby", "Python", "Elixir", "Ruby", "Java", "Ruby", "Ruby", "Ruby", "Ruby", "Shell", "HTML", "Java"]
```

From here I have reduced the array to a hash and counted each language entry and stored it as a key/value pair.

```
{Elixir: 1, HTML: 1, Java: 4, JavaScript: 2, Python: 1, Ruby: 16, Shell: 1, null: 4}
```

### Thursday

Made some good progress today - despite spending a long time trying to figure out how to return the highest value from the languages hash. Got a form working and returning the submitted name - so now I think I need to take that input and interpolate it with the API endpoint so as to access the submitted username's profile. I then need to take the returned favourite language and get it showing up on the page. Neither of these two tasks sound particularly complicated, so I feel hopeful I can get this done tomorrow.

### Thursday evening

Managed to get the string interpolation working for the submitted username and the GitHub API endpoint - the can now console.log the inputted user's favourite language.

![screenshot of console.log after username has been entered](https://github.com/josephtownshend/MVF_Tech_Test/blob/master/images/Screenshot_2.jpg)

### Friday

Application is now returning the users favourite programming language.

![screenshot of page after username has been submitted](https://github.com/josephtownshend/MVF_Tech_Test/blob/master/images/Screenshot_3.jpg)

I also extracted the script out of the main.html file and into it's own file/folder. The MVP of the test is now complete, and I feel quite happy about my attempt. 
