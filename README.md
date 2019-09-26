# MVF_Tech_Test

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
