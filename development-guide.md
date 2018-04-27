# Development Guide
If you want to contribute to the project, here is guide on how to get started.  
First you will need to clone the repo to your machine, you can do that with the following command:  
```
git clone https://github.com/betfair/login
```
Once you have a copy of the repo on your machine you will need to create a branch that you can develop on. Here is an example:  
```
git checkout -b dev-guide
```
Now you can work on the feature, once you have completed you work you will need to 'push' the changes back to the repo (still on your branch, you will never commit to master).  
```
git add -A
git commit -a -m"Add development guide"
git push --set-upstream origin dev-guide
```
Now visit the repo on GitHub and raise a pull request. This will alert the developers at Betfair, they will check your changes and if everything looks good, you changes will be committed to the master branch.

