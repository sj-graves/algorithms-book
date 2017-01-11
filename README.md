# algorithms-book
A textbook for students of Math 3380: Algorithms in Applied Mathematics, a one-semester course in programming for mathematics.

This textbook is licensed under a Creative Commons license; see LICENSE.txt for full details, or [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) for abbreviated details.

This text was originally written in LaTeX, and the original LaTeX source is still included in the repository. However, the project of the 2016-2017 academic year has been a slow but steady conversion to Mathbook XML. Thanks to David Farmer for initially processing my source code into XML. I am now undergoing the process of editing all the sections to make sure several things work correctly:
1. All the examples refering to Python are being rewritten to refer to Sage. This is nontrivial.
1. All references to the IDLE environment are being replaced by references to the Sage Math Cloud.
2. I'm adding and modifying material on the fly as I teach the associated course.

The pedagogical reasons for switching to Mathbook XML are many, but it is a time-consuming process, and with a houseful of children, other projects, research projects, and a full teaching load, I'm wearing many hats simultaneously.

### Instructions to install and "compile"
From the command line, with `git` and `xsltproc` installed.

1. `git clone https://github.com/sj-graves/algorithms-book.git`
2. `git checkout master`
3. Download and install the Mathbook XML scripts into a sibling folder to this folder `algorithms-book`. You can find instructions for this at http://mathbook.pugetsound.edu/
4. In the `algorithms-book/xml` directory, execute the `engage` script. This will call `xsltproc` and build the XML into HTML in a directory `algorithms-book/html`. Good luck, and remember: this textbook is a pre-release alpha version still undergoing active development. 

If you have comments or questions regarding the text, please feel free to contact the author, Dr. Stephen Graves of the University of Texas at Tyler.