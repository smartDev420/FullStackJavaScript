<span id="basics" class="anchor"></span>

CHAPTER 1
---------

Basics
======

> *I think everyone should learn how to program a computer, because it
> teaches you how to think. I view computer science as a liberal art,
> something everyone should learn to do.*
>
> — Steve Jobs

In this chapter, we'll cover these topics:

-   Overview of HTML, CSS, and JavaScript syntaxes
-   Brief introduction to Agile methodology
-   Advantages of cloud computing, Node.js, and MongoDB
-   Descriptions of HTTP requests/responses and RESTful API concepts

In this chapter we will brush up on the fundamental concepts before moving forward. If you are an experienced web developer, then feel free to skip this chapter. If you are new to web development, then pay extra attention. Why? Maybe you have heard and are familiar with some terms, but wonder what they actually mean. Another good reason is that this chapter will cover the RESTful API in a very beginner-friendly manner. REST is used in virtually all modern web architectures, and we'll use it in the book a lot. There is one last reason: You'll look smart at a cocktail party or in front of your colleagues and your boss by acing the hodpodge of web acronyms.

Front-End Definitions
=====================

*Front end* is a term for browser applications. Browser is called client because in networking we use client-server communication. Users interact with a client to make requests to a server which sends back responses. Thus front end is browser or client applications. Client can be a mobile application as well. 

Very rarely in some conversations (by some rather old-school Java architects), "front end" is used to define *server* applications. This is very confusing. The only excuse I can make for this usage is that these server apps are facing the browser requests first rather than some other servers applications. Or, depending on the context, these server applications act as static web servers to the browser application. To have everything clear and precise, for this book we assume that **when we mention front end it is the browser applications and their code**.

Front-end development, or front-end web development, implies the usage of various technologies. Each of them individually is not too complex, but the sheer number of them makes beginners timid. For example, there are Cascading Style Sheets (CSS), Hypertext Markup Language (HTML), Extensible Markup Language (XML), JavaScript, JavaScript Object Notation (JSON), Uniform Resource Identifier (URI), Hypertext Transfer Protocol (HTTP), Secure Sockets Layer (SSL), Transport Layer Security (TLS), or the Transmission Control Protocol/Internet Protocol (TCP/IP), Internet Relay Chat (IRC), Remote Procedure Call (RPC), GraphQL, ES, and many other abbreviations.

In addition to the low-level technologies, there are numerous frameworks, tools, and libraries; for example, React, jQuery, Backbone.js, Angular.js, Webpack, Grunt, and so on. Please don't confuse front-end frameworks with back-end frameworks: The front-end frameworks run on the browser whereas the back-end ones run on the server.

To build a web application developers have to have multiple things. In a nutshell, front-end web development consists of these components:

1.  HTML or templates that compile to HTML
2.  Stylesheets to make HTML pretty
3.  JavaScript to add interactivity or some business logic to the browser app
4.  Some hosting (AWS, Apache, Heroku, etc.)
5.  Build scripts to prepare code, manage dependencies, and do pretty much anything that's needed
6.  Logic to connect to the server (typically via XHR requests and RESTful API)

Now you know what a job that has the title of front-end developer entails. The great payback to mastering this hodgepodge is the ability to express your creativity by building beautiful and useful apps.

Before we start building, let's cover a bird's-eye view of the web request cycle.

Web Request Cycle
-----------------

This is important for someone very new to the web development. The whole World Wide Web or the Internet is about communication between clients and servers. This communication happens by sending requests and receiving responses. Typically browsers (the most popular web clients) send requests to servers. Behind the scenes, servers send their own requests to other servers. Those requests are similar to the browser requests. The language of requests and responses is HTTP(S). Let's explore the browser request in more details.

The web request consists of the following steps:

1.  A user types a URL or follows a link in his or her browser (also called the client).
2.  The browser makes an HTTP request to the server.
3.  The server processes the request, and if there are any parameters in a query string or body of the request, it takes them into account.
4.  The server updates, gets, and transforms data in the database.
5.  The server responds with an HTTP response containing data in HTML, JSON, or other formats.
6.  The browser receives the HTTP response.
7.  The browser renders an HTTP response to the user in HTML or any other format (e.g., JPEG, XML, JSON).

Mobile applications act in the same manner as regular web sites, only
instead of a browser there is a native app. Mobile apps (native or
HTML5) are just another client. Other minor differences between mobile
and web include data transfer limitation due to carrier bandwidth,
smaller screens, and the more efficient use of local storage. Most
likely you, my reader, are a web developer aspiring to use your web
chops in mobile. With JavaScript and HTML5 it's possible, so it's worth
covering mobile development closer.

Mobile Development
------------------

<span id="mobile" class="anchor"></span>Is mobile going to overtake web
and desktop platforms? Maybe. For now the mobile development field is
extremely immature and new. It's good if you are a pioneer, but most of
us are not. This is a bigger gap in tooling and libraries compared to
web. The gap is closing. With HTML5, you can write once and reuse code
on mobile. There are other approaches as well.

These are the approaches to mobile development, each with its own
advantages and disadvantages:

1.  *Native:* Native iOS, Android, Blackberry apps built with
    Objective-C, Swift, or Java.

2.  Abstracted native: Native apps built with JavaScript with , [React Native](https://facebook.github.io/react-native) (https://facebook.github.io/react-native),     NativeScript, [Appcelerator](http://www.appcelerator.com) (http://www.appcelerator.com), [Xamarin](https://xamarin.com), (https://xamarin.com), [Smartface](http://www.smartface.io) (http://www.smartface.io) or similar tools, and then compiled into native Objective-C or Java.

3.  *Responsive*: Mobile websites tailored for smaller screens with
    responsive design, CSS frameworks like Twitter
    [Bootstrap](http://twitter.github.io/bootstrap/) (http://twitter.github.io/bootstrap) or [Foundation](http://foundation.zurb.com) (http://foundation.zurb.com), regular CSS, or different templates.
    You might use some JavaScript frameworks for the development like
    Backbone.js, Angular.js, Ember.js, or React.js.

4.  *Hybrid*: HTML5 apps which consist of HTML, CSS, and JavaScript, and
    are usually built with frameworks like [Sencha Touch](http://www.sencha.com/products/touch) (http://www.sencha.com/products/touch), [Trigger.io](https://trigger.io) (https://trigger.io), or
    [Ionic](http://ionicframework.com) (http://ionicframework.com) and then wrapped into a native app
    with [PhoneGap](http://phonegap.com) (http://phonegap.com). As in the third approach, you
    probably will want to use a JavaScript framework for the development
    such as Backbone.js, Angular.js, Ember.js or React.js.

My personal favorites are the second and fourth approaches which are abstracted and hybrid ones. The second
approach doesn't require a different code base. A minimal viable product
(MVP) can be built across multiple platforms by sharing a lot of the code. I recommend React Native. Check out [my book](https://amzn.to/2H2Rhbk) and [course](https://node.university/p/react-native-quickly) React Native Quickly to get started with mobile development using the abstracted approach. 

The fourth approach is more powerful and provides more scalable (in a
development sense) UIs. This is better suited for complex apps. Code
reuse between cross-platform mobile and web is easy because most of the
times you're writing in JavaScript.

<span id="hypertext-markup-language" class="anchor"><span id="HTML" class="anchor"></span></span>HyperText Markup Language
--------------------------------------------------------------------------------------------------------------------------

HTML is not a real programming language in itself. It is a set of markup tags
that describe the content and present it in a structured and formatted
way. We can code too much logic into HTML. There are no variables or loops. HTML is the language of the web because it is ubiquitous and used by all clients (browsers) to interpret the data to users. 

HTML tags consist of a tag name inside of the angle brackets
(`<>`). In most cases, tags surround the content, with the end tag
having forward slash before the tag name. Tags create hierarchy of content. Each tag has a meaning, purpose and a default display representation in a browser. For example, there are tags for headings, paragraphs, bullet points, images, links, and many more.

In this example, each line is an HTML element:

```html
<h2>Overview of HTML</h2>
<div>HTML is a …</div>
<link rel="stylesheet" type="text/css" href="style.css" />
```

An HTML document itself is an element of the `<html>` tag, and all
other elements such as `head`, `body`, `h2` and `p` are children of that `<html>` tag. The tag `head` is for meta data of the page (info of the page itself without the visible to the user content), while `body` is for the content (visible to the user). Developers use 4-space indentation to signify and mark the nested elements. The element `link` is two level nested in the `html` element. (It includes/imports the CSS style.)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" type="text/css" href="style.css"/>
    </head>
    <body>
        <h2>Overview of HTML</h2>
        <p>HTML is a …</p>
    </body>
</html>
```

Notice that the closing tags have slash `/` inside the angle braces `<>` but before the name of the tag, e.g., `</html>`. This is important for proper rendering (interpretation and displaying) of elements by the browser.

There are different flavors and versions of HTML, such as DHTML, XHTML
1.0, XHTML 1.1, XHTML 2, HTML 4, and HTML 5. This comic strip does a good
job of explaining the differences: [Misunderstanding Markup: XHTML
2/HTML 5](http://coding.smashingmagazine.com/2009/07/29/misunderstanding-markup-xhtml-2-comic-strip/)
(http://coding.smashingmagazine.com/2009/07/29/misunderstanding-markup-xhtml-2-comic-strip/). Before web developers had to use the appropriate version, but now just drop `<!DOCTYPE html>` and modern browsers will understand your markup.

Any HTML element can have attributes. You already saw `link` with `rel`, `type` and `href`. Attributes are like extra information which is not directly visible by the user (not content) and which is not some nested elements (more content). The most important attributes which are applicable to almost all elements and tags are `class`, `id`, `style`, `data-name`. Then there are event attributes `onclick`, `onmouseover`, `onkeyup`, and so on.

### `class`

The class attribute defines a class that is used for styling in CSS or
Domain Object Model (DOM) manipulation; for example:

```html
<p class="normal">…</p>
```

### `id`

The id attribute defines an ID that is similar in purpose to element
class, but it has to be unique; for example:

```html
<div id="footer">...</div>
```

### `style`

The style attribute defines inline CSS to style an element; for example:

```html
<font style="font-size:20px">…</font>
```

### `title`

The title attribute specifies additional information that is usually
presented in tooltips by most browsers; for example:

```html
<a title="Up-vote the answer">…</a>
```

### `data-name`

The data-name attribute allows for metadata to be stored in the DOM; for
example:

```html
<tr data-token="fa10a70c–21ca–4e73-aaf5-d889c7263a0e">…</tr>
```

### `onclick`

The onclick attribute calls inline JavaScript code when a click event
happens; for example:

```html
<input type="button"
  onclick="validateForm();">…</a>
```

### `onmouseover`

The onmouseover attribute is similar to onclick but for mouse hover
events; for example:

```html
<a onmouseover="javascript:
  this.setAttribute(‘css’,‘color:red’)">
  …
</a>
```

Other HTML element attributes for inline JavaScript code are as follows:

-   onfocus: When the browser focuses on an element

-   onblur: When the browser focus leaves an element

-   onkeydown: When a user presses a keyboard key

-   ondblclick: When a user double-clicks the mouse

-   onmousedown: When a user presses a mouse button

-   onmouseup: When a user releases a mouse button

-   onmouseout: When a user moves mouse out of the element area

-   oncontextmenu: When a user opens a context menu

The full list of such events and a browser compatibility table are
presented in [Event compatibility
tables](http://www.quirksmode.org/dom/events/index.html)
(http://www.quirksmode.org/dom/events/index.html).

We'll use classes extensively with Twitter Bootstrap framework, but the
use of inline CSS and JavaScript code is generally a bad idea, so we'll
try to avoid it. However, it's good to know the names of the JavaScript
events because they are used all over the place in jQuery, Backbone.js,
and, of course, plain JavaScript. To convert the list of attributes to a
list of JS events, just remove the prefixes on; for example, `onclick`
attribute means click event.

More information is available at Example: [Getting Started with JS](https://developer.mozilla.org/en-US/docs/JavaScript/Getting_Started) (https://developer.mozilla.org/en-US/docs/JavaScript/Getting_Started),
[Wikipedia](http://en.wikipedia.org/wiki/HTML) (http://en.wikipedia.org/wiki/HTML) and
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) (https://developer.mozilla.org/en-US/docs/Web/HTML).

Cascading Style Sheets
----------------------

<span id="css" class="anchor"></span>CSS provides a way to format and
present content. An HTML document can have an external stylesheet
included in it by a `<link>` tag, as shown in the previous examples, or
it can have CSS code directly inside of a `<style>` tag:

```html
<style>
  body {
    padding-top: 60px; /* 60px to make some space */
  }
</style>
```

Each HTML element can have id attributes, class attributes, or both:

```html
<div id="main" class="large">
  Lorem ipsum dolor sit amet,
  Duis sit amet neque eu.
</div>
```

In CSS we access elements by their id, class, tag name, and in some edge
cases, by parent–child relationships or element attribute value.

This sets the color of all the paragraphs (`<p>` tag) to gray
(`#999999` in red-blue-green code):

```css
p {
  color: #999999;
}
```

This sets padding of a `<div>` element with the id attribute of
main:

```css
div#main {
  padding-bottom: 2em;
  padding-top: 3em;
}
```

This sets the font size to 14 pixels for all elements with a class
large:

```css
.large {
  font-size: 14pt;
}
```

This hides `<div>`, which are direct children of the `<body>`
element:

```css
body > div {
  display: none;
}
```

This sets the width to 150 pixels for input which the name attribute is
email:

```css
input[name="email"] {
  width: 150px;
}
```


More information is available at Wikipedia
(http://en.wikipedia.org/wiki/Cascading_Style_Sheets) and MDN
(https://developer.mozilla.org/en-US/docs/Web/CSS).

CSS3 is an upgrade to CSS that includes new ways of doing things such as
rounded corners, borders, and gradients, which were possible in regular
CSS only with the help of PNG/GIF images and by using other tricks.

For more information refer to CSS3.info (<http://css3.info>), and [CSS3 vs. CSS
comparison article on Smashing](http://coding.smashingmagazine.com/2011/04/21/css3-vs-css-a-speed-benchmark)
(http://coding.smashingmagazine.com/2011/04/21/css3-vs-css-a-speed-benchmark).

JavaScript
----------

<span id="JavaSCRIPTS" class="anchor"></span>JavaScript (JS) was crafted
in 1995 at Netscape as LiveScript. Guess what another technology got its start in 1995? It's Java. Hence, developers of LiveScript renamed it into JavaScript but the two are very different. JavaScript has the same relationship with
Java as a hamster has with a ham. So please don't confuse one with
another. JavaScript is interpreted and run by a JavaScript engine (Google Chrome V8 or Microsoft Chakra or SpiderMonkey) from a plain text. Java is compiled to bytecode which is run by the Java Virtual Machine. There are differences in syntax, memory usage, typing and pretty much anything else. 

For most beginner programmers, it's easier to get started with JavaScript than with any other language. JavaScript has a very expressive language and very little setup overhead (just open your browser and start coding). JavaScript is the only native language which runs in the browsers (until we have WebAssembly but who wants to do that?). This fact alone makes JS the most popular language by number the runtime environments. Moreover, JavaScript is omnipresent. It can be use almost anywhere!

These days, JavaScript is used for both client-side and server-side web,
as well as in desktop application development, drones, Internet of
Things (IoT), and other things. This is the main focus of this book
because with JavaScript you can develop across all the layers. 

If you are a beginner programmer, then just learn JavaScript and you won't need to learn any other languages. You can just use JavaScript for everything like front end, back end, database and DevOps, and that will make you a full stack JavaScript developer, my friend!

Let's start with JavaScript in HTML. Putting JS code into a
`<script>` tag is the easiest way to use JavaScript in an HTML
document:

```html
<script type="text/javascript" language="javascript">
  alert("Hello world!") //simple alert dialog window
</script>
```

Be advised that mixing HTML and JS code is not a good idea, so to
separate them we can move the code to an external file, and include it
by setting source attribute `src="filename.js"` on a `<script>` tag, for
example, for the app.js resource:

```html
<script src="js/app.js" type="text/javascript"
  language="javascript">
</script>
```

Note that the closing `<script/>` tag is mandatory even with an
empty element like we have where we include the external source file. In other words, just typing `<script src="js/app.js" ...>` will not suffice.


Ways, ways when dinosaurs roamed the world, browsers knew how to parse and run VBScript (Microsoft Visual Basic script, the same as one you use in Excel spreadsheets). Hence, developers were required to specify what type of the script is this: JavaScript, VB or something else (Java, Flash and other losers). Luckily, now the modern browsers default to JS because that the only thing they can do and because that's the only thing commonly used by developers. Thus, the `type` and `language` attributes over the years became optional in *modern* browsers due to the overwhelming dominance of JavaScript.

Other ways to run JavaScript include the following:

-   The inline approach already covered

-   WebKit browser Developer Tools and FireBug consoles

-   The interactive Node.js shell

One of the advantages of the JavaScript language is that it's loosely
typed. This loose or weak typing, as opposed to strong typing
(http://en.wikipedia.org/wiki/Strong_typing) in languages like C and
Java, makes JavaScript a better programming language for prototyping.
Here are some of the main types of JavaScript objects or classes. I wrote "or" because there are not classes per se in JavaScript. In JS, objects inherit from objects which is called prototypal inheritance. Confusing? Wait until you define some type of inheritance because there are several different ways to do so. 

Going back to types. There are primitive types. they have wrapper classes which provide extra functionality and static methods.

### Number Primitives

Number primitives are numerical values; for example:

```js
const num = 1
```

The way we define variables is either with `const` or `let`. They respect scopes created by logical blocks (functions, loops and conditions). The `const` will prevent reassignment. If developer omits `const` or `let` then the bad things will happen. The old way was to use `var`. I immediately raise a red flag when I perform a job interview and I see a candidate use `var`. It was responsible for quite a lot of weird bugs so only developers who are unskilled, not aware of [ES6](https://node.university/p/es6) or those who learned JavaScript from w3schools would use the `var` in 2018. 

### Number Object

This is the
[Number](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number)
https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number
object and its methods; for example, developers can create a number object with `new`:

```js
const numObj = new Number('123') // Number object
const num = numObj.valueOf() // number primitive  
const numStr = numObj.toString() // string representation
console.log(numObj === 123) // false
```

Notice the last line, the number object is not triple equals the number primitive. This is because primitive and the object are of different types. Conveniently, JavaScript can automatically convert the types to something similar with double equals. Thus, the following code will be print true:

```js
const numObj = new Number('123') // Number object
console.log(numObj === 123) // false
```

### String Object

The String object has a lot of useful methods, like length, match, and
so on; for example, to create a string object use `new`:

```js
const strObj = new String("abcde") // String object
const str = strObj.valueOf() // string primitive 
strObj.match(/ab/)
str.match(/ab/) // both call will work
```

### String Primitives

String primitives are sequences of characters inside of single or double quotes; for example, we can define a string primitive simply by using single quote `'`:

```js
const str = 'React Quickly' // single quotes
const str1 = "React Quickly" // double quotes
console.log(str === str1) // true
const newStr = "abcde".substr(1,2) // newStr is bc
```

In JavaScript, double quotes `"` don't have any special power. In my opinion, we should get rid of single quotes and just use double quotes because it will remove a lot of arguments what quotes to use. Typically, developers prefer single quotes because then they can use double quotes inside for HTML attributes values. The downside is that you can't use apostrophe inside of a single quote string unless you escape it with a slash `\`.

```js
'it\'s crazy' // valid string
'it's crazy' // INVALID string
```

For convenience, JavaScript automatically wraps string primitives with String object methods. This is why primitives strings have fancy methods like `substr` too. The triple equals will return false though. String objects and string primitives are not quite the same (https://developer.mozilla.org/enUS/docs/JavaScript/Reference/Global_Objects/String\#Distinction_between_string_primitives_and_String_objects).

### RegExp Object

Regular Expressions or RegExps are patterns of characters used in
finding matches, replacing, and testing of strings.

```js
const pattern = /[A-Z]+/
'ab'.match(pattern) // null
'AB'.match(pattern) // ["AB"]
```

The match() method returns an array of matches (`["AB"]`). If all you
need is a Boolean true/false, then simply use `pattern.test(str)`. For
example:

```js
const str = 'A'
const pattern = /[A-Z]+/
pattern.test(str) // true
```

### Special Types

When in doubt (when debugging), you can always call `typeof obj`. For example, 

```js
const obj = {}
console.log(typeof obj) // object
const a = 1
console.log(typeof a) // number
```

Here are
some of the special types used in JS:

-   NaN: Not a number
-   null: Null, nada, zip
-   undefined: Undeclared variable
-   function: Function

### JSON

The JSON library allows us to parse and serialize JavaScript objects;
for example, we can take a valid JSON string, convert it to JS object, add a new field `c` and then convert the object back into the string and pretty string (with spaces and new lines):

```js
const stringObj = '{"a": 1, "b": "hi"}'
const obj = JSON.parse(stringObj)  
obj.c = 2
const stringObj2 = JSON.stringify(obj)
console.log(stringObj2) // JSON string {"a":1,"b":"hi","c":2}
const stringObj3 = JSON.stringify(obj, null, 2) // make the string pretty with spaces and new lines
console.log(stringObj2) // prettified JSON string
```

### Array Object

[Arrays](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array) (https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array)
are zero-index-based lists. For example, to create an array:

```js
const arr = new Array()
const arr = ['apple', 'orange', 'kiwi']
```

The Array object has a lot of nice methods, like indexOf, slice, and
join. Make sure that you're familiar with them, because if used
correctly, they'll save a lot of time.

### Data Object

I really like JavaScript because it's so easy to create an object. In Java on the other hand, developers have to define a class, maybe an interface too, then have getters and setter in the class, then instantiate the class into an object. In JavaScript, developer just type `{}` and boom! For example, here's an object with name, url and price fields:

```js
const obj = {
  name: 'Gala', 
  url: 'img/gala100x100.jpg', 
  price: 129
}
```

or

```js
const obj = new Object()
```

We provide more on inheritance patterns later.

### Boolean Primitives and Objects

Just as with String and Number, [Boolean](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Boolean) (https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Boolean)
can be a primitive and an object.

```js
const bool1 = true  
const bool2 = false
const boolObj = new ``Boolean``(false)
```

### Date Object

[Date](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date) (https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date)
objects allow us to work with dates and time; for example:

```js
const timestamp = Date.now() // 1368407802561
const d = new Date() //Sun May 12 2013 18:17:11 GMT-0700 (PDT)
```

### Math Object

These are used for mathematical constants and functions
https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math;
for example:

```js
const x = Math.floor(3.4890)
const ran = Math.round(Math.random()*100)
```

### Browser Objects

Browser objects give us access to a browser and its properties like
URLs; for example:

```js
window.location.href = 'http://rapidprototypingwithjs.com'  
console.log('test')
```

### DOM Objects

DOM objects or DOM (https://developer.mozilla.org/en/docs/Web/API/Node)
nodes are the browser interface to the DOM elements rendered on the
page. They have properties such as width, height, position, and so on,
and, of course, inner content, which can be another element or text. To
get a DOM node, you can use its ID; for example:

```js
const transactionsContainer = document.createElement('div')  
transactionsContainer.setAttribute('id', 'main')  
const content = document.createTextNode('Transactions')  
transactionsContainer.appendChild(content)  
document.body.appendChild(transactionsContainer)  
const main = document.getElementById('main')  
console.log(main, main.offsetWidth, main.offsetHeight)
```

### Globals

In addition to classes such as `String`, `Array`, `Number`, and `Math`, which
have a lot of useful methods, you can call the following methods known
as globals, meaning you can invoke them from anywhere in your code:

-   encodeURI (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI):
    Encodes a Uniform Resource Identifier (URI) to give you a URL, e.g.,
    encodeURI ('http://www.webapplog.com/js is awesome')

-   decodeURI
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI):
    Decodes a URI

-   encodeURIComponent
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent):
    Encode URI for URL parameters (don’t use it for the entire
    URL string)

-   decodeURIComponent
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent):
    Decodes the fragment

-   isNaN (
    <https://developer.mozilla.org/en/docs/Web/>JavaScript/Reference/Global_Objects/  
    isNaN): Determines whether a value is a number or not

-   [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON):
    Parsing (parse()) and serializing (stringify()) of JSON data

-   [parseFloat](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
    (
    https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat):
    Converts a string to a floating number

-   [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt):
    Converts a string to a number

-   [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl):
    Language-specific string comparison methods

-   Error
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error):
    An error object that you can use to instantiate your own error
    objects; for example, throw new Error('This book rocks!')

-   [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date): Various methods to work with dates

### Conventions

JavaScript uses a number of style conventions. One of them is camelCase, in which you type multiple words as one word, capitalizing the first characters of the each word starting from the second one.

Semicolons are optional. Names starting with an underscore are private methods or attributes, but not because they are protected by the language. We use `_` to simply to alert the developers not to use them because they might change in the future.

JavaScript supports numbers only up to 53 bits in size. Check out large numbers' libraries if you need to deal with numbers larger than that.

The full references for JavaScript and DOM objects are available at [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/JavaScript/Reference) (https://developer.mozilla.org/en-US/docs/JavaScript/Reference) and w3school (http://www.w3schools.com/jsref/default.asp).

For JS resources such as ECMA specs, check out the list at JavaScript Language Resources (<https://developer.mozilla.org/en-US/docs/JavaScript/Language_Resources>). As of this writing, the latest JavaScript specification is ECMA-262 Edition 5.1 (<http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf>) and HTML (<http://www.ecma-international.org/ecma-262/5.1>).

Another important distinction of JS is that it's a functional and prototypal language. Typical syntax for function declaration looks like this:

```js
function Sum(a,b) {  
  const sum = a + b  
  return sum  
}  
console.log(Sum(1, 2))
```

Functions in JavaScript are first-class citizens (http://en.wikipedia.org/wiki/First-class_function) due to the functional programming (http://en.wikipedia.org/wiki/Functional_programming) nature of the language. Therefore, functions can be used as other variables or objects; for example, functions can be passed to other functions as arguments:

```js
const f = function (str1){
  return function(str2){  
  return str1 + ' ' + str2  
  }  
}  
const a = f('hello')  
const b = f('goodbye')  
console.log((a('Catty'))  
console.log((b('Doggy'))
```

Another way to define a function is to use a fat arrow syntax. The difference is that fat arrow will not use a name so developers need to store the function in a variable. 

```js
const Sum = (a,b) => {  
  const sum = a + b  
  return sum  
}  
console.log(Sum(1, 2))
```

Another difference is that fat arrow function syntax preserves the value of `this` from the outer scope which in a way makes the fat arrow syntax equivalent to using a bind method `bind(this)` on a regular function.

```js
const Sum = function(a, b) {
  const sum = a + b  
  return sum    
}.bind(this)
```

Of course in this `Sum` example we never use `this` so there's no need. But when you use classes and inheritance you'll use `this` a lot because it's the way to refer the the class instance and its methods and attributes/fields/properties.

Speaking of instances, classes and inheritance. If you want to be a good full stack developer, then it's very important to know that there are several ways to instantiate an object in JS:

-   [Classical inheritance](http://www.crockford.com/javascript/inheritance.html) (http://www.crockford.com/javascript/inheritance.html) pattern
-   [Pseudo-classical inheritance](http://javascript.info/tutorial/pseudo-classical-pattern)
    (http://javascript.info/tutorial/pseudo-classical-pattern) pattern
-   Functional inheritance pattern

For further reading on inheritance patterns, check out Inheritance Patterns in JavaScript (http://bolinfest.com/javascript/inheritance.php) and Inheritance revisited (https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Inheritance_Revisited).

The best JavaScript references is available at Mozilla Developer Network (https://developer.mozilla.org/en-US/docs/JavaScript/Reference).

Agile Methodologies
===================

The Agile software development methodology evolved due to the fact that traditional methods like Waterfall weren't good enough in situations of high unpredictability; that is, when [the solution is unknown](http://www.startuplessonslearned.com/2009/03/combining-agile-development-with.html) (http://www.startuplessonslearned.com/2009/03/combining-agile-development-with.html). Agile methodology includes Scrum/sprint, test-driven development, continuous deployment, paired programming, and other practical techniques, many of which were borrowed from extreme programming.

Scrum
-----

In regard to management, the Agile methodology uses the Scrum approach. More about Scrum can be read at the following sources:

-   [Scrum Guide in PDF](http://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-us.pdf) (http://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-us.pdf)
-   [Scrum.org](http://www.scrum.org/) (http://www.scrum.org)
-   [Scrum development Wikipedia article](http://en.wikipedia.org/wiki/Scrum_(development)) (http://en.wikipedia.org/wiki/Scrum_(development))

The Scrum methodology is a sequence of short cycles, and each cycle is called a *sprint.* One sprint usually lasts from one to two weeks. A typical sprint starts and ends with a sprint planning meeting where new tasks are assigned to team members. New tasks cannot be added to the sprint in progress; they can be added only at the sprint meetings.

An essential part of the Scrum methodology is the daily scrum meeting, hence the name. Each scrum is a 5- to 15-minute-long meeting, often conducted in a hallway. In scrum meetings, each team member answers three questions:

1.  What have you done since yesterday?
2.  What are you going to do today?
3.  Do you need anything from other team members?

Flexibility makes Agile an improvement over the Waterfall methodology, especially in situations of high uncertainty (i.e., in startups).

The advantage of Scrum methodology is that it is effective where it is hard to plan ahead of time, and also in situations where a feedback loop is used as the main decision-making authority.

Test-Driven Development
-----------------------

<span id="TDD" class="anchor"></span>Test-driven development (TDD) consists of the following steps:

1.  Write failing automated test cases for new features, tasks, or
    enhancement by using assertions that are either true or false.
2.  Write code to successfully pass the test cases.
3.  Refactor code if needed, and add functionality while keeping the
    test cases passed.
4.  Repeat until all tasks are complete.

Tests can be split into functional and unit testing. The latter is when a system tests individual units, methods, and functions with dependencies mocked up, whereas the former (also called integration testing) is when a system tests a slice of a functionality, including dependencies.

There are several advantages of TDD:

-   Fewer bugs and defects
-   More efficient codebase
-   Confidence that code works and doesn't break the old functionality

Continuous Deployment and Integration
-------------------------------------

Continuous deployment (CD) is a set of techniques to rapidly deliver new features, bug fixes, and enhancements to the customers. CD includes automated testing and automated deployment. Using CD, manual overhead is decreased and feedback loop time is minimized. Basically, the faster a developer can get the feedback from the customers, the sooner the product can pivot, which leads to more advantages over the competition. Many startups deploy multiple times in a single day in comparison to the 6-to 12-month release cycle that is still typical for corporations and big companies.

The advantages of the CD approach include decreased feedback loop time and manual labor overhead.

The difference between CD and continuous integration is outlined in the post Continuous Delivery vs. Continuous Deployment vs. Continuous Integration - Wait huh? ( <http://blog.assembla.com/assemblablog/tabid/12618/bid/92411/Continuous-Delivery-vs-Continuous-Deployment-vs-Continuous-Integration-Wait-huh.aspx>)

Some of the most popular solutions for continuous integration include the following:

-   [*Jenkins*](http://jenkins-ci.org) (http://jenkins-ci.org): An extendable open source continuous integration server
-   [*CircleCI*](https://circleci.com) (https://circleci.com): Ship better code, faster
-   [*Travis CI*](https://travis-ci.org) (https://travis-ci.org): A hosted continuous integration service for the open source community

Pair Programming
----------------

Pair programming is a technique when two developers work together in one environment. One of the developers is a driver, and the other is an observer. The driver writes code, and the observer assists by watching and making suggestions. Then they switch roles. The driver has a more tactical role of focusing on the current task. In contrast, the observer has a more strategic role, overseeing "the bigger picture" and finding bugs and ways to improve an algorithm.

The following are the advantages of paired programming:

-   Pairs result in shorter and more efficient codebase, and introduce fewer bugs and defects.
-   As an added bonus, knowledge is passed among programmers as they work together. However, conflicts between developers are possible, and not uncommon at all.

Back-End Definitions
====================

The back end is another name for the server. It's everything after the browser. It includes server platforms like PHP, Python, Java, Ruby, and of course Node.js, as well as databases and other technologies.

Luckily, with modern back-end-as-a-service solutions you can bypass the back-end development entirely. With just a single &lt;script&gt; tag included, you can get a real-time database with the ability to put some logic into it like access level control (ALC), validation, and so on. I'm talking about Firebase.com and Parse.com.

In those cases where you still need your own custom server code, Node.js is the weapon of choice!

Node.js
-------

Node.js is an open source, event-driven asynchronous I/O technology for building scalable and efficient web servers. Node.js consists of Google’s V8 JavaScript engine (http://en.wikipedia.org/wiki/V8_(JavaScript_engine)). It was maintained by cloud company Joyent (http://joyent.com), but moved to the Technical Steering Committee governance.

The purpose and use of Node.js is similar to Twisted (<http://twistedmatrix.com/trac>) for Python and EventMachine (<http://rubyeventmachine.com>) for Ruby. The JavaScript implementation of Node was the third one after attempts at using Ruby and C++ programming languages languages.

Node.js is not in itself a framework like Ruby on Rails; it's more comparable to the pair of PHP and Apache. I'll provide a list of the top Node.js frameworks chapter 6.

The following are the advantages of using Node.js:

-   Developers have high likelihood of familiarity with JavaScript due to its status as a de facto standard for web and mobile development
-   Using one language for front-end and back-end development speeds up the coding process. A developer's brain doesn't have to switch between different syntaxes, a so-called context switch. The learning of methods and classes goes faster.
-   With Node.js, you could prototype quickly and go to market to do your customer development and customer acquisition early. This is an important competitive advantage over other companies that use less agile technologies (e.g., PHP and MySQL).
-   Node.js is built to support real-time applications by utilizing web sockets.

For more information go to Wikipedia (http://en.wikipedia.org/wiki/Nodejs), Nodejs.org (http://nodejs.org/about/ ), and articles on ReadWrite (http://readwrite. com/2011/01/25/wait-whats-nodejs-good-for-aga) and O’Reilly (<http://radar.oreilly.com/2011/07/what-is-node.html>).

For the current state of Node.js (as of this writing), refer to the official Node.js blog (<https://nodejs.org/en/blog>).

NoSQL and MongoDB
-----------------

MongoDB, from huMONGOus, is a high-performance, no-relationship database for huge quantities of data. The NoSQL concept came out when traditional relational database management systems (RDBMSs) were unable to meet the challenges of huge amounts of data.

Here are the advantages of using MongoDB:

-   *Scalability:* Due to a distributed nature, multiple servers and data centers can have redundant data.
-   *High performance:* MongoDB is very effective for storing and retrieving data, partially owing to the absence of relationships between elements and collections in the database.
-   *Flexibility:* A key-value store is ideal for prototyping because it doesn't require developers to know the schema and there is no need for fixed data models or complex migrations.

Cloud Computing
---------------

Cloud computing consists of the following components:

-   Infrastructure as a Service (IaaS), including Rackspace and Amazon Web Services
-   Platform as a Service (PaaS), including Heroku and Windows Azure
-   Back end as a Service (BaaS), the newest, coolest kid on the block, including Compose and Firebase
-   Software as a Service (SaaS), including Google Apps and Salesforce.com

Cloud application platforms provide the following advantages:

-   Scalability; for example, they can spawn new instances in a matter of minutes
-   Ease of deployment; for example, to push to Heroku you can just use `$ git push`
-   Pay-as-you-go plans where users add or remove memory and disk space based on demands
-   Add-ons for easier installation and configuration of databases, app servers, packages, and so on
-   Security and support

PaaS and BaaS are ideal for prototyping, building minimal viable products (MVP), and for early-stage startups in general.

Here is the list of the most popular PaaS solutions:

-   [Heroku](http://heroku.com) (http://heroku.com )
-   [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk) (https://aws.amazon.com/elasticbeanstalk)
-   [Windows Azure](http://windowsazure.com)(http://windowsazure.com )

HTTP Requests and Responses
---------------------------

Each HTTP Request and Response consists of the following components:

-   *Header:* Information about encoding, length of the body, origin, content type, and so on
-   *Body:* Content, usually parameters or data, that is passed to the server or sent back to a client

In addition, the HTTP Request contains these elements:

-   *Method:* There are several methods with the most common being GET, POST, PUT`,` and DELETE
-   *URL:* Host, port, path; for example, https://graph.facebook.com/498424660219540
-   *Query string:* Everything after a question mark in the URL (e.g., ?q=rpjs&page=20)

RESTful API
-----------

RESTful (REpresentational State Transfer) API became popular due to the demand in distributed systems whereby each transaction needs to include enough information about the state of the client. In a sense, this standard is stateless because no information about the clients' states is stored on the server, thus making it possible for each request to be served by a different system.

Here are some of the distinct characteristics of RESTful API:

-   It has better scalability support due to the fact that different components can be independently deployed to different servers.
-   It replaced Simple Object Access Protocol (SOAP) because of the simpler verb and noun structure.
-   It uses HTTP methods such as GET, POST, DELETE, PUT, OPTIONS, and so on.

Table 1-1 is an example of a simple Create, Read, Update and Delete (CRUD) RESTful API for Message Collection.

***Table 1-1.** An Example of a CRUD RESTful API*

| **Method** | **URL**         | **Meaning**                                                                       
|--------|---------------------|-------------------------------------------------------------------------------|
| GET    | /messages.json      | Return list of messages in JSON format                                        |
| PUT    | /messages.json      | Update/replace all messages and return status/error in JSON                   |
| POST   | /messages.json      | Create new message and return its ID in JSON format                           |
| GET    | /messages/{id}.json | Return message with ID {id} in JSON format                                    |
| PUT    | /messages/{id}.json | Update/replace message with ID {id}, if {id} message doesn't exist, create it |
| DELETE | /messages/{id}.json | Delete message with *id* {id}, return status/error in JSON format             |

REST is not a protocol; it is an architecture in the sense that it's more flexible than SOAP, which is a protocol. Therefore, REST API URLs could look like /messages/list.html or /messages/list.xml in case we want to support these formats.

PUT and DELETE are idempotent methods (http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol\#Idempotent_methods_and_web_applications),
which means that if the server receives two or more similar requests, the end result will be the same.

GET is nullipotent and POST is not idempotent and might affect state and cause side effects.

Further reading on REST API can be found at Wikipedia (http://en.wikipedia.org/wiki/Representational_state_transfer) and A Brief Introduction to REST article(http://www.infoq.com/articles/rest-introduction).

Summary
=======

This concludes the first chapter. In this chapter we've covered some of the core concepts of web development. They'll be a solid foundation for the rest of the book. I'm sure some of the concepts were familiar to you:

-   HTML
-   CSS
-   JavaScript types and objects
-   Agile
-   Node.js
-   NoSQL
-   HTTP Request
-   RESTful API

Nevertheless, it's good to brush up on them because they are numerous and vast. Theory is not that useful or interesting without understanding how it appl<span id="Editing" class="anchor"></span>ies and benefits the actual code. Therefore, we'll move swiftly to the technical setup to get you to the coding projects fast.
