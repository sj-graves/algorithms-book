# algorithms-book
A textbook for students of Math 3380: Algorithms in Applied Mathematics, a one-semester course in programming for mathematics.

This textbook is licensed under a Creative Commons license; see LICENSE.txt for full details, or [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) for abbreviated details.

This textbook is written for compilation from XML using PreTeXt.

### Instructions to install and "compile"
From the command line, with `git` and `xsltproc` installed.

1. `git clone https://github.com/sj-graves/algorithms-book.git`
2. `git checkout master`
3. Download and install the PreTeXt scripts into a sibling folder to this folder `algorithms-book`. You can find instructions for this at http://pretextbook.org/
4. In the `algorithms-book/xml` directory, execute 
    - the `html_build` script. This will call `xsltproc` and build the XML into HTML in a directory `algorithms-book/html`. 
    - the `latex_build` script, which also uses `xsltproc` to build the XML, this time into a massive LaTeX file called `AAM.tex`. You may attempt to compile this; whether or not it works depends upon how robust is your LaTeX environment.
    
Good luck, and remember: the textbook undergoes frequent revision. The **master** branch should be correct, complete, and up to date. Any other branch is at best provisional until it is merged with the master.

If you have comments or questions regarding the text, please feel free to contact the author, Dr. Stephen Graves of the University of Texas at Tyler. If you find errors in the text, submit a pull request, and eventually the author will figure out how to handle it.