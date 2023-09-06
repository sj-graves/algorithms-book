---
tags: exercise, intro, python
Created on: 2023-09-05 at 19:45
---
It is *very important* that you actually type the given code in by hand *exactly as it is written*. There are two reasons for this:
1. Attention to detail is a very important difference between people who are good at their job and people who are merely mediocre.
2. Sometimes the point of an exercise will be to fix something which has intentionally been written as broken.

## Problem 1: Absolute Fundamentals
These aren't really related to learning to code, they're just getting your "software stack" ready.

### Task 1.1: Text Editor
Any text editor will do. There are a number of good cross-platform editors. Unfortunately, most of them are IDEs: *integrated development environments*. The [most popular among programmers](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-integrated-development-environment) is [Visual Studio Code](https://github.com/microsoft/vscode); for those of us who don't like operating with Microsoft breathing down our necks, there is an alternative version of VS Code which avoids all the yucky Microsoft branding and telemetry: [VSCodium](https://vscodium.com/). The upside is that these are beautiful text editors. The downside is that it's all too easy to add plugins which oversimplify the process of writing code. We will avoid the use of any plugins which complete code, debug our problems for us, or generally make things too easy.

| Operating System     | Options                   |
| -------------------- | ------------------------- |
| Windows              | VS Code, Notepad++        |
| MacOS                | VS Code, TextEdit         |
| Linux                | VS Code, gedit            |

On the off chance that you're using Linux via the command line, you probably don't need any help with this. I suggest using `screen` and your favorite choice of `vim`, `emacs`, or `nano`.

Henceforth this program will be called your *editor*.

### Task 1.2: Find the *Terminal* on your computer
- Windows: the Terminal in Windows is called *PowerShell*
- MacOS: It's called *Terminal*, and it's in *Applications/Utilities* or something similar.
- Linux: If you are using Linux and can't find the terminal, you probably ought not be using Linux. There are many different terminals

Whichever one of these options you're using, I will refer to all of them as your *terminal* and the interface that it provides you access to I will call the *command line*. .

Test to see if `python3` works in your terminal. If it does, you can skip [[Class Project 01#Get Python]]

### Task 1.3: Get Python
To get Python for the system you are using, head to [https://python.org](https://python.org) and download *Python 3*, in the latest version number; as of this writing, it is Python 3.11. For most purposes, the version number after 3 won't matter.

### Task 1.4: Working Environment
You're going to want to know how to navigate in the terminal. You should look up on the internet (using DuckDuckGo, Brave Search, or some other privacy-focused search engine) the commands used in your particular operating system for navigating the command line. At the minimum, you'll need to know how to create a new directory (also called a folder) and how to change directories.

Wherever you keep your files (usually a directory called `Documents` or something) create a new directory called `AAM-Python`. Inside that you're going to create another directory for every daily activity.

## Problem 2: Your First Program
Create a directory in your `AAM-Python` directory called `Project-01`. Open your editor and type the following code:
```python
print("Hello world!")
print("Hello yourself")
print('Type this exactly the way that I have typed it')
print("Don't change anything, even if you feel 'smart.'")
print("""Sometimes things don't do what you would expect, and\n
\tthat's okay""")
```

Save that as a file named `prj01.py` in your `AAM-Python/Project-01` directory. Open your terminal and change directories to your `AAM-Python/Project-01` directory. At the command line, type
```bash
python3 prj01.py
```

### What You Should See: Expected Output
After running this code through the Python interpreter (that's what happens when you call `python3` with a filename argument), you should see the following output:

```
Hello world!
Hello yourself
Type this exactly the way that I have typed it
Don't change anything, even if you feel 'smart.'
Sometimes things don't do what you would expect, and

	that's okay
```