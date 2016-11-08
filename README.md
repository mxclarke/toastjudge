# Angular 2 Toast Judge

This is a small demo project for a web app to demonstrate the use of:

- [Angular 2](https://angular.io/) with Typescript
- [PrimeNG components](http://www.primefaces.org/primeng/#/ ) (see
  also https://www.npmjs.com/package/primeng.)
- Javascript, HTML 5 and CSS

The project's foundation is the
[angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html)
Typescript code.

## Motivation

The Toast Judge application is intended to assist judges on panels at
[Toastmaster](https://www.toastmasters.org/)'s contests, where a single judge
is the user.

I have been a judge at Toastmaster's competitions on several occasions, and
have found the paper ballots and manual system of marking frustrating.
Furthermore, there is only a one-minute pause between contestants, and in that
time judges have to decide how to grade the previous contestant on anything up
to eight criteria, and add up the marks to form a total.

I always find myself wishing for more time, because I'd like to really think
about the contestant's performance to give them the fairest possible grade.
To help me do this, and to move beyond paper-based calculations, I decided
to write this application.

If it proves to be useful, I will think about turning it into a mobile
application in the future.

## Description

There are several different types of contest: Evaluation, Table Topics
(impromptu speech), Humorous speech and International speech. During a
competition session, it is typical for two or even three of these contests to
be run, with two or more contestants competing in each. Sometimes a contestant
will be competing in multiple competitions.

A judge could be on the panel for one or more of the contests for the
competition. Typically, the judge will work on all the contests for that
session.

For each type of contest, there are a number of _judging items_, i.e. the
previously mentioned criteria. Some contests further divide their judging items
into categories. For example, the Table
Topics contest has three categories: "Content", "Delivery" and "Language", and
each of these has two or more judging items, such as "Speech Development",
"Effectiveness", "Voice" and so on.

Each judging item has a number of marks allocated to it. For example, the
"Speech Development" item has 30 out of a total of 100 marks.

The marks for each judging item are divided into ranges of "Excellent",
"Very good", "Good" and "Fair".

This application allows the judge to:

- Review (and in a future version, to edit) the judging items for each contest
type on the _Setup_ panel.
- Select which contests he or she will be judging for today's session on the
 _Setup_ panel.
- Enter each contestant on the _Contestants_ panel.
- Match contestants with contests on the _Contestants_ panel.
- Judge a contest on the _Judging_ panel. This panel will allow the user
to select the current contest, select the current contestant, move sliders
to mark each judging item, and see the total result.
- Write down those contestants who achieved first, second and third places
on the ballot paper.

Obviously, it would be nice if much of the preliminary configuration could
be done in advance and persisted, so that each judge received the same
view on application startup.

Another issue is that at the start of the competition contestants draw lots
to determine the order of speaking. In a future version, I might also
allow judges to reorder the contestants to reflect that speaking order, to
avoid confusion. PrimeNG's drag and drop components could help here.

## Setting up and Running

You will need to have [node and npm](https://docs.npmjs.com/) installed on
your machine. See the instructions [here](https://docs.npmjs.com/getting-started/installing-node).

Ensure that you have at least node v4.x.x and npm 3.x.x by running _node -v_
 and _npm -v_ at the command prompt.

If you also have git installed, you can clone this project as follows:
```
cd <your-source-directory>
git clone  https://github.com/mxclarke/toastjudge.git  toast-judge
cd toast-judge
```
or check out with SVN. Alternatively, you can download and unpack the zip
file.

It should only then be necessary to change to the project directory and
run:
```
npm install
```
at the command prompt.

Once the packages have downloaded and compilation is complete, the app
will automatically launch in your default browser.

## Technologies

TODO, discuss use of Angular 2 vs AngularJS, Typescript, Angular vs ReactJS,
likely impact leading onto mobile technologies (e.g. NativeScript,
  React Native) etc.

Explain why used PrimeNG from Prime Faces as opposed to [Google's Material
Design](https://github.com/angular/material2) -- i.e. while both are only
available as yet in alpha, most of the components I wanted have not yet been
implemented in the Google project, whereas PrimeNG seems much more advanced.

Note: I followed the instructions here
https://github.com/mgechev/angular-seed/wiki/Add-PrimeNG
for adding PrimeNG to this project

## Testing

TODO
## Remaining work

Likely to be using PrimeNG components, http://www.primefaces.org/primeng/#/ and
https://www.npmjs.com/package/primeng. Quickstart package.json here: https://github.com/primefaces/primeng-quickstart/blob/master/package.json.
Followed the instructions here https://github.com/mgechev/angular-seed/wiki/Add-PrimeNG
for adding PrimeNG.

Had a look at Google's Material Design project for Angular 2, but it is
still in alpha and most of the components I want have not yet been implemented:
https://github.com/angular/material2.
