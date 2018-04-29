# Exam Cheat Sheet

- [ ] Take break
- [ ] Be 100% sure before answering
- [ ] Take your time
- [ ] Check the docs
- [ ] Use your tools
- [ ] Refer to quizzes
- [ ] Seriously, take a break.

NOTE: Instructor/TAs can only give general tips and strategies on the exam. But more specific feedback can be given on Quiz questions. So if you are not 100% on each quiz then ask for help.



## Nuggets

Functional Programming
	A core concept in functional programming is the "pure function." A pure function is a function which:
	
	- Given the same input, will always return the same output.
	- Produces no side effects.
	
	Array.map/filter/reduce are "pure" because they return new collections without changing (aka mutating) the original array. Note: not all Array methods are pure.

[Model View Controller](https://blog.codinghorror.com/understanding-model-view-controller/)

```
1. Model
The classes which are used to store and manipulate the application's state, typically in a database of some kind.

2. View
The user interface bits (in this case, HTML) necessary to render the model to the user.

3. Controller
The brains of the application. The controller decides what the user's input was, how the model needs to change as a result of that input, and which resulting view should be used.
```


## Sample Thorny Questions

---

### DOM Manipulation

In order to convert 

	<div id="high-score"><p>Your high score is <b>100</b></p></div>

to

	<div id="high-score"><p>Your high score is <b>200</b></p></div>

what option would you choose?

1. $('high-score').html('Your high score is 200');
2. $('div > b').html('200');
3. $('div#high-score').find('p').html('200').css({'font-weight':'bold'});
4. $('#high-score').find('b').text('200');

---

You are interacting with API about music albums 

GET /albums - Returns a list of all albums in the catalog

Example response:
{"albums": [
    {"id": 1, "title": "Exile on Main Street", "artist": "The Rolling Stones"},
    {"id": 2, "title": "A Love Supreme", "artist": "John Coltrane"}
]}


POST /albums - Creates a new album based on the given info

Example request:
{"title": "Blue Trane", "artist": "John Coltrane"}

Example response:
{"id": 3}


GET /albums/<id> - Returns info about the album with that id

Example response:
{"id": 1, "title": "The Greatest", "artist": "Cat Power"}


PUT /albums/<id> - Overrides info about the albums with the given id with the new data

Example request:
{"title": "At Last!", "artist": "Etta James"}


DELETE /albums/<id> - Deletes the album at the given id. The id may be recycled for other albums


You have been instructed to write some code that:

1. Deletes all albums by John Coltrane
2. Modifies the titles of all albums by Cat Power to lower case 

Using jQuery, which of the following options below would successfully accomplish both of these tasks? 

```
$.ajax({ url: "/albums", type: "GET" }, function(data) {
    data.albums.forEach(function (album) {
        var endpoint = "/albums/" + album.id;
        if (album.artist == "John Coltrane") {
            $.ajax({ url: endpoint, type: "DELETE" });
        } else if (album.artist == "Cat Power") {
            var request = {title: album.title.toLowerCase(), artist: album.artist};
            $.ajax({ url: endpoint, type: "POST", data: JSON.stringify(request) });
        }
    });
}); 
```

```
$.getJSON("/albums", function(data) {
    data.albums.forEach(function (album) {
        var endpoint = "/album/" + album.id;
        if (album.artist == "John Coltrane") {
            $.ajax({ url: endpoint, type: "DELETE" });
        } else if (album.artist == "Cat Power") {
            var request = {title: album.title.toLowerCase(), artist: album.artist};
            $.ajax({
                url: endpoint,
                type: "PUT",
                data: JSON.stringify(request),
                contentType: "application/json"
            });
        }
    });
});
```


```
var data = $.getJSON("/albums");

var coltrane = data.albums.filter(function (album) {
    return album.artist == "John Coltrane";
});
var catPower = data.albums.filter(function (album) {
    return album.artist == "Cat Power";
});
coltrane.foreach(function (album) {
    $.ajax({ url: "/albums/" + album.id;, type: "DELETE" });
});
catPower.foreach(function (album) {
    $.ajax({
        url: "/albums/" + album.id,
        type: "PUT",
        data: JSON.stringify(request),
        contentType: "application/json"
    });
});
```

```
var data = $.getJSON("/albums").done(function (data) {
    var coltrane = data.albums.filter(function (album) {
        return album.artist == "John Coltrane";
    });
    var catPower = data.albums.filter(function (album) {
        return album.artist == "Cat Power";
    });
    coltrane.foreach(function (album) {
        $.ajax({ url: "/albums/" + album.id;, type: "DELETE" });
    });
    catPower.foreach(function (album) {
        $.post("/albums/" + album.id, JSON.stringify(request));
    });
});
```

---

You are writing a script that parses data about daily cookie consumption. The data is formatted like below...

```
Monday:12 cookies
Tuesday:5.5 cookies
Wednesday:7 cookies
```

__NOTE: mind the spaces and the new lines!__

What code could you write to get the sum of all cookies eaten on Monday?

```
const total = cookieData
  .filter(line => line.split(':')[0] === 'Monday')
  .map(line => line.split(':')[1])
  .map(section => parseFloat(section.split(' ')[0]))
  .reduce((sum, num) => sum + num, 0);
```

```
const total = cookieData
  .split('\n')
  .filter(line => line.split(':')[0] === 'Monday')
  .map(line => line.split(':')[1])
  .map(section => parseFloat(section.split(' ')[0]))
  .reduce((sum, num) => sum + num, 0);
```

```
const total = cookieData.split('\n')
  .filter(line => line.split(':') === 'Monday')
  .map(line => line.split(':')[1])
  .map(section => parseFloat(section.split(' ')[0]))
  .reduce((sum, num) => sum + num, 0);
```

