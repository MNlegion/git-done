var getUserRepos = function() {
    fetch("https://api.github.com/users/mnlegion/repos")
};

getUserRepos();