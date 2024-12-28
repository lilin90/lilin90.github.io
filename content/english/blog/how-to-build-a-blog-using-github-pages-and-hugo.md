---
title: "How to Easily Build a Blog Using GitHub Pages and Hugo"
date: 2019-02-17
thumbnailImage: https://res.cloudinary.com/lilian-photos/image/upload/v1544329892/github-pages-hugo-blog/github-hugo-800.png
# thumbnailImagePosition: "left"
coverImage: https://res.cloudinary.com/lilian-photos/image/upload/v1543744099/github-pages-hugo-blog/pexels-photo-907274.jpg
# metaAlignment: center
# coverMeta: out
categories:
- GitHub
tags:
- GitHub
# showTags: true
# showPagination: true
# showSocial: true
summary: "Learn how to quickly and easily build a personal blog or website using GitHub Pages and Hugo, even though you don't know much about tech."
---

I'm a [Technical Writer](https://en.wikipedia.org/wiki/Technical_writer) who has been using [GitHub](https://github.com/lilin90) on each workday and on some weekends since August 2017. I write things now and then on several Chinese platforms such as [WeChat Subscription Account](https://wechatwiki.com/wechat-resources/wechat-official-account-type-subcription-service/) (scan [the QR code](https://res.cloudinary.com/lilian-photos/image/upload/v1585391408/cover/wechat-qrcode-scan-to-follow.jpg) to follow) and [Zhihu](https://en.wikipedia.org/wiki/Zhihu) Column ([click](https://zhuanlan.zhihu.com/tc-fun) to follow).

At the end of 2018, after I got familiar with [GitHub Pages](https://pages.github.com/), "a static site hosting service designed to host your personal, organization, or project pages directly from a GitHub repository", and [Hugo](https://gohugo.io/), "one of the most popular open-source static site generators", I built a personal blog by myself.

When my husband, a [Cloud Engineer](https://github.com/tennix), saw me creating my blog, he told me, "Chances are people seldom write new articles after the first one about how they built that blog is published." Hmm... I won't promise regular blog articles, but who knows? I'll write often, maybe. At least, I've finished this one.

**In this post, I'd like to share the specific steps that I performed to build my personal blog using GitHub Pages and Hugo.** This post assumes that you are a non-technical person. It's easy and you don't have to know much about coding. Already dreaming of your new blog? Let's start!

![1-GitHub plus Hugo logos](https://res.cloudinary.com/lilian-photos/image/upload/v1544329892/github-pages-hugo-blog/github-hugo-800.png)

<!-- toc -->

# Step 1: Create a GitHub repository

1. Create a GitHub account.

    - If you already have one, sign in and skip to the next step.
    - If you don't have one, go to [GitHub](https://github.com/), sign up an account and sign in.

2. Go to [GitHub Pages](https://pages.github.com/), refer to the easy-to-use guide for `User or organization site`.

3. [Create a new repository](https://github.com/new) named _username_.github.io, where _username_ is your username on GitHub.

    ![Create a new repository](https://res.cloudinary.com/lilian-photos/image/upload/v1547041464/github-pages-hugo-blog/01-creat-new-repo.png)

# Step 2: Install Hugo

1. Refer to the official [Hugo installation guide](https://gohugo.io/getting-started/installing/) and get prepared.

    Get a basic knowledge and install the necessary tool (such as [Homebrew](https://brew.sh/) for macOS) for your operating system if you lack.

    If you still feel confused, read the latter part of this installation guide for detailed explanations about installing on macOS and Windows. In this post, I use macOS.

2. Open a [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)) and run the corresponding command for your operating system.

    It's easy and you might only need to run a single line of command. Since I have already been using the package manager Homebrew on my macOS, I only need to run the following command, and then Hugo is successfully installed.

    ```bash
    brew install hugo
    ```

3. After installation, run the following command to verify that hugo runs correctly.

    ```bash
    hugo version
    ```

# Step 3: Create a new Hugo site

1. Go to the directory where you want to place the Hugo site folder.

    Here I just put it in my macOS home directory.

    You can also put it in another directory using the [`cd`](https://en.wikipedia.org/wiki/Cd_(command)) command. For example, on macOS, if you want to put this folder in the `Documents` directory, you can run the `cd ~/Documents` command.

2. Run the following command to create a new Hugo site.

    ```bash
    hugo new site lilian-blog  # "lilian-blog" is my site folder name.
    ```

# Step 4: Choose a Hugo theme and clone it to a local directory

1. Go to the [Hugo Themes](https://themes.gohugo.io/) page and choose one theme for your site.

    Take the [Tranquilpeak theme](https://themes.gohugo.io/hugo-tranquilpeak-theme/) as an example in the following text.

2. Clone it to a local directory by running the following command.

    ```bash
    cd ~/lilian-blog  # Changes to your site directory. Replace "lilian-blog" with your site folder name.
    mkdir -p themes  # Creates the "themes" directory.
    cd themes  # Changes to the "themes" directory.
    git clone https://github.com/kakawait/hugo-tranquilpeak-theme.git tranquilpeak  # Clones the Tranquilpeak theme to the "tranquilpeak" directory.
    ```

# Step 5: Edit the configuration file

1. In the root directory of your site folder, open the `config.toml` file using [VS Code](https://code.visualstudio.com/).

    [Visual Studio Code](https://en.wikipedia.org/wiki/Visual_Studio_Code) (VS Code) is an open-source source code editor developed by Microsoft for Windows, Linux and macOS. I use it almost every day. If you haven't got it installed, download it [here](https://code.visualstudio.com/Download) and install it.

2. Refer to the [configuration explanation](https://github.com/kakawait/hugo-tranquilpeak-theme/blob/master/docs/user.md#tranquilpeak-configuration) of your theme and edit the `config.toml` file according to your need.

    The `theme` configuration item is the name of your site theme, which must be the same as the name of the directory that your theme is cloned to. In this example, it is `theme = "tranquilpeak"`.

# Step 6: Create a new post

1. Go to the root directory of your site folder.

    ```bash
    cd ~/lilian-blog  # "lilian-blog" is the site folder name.
    ```

2. [Create a new post](https://gohugo.io/getting-started/quick-start/#step-4-add-some-content) using the following command.

    ```bash
    hugo new post/my-first-post.md  # "my-first-post.md" is the file name of the new post. I also created such a file for testing.
    ```

3. Edit the newly created post and add some content.

# Step 7: Preview your new site

1. Start the Hugo server using the following command.

    ```bash
    hugo server -D
    ```

2. Preview your new site at http://localhost:1313/ using a browser.

    If you're satisfied with the preview, move to the next step. If not, edit your post or the `config.toml` file and preview again.

# Step 8: Build your Hugo site

In the root directory of your site folder, run the [`Hugo` command](https://gohugo.io/commands/hugo/#hugo) to build your site:

```bash
hugo  # Builds your Hugo site and writes your static site to the "public" directory by default.
```

> The [default Hugo target directory](https://gohugo.io/content-management/urls/#permalinks) for your built website is `public/`. However, you can change this value by specifying a different `publishDir` in your [site configuration](https://gohugo.io/getting-started/configuration/).

# Step 9: Convert your site folder to a Git repository

1. Go to the `lilian-blog/public` directory and initialize the Git repository.

    ```bash
    cd ~/lilian-blog/public  # "public" is the directory where the generated html files are located. It is the folder that will be converted to a Git repository.
    git init  # Initializes the Git repository.
    ```

2. Check the files in the `public` directory using the following command. You'll find the `.git` file is added.

    ```bash
    ls -a  # Displays the list with hidden files or directories.
    ```

# Step 10: Link the local repository to the remote origin

1. In the `lilian-blog/public` directory, add the remote origin for your local Git repository using the following command.

    ```bash
    git remote add origin git@github.com:lilin90/lilin90.github.io.git  # "lilin90/lilin90.github.io.git" indicates "your-github-id/your-github-id.github.io.git".
    ```

2. Check the files in the `config` file using the following command.

    ```bash
    cat .git/config  # Displays the config information.
    ```

    The above command returns the following result:

    ```bash
    [core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
    [remote "origin"]
        url = git@github.com:lilin90/lilin90.github.io.git
        fetch = +refs/heads/*:refs/remotes/origin/*
    ```

    If the `[remote "origin"]` information is displayed, your local Git repository has been successfully linked to the remote origin.

# Step 11: Commit your changes to the local Git repository

In the `lilian-blog/public` directory, run the following command with a commit message that describes what you have changed:

```bash
git status  # Shows what you have changed.
git add .  # Adds all modified or newly created files. You can also just add a certain file.
git commit -m "Add a new post"  # "Add a new post" is the commit message.
```

# Step 12: Push your changes to the remote origin

In the `lilian-blog/public` directory, run the following command to push your changes:

```bash
git push -u origin master
```

Congratulations! Now you've got your customized personal blog! For me, it is at https://lilin90.github.io.

If you want to enforce [HTTPS](https://en.wikipedia.org/wiki/HTTPS) to prevent others from snooping on or tampering with traffic to your site, go to your repository, click **Settings** and check **Enforce HTTPS**.

By the way, I bought a domain name https://lilianlee.me and linked it to the original default blog URL. So when you visit https://lilin90.github.io, the page will directly jumps to https://lilianlee.me.

# What's next: add a new post later

To add a new post later, you can just take the following steps:

1. [Create a new post file and edit the content](#step-6-create-a-new-post).
2. [Preview your new site in local](#step-7-preview-your-new-site).
3. [Build your Hugo site](#step-8-build-your-hugo-site).
4. [Commit your changes to the local Git repository](#step-11-commit-your-changes-to-the-local-git-repository).
5. [Push your changes to the remote origin](#step-12-push-your-changes-to-the-remote-origin).