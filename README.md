<h1 align="center">
    <a href="https://ev-commentService.ga">
    Emotion Visualization Comment Service
  </a>
</h1>

Emotion Visualization Comment Service is project for practice making a web service.

## ⛷️ Relative Projects

- [**Renewal Front**][front] : It was refactoring version of 'ev-commentService'. It is based on React. 

- [**Renewal Backend**][backend] : It was refactoring version of 'ev-commentService'. It is based on NodeJS. 

- [**ev-commentService**][php] : PHP Service for providing component service.  

- [**ev-backend**][django] : It is based on Django and includes an emotional analysis module based on konlpy and tensorflow.

- [**ev-sentimentalAnalysis**][mod] : This is a comment analysis module within the server.

[front]: https://github.com/jopemachine/ev-commentService-Front
[backend]: https://github.com/jopemachine/ev-commentService-Backend
[php]: https://github.com/cnu-ev/ev-commentService
[django]: https://github.com/cnu-ev/ev-backend
[mod]: https://github.com/cnu-ev/ev-sentiment_analysis

## 📋 Asset source


All svg files used in project are downloaded at [featherIcon][featherIcon]

[featherIcon]: https://feathericons.com


##  ✔️ Development Environment Details

* Overall dependency

> react
> 
> reactstrap
>
> ramda

## 🏄 How to use

'Jekyll-Script.html' is Client's component file that allows users to easily add 'ev-comment-service' to their own Jekyll based blogs.

The procedure for registering on a Jekyll based blog is as follows.

```
1 - Signup and signin https://evcommentservice.ga, Register your blog's URL to service. 

The form of the URL must be the same as right. (https:{domain}.ga)

2 - In your Jekyll blog, Add the following settings to the '_config.yml'. 

User ID is the same one that joined above.

ev_username: {User ID}

3 - Download and include Jekyll-Script.html to your post layout or the page you want.
(Add {% include EV-Script.html %} or paste the script directly)

4 - Create div tag that iframe tag will be it's child, and set it's id 'EV-Start'
```

Bloggers can decide whether or not to apply an emotional analysis service to his blog comment service and how it will be styled.  

The usage is as follows.

(below ev_mode is 'full' for default)

```
Set one of the follwing values in the 'ev_mode' in your _config.yml

ev_username: { full, binary, none, debug }

full : Depending on the negative-positive degree of the comments, 
comment's color style is divided into 10 stages

binary : Depending on the negative-positive degree of the comments, 
comment's color style is divided into 3 stages (Positive, Negative, Neutral)

none : Emotional analysis styles were not indicated. 

debug : Do not use emotional analysis service
```

## ❗ Screen shots
