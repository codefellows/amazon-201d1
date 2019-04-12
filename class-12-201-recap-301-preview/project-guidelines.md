![CF](https://i.imgur.com/7v5ASc8.png)
# Code Fellows Project Guidelines

Welcome to Final Projects! Here is a list of Code Fellows' best practices for proper Git and GitHub workflow with your project team.

<a id="top"></a>
- [Planning phase](#planning-phase)
  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
  - [Conflict Plan](#conflict-plan)
  - [Communication Plan](#communication)
  - [Project Scope](#project-scope)
- [Project Organization](#project-organization)
  - [Linter](#linter)
  - [.gitignore](#gitignore)
- [Licensing](#licensing)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Code Style](#code-style)
- [Daily Team Workflow](#daily-team-workflow)
- [Standup](#standup)
- [Daily Goals](#daily-goals)
- [Git](#git)
- [Pull Requests](#pull-requests)
- [Deployment](#deployment)
- [Presenation Prep](#presentation-prep)
- [Grading](#grading)

<a id="planning-phase"></a>
## Planning Phase
Before writing any code, take time to plan with your team. Make sure you are all in agreement about the goals of your application. Once you settle on an idea, prepare to pitch your idea to your instructor. 

_Why:_
> When you take the time to plan your project, you ensure that the entire team is on the same page. It can also help you identify any potential problems and how to solve them. It is easier to handle these problems now, instead of when you're in the middle of final projects.

### Your pitch should include the following:
1. [User Stories](#user-stories)
1. [Wireframes](#wireframes)
1. [Conflict Plan](#conflict-plan)
1. [Communication Plan](#communication)
1. [Project Scope](#project-scope)

#### <a id="user-stories">User Stories</a>
User stories describe the features of an application based on the target audience. Each user story should map directly to a feature and should focus on who makes up the target audience, what they will gain from the feature, and why this feature is being included in the application. User stories follow the format of "As a ____, I want ____ so that ____."

_Why:_
> The application should focus on the targeted audience so you know who you are building it for and why someone would use it. User stories also help identify gaps in the planning process.

As you plan your project, define your user stories and corresponding features. If you have more features than user stories, write more user stories. If you have more user stories than features, write more features.

#### <a id="wireframes">Wireframes</a>
Once you have a concept in mind, create visual representations of your application, called wireframes. A wireframe can be drawn on the whiteboard, on paper, or with online tools. Each page or view of your application should have its own wireframe and some pages may have multiple wireframes to illustrate changes based on user interation. For example, you may have a wireframe to show how a page appears when it loads, and a second wireframe showing that same page as it will appear when a user selects an option from a drop-down menu or clicks a button.

_Why:_
> Wireframes provide a visualization of your final application. This is useful to make sure the team is in agreement on the general appearance of the application and can help to identify potentially unpleasant user experiences.

#### <a id="conflict-plan">Conflict Plan</a>
Your team should agree on a process for handing disagreements, should they arise. It is better to have a plan in place ahead of time so you can all refer back to it if necessary.

_Why:_
> Final projects can be stressful and emotions can run high. Put together a plan ahead of time so you all know how to deal with any potential issues later.

As a team, create a Group Agreement as a markdown file to document the following:
* What will your group do when it encounters conflict?
* How will you raise concerns to members who are not adequately contributing?
* What is your process to resolve conflicts?
* How and when will you escalate the conflict if your attempts are unsuccessful?

#### <a id="communication">Communication Plan</a>
Before beginning to write code, determine how your group will communicate with each other, both in person and online. 

_Why:_
> This is not an individual effort. Make sure everyone knows how the group will communicate with each other and that everyone feels comfortable speaking up.

Add your communication plan to your Group Agreement. Some things to consider:
* How will you communicate after hours and on the weekend?
* What is your strategy for ensuring everyone's voices are heard?
* How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

#### <a id="project-scope">Project Scope</a>
Determine which features make up your minimum viable product (MVP). This should include any features you absolutely want to have in your application for presentation day.

_Why:_
> Scope creep can be dangerous! Keeping your project within a pre-determined scope will help the group stay on task without going off on tangents and side features.

Beyond MVP, put together a list of stretch goals to tackle if you have time. During your pitch, your instructor will help you scope your project. Some features may become MVP and some may become stretch goals.

Once you are ready, find your instructor and pitch your idea.

[Back to top](#top)

<a id="project-organization"></a>
## Project Organization
Use GitHub to organize and manage your project. 

_Why:_
> The group must have a central location where they can share code in a professional manner. This will ensure that everyone's contributions are tracked appropriately and can be combined with the team's code base.

Create an organization by clicking on the plus sign in the top right corner of GitHub. Then, create your repository(ies) within the organization. All team members should be added as collaborators on the organization.

Within the repository, click on the "Project" tab and then click the button to "Create a project". This will allow you to create a project board associated with the repository. Make several columns with meaningful names, such as "To-Do", "In progress", "Under review", and "Completed".

Populate your project with issues. Each issue should be a small item, typically linked to a feature task. As you work on an issue, assign it to yourself and move it into the "In progress" column. This will provide an easy way for everyone on the team to see the progress of each issue and know who is working on a particular issue.

_Why:_
> Issues are userful for managing small features that an individual or pair can reasonably tackle in a short period of time. The project board creates a clear visual of the team's current tasks and the current project status.

When using GitHub issues, there is the added benefit of being able to close an issue through a commit message or a comment on a pull request (PR). For example, a commit message or comment can say "Closes #42" and the issue will automatically be closed when the pull request is merged. Github recognizes the following keywords to close an issue: `close`, `closes`, `closed`, `fixes`, and `fixed`. 

_Why:_
> Each PR will be associated with related issues, making it easier to look at a specific PR and identify the specific issues it addresses. 

You are welcome to use other project management tools besides GitHub Projects, but your code base must be on GitHub.

### <a id="linter">Linter</a>
Your repository should include an `.eslintrc.json` file, which you can find in the main lecture repository for your class.

_Why:_
> A standard linter file will ensure that anyone cloning your repository will not have errors in their code editor.

### <a id="gitignore">.gitignore</a>
Your repository should include a `.gitignore` file, which you can find in the main lecture repository for your class.

_Why:_
> Any items in a `.gitignore` file will not be pushed to GitHub. This is useful for files such as `.DS_Store` and `node_modules`.

[Back to top](#top)

<a id="licensing"></a>
## Licensing

Your repository should be initialized with an MIT license. Ensure that the resources you use are open-source and also available under an MIT or similar license.

_Why:_
> Using resources that are not licensed for full use can lead to legal issues.


[Back to top](#top)

<a id="documentation"></a>
## Documentation
Your project should be documented on GitHub and within your code base.

On GitHub, create a `README.md` file as the main landing document of your repository. Continue to update it as your project evolves. 

_Why:_
> Projects should contain proper documentation so that anyone can visit your repository and understand the purpose of your application.

At a minimum, your `README.md` should include the following:
- The name of the project
- Names of the team members
- A description of the project
- The overall problem domain and how the project solves those problems
- Semantic versioning, beginning with version 1.0.0 and incremented as changes are made
- A list of any libraries, frameworks, or packages that your application requires in order to properly function. If needed, provide instructions that the user may need to follow in order to get your application up and running on their own computer.

Within your code, document with meaningful comments. For example, a comment might provide an overview of what the function beneath it is doing, or describe the relationship between two variables.

_Why:_
> Commented code makes it easier for teammates to understand code that they did not write. It also makes the code base easier for a new person to read through and understand the purpose of each section of code.

Comments should be updated as necessary. Remove all unused, commented-out code before committing to GitHub.

[Back to top](#top)

<a id="file-structure"></a>
## File Structure
Before you scaffold your files within your repo, determine how you will organize your project. Your files should be organized into folders in a meaningful manner. For example, all of your CSS files should be within a `css` folder.

Here is an example file structure:

```
.
├── about-us.html
├── index.html
├── quiz.html
├── css
|   ├── about-us.css
|   ├── home.css
|   └── quiz.css
└── js
    ├── home.js
    └── quiz.js
```
_Why:_
> Your code should be modular and the files organized into smaller folders. This will make it easier for the team to consolidate logic to a single page or feature.


<a id="code-style"></a>
## Code Style

Follow the code style you have learned throughout this course. Ensure that the team is using meaningful and descriptive names for all files, variables, function names, etc. Follow best practices with casing, spacing, and indentation.

_Why:_
> The code base should be easy for anyone to read and understand what each line is doing. Organize your code in a way that makes it natural to read in order.

Your team should decide on standard naming conventions to use throughout the project and hold each other accountable to these standards. Do not use funny or offensive names. Write code that you will be proud to show a future employer.

The code base should also follow similar code organization from file to file. For example, all the files that affect application styling should follow similar patterns and syntax.

[Back to top](#top)

<a id="daily-team-workflow"></a>
## Daily Team Workflow
As a team, decide how you will work on your project throughout each day.

_Why:_
> Ensure that everyone is on the same page about the current status of the project and the plan for the day.

In the morning, it is helpful to have a meeting between the team members to make sure that everyone knows what is going on with the project and to discuss the plan for the day. It is wise to have additional check-ins at lunch time and at the end of the day. With every check-in, assess the current percentage of MVP and make a prediction for when your team will reach full MVP.

In your morning check-ins, discuss the features each member plans to work on. Determine if the team member will work individually, as a pair, or if the entire team will work on a single feature together, referred to as "mob programming".

Also, use this time to discuss any interpersonal issues that may arise. It is better to address them head-on and resolve any tension rather than allowing it to fester.

[Back to top](#top)

<a id="standup"></a>
## Standup
Every day, the instructional team with circulate to your group for a formal standup. Standup should take approximately 10 minutes per team. Some instructors will opt for a second standup later in the day.

_Why:_
> Standups give the instructional team insight into the current status of your project and the progress the team hopes to make each day.

During standup, each team member will stand up and take turns discussing three points:
> 1. What you personally accomplished yesterday
> 1. What you plan to accomplish today
> 1. Anything that is blocking you from making progress


[Back to top](#top)

<a id="daily-goals"></a>
## Daily Goals

Day 1: Pitch the idea to your instructor. Once the idea is approved, create your repository, fill your project board with issues, and begin scaffolding your files. Deploy your site, then begin to build features.

Day 2: This should be a big build-out day of features.

Day 3: Continue to build out features. Strive for full MVP by the end of the day.

Day 4: Work on any additional styling and refactoring. Work on some stretch goals. Practice your presentation.

Day 5: Presentation Day!

[Back to top](#top)

<a id="git"></a>
## Git
The entire team should follow the same process for synchronizing the code base on GitHub and on their local computers.

The master branch should not contain any broken code. From the master branch, create a development branch. This will be the branch where several team members can combine their code and it can be tested prior to merging into the master branch. If everything is functioning correctly on the development branch, the changes can be merged into master.

_Why:_
> The master branch is the source of your deployment, which should only contain fully functional code.

All work should be on a feature branch with a meaningful name. Feature branches should be created off of the development branch. When the feature is completed, create a pull request from your feature branch to the development branch.

_Why:_
> Team members can work on features in an isolated branch, then test it by creating a pull request to the development branch. This preserves the purity of the master branch.

When you start a new feature and any time a pull request is merged into the development branch, make sure that your local development branch is up to date. Check out the development branch, then pull the development branch. Create your new branch off of the updated development branch.

_Why:_
> Always make sure you are working off of the most up-to-date code base. This will prevent writing redundant code or overwriting code that you or another team member wrote.

Whenever a pull request is merged from development to master, check out your local master branch and then pull the master branch.

_Why:_
> Always keep your local master up to date to ensure you have the most up to date changes locally.

If a pull request from a teammate has been merged and you working on a branch but are not ready to push your changes, you can still pull those changes while continuing to work on your feature branch. To do so, add and commit any changes on your local feature brach. Check out your master or development branch and pull the changes. Then, check out your feature branch and run the command `git merge master` if the master branch was pulled and `git merge development` if the development branch was pulled.

Handle merge conflicts, if there are any. Check all of your project files for the markers that indicate merge conflicts, the `>>>>>>>>>` and `HEAD` lines of code. Edit the code to remove the redundancies causing the merge conflict, and eliminate the markers. Add and commit the files where the merges were resolved.

Add and commit your code regularly. Use meaningful commit messages. As a team, decide on a convention to follow for commit messages. Do not include sarcastic comments, vague messages, or profanity.

_Why:_
> This will allow the entire team to review a list of commits on GitHub and know exactly what changes are included in that specific commit.

[Back to top](#top)

<a id="pull-requests"></a>
## Pull Requests
When your features are completed and tested on your local branch, you are ready to add, commit, and push those changes to GitHub. Then, create a pull request from your feature branch to the development branch. Do not merge your own pull request.

_Why:_
> It is vital to have a second set of eyes on everyone's code to ensure that it is following the agreed-upon style and naming conventions. This step also allows other teammates to review the changes and ensure that the logic makes sense for the rest of the project.

If the pull request is not ready to be merged, leave detailed comments and request changes from the creator of the pull request.

When the pull request is merged to development, every team member should check out their own local development branch and pull the changes. Then, test the code in the browser to ensure that the desired features have been implemented correctly.

_Why:_
> Do not assume that the code will work correctly when merged into the development branch. Confirm it in several different browsers and on multiple screen sizes.

Periodically, as determined by your team, make a pull request from the development branch to the master branch and follow the same process to test the changes to the master branch on everyone's local computers. Merging pull requests to the master branch should also update the deployed site, so confirm functionality there as well.

_Why:_
> Don't assume that the features have been integrated, confirm it.

After a pull request is merged, delete the branch on GitHub.

_Why:_
> Excessive branches lingering on GitHub can clutter your repository. If the branch is needed again, check it out locally, work on the branch, and it will reopen the branch on GitHub after you add, commit, and push the changes.

[Back to top](#top)

<a id="deployment"></a>
## Deployment

Deploy your project on GitHub Pages and be prepared to present from the deployed version of your site.

_Why:_
> Deployed sites provide a unique URL that can be shared with anyone. You will also want to include this URL in your portfolio.

To deploy to GitHub pages, go to the "Settings" tab in the repository. Scroll down to the "GitHub Pages" section. In the "Source" dropdown, select your master branch and click "Save". You will then see a deployed URL and can click it to see your deployed site.

Note that it may take a few minutes for the deployed link to update and display your updated code as it appears on the master branch. If you do not see the deployed site updating after approximately 30 minutes, check the code base to ensure that there are no errors in your functionality when running your code locally.

Deploy your site on the first day of final projects.

_Why:_
> Ensure that you have a deployed site at the beginning of the project so you have a live site where you can view your changes, in addition to testing your code locally. Deploying on the first day also ensures that you will have a live site in the case that GitHub goes down on presentation day. (It happens!)

After the initial repository creation, scaffold out a basic `index.html` file with a heading element or something similar. Then push this code to GitHub and deploy it as a "proof of life" that the deployment worked correctly. As you continue to work on your project, the deployed site will update any time the team merges a pull request into the master branch. You also have the option to set this to a different branch, although it is most common to deploy from the master branch.

You are welcome to purchase a domain name, although this is not a requirement.

[Back to top](#top)


<a id="presentation-prep"></a>
## Presentation Prep
Your team should practice their presentation prior to the final presenatation day. This is typically scheduled by the instructional team. During the practice presentation, the instructional team will provide constructive feedback about the flow of the presenation and appearance of the application.

_Why:_
> If there are any issues in functionality or appearance, it is better to catch them ahead of time. This is also an opportunity to view the application as projected on the screens. Evaluate the larger screen size, color changes due to the projector, and overall impact on the user's experience. The practice round will also allow the team to work on the flow of the presenatation as speaking roles are passed from one member to another.

Decide whose computer to use during the presentation and bring that computer to the practice session. Make sure you have any cables or adaptors needed. Test this same computer in the main event space. Test a backup computer as well, just in case.

The presentation should be approximately 15 minutes long, including some time at the end for questions. Present from the deployed site. Each member should introduce themselves with their personal pitch. The "About Us" page provides a great backdrop for this portion of the presentation.

Each member of the team should have a speaking part. It is okay to use notecards if you are nervous about forgetting what to talk about. Some of the areas to discuss include:
- An introduction of the project and the problem domain, including the team's solution
- A demonstration of the application's functionality
- The team's approach to planning and communication throughout the final project phase
- A technical obstacle or two and how those obstacles were overcome
- A portion of the final application that each team member is particularly proud of

In general, do not show code during the presentation unless the audience asks to see it. Have a code editor open just in case though.

The appropriate dress code is business casual - not too formal and not to casual.

In addition to the scheduled practice session, the team is encouraged to continue to practice on their own. Keep track of the time and adjust accordingly. Practice with the microphone (or holding something) to feel comfortable with holding it and practice passing the microphone between team members as you switch speaking roles.

Speak clearly and do not use slang or profanity. Take it seriously and be professional.

[Back to top](#top)

<a id="grading"></a>
## Grading

Each team member's grade is based on their individual effort and the project's technical merit.

Individual effort is graded based on links to commits and Pull Requests that demonstrate your contributions, as submitted in Canvas in the final project reports.

Technical merit is graded based on the following criteria:

- Good and proper use of HTML
  - Clear, readable, and efficient structure
  - Uses semantic markup whenever possible

- Good and proper use of CSS
  - Clear, readable, and efficient styles
  - Appropriate page layout for desktop
  - Well-organized file structure

- Good and proper use of JavaScript
  - Clear, readable, and efficient code
  - Uses domain models to encapsulate data and behavior, such as objects and constructors
  - Responds to user events to receive/process user input and display new content to the user
  - Contains no unnecessary or commented-out code

- Generally useful and functional
  - Works as expected with no bugs
  - Has at least three distinct pages with clear navigation, one of which must be an "About Us" page
  - Has at least two pages that accept and process user input
  - State is persisted between page reloads
  - Deployed live on the Internet via GitHub Pages

[Back to top](#top)

This document was inspired by and adapted from [this set of project guidelines](https://github.com/elsewhencode/project-guidelines).
