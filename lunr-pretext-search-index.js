var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "AAM-fm-col",
  "level": "1",
  "url": "AAM-fm-col.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "AAM-fm-ack",
  "level": "1",
  "url": "AAM-fm-ack.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Thank you to the University of Texas at Tyler students of Math 3380: Algorithms for Applied Mathematics. You were my guinea pigs as I initially drafted this manuscript as lecture notes, and as I have continued to massage the text over time.  Moreover, thank you to Rob Beezer, who made possible the conversion of this book to Mathbook XML, and to David Farmer, who used his excellent S2LX script to bulk-convert the original latex source to Mathbook XML, which morphed into PreTeXt.  "
},
{
  "id": "sec-intro-mst",
  "level": "1",
  "url": "sec-intro-mst.html",
  "type": "Section",
  "number": "1.1",
  "title": "Connecting a network",
  "body": " Connecting a network   We begin with a problem posed in concrete terms: we have a network consisting of several nodes which we wish to connect together, and we know that there is a certain cost associated with connecting pairs of nodes. It should be obvious that we wish to minimize the cost of connecting our network, and for the sake of simplicity we will make the assumption that our network is reliable; that is, once two nodes are connected, they will stay connected. Therefore we only need to make sure everything is connected to the network once.  Without worrying about technical definitions until a later chapter ( ), we will refer to the nodes as vertices and the connections as edges .    Working from an example   A small network with connection costs.      We can approach the problem very logically by organizing our list of edges carefully. Since we want to include edges with the least cost first, it makes sense to list the edges in that order.   Cost-increasing list of edges of a small network                      (6, 7)  3  (5, 6)  12    (0, 7)  4  (4, 7)  13    (2, 7)  5  (1, 2)  14    (1, 5)  6  (3, 7)  15    (4, 6)  6  (0, 1)  16    (2, 6)  9  (1, 4)  17    (0, 3)  12       To connect our network is now a matter of looking at each edge in order of increasing cost and including that edge as a connection exactly when the two ends of the edge are not already connected together!  For our very small example here it is easy enough to do this on a piece of paper, keeping track of all of the connected pieces in a table. As soon as we look at the first edge, we have to make a decision about which piece of the network is will gain a vertex and which piece will become empty; in order to make this easy for ourselves, we opt to always merge into the large piece, or if the two pieces have the same number of vertices we will merge into the piece whose initial vertex had a smaller numerical index.   The small network connection example.                  Components  Use  Total    Step        0  1  2  3  4  5  6  7  Edge?  Cost    0  -  -  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  -  0    1  (6,7)  3  [0]  [1]  [2]  [3]  [4]  [5]  [6,7]  -  Yes  3    2  (0,7)  4  -  [1]  [2]  [3]  [4]  [5]  [0,6,7]  -  Yes  7    3  (2,7)  5  -  [1]  -  [3]  [4]  [5]  [0,2,6,7]  -  Yes  12    4  (1,5)  6  -  [1,5]  -  [3]  [4]  -  [0,2,6,7]  -  Yes  18    5  (4,6)  6  -  [1,5]  -  [3]  -  -  [0,2,4,6,7]  -  Yes  24    6  (2,6)  9  -  [1,5]  -  [3]  -  -  [0,2,4,6,7]  -   No!   24    7  (0,3)  12  -  [1,5]  -  -  -  -  [0,2,3,4,6,7]  -  Yes  36    8  (5,6)  12  -  -  -  -  -  -  [0,1,2,3,4,5,6,7]  -  Yes  48       Algorithm  Taking a look at what we actually did, we can explain our process in more detail so that for a bigger, more complicated problem (specifically one with a larger set of vertices or of edges) the solution could be extended. In fact we have just implemented a famous result known as Kruskal's Algorithm.   Algorithm   An algorithm is a formal procedure for completing a computational or mathematical task.    In order to communicate our algorithm efficiently, we have to analyze what our steps actually entailed. Later on, we'll give a more computational statement of the same algorithm, in .   Mathematical Kruskal's Algorithm   Let a graph with vertex set be given which has a cost associated with each edge . Each edge will be denoted with , where .   Sort the edges by increasing cost, so that whenever then also , where and are counting variables .    Write different sets representing components of the network, denoted for each . Also let be an empty collection of edges.    Looking at each edge in increasing order of cost, do the following.   If and are in the same component, skip immediately to the next edge.    Otherwise, say that is the component containing and is the component containing , and do the following:   If contains fewer vertices than , put all of the elements from into instead and leave empty.    Otherwise, put all of the elements from into and leave empty.    In either case, include the edge in .           After Step 3 finishes, all of the edges will have been inspected and either included in the network or skipped; there will be as many nonempty components as needed to connect the network, and the algorithm is finished! The cost-minimal set of edges is .    This algorithm works even when there is not a possible way to connect all of the nodes into one network! If several disconnected networks are needed, this algorithm will find the least expensive way to do so.   A 50-edge network   The connections of a network are given below as a table of triples . Find the least expensive set of edges needed to connect the components of this network.   The weighted edges of a 50-edge network                     (0, 1, 8)  (2, 4, 1)  (4, 13, 1)  (5, 17, 6)  (9, 16, 8)    (0, 3, 3)  (2, 10, 9)  (4, 15, 5)  (5, 19, 7)  (9, 17, 6)    (0, 4, 8)  (2, 11, 5)  (4, 16, 9)  (6, 12, 8)  (10, 13, 7)    (0, 8, 10)  (2, 18, 8)  (4, 18, 3)  (7, 8, 9)  (10, 16, 8)    (0, 10, 4)  (2, 19, 6)  (5, 6, 5)  (7, 13, 3)  (11, 12, 10)    (0, 13, 1)  (3, 5, 10)  (5, 7, 8)  (7, 15, 10)  (11, 18, 8)    (0, 16, 4)  (3, 13, 9)  (5, 8, 10)  (7, 18, 6)  (12, 19, 1)    (1, 4, 4)  (3, 14, 6)  (5, 10, 8)  (8, 11, 1)  (13, 14, 7)    (1, 6, 10)  (3, 19, 6)  (5, 14, 6)  (8, 19, 7)  (15, 17, 7)    (1, 18, 5)  (4, 10, 5)  (5, 16, 4)  (9, 15, 5)  (16, 18, 9)     Your solution should include all the steps, but your answer will consist only of the set of included edges.    The minimal-cost connecting set consists of the following edges:       It is important to note that throughout the process of applying the algorithm, the values of some of the quantities changed: this is only natural! We expect this just from what we observed initially in our small example network. Speaking algorithmically, we will say that variables are these changeable quantities and constants or parameters are those quantities which do not change once the algorithm begins. In this case, the numbers of vertices and edges are both parameters for a given graph.  Finally, this algorithm is labeled as a mathematical algorithm because it is not sufficiently detailed to actually implement in a computer program. To program the algorithm, several of the steps-as-written would need to be explained as algorithms in their own right!   "
},
{
  "id": "p-5",
  "level": "2",
  "url": "sec-intro-mst.html#p-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertices edges "
},
{
  "id": "fig-smallnetwork",
  "level": "2",
  "url": "sec-intro-mst.html#fig-smallnetwork",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A small network with connection costs.     "
},
{
  "id": "table-1",
  "level": "2",
  "url": "sec-intro-mst.html#table-1",
  "type": "Table",
  "number": "1.1.2",
  "title": "Cost-increasing list of edges of a small network",
  "body": " Cost-increasing list of edges of a small network                      (6, 7)  3  (5, 6)  12    (0, 7)  4  (4, 7)  13    (2, 7)  5  (1, 2)  14    (1, 5)  6  (3, 7)  15    (4, 6)  6  (0, 1)  16    (2, 6)  9  (1, 4)  17    (0, 3)  12      "
},
{
  "id": "tab-kruskal-smallexample",
  "level": "2",
  "url": "sec-intro-mst.html#tab-kruskal-smallexample",
  "type": "Table",
  "number": "1.1.3",
  "title": "The small network connection example.",
  "body": " The small network connection example.                  Components  Use  Total    Step        0  1  2  3  4  5  6  7  Edge?  Cost    0  -  -  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  -  0    1  (6,7)  3  [0]  [1]  [2]  [3]  [4]  [5]  [6,7]  -  Yes  3    2  (0,7)  4  -  [1]  [2]  [3]  [4]  [5]  [0,6,7]  -  Yes  7    3  (2,7)  5  -  [1]  -  [3]  [4]  [5]  [0,2,6,7]  -  Yes  12    4  (1,5)  6  -  [1,5]  -  [3]  [4]  -  [0,2,6,7]  -  Yes  18    5  (4,6)  6  -  [1,5]  -  [3]  -  -  [0,2,4,6,7]  -  Yes  24    6  (2,6)  9  -  [1,5]  -  [3]  -  -  [0,2,4,6,7]  -   No!   24    7  (0,3)  12  -  [1,5]  -  -  -  -  [0,2,3,4,6,7]  -  Yes  36    8  (5,6)  12  -  -  -  -  -  -  [0,1,2,3,4,5,6,7]  -  Yes  48    "
},
{
  "id": "def-algorithm",
  "level": "2",
  "url": "sec-intro-mst.html#def-algorithm",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Algorithm.",
  "body": " Algorithm   An algorithm is a formal procedure for completing a computational or mathematical task.   "
},
{
  "id": "alg-intro-kruskal",
  "level": "2",
  "url": "sec-intro-mst.html#alg-intro-kruskal",
  "type": "Algorithm",
  "number": "1.1.5",
  "title": "Mathematical Kruskal's Algorithm.",
  "body": " Mathematical Kruskal's Algorithm   Let a graph with vertex set be given which has a cost associated with each edge . Each edge will be denoted with , where .   Sort the edges by increasing cost, so that whenever then also , where and are counting variables .    Write different sets representing components of the network, denoted for each . Also let be an empty collection of edges.    Looking at each edge in increasing order of cost, do the following.   If and are in the same component, skip immediately to the next edge.    Otherwise, say that is the component containing and is the component containing , and do the following:   If contains fewer vertices than , put all of the elements from into instead and leave empty.    Otherwise, put all of the elements from into and leave empty.    In either case, include the edge in .           After Step 3 finishes, all of the edges will have been inspected and either included in the network or skipped; there will be as many nonempty components as needed to connect the network, and the algorithm is finished! The cost-minimal set of edges is .   "
},
{
  "id": "problem-1",
  "level": "2",
  "url": "sec-intro-mst.html#problem-1",
  "type": "Problem",
  "number": "1.1.6",
  "title": "A 50-edge network.",
  "body": " A 50-edge network   The connections of a network are given below as a table of triples . Find the least expensive set of edges needed to connect the components of this network.   The weighted edges of a 50-edge network                     (0, 1, 8)  (2, 4, 1)  (4, 13, 1)  (5, 17, 6)  (9, 16, 8)    (0, 3, 3)  (2, 10, 9)  (4, 15, 5)  (5, 19, 7)  (9, 17, 6)    (0, 4, 8)  (2, 11, 5)  (4, 16, 9)  (6, 12, 8)  (10, 13, 7)    (0, 8, 10)  (2, 18, 8)  (4, 18, 3)  (7, 8, 9)  (10, 16, 8)    (0, 10, 4)  (2, 19, 6)  (5, 6, 5)  (7, 13, 3)  (11, 12, 10)    (0, 13, 1)  (3, 5, 10)  (5, 7, 8)  (7, 15, 10)  (11, 18, 8)    (0, 16, 4)  (3, 13, 9)  (5, 8, 10)  (7, 18, 6)  (12, 19, 1)    (1, 4, 4)  (3, 14, 6)  (5, 10, 8)  (8, 11, 1)  (13, 14, 7)    (1, 6, 10)  (3, 19, 6)  (5, 14, 6)  (8, 19, 7)  (15, 17, 7)    (1, 18, 5)  (4, 10, 5)  (5, 16, 4)  (9, 15, 5)  (16, 18, 9)     Your solution should include all the steps, but your answer will consist only of the set of included edges.    The minimal-cost connecting set consists of the following edges:    "
},
{
  "id": "p-26",
  "level": "2",
  "url": "sec-intro-mst.html#p-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variables constants parameters "
},
{
  "id": "sec-intro-kidrsa",
  "level": "1",
  "url": "sec-intro-kidrsa.html",
  "type": "Section",
  "number": "1.2",
  "title": "Project: Gaining Familiarity with Python",
  "body": " Project: Gaining Familiarity with Python  Familiarity with Python    As a gentle introduction to working with Python, we will implement an easily-teachable algorithm called Kid RSA . The Kid RSA algorithm serves as an introduction to the idea of public key cryptography, which will be investigated further in . It is important that you complete each Checkpoint project in order; it is a safe assumption that as you work through the checkpoints you are adding to the same file or files.  If you are not already familiar with programming and with Python, now would be a very good time to read the appendix.    Create properly named and properly formatted files in   Calculate your Kid RSA keypair in   Learn how to encode and decode between typed strings and lists of integers in   Combine all of the work to create a KidRSA encryption program in   Write a simple function to calculate the greatest common divisor of two integers in   Engage in mathematically hacking a KidRSA key in      KidRSA project files   A first task for any of the projects will be to set up a good environment to work in, choosing an appropriate working directory and filenames for the project.   Using IDLE, create a blank Python module file named aam_proj1.py in an easy-to-find folder on your computer. This will eventually be submitted via Canvas or some other digital method for grading.  As header information, every submitted project file should begin with a block of comments. Your header should look like the following example, with the information changed to reflect your information and situation.  A sample header for Math 3380 Project Files   # Math 3380 Project 1 # Filename: aam_proj1.py # # Name: Frodo Baggins # Date: 25 March, T.A. 3019 #     All files submitted for these projects should have a similar header.    Public key cryptography first requires the generation of a keypair , consisting of a public key and a private key .   Kid RSA Key Generation   Let be arbitrary positive integers. Calculate the following: Then the public key is the ordered pair and the private key is the ordered pair .    Now use the algorithm to generate your own Kid RSA keypair.   Using Python as a simple calculator  In the file created in , declare values for a , b , a_prime , and b_prime . The variable names in Python cannot include the prime symbol, hence the change of name. Make sure you include comments in your code explaining what you're doing. Comments are lines (or ends of lines) which begin with the symbol called either pound or hash , specifically # .  Calculate the values of M , e , d , and n from a , b , a_prime , and b_prime using Python, as explained in . Make sure your program displays the public and private key using statements such as print(f\"Public key: {(n,e)}\") .  Prove mathematically that there is a value such that , and verify that your code works by printing the result of (e * d) % n .  Write a function which takes a , b , a_prime , and b_prime as input and returns the key values (n,e) and (n,d) .  def kidrsa_keygen(a, b, a_prime, b_prime): \"\"\"A function generating KidRSA keypairs.\"\"\" # # Fill in the code to calculate n, e, d # return (n,e,d)    The fundamental idea behind public key cryptography is that given a public key it should be easy to mathematically compute the encrypted version of a message. However, without the private key it should ideally be impossible to compute the original message from the encrypted version. Unfortunately this is precisely why the Kid RSA algorithm is suitable only for teaching purposes: it is very easy to produce the private key with a little arithmetic from the numbers and in the public key.   The Division Algorithm   Given with , there is a unique pair with such that . The number is the integer quotient of divided by , while is the remainder .    We can denote the quotient by , but there is no notation for the remainder which is universally agreed upon by mathematicians.   Python divmod built-in function  To compute the quotient and remainder of integer division separately, use \/\/ and % ; to compute the tuple of the quotient and remainder simultaneously, use divmod .   An example demonstrating the use of divmod(...) in Python   a, b = 8675309, 512 q, r = divmod(a, b) print(a == b*q+r)      Division   If , we say that  divides  and write if and only if there is such that . That is to say, the remainder when is divided by is zero.     Kid RSA encryption\/decryption function   Let and respectively be the public and private keys generated by the Kid RSA key generation algorithm. Suppose , then let be the unique results of the Division Algorithm such that . Then the functions and are respectively the encryption and decryption functions for Kid RSA.     Encoding strings into lists of integers   Encryption was used historically by military commanders seeking to send orders to remote troops, so permutation-based encryption on the letters of the alphabet was the ideal method of encryption. The invention of computers changed that by making it much more feasible to apply brute-force solutions to code breaking. Now that we use digital encryption it is necessary to convert the messages we want to send from strings of characters to lists of integers in order to perform mathematical functions on those integers.  In Python, the paired commands ord and chr convert characters to integers and back.   An example using the Python ord command   out = [ ] for c in \"Hello world!\": out.append( ord(c) ) print(out) for k in out: print( f\"chr({k:>3}) -> {chr(k)}\")    Every printable (or type-able) character has an ordinal , which is what is returned by ord ; the valid ordinals each map to a character, but not every int is valid input for chr . The valid input range of chr is all values in range(0x110000) ; in turn, 0x110000 is the hexadecimal (base-16) number with base-10 value 1114112.   Find the ordinals of the letters A and a   Use ordinals along with a range(26) to print the capital and miniscule letters, in the format Aa through Zz . To make a notational distinction, we will separate the ideas of encoding and encrypting . Encoding is the process by which a natural written language is transferred into a different symbol set, usually for the purpose of transmission. Encryption, on the other hand, is the process by which information is hidden from unintended recipients. Sometimes a simple encoding is used as encryption, but there are relatively easy mathematical tools to decode messages which have been encoded but not encrypted. Some of the same tools are useful to break low-security encryption, as well!  Fill in the remainder of the following code to produce a working program which takes a string as input and returns the list of ordinals of the characters in the string.  def encode(input_string): out = [ ] for c in input_string: # # Fill in your code here # return out   Fill in the remainder of the following code to produce a working program which takes a list of integers output by the ord command and returns a string of the characters with those ordinals.  def decode(input_list): out = \"\" for x in input_list: # # Fill in your code here # return out    You now have most of the pieces put together to encrypt messages using KidRSA.     Applying KidRSA   Now it is time to combine all this work and write our first encryption program! KidRSA is a symmetric encryption algorithm where the same function is used with different inputs to encrypt and decrypt.   Write the function which applies KidRSA to a single integer.  def kidrsa_single(key, msg_int): \"Apply KidRSA using key = (n,x) to the integer msg_int.\" n, x = key return (x*msg_int) % n   Now, combine this with encode and decode to encrypt and decrypt a msg_str ! Correct the following function and include it in your file.  Applying KidRSA to messages   def kidrsa(key, msg): \"\"\"Apply KidRSA using key = (n,x) to encrypt or decrypt the message msg, which is either a string to be encrypted or a list of integers to be decrypted.\"\"\" n,x = key if type(msg) == str: # We were given a string, so we must be trying to encrypt, # so first we have to encode the string. msg_list = [ 65 ] ########### FIX THIS ########### elif type(msg) == list: # We were given a list, so we must be trying to decrypt, # so let's just make msg_list a copy of msg. msg_list = msg[:] # Now we can apply the kidRSA_single function to everything # in msg_list. out_list = [ ] for number in msg_list: out_list.append( 65 ) ########### FIX THIS ########### if type(msg) == list: # We must need to decode whatever we've decrypted. return \"A\" ########### FIX THIS ########### else: # Otherwise we want to return the list of encrypted # integers without trying to decode it. return [65] ########### FIX THIS ###########    Test your work! Use a, b, a_prime, b_prime = 4, 81, 123, 19963 to generate a keypair and then use that to decrypt the following:  [2900509, 4609028, 1549587, 4569295, 1271456, 3854101, 1271456, 3973300, 3854101, 4370630, 4092499, 4013033, 4529562, 4410363, 4648761, 4569295, 1271456, 3893834, 4648761, 4569295, 4171965, 4370630, 4013033, 4569295, 4569295, 1748252, 1271456, 2781310, 4529562, 4410363, 3973300, 4410363, 1748252, 1271456, 4092499, 4410363, 4171965, 4370630, 4092499, 1271456, 4410363, 4648761, 4609028, 1271456, 4807693, 4410363, 4648761, 4529562, 1271456, 3973300, 4410363, 4410363, 4529562, 1827718]    The next part of the project will be to undo all this hard work by devising a method to find the private part of a KidRSA key pair when given the public part.     Greatest Common Divisor   Suppose . Then is a common divisor of and if and only if and . The integer is the greatest common divisor of and , given by .    Equipped with these definitions, we can prove an important early result from number theory.   Greatest common divisors with remainders   Let with , and let with be the result of the Division Algorithm; namely, suppose . Then .    Let , , , and be as hypothesized, and let . Then and , so there are such that and . But then since , we have that divides as well. So is a common divisor of and .  Now assume that there is a common divisor of and satisfying . Then there are other integers such that and . But then , making a divisor of as well; This contradicts our choice that was the greatest common divisor of and , and hence we see .    If we repeatedly apply this theorem to a pair of integers and the successive results of the division algorithm, the final nonzero remainder must actually be the greatest common divisor of the two initial integers!   Euclid's Algorithm   Let be given. By repeatedly applying to the pair , produce the sequences and where , such that . Then .    By repeated application of we know that , but we also see that , so the greatest common divisor of and is itself.     Implementing Euclid's algorithm   In order to find the greatest common divisor, we apply the division algorithm repeatedly in the form of Python's divmod(...) command, stopping when the remainder it produces is zero. Once the remainder is 0, we know that the previous remainder was the . This is a great use case for a while loop. First define a function in the same file created in    Create the following function:  def gcd(left, right): \"\"\"An iterative greatest common divisor function.\"\"\" # Set the initial value of a and b to the input a, b = left, right # Calculate the quotient and remainder q, r = divmod(a, b) while r != 0: # # Leave this blank for now # # Return the correct final value by changing None return None  As written, if you execute gcd(123,457) the program will crash with an IndentationError . This is a very specific type of syntax error which occurs when a colon ( : ) has been left dangling at the opening of a block structure, but the next line was not indented to start the block!  Inspecting shows you what needs to change inside the loop: we need to update the values of a and b and then recompute the values of q and r . Change the contents of the loop so that the correct new values are assigned to a and b , and include another q, r = divmod(a, b) line at the end of the loop.  Once you reach this point, your loop will correctly end. Now change the return None line so that the correct number is returned, instead of the do-nothing value None .  Verify your work! Add the line print( gcd(123321, 345345543) ) to the end of your file at the leftmost indendation level and then run it. You should obtain an answer of 3.   We need another theorem if we want to develop a tool to break a keypair.   Greatest common divisor is a linear combination   Let . Then there are such that .    The proof is actually an extension of . We will again apply the Division Algorithm, but at each step we will rewrite the equation to solve for the remainder. In the first iteration, we see the following: . Hence we define and , so that .  In the second iteration, we find , but we can replace with the result of the previous iteration, giving   In order to see the pattern fully emerge, the third iteration consists of , and we can again replace the and with the results of the previous two computations. Thus we obtain .  We have established enough iterations to suggest recursive formulas for , where . But then there is such that .    To apply this theorem to breaking the Kid RSA algorithm, we write an extended version of Euclid's Algorithm and keep track of the list of computed values of on each iteration. The values of are unnecessary in our particular application of computing a reciprocal modulo n   Euclid's Algorithm Extended   Let be given with . Define the following initial conditions: For each , do the following:  Compute by such that .  If , then:  Compute .  Let and .    On the other hand, when , then do the following:  The value is the last nonzero remainder, so .  If , then . Thus is the reciprocal of modulo .         Hacking KidRSA  We can use to reverse-engineer the number of a KidRSA triple if we know , because is simply the reciprocal of modulo . Write a new function called big_gcd which modifies your previous gcd function by adding exactly two lines: t = [0,1] and t.append( t[-2] - q * t[-1] ) . You'll need to determine carefully where these lines must be added. Finally, change the return statement so that it returns the greatest common divisor as well as t[-1] in an ordered pair.  Find d if my public KidRSA key is (n,e) where  n = 168702191480379745583323186370491914430362515412305925474315373302579709429 e = 169514405816166316269158771599355601156883726762227835237    "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "sec-intro-kidrsa.html#objectives-1",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  As a gentle introduction to working with Python, we will implement an easily-teachable algorithm called Kid RSA . The Kid RSA algorithm serves as an introduction to the idea of public key cryptography, which will be investigated further in . It is important that you complete each Checkpoint project in order; it is a safe assumption that as you work through the checkpoints you are adding to the same file or files.  If you are not already familiar with programming and with Python, now would be a very good time to read the appendix.    Create properly named and properly formatted files in   Calculate your Kid RSA keypair in   Learn how to encode and decode between typed strings and lists of integers in   Combine all of the work to create a KidRSA encryption program in   Write a simple function to calculate the greatest common divisor of two integers in   Engage in mathematically hacking a KidRSA key in    "
},
{
  "id": "prj-kidrsa-files",
  "level": "2",
  "url": "sec-intro-kidrsa.html#prj-kidrsa-files",
  "type": "Activity",
  "number": "1.1",
  "title": "KidRSA project files.",
  "body": " KidRSA project files   A first task for any of the projects will be to set up a good environment to work in, choosing an appropriate working directory and filenames for the project.   Using IDLE, create a blank Python module file named aam_proj1.py in an easy-to-find folder on your computer. This will eventually be submitted via Canvas or some other digital method for grading.  As header information, every submitted project file should begin with a block of comments. Your header should look like the following example, with the information changed to reflect your information and situation.  A sample header for Math 3380 Project Files   # Math 3380 Project 1 # Filename: aam_proj1.py # # Name: Frodo Baggins # Date: 25 March, T.A. 3019 #     All files submitted for these projects should have a similar header.   "
},
{
  "id": "p-40",
  "level": "2",
  "url": "sec-intro-kidrsa.html#p-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "keypair public key private key "
},
{
  "id": "alg-kidrsa",
  "level": "2",
  "url": "sec-intro-kidrsa.html#alg-kidrsa",
  "type": "Algorithm",
  "number": "1.2.2",
  "title": "Kid RSA Key Generation.",
  "body": " Kid RSA Key Generation   Let be arbitrary positive integers. Calculate the following: Then the public key is the ordered pair and the private key is the ordered pair .   "
},
{
  "id": "prj-kidrsa-calculator",
  "level": "2",
  "url": "sec-intro-kidrsa.html#prj-kidrsa-calculator",
  "type": "Activity",
  "number": "1.2",
  "title": "Using Python as a simple calculator.",
  "body": " Using Python as a simple calculator  In the file created in , declare values for a , b , a_prime , and b_prime . The variable names in Python cannot include the prime symbol, hence the change of name. Make sure you include comments in your code explaining what you're doing. Comments are lines (or ends of lines) which begin with the symbol called either pound or hash , specifically # .  Calculate the values of M , e , d , and n from a , b , a_prime , and b_prime using Python, as explained in . Make sure your program displays the public and private key using statements such as print(f\"Public key: {(n,e)}\") .  Prove mathematically that there is a value such that , and verify that your code works by printing the result of (e * d) % n .  Write a function which takes a , b , a_prime , and b_prime as input and returns the key values (n,e) and (n,d) .  def kidrsa_keygen(a, b, a_prime, b_prime): \"\"\"A function generating KidRSA keypairs.\"\"\" # # Fill in the code to calculate n, e, d # return (n,e,d)   "
},
{
  "id": "axiom-division-algorithm",
  "level": "2",
  "url": "sec-intro-kidrsa.html#axiom-division-algorithm",
  "type": "Axiom",
  "number": "1.2.3",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Given with , there is a unique pair with such that . The number is the integer quotient of divided by , while is the remainder .   "
},
{
  "id": "tech-divmod",
  "level": "2",
  "url": "sec-intro-kidrsa.html#tech-divmod",
  "type": "Technology",
  "number": "1.2.4",
  "title": "Python <code class=\"code-inline tex2jax_ignore\">divmod<\/code> built-in function.",
  "body": " Python divmod built-in function  To compute the quotient and remainder of integer division separately, use \/\/ and % ; to compute the tuple of the quotient and remainder simultaneously, use divmod .   An example demonstrating the use of divmod(...) in Python   a, b = 8675309, 512 q, r = divmod(a, b) print(a == b*q+r)    "
},
{
  "id": "def-divides",
  "level": "2",
  "url": "sec-intro-kidrsa.html#def-divides",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Division.",
  "body": " Division   If , we say that  divides  and write if and only if there is such that . That is to say, the remainder when is divided by is zero.   "
},
{
  "id": "def-kidrsa-function",
  "level": "2",
  "url": "sec-intro-kidrsa.html#def-kidrsa-function",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Kid RSA encryption\/decryption function.",
  "body": " Kid RSA encryption\/decryption function   Let and respectively be the public and private keys generated by the Kid RSA key generation algorithm. Suppose , then let be the unique results of the Division Algorithm such that . Then the functions and are respectively the encryption and decryption functions for Kid RSA.   "
},
{
  "id": "prj-kidrsa-encoding-characters",
  "level": "2",
  "url": "sec-intro-kidrsa.html#prj-kidrsa-encoding-characters",
  "type": "Activity",
  "number": "1.3",
  "title": "Encoding strings into lists of integers.",
  "body": " Encoding strings into lists of integers   Encryption was used historically by military commanders seeking to send orders to remote troops, so permutation-based encryption on the letters of the alphabet was the ideal method of encryption. The invention of computers changed that by making it much more feasible to apply brute-force solutions to code breaking. Now that we use digital encryption it is necessary to convert the messages we want to send from strings of characters to lists of integers in order to perform mathematical functions on those integers.  In Python, the paired commands ord and chr convert characters to integers and back.   An example using the Python ord command   out = [ ] for c in \"Hello world!\": out.append( ord(c) ) print(out) for k in out: print( f\"chr({k:>3}) -> {chr(k)}\")    Every printable (or type-able) character has an ordinal , which is what is returned by ord ; the valid ordinals each map to a character, but not every int is valid input for chr . The valid input range of chr is all values in range(0x110000) ; in turn, 0x110000 is the hexadecimal (base-16) number with base-10 value 1114112.   Find the ordinals of the letters A and a   Use ordinals along with a range(26) to print the capital and miniscule letters, in the format Aa through Zz . To make a notational distinction, we will separate the ideas of encoding and encrypting . Encoding is the process by which a natural written language is transferred into a different symbol set, usually for the purpose of transmission. Encryption, on the other hand, is the process by which information is hidden from unintended recipients. Sometimes a simple encoding is used as encryption, but there are relatively easy mathematical tools to decode messages which have been encoded but not encrypted. Some of the same tools are useful to break low-security encryption, as well!  Fill in the remainder of the following code to produce a working program which takes a string as input and returns the list of ordinals of the characters in the string.  def encode(input_string): out = [ ] for c in input_string: # # Fill in your code here # return out   Fill in the remainder of the following code to produce a working program which takes a list of integers output by the ord command and returns a string of the characters with those ordinals.  def decode(input_list): out = \"\" for x in input_list: # # Fill in your code here # return out    You now have most of the pieces put together to encrypt messages using KidRSA.   "
},
{
  "id": "prj-kidrsa-kidrsa",
  "level": "2",
  "url": "sec-intro-kidrsa.html#prj-kidrsa-kidrsa",
  "type": "Activity",
  "number": "1.4",
  "title": "Applying KidRSA.",
  "body": " Applying KidRSA   Now it is time to combine all this work and write our first encryption program! KidRSA is a symmetric encryption algorithm where the same function is used with different inputs to encrypt and decrypt.   Write the function which applies KidRSA to a single integer.  def kidrsa_single(key, msg_int): \"Apply KidRSA using key = (n,x) to the integer msg_int.\" n, x = key return (x*msg_int) % n   Now, combine this with encode and decode to encrypt and decrypt a msg_str ! Correct the following function and include it in your file.  Applying KidRSA to messages   def kidrsa(key, msg): \"\"\"Apply KidRSA using key = (n,x) to encrypt or decrypt the message msg, which is either a string to be encrypted or a list of integers to be decrypted.\"\"\" n,x = key if type(msg) == str: # We were given a string, so we must be trying to encrypt, # so first we have to encode the string. msg_list = [ 65 ] ########### FIX THIS ########### elif type(msg) == list: # We were given a list, so we must be trying to decrypt, # so let's just make msg_list a copy of msg. msg_list = msg[:] # Now we can apply the kidRSA_single function to everything # in msg_list. out_list = [ ] for number in msg_list: out_list.append( 65 ) ########### FIX THIS ########### if type(msg) == list: # We must need to decode whatever we've decrypted. return \"A\" ########### FIX THIS ########### else: # Otherwise we want to return the list of encrypted # integers without trying to decode it. return [65] ########### FIX THIS ###########    Test your work! Use a, b, a_prime, b_prime = 4, 81, 123, 19963 to generate a keypair and then use that to decrypt the following:  [2900509, 4609028, 1549587, 4569295, 1271456, 3854101, 1271456, 3973300, 3854101, 4370630, 4092499, 4013033, 4529562, 4410363, 4648761, 4569295, 1271456, 3893834, 4648761, 4569295, 4171965, 4370630, 4013033, 4569295, 4569295, 1748252, 1271456, 2781310, 4529562, 4410363, 3973300, 4410363, 1748252, 1271456, 4092499, 4410363, 4171965, 4370630, 4092499, 1271456, 4410363, 4648761, 4609028, 1271456, 4807693, 4410363, 4648761, 4529562, 1271456, 3973300, 4410363, 4410363, 4529562, 1827718]    The next part of the project will be to undo all this hard work by devising a method to find the private part of a KidRSA key pair when given the public part.   "
},
{
  "id": "def-gcd",
  "level": "2",
  "url": "sec-intro-kidrsa.html#def-gcd",
  "type": "Definition",
  "number": "1.2.10",
  "title": "Greatest Common Divisor.",
  "body": " Greatest Common Divisor   Suppose . Then is a common divisor of and if and only if and . The integer is the greatest common divisor of and , given by .   "
},
{
  "id": "thm-gcd-of-remainders",
  "level": "2",
  "url": "sec-intro-kidrsa.html#thm-gcd-of-remainders",
  "type": "Theorem",
  "number": "1.2.11",
  "title": "Greatest common divisors with remainders.",
  "body": " Greatest common divisors with remainders   Let with , and let with be the result of the Division Algorithm; namely, suppose . Then .    Let , , , and be as hypothesized, and let . Then and , so there are such that and . But then since , we have that divides as well. So is a common divisor of and .  Now assume that there is a common divisor of and satisfying . Then there are other integers such that and . But then , making a divisor of as well; This contradicts our choice that was the greatest common divisor of and , and hence we see .   "
},
{
  "id": "algo-euclid-gcd",
  "level": "2",
  "url": "sec-intro-kidrsa.html#algo-euclid-gcd",
  "type": "Algorithm",
  "number": "1.2.12",
  "title": "Euclid's Algorithm.",
  "body": " Euclid's Algorithm   Let be given. By repeatedly applying to the pair , produce the sequences and where , such that . Then .    By repeated application of we know that , but we also see that , so the greatest common divisor of and is itself.   "
},
{
  "id": "prj-kidrsa-euclid1",
  "level": "2",
  "url": "sec-intro-kidrsa.html#prj-kidrsa-euclid1",
  "type": "Activity",
  "number": "1.5",
  "title": "Implementing Euclid's algorithm.",
  "body": " Implementing Euclid's algorithm   In order to find the greatest common divisor, we apply the division algorithm repeatedly in the form of Python's divmod(...) command, stopping when the remainder it produces is zero. Once the remainder is 0, we know that the previous remainder was the . This is a great use case for a while loop. First define a function in the same file created in    Create the following function:  def gcd(left, right): \"\"\"An iterative greatest common divisor function.\"\"\" # Set the initial value of a and b to the input a, b = left, right # Calculate the quotient and remainder q, r = divmod(a, b) while r != 0: # # Leave this blank for now # # Return the correct final value by changing None return None  As written, if you execute gcd(123,457) the program will crash with an IndentationError . This is a very specific type of syntax error which occurs when a colon ( : ) has been left dangling at the opening of a block structure, but the next line was not indented to start the block!  Inspecting shows you what needs to change inside the loop: we need to update the values of a and b and then recompute the values of q and r . Change the contents of the loop so that the correct new values are assigned to a and b , and include another q, r = divmod(a, b) line at the end of the loop.  Once you reach this point, your loop will correctly end. Now change the return None line so that the correct number is returned, instead of the do-nothing value None .  Verify your work! Add the line print( gcd(123321, 345345543) ) to the end of your file at the leftmost indendation level and then run it. You should obtain an answer of 3.  "
},
{
  "id": "thm-gcd-linear-comb",
  "level": "2",
  "url": "sec-intro-kidrsa.html#thm-gcd-linear-comb",
  "type": "Theorem",
  "number": "1.2.13",
  "title": "Greatest common divisor is a linear combination.",
  "body": " Greatest common divisor is a linear combination   Let . Then there are such that .    The proof is actually an extension of . We will again apply the Division Algorithm, but at each step we will rewrite the equation to solve for the remainder. In the first iteration, we see the following: . Hence we define and , so that .  In the second iteration, we find , but we can replace with the result of the previous iteration, giving   In order to see the pattern fully emerge, the third iteration consists of , and we can again replace the and with the results of the previous two computations. Thus we obtain .  We have established enough iterations to suggest recursive formulas for , where . But then there is such that .   "
},
{
  "id": "algo-euclid-gcd-inverses",
  "level": "2",
  "url": "sec-intro-kidrsa.html#algo-euclid-gcd-inverses",
  "type": "Algorithm",
  "number": "1.2.14",
  "title": "Euclid's Algorithm Extended.",
  "body": " Euclid's Algorithm Extended   Let be given with . Define the following initial conditions: For each , do the following:  Compute by such that .  If , then:  Compute .  Let and .    On the other hand, when , then do the following:  The value is the last nonzero remainder, so .  If , then . Thus is the reciprocal of modulo .       "
},
{
  "id": "prj-kidrsa-hacking-kidrsa",
  "level": "2",
  "url": "sec-intro-kidrsa.html#prj-kidrsa-hacking-kidrsa",
  "type": "Activity",
  "number": "1.6",
  "title": "Hacking KidRSA.",
  "body": " Hacking KidRSA  We can use to reverse-engineer the number of a KidRSA triple if we know , because is simply the reciprocal of modulo . Write a new function called big_gcd which modifies your previous gcd function by adding exactly two lines: t = [0,1] and t.append( t[-2] - q * t[-1] ) . You'll need to determine carefully where these lines must be added. Finally, change the return statement so that it returns the greatest common divisor as well as t[-1] in an ordered pair.  Find d if my public KidRSA key is (n,e) where  n = 168702191480379745583323186370491914430362515412305925474315373302579709429 e = 169514405816166316269158771599355601156883726762227835237   "
},
{
  "id": "sec-perms-def",
  "level": "1",
  "url": "sec-perms-def.html",
  "type": "Section",
  "number": "2.1",
  "title": "Mathematical permutations",
  "body": " Mathematical permutations   Our first topic introduces a special kind of function; recall from differential calculus that a function is a rule which assigns to each value in a set exactly one value in a set . We denote this by and name the sets and respectively the domain and codomain of . Moreover, if is assigned by to the value , we write .   Permutation   Suppose is a set. Then a function is a permutation of if and only if satisfies the following two criteria:  (Surjective\/Onto) For each element , there is an element such that .  (Injective\/One-to-one) For any elements , if then .      Functions which are both one-to-one and onto are also called bijections , so an easier definition of a permutation of is that is a bijection from to itself. It is important to note that the definition of a permutation of does not require that the set be finite. However, we will be considering only finite sets as a rule.   There are certain sets we will use frequently in our study of permutations, namely the set of letters of the English alphabet and subsets of the natural numbers. For convenience sake, we denote them as follows:   is the set of letters in the English alphabet.   whenever .    For a finite set which is not a subset of for any , we denote the set of all permutations of by .     One-line and two-line notations  There are several distinct ways of representing permutations which are useful in different situations. The first two are one-line notation and two-line notation .   Two-line notation   Let be a permutation of a set . Then the two-line notation for is . The one-line notation for is .     There is considerable disagreement in the literature as to whether the symbols in one-line notation should be separated by a comma, a space, or nothing at all. We adopt the convention that permutations listed in one-line notation will have no spaces between symbols for permutations of just a few symbols, but with a space between symbols for longer permutations. For instance, will be represented by , but will be represented by .   Two line notation is especially useful when there is no natural order for the symbols in the set being permuted. For example, if , then the following is a valid permutation of : .  Since the set defined above has no clear order, we should not impose one in order to use one-line notation to represent .  Permutations of  List all permutations of the set in one-line notation.   The permutations of are .     Permutation groups   Since permutations of a set are bijections from to , each element of has the same domain and codomain; thus they can be composed.   Permutation composition   Suppose for some set . Then the composition of after is the function defined by for each . Moreover, the composition symbol will be suppressed, and we will write as a product rather than a composition.     Composition order  We must be careful to always consider permutation multiplication in the correct order. An easy way to remember this is to think of the composition symbol as being pronounced after . Then is the permutation which performs after performing .   We need not prove that the composition of permutations exists and is a function, but we do need to be careful to show that it is a permutation: that is, we must show that if for a set , then both . When an operator (like ) on a set satisfies the property that its output remains in the set, it is a closed operator.   is closed under composition   Let be a set and the set of permutations of , and suppose . Then and .    Let for a set . It suffices to show that , for then the case holds by a symmetric argument exchanging the roles of and .  In order to show that is injective, suppose that such that Then by definition, ; but since is injective, this necessitates that . In turn, since is injective, we have that , and thus have shown that whenever . Therefore is injective.  In order to show that is surjective, let . Since is surjective, there is some such that ; likewise, since is surjective, there is some such that . But then and hence . Since our selection of was arbitrary, we have that is surjective.  As we have shown to be both injective and surjective on , we have establised as desired.    Closure is only one of the many important properties of the multiplication operator. The next most common property we expect operators to have is the associative property.   Associative multiplication   Multiplication is associative if and only if      Composition in is associative   Let be a set, and suppose . Then .    Let for a set . Then for every , with all equalities justified by the definition of composition.    Since multiplication is associative, we can safely write rather than , since the product is unique as long as the relative order of the terms is preserved: must be applied after , which must be applied after .    Calculating permutation products  Calculating products of permutations can be a frustrating exercise. Thankfully, there is a simple algorithm to determine the product.   Left-multiplication of permutations   Suppose are permutations of the set , and further suppose the product is desired.   For each , do the following:  Let .  For each , do the following:  Update .    Write .       This algorithm can be effectively visualized (for a small number of permutations) using a diagram, as follows.   Stacking permutation products   Consider the permutations and suppose we want to determine the product . Now write the two-line notation for each permutation in a single column, where the top of the column is the rightmost permutation in the product; in this case, . To find the value of , for instance, you can trace the output of a permutation into the input of the next permutation, and so on.   A stacked permutation product diagram demonstrating .      This idea will be extended when we talk about cryptography later in .      Properties of permutation multiplication  Having defined multiplication of permutations, it is natural to consider whether there is a multiplicative identity .   Identity permutation   Suppose is a set, and let be the function such that for each . Then is the identity permutation on . When the set being permuted is clear by context, the identity permutation will simply be denoted .  Particularly, if is a finite set, then     Having a good algorithm for permutation products inspires us to want to apply the same permutation repeatedly, and so we can define the power of a permutation.   Natural powers of a permutation   Let be a set and . Define , and for each define recursively to be the kth power of .     Inverse of a permutation   Suppose for some set . Then is an inverse of if and only if .     Unique inverses   Suppose such that and . Then .    If , , and are as hypothesized, then .    Having inverses we can extend the definition of powers of permutations to all integer powers: if for some set , then Note that this is exactly analogous to the definition of integer powers of a nonzero real number.   Composition is not commutative   We need to note that composition is not commutative . Generally speaking for , . To demonstrate, consider the simple permutations and on the set .   Permutation products (as a composition) are not commutative.      The color pattern indicates the output of each permutation, so we see , but .      Abstract algebra and permutation groups   Groups   A group  is a set along with a closed associative operation which has an identity element and for which each element has a unique inverse .     Symmetric Group   If is a set, then is the symmetric group over , and is the symmetric group over symbols .    The study of group theory was inspired by the work of Lagrange on generalizations of permutation groups. This and many other topics are introduced to undergraduate math majors in their first course in Abstract Algebra, which is almost totally focused on group theory. An important result in group theory is Cayley's Theorem , which is especially important for those working with groups in an applied setting.   Group isomorphism   Suppose and are groups, and suppose there is a bijection such that for every . Then is isomorphic to and the bijection is a group isomorphism .     Cayley's Theorem   Every abstract group is isomorphic to a subgroup of a symmetric group.    Technically, a subgroup hasn't yet been defined, but it is simply a subset of a group which satisfies the definition of a group under the same operation as its parent group.     Cycles and disjoint cycle decomposition  Having now built all the definitions and theory necessary for an algebraic study of groups, we introduce the preferred notation for writing permutations used by group theorists. Called the disjoint cycle notation , it allows several important characteristics of permutations to be made very visible.   Fixed points and supports of permutations   Suppose and . Then fixes , or equivalently is a fixed point of , if and only if . These elements are collected into a set whose complement is the support of the permutation,     There is an interesting type of permutation whose behavior on its support behaves in a predictable fashion.   Cyclic permutations   Let be distinct integers in , where . Suppose has and also that   Then is an -cycle , or equivalently a cycle of length , and is denoted in cycle notation by or by when necessary for clarity.    An interesting result of the definition of cycles is that every -cycle is equivalent to the identity: if and , then , so and . For this reason it is common to write the identity in as .  Behavior of permutation supports  Suppose and suppose . Prove that    If and , but we assume towards a contradiction that , then we have , but ; this contradicts that is injective! Hence it must be that .    Disjoint cycles   Two cycles and are disjoint if and only if     While it is not true in the general case, one of the important reasons we consider cyclic permutations is that disjoint cycles commute.   Disjoint cyclic permutations commute   Let . If and are disjoint cycles in , then .    Suppose are disjoint cycles and . First assume . Since , it must be that . However by we know , so likewise . But then By an analogous argument, if we instead assume then .  Since and are disjoint, there is no . So finally, we assume ; but then obviously      Disjoint cycle decomposition   Every permutation in is either a cycle or a product of disjoint cycles.    If is the identity, we write and the proof is trivial. Therefore let us suppose is not the identity, so that . Then let . Since is finite, the set must be finite; let . But then , or is not a permutation! Therefore we can define , and we have constructed to be a cyclic permutation.  Proceeding in the same manner, define to be the mimimal element of which is not an element of for any . Then define so that is a cyclic permutation. Let the set of indices be . By our construction, whenever .  By the finiteness of and the preceding construction, we have as desired.    Moreover, this decomposition into disjoint cycles can be written uniquely up to the order in which the cycles appear, and the proof of the preceding theorem gives us exactly the method we use to obtain the decomposition.   Writing a permutation in disjoint cycle notation   Consider the permutation written in one-line notation as We can write the cycle decomposition of by starting with : the first cycle of the decomposition will be for some . In fact, completes a cycle, and we also can see that and . Hence the disjoint cycle notation for is     While cycle notation is useful for many purposes, some find it difficult to multiply permutations written in their cycle decompositions. Remember ! Multiplication of permutations is always left composition using after . All permutations are applied in right-to-left order.   Products of cycles   Consider the following permutations in : We can compute from right to left!   Calculating a product of cycles          1       2       3       4       5       6       7       8        So we write     Calculating products in cycle notation  From there are six ways to arrange a product of , , and ; find the other five and write them in cycle notation.   Calculating powers using cycle notation  Use the long permutation in  to investigate powers of permutations. What does the cycle decomposition allow you to do in finding ?    "
},
{
  "id": "p-106",
  "level": "2",
  "url": "sec-perms-def.html#p-106",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function domain codomain "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-perms-def.html#def-permutation",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Permutation.",
  "body": " Permutation   Suppose is a set. Then a function is a permutation of if and only if satisfies the following two criteria:  (Surjective\/Onto) For each element , there is an element such that .  (Injective\/One-to-one) For any elements , if then .     "
},
{
  "id": "conv-english-and-bracketn",
  "level": "2",
  "url": "sec-perms-def.html#conv-english-and-bracketn",
  "type": "Convention",
  "number": "2.1.2",
  "title": "",
  "body": " There are certain sets we will use frequently in our study of permutations, namely the set of letters of the English alphabet and subsets of the natural numbers. For convenience sake, we denote them as follows:   is the set of letters in the English alphabet.   whenever .    For a finite set which is not a subset of for any , we denote the set of all permutations of by .  "
},
{
  "id": "def-linenotations",
  "level": "2",
  "url": "sec-perms-def.html#def-linenotations",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Two-line notation.",
  "body": " Two-line notation   Let be a permutation of a set . Then the two-line notation for is . The one-line notation for is .   "
},
{
  "id": "conv-oneline",
  "level": "2",
  "url": "sec-perms-def.html#conv-oneline",
  "type": "Convention",
  "number": "2.1.4",
  "title": "",
  "body": " There is considerable disagreement in the literature as to whether the symbols in one-line notation should be separated by a comma, a space, or nothing at all. We adopt the convention that permutations listed in one-line notation will have no spaces between symbols for permutations of just a few symbols, but with a space between symbols for longer permutations. For instance, will be represented by , but will be represented by .  "
},
{
  "id": "exc-perms-s4",
  "level": "2",
  "url": "sec-perms-def.html#exc-perms-s4",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "Permutations of <span class=\"process-math\">\\(\\set{1,2,3,4}\\)<\/span>.",
  "body": "Permutations of  List all permutations of the set in one-line notation.   The permutations of are .  "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "sec-perms-def.html#def-composition",
  "type": "Definition",
  "number": "2.1.6",
  "title": "Permutation composition.",
  "body": " Permutation composition   Suppose for some set . Then the composition of after is the function defined by for each . Moreover, the composition symbol will be suppressed, and we will write as a product rather than a composition.   "
},
{
  "id": "rem-after",
  "level": "2",
  "url": "sec-perms-def.html#rem-after",
  "type": "Remark",
  "number": "2.1.7",
  "title": "Composition order.",
  "body": " Composition order  We must be careful to always consider permutation multiplication in the correct order. An easy way to remember this is to think of the composition symbol as being pronounced after . Then is the permutation which performs after performing .  "
},
{
  "id": "p-125",
  "level": "2",
  "url": "sec-perms-def.html#p-125",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closed "
},
{
  "id": "thm-perm-multiplication-closed",
  "level": "2",
  "url": "sec-perms-def.html#thm-perm-multiplication-closed",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "<span class=\"process-math\">\\(\\sym{A}\\)<\/span> is closed under composition.",
  "body": " is closed under composition   Let be a set and the set of permutations of , and suppose . Then and .    Let for a set . It suffices to show that , for then the case holds by a symmetric argument exchanging the roles of and .  In order to show that is injective, suppose that such that Then by definition, ; but since is injective, this necessitates that . In turn, since is injective, we have that , and thus have shown that whenever . Therefore is injective.  In order to show that is surjective, let . Since is surjective, there is some such that ; likewise, since is surjective, there is some such that . But then and hence . Since our selection of was arbitrary, we have that is surjective.  As we have shown to be both injective and surjective on , we have establised as desired.   "
},
{
  "id": "def-associativity",
  "level": "2",
  "url": "sec-perms-def.html#def-associativity",
  "type": "Definition",
  "number": "2.1.9",
  "title": "Associative multiplication.",
  "body": " Associative multiplication   Multiplication is associative if and only if    "
},
{
  "id": "thm-permprod-assoc",
  "level": "2",
  "url": "sec-perms-def.html#thm-permprod-assoc",
  "type": "Theorem",
  "number": "2.1.10",
  "title": "Composition in <span class=\"process-math\">\\(\\sym{A}\\)<\/span> is associative.",
  "body": " Composition in is associative   Let be a set, and suppose . Then .    Let for a set . Then for every , with all equalities justified by the definition of composition.   "
},
{
  "id": "alg-permproducts",
  "level": "2",
  "url": "sec-perms-def.html#alg-permproducts",
  "type": "Algorithm",
  "number": "2.1.11",
  "title": "Left-multiplication of permutations.",
  "body": " Left-multiplication of permutations   Suppose are permutations of the set , and further suppose the product is desired.   For each , do the following:  Let .  For each , do the following:  Update .    Write .      "
},
{
  "id": "exmp-permproducts-stack",
  "level": "2",
  "url": "sec-perms-def.html#exmp-permproducts-stack",
  "type": "Example",
  "number": "2.1.12",
  "title": "Stacking permutation products.",
  "body": " Stacking permutation products   Consider the permutations and suppose we want to determine the product . Now write the two-line notation for each permutation in a single column, where the top of the column is the rightmost permutation in the product; in this case, . To find the value of , for instance, you can trace the output of a permutation into the input of the next permutation, and so on.   A stacked permutation product diagram demonstrating .      This idea will be extended when we talk about cryptography later in .   "
},
{
  "id": "def-identity-perm",
  "level": "2",
  "url": "sec-perms-def.html#def-identity-perm",
  "type": "Definition",
  "number": "2.1.14",
  "title": "Identity permutation.",
  "body": " Identity permutation   Suppose is a set, and let be the function such that for each . Then is the identity permutation on . When the set being permuted is clear by context, the identity permutation will simply be denoted .  Particularly, if is a finite set, then    "
},
{
  "id": "def-perm-powers",
  "level": "2",
  "url": "sec-perms-def.html#def-perm-powers",
  "type": "Definition",
  "number": "2.1.15",
  "title": "Natural powers of a permutation.",
  "body": " Natural powers of a permutation   Let be a set and . Define , and for each define recursively to be the kth power of .   "
},
{
  "id": "def-perm-inverse",
  "level": "2",
  "url": "sec-perms-def.html#def-perm-inverse",
  "type": "Definition",
  "number": "2.1.16",
  "title": "Inverse of a permutation.",
  "body": " Inverse of a permutation   Suppose for some set . Then is an inverse of if and only if .   "
},
{
  "id": "thm-perm-inverse-unique",
  "level": "2",
  "url": "sec-perms-def.html#thm-perm-inverse-unique",
  "type": "Theorem",
  "number": "2.1.17",
  "title": "Unique inverses.",
  "body": " Unique inverses   Suppose such that and . Then .    If , , and are as hypothesized, then .   "
},
{
  "id": "exmp-permprod-noncomm",
  "level": "2",
  "url": "sec-perms-def.html#exmp-permprod-noncomm",
  "type": "Example",
  "number": "2.1.18",
  "title": "Composition is not commutative.",
  "body": " Composition is not commutative   We need to note that composition is not commutative . Generally speaking for , . To demonstrate, consider the simple permutations and on the set .   Permutation products (as a composition) are not commutative.      The color pattern indicates the output of each permutation, so we see , but .   "
},
{
  "id": "def-group",
  "level": "2",
  "url": "sec-perms-def.html#def-group",
  "type": "Definition",
  "number": "2.1.20",
  "title": "Groups.",
  "body": " Groups   A group  is a set along with a closed associative operation which has an identity element and for which each element has a unique inverse .   "
},
{
  "id": "def-symmetric-group",
  "level": "2",
  "url": "sec-perms-def.html#def-symmetric-group",
  "type": "Definition",
  "number": "2.1.21",
  "title": "Symmetric Group.",
  "body": " Symmetric Group   If is a set, then is the symmetric group over , and is the symmetric group over symbols .   "
},
{
  "id": "def-group-isomorphism",
  "level": "2",
  "url": "sec-perms-def.html#def-group-isomorphism",
  "type": "Definition",
  "number": "2.1.22",
  "title": "Group isomorphism.",
  "body": " Group isomorphism   Suppose and are groups, and suppose there is a bijection such that for every . Then is isomorphic to and the bijection is a group isomorphism .   "
},
{
  "id": "thm-cayleys-theorem",
  "level": "2",
  "url": "sec-perms-def.html#thm-cayleys-theorem",
  "type": "Theorem",
  "number": "2.1.23",
  "title": "Cayley's Theorem.",
  "body": " Cayley's Theorem   Every abstract group is isomorphic to a subgroup of a symmetric group.   "
},
{
  "id": "def-fixedpts-supports",
  "level": "2",
  "url": "sec-perms-def.html#def-fixedpts-supports",
  "type": "Definition",
  "number": "2.1.24",
  "title": "Fixed points and supports of permutations.",
  "body": " Fixed points and supports of permutations   Suppose and . Then fixes , or equivalently is a fixed point of , if and only if . These elements are collected into a set whose complement is the support of the permutation,    "
},
{
  "id": "def-cyclic-permutation",
  "level": "2",
  "url": "sec-perms-def.html#def-cyclic-permutation",
  "type": "Definition",
  "number": "2.1.25",
  "title": "Cyclic permutations.",
  "body": " Cyclic permutations   Let be distinct integers in , where . Suppose has and also that   Then is an -cycle , or equivalently a cycle of length , and is denoted in cycle notation by or by when necessary for clarity.   "
},
{
  "id": "exc-perms-support",
  "level": "2",
  "url": "sec-perms-def.html#exc-perms-support",
  "type": "Checkpoint",
  "number": "2.1.26",
  "title": "Behavior of permutation supports.",
  "body": "Behavior of permutation supports  Suppose and suppose . Prove that    If and , but we assume towards a contradiction that , then we have , but ; this contradicts that is injective! Hence it must be that .  "
},
{
  "id": "def-disjoint-cycles",
  "level": "2",
  "url": "sec-perms-def.html#def-disjoint-cycles",
  "type": "Definition",
  "number": "2.1.27",
  "title": "Disjoint cycles.",
  "body": " Disjoint cycles   Two cycles and are disjoint if and only if    "
},
{
  "id": "lem-disjoint-cycles-commute",
  "level": "2",
  "url": "sec-perms-def.html#lem-disjoint-cycles-commute",
  "type": "Lemma",
  "number": "2.1.28",
  "title": "Disjoint cyclic permutations commute.",
  "body": " Disjoint cyclic permutations commute   Let . If and are disjoint cycles in , then .    Suppose are disjoint cycles and . First assume . Since , it must be that . However by we know , so likewise . But then By an analogous argument, if we instead assume then .  Since and are disjoint, there is no . So finally, we assume ; but then obviously    "
},
{
  "id": "thm-cycdecomp",
  "level": "2",
  "url": "sec-perms-def.html#thm-cycdecomp",
  "type": "Theorem",
  "number": "2.1.29",
  "title": "Disjoint cycle decomposition.",
  "body": " Disjoint cycle decomposition   Every permutation in is either a cycle or a product of disjoint cycles.    If is the identity, we write and the proof is trivial. Therefore let us suppose is not the identity, so that . Then let . Since is finite, the set must be finite; let . But then , or is not a permutation! Therefore we can define , and we have constructed to be a cyclic permutation.  Proceeding in the same manner, define to be the mimimal element of which is not an element of for any . Then define so that is a cyclic permutation. Let the set of indices be . By our construction, whenever .  By the finiteness of and the preceding construction, we have as desired.   "
},
{
  "id": "exmp-disjoint-cycles",
  "level": "2",
  "url": "sec-perms-def.html#exmp-disjoint-cycles",
  "type": "Example",
  "number": "2.1.30",
  "title": "Writing a permutation in disjoint cycle notation.",
  "body": " Writing a permutation in disjoint cycle notation   Consider the permutation written in one-line notation as We can write the cycle decomposition of by starting with : the first cycle of the decomposition will be for some . In fact, completes a cycle, and we also can see that and . Hence the disjoint cycle notation for is    "
},
{
  "id": "exmp-products_of_cycles",
  "level": "2",
  "url": "sec-perms-def.html#exmp-products_of_cycles",
  "type": "Example",
  "number": "2.1.31",
  "title": "Products of cycles.",
  "body": " Products of cycles   Consider the following permutations in : We can compute from right to left!   Calculating a product of cycles          1       2       3       4       5       6       7       8        So we write    "
},
{
  "id": "exc-calc-perm-prods",
  "level": "2",
  "url": "sec-perms-def.html#exc-calc-perm-prods",
  "type": "Checkpoint",
  "number": "2.1.33",
  "title": "Calculating products in cycle notation.",
  "body": "Calculating products in cycle notation  From there are six ways to arrange a product of , , and ; find the other five and write them in cycle notation.  "
},
{
  "id": "exc-calc-perm-powers",
  "level": "2",
  "url": "sec-perms-def.html#exc-calc-perm-powers",
  "type": "Checkpoint",
  "number": "2.1.34",
  "title": "Calculating powers using cycle notation.",
  "body": "Calculating powers using cycle notation  Use the long permutation in  to investigate powers of permutations. What does the cycle decomposition allow you to do in finding ?  "
},
{
  "id": "sec-perms-oop",
  "level": "1",
  "url": "sec-perms-oop.html",
  "type": "Section",
  "number": "2.2",
  "title": "Project: Permutations in Python",
  "body": " Project: Permutations in Python  Permutations in Python    We will use permutations to investigate the Python ideas of classes , objects , attributes , and methods .    Create properly named and properly formatted files in and write the class definition and docstring.  Combine and to initialize an object of type AlgoPerm .  Add methods and attributes which round out the utility of the AlgoPerm class in , , , and       Object-oriented programming   In the viewpoint of object-oriented programming (OOP), objects contain data in the form of attributes and code in the form of methods . Python is a class-based language, where the class of an object determines its type; an object is a programming construct that can refer to itself, has certain data associated with itself, and can act in certain ways.    Permutations provide an exceptional introduction to the topic of OOP since every permutation is an interesting object in its own right (as a group element) but also performs an action (as a function)! For implementation purposes, we will only consider permutations with a finite domain.   A strong benefit to the OOP mode of thinking is that it eliminates much type checking: functions which act on an object in a specific class can be written under the assumption that the object is, in fact, a valid class member. For instance, if we want to determine the disjoint cycle notation for a permutation written in one-line notation, our cycle code doesn't need to check to see whether the one-line notation validly defines a permutation, since that is handled when new permutation objects are named.     Classes   The class command  Classes in Python are defined via a block structure, similarly to functions.   Python class definition   class MyClass: statement_1 statement_2 ... statement_n    Most of the statement_i lines at the first level of indentation to a class definition should be the definitions of methods . Assignments at the first level of indentation define class attributes , the values of which are held in common by all members of the class. Object attributes are defined within methods.  A method is a function defined within the first level of indentation of a class, and the first argument to a method is special: it is the name used within the method to refer to the object itself. In Python, the convention is to use self as the name for the first argument, and every method should require it.   Mathematicians love the class\/object organization, whether or not they know it: think about a proof which begins with the words, let be a rational number. Once the statement is pronounced, there are so many truths implied about , , and , all of which come just from knowing that . All of that works because we recognize that the object named is a particular instance of the class of things called rational numbers.    Permutation project files   In this project, we'll be working in tandem in two files, the first containing our Class definition and the second being our main execution file. We want to separate the two so that we can use our permutation class file later in other projects via the import command without generating a bunch of output relating to this current project.   Using IDLE, create a blank Python module file called AlgoPerm.py in the same easy-to-find folder on your computer as you used for . The header information should have a file title of Math 3380 Permutations Class .  Create another blank file in the same location, called aam_proj2.py , and give it the correct header information.  On the first non-comment line of aam_proj2.py , insert the command from AlgoPerm import * . This will allow you to use all of the classes and functions defined in the AlgoPerm.py module in this file.  Start the class definition at the bottom of the file using  class AlgoPerm: \"\"\"A class of permutations useable for AAM.\"\"\"       Creating new objects  Given an empty class definition we cannot do anything. In order for a class to be useful it must be possible to create objects in the class. This is variously called instantiation or initialization .   Instantiation   An instance is a particular member of a class. Class instantiation is the declaration that a named object belongs to a certain class. For example, declaring Fido is a dog is an instantiation of the class of dog to the object named Fido . Mathematically, this is allows an existential quantification : there exists a dog, named Fido.   This sidesteps the philosophical question of realism (the universal category of dog exists) versus nominalism (the category of dog only exists because we have objects so labeled).     A slightly less complicated way of thinking of this is to recognize that until a value is assigned to a variable name, the variable name does not mean anything to Python. Instantiation is the way of giving a type to a particular name. For a simple type like int , we do this just by assigning the value to a name: bob = 5 . However we could first instantiate that bob is to be an integer, by declaring bob = int() , but in this case the int class comes equipped with a default value .   Predefined types do not require instantiation, but permit it.   >>>  bob = int(); print(bob)  0     Python object instantiation  Important methods for Python classes often have a strange naming convention, having the form __methodname__ . The first of these we will use is the initialization method , called __init__ . It is very important that the __init__ method must have at least the self argument, along with arguments for any other information which must be known when creating a new object.   The __init__ method for a class definition   class MyClass: \"\"\"This is the class docstring which is printed by `help(MyClass)`\"\"\" def __init__(self, *args, **kwargs): statement_1 statement_2 statement_3 ...    After executing this class block containing a valid __init__ method, all that is necessary to create a new MyClass object is to assign the class to a name.   >>>  new_obj = MyClass(arg0, arg1, arg2, keya = \"bob\", keyb = \"larry\")   Using the class name MyClass as a function invokes the __init__ method in such a way that the name new_obj is associated with an object of MyClass and then automatically used as the self argument of the __init__ method.    Function argument lists  In we see two special arguments used in a function definition, *args and **kwargs . The names of the local variables defined by these arguments are respectively args and kwargs . The first, args , consists of a tuple of all positionally-determined arguments passed to the function. The second, kwargs , consists of a dictionary whose keys are the keywords of arguments passed to the function, and the associated values are the values of those arguments.   Functions allowing arbitrary arguments   >>>  def my_func(*args, **kwargs):  ...  print(type(args), len(args))  ...  print(type(kwargs), list(kwargs.items()))  ...    >>>  my_func(13, 17, 19,  ...  keya=\"a first keyword argument\"  ...  keyb=\"A SECOND!!\" )  <class 'tuple'> 3 <class 'dict'> [('keya', 'a first keyword argument'), ('keyb', 'A SECOND!!')]      The self argument of a method  When defining a method for a class there are vanishingly few cases where the method does not need to be able to refer to the object on which it is called. This referent object is most often called self and is always the first argument of the function definition.  Remember: even if you forget to name the first argument to a method self , it always takes the value of the object on which the method is called, regardless of whether or not other arguments are provided or needed by the method definition.   We have specified that the domain and the mapping are the two pieces of information necessary to specify a permutation, and that makes perfect sense. However, if one-line or two-line notation is the format in which a permutation is specified, then the domain need not be listed separately.    Start the __init__ method  Explain why the following might be a good start to the __init__ method and write a docstring that explains how the arguments are used.   class AlgoPerm: \"\"\"A class of permutations for use in Math 3380 Algorithms.\"\"\" def __init__(self, mapping, domain=None): \"\"\"docstring\"\"\" # Check to see whether mapping provides a valid permutation. 'Valid' # Check to see whether a domain was given, and if so, check # that it agrees with the domain of the mapping. 'Domain works' # Convert the given mapping into a 'canonical' storage format # and assign it to an attribute. 'Assign mapping' # Assign any other interesting attributes 'Assign attributes'    One other method should be built into a minimal working class definition. The __repr__(self) method is a method which must always return a str and generally should return a string which provides valid input to the __init__ method. This will be discussed after considering what valid input means in the first place!     Input validation  Input validation is required whenever there is a possibility that any user of code (including the original programmer) might make a mistake on using the code that renders the code incorrect. It takes some extra work to make sure that you have covered all the possible input cases and either correctly handled them or provided meaningful error messages. That said, there is a serious benefit to having performed a strong input validation on the __init__ method of a class: now everything in the class is guaranteed to have the right form. You never need to wonder whether or not self is going to have the correct attributes and work correctly.  In order to begin a class of permutations, we first need a clear understanding of what we should consider to be valid input to a permutation. Once we can describe what data is necessary and sufficient to determine the permutation uniquely, we can construct an algorithm to determine whether input satisfies the criteria, and then implement the algorithm. For now, we will restrict our permutations to permutations of ; the group of these permutations is .  As a first consideration, we already know that a good way to map arbitrary data in Python to other arbitrary data is via a dictionary, and in fact this is a great way to think of two-line notation for a permutation. The only validation which needs to take place is to make sure that the sets of keys and of values of a dictionary given as the mapping argument to AlgoPerm.__init__(...) are equal.   dict.keys() , dict.values() , and dict.items() methods  The methods dict.keys() and dict.values() produce list -like objects containing the keys and values respectively of a dict . dict.items() produces a list -like object containing tuples (k,v) where k is a key and v its associated value. All three outputs are iterable.   Keys and values of dict show unexpected behavior   >>>  bob = {1:2, 'fruit':'tomato', 'pi':3.1415926535}  >>>  larry = {'fruit':bob[1], 'pi':bob['fruit'], 1:bob['pi']}  >>>  print(bob.keys(), larry.keys())  dict_keys([1, 'fruit', 'pi']) dict_keys(['fruit', 'pi', 1])  >>>  print(bob.keys() == larry.keys())  True  >>>  print(bob.values(), larry.values())  dict_values([2, 'tomato', 3.1415926535]) dict_values([2, 'tomato', 3.1415926535])  >>>  print(bob.values() == larry.values())  False  >>>  print(set(bob.values()) == set(larry.values()))  True    As demonstrated above, it is unclear by casual inspection whether the keys or values of a dictionary are in fact equal by using just the dict.keys() and dict.values() methods! Be careful.   If a list is to be used as the one-line notation for a permutation in , then the list must then be a rearrangement of the numbers .   A list named in_list represents the one-line notation of a permutation if and only if the maximum element of in_list is M and when sorted the values of in_list correspond to the values of range(1, M+1) .   This allows us to introduce some new tools.   Python min and max built-in functions  The min function can be used in two ways: if given a single iterable argument arg1 , then min(arg1) returns the minimum element of arg1 . Given two or more arguments, min(arg1, arg2, ...) returns the minimum argument. As should be expected, max behaves in the corresponding manner but returns the maximum value.  It is not always clear what ordering is used among comparable items.   An example using the min and max commands in Python   >>>  min(\"This is a string\")  ' '  >>>  max(\"Bob\", \"bob\", \"Larry\")  'bob'      Python sorted built-in function  Given an iterable argument arg1 , the built-in function sorted(arg1) returns an increasing sorted list of the contents of arg1 .   An example of the sorted built-in Python function   >>>  sorted(\"This is a string\".split())  ['This', 'a', 'is', 'string']    That example also contains a sneaky example of the str.split() method. The ordering used on strings is lexicographic (dictionary) ordering with the caveat that the order of characters is per their ordinal, via the ord function.   Now we write an algorithm which applies .   Verifying that a sequence is one-line notation  Suppose that for some fixed a sequence is given, and let be a function which sorts sequences in ascending order.    Let .  If , then is the one-line notation of a permutation of .     For maximum flexibility we will define the canonical data storage of the mapping of a permutation to actually be the dict of its two-line notation.    Flesh out __init__ with input validation   In order to start building a useful permutation class, we make the assumption that the input has to be in one-line notation. This is easy to change later once we have a better understanding of what we want from our permutation code.   Implement your algorithm in the AlgoPerm class. Begin by editing the __init__ method of AlgoPerm so that it looks as follows:  def __init__(self, mapping, domain=None): # Check to see whether mapping provides a valid permutation. if type(mapping) == dict: # This is effectively two-line notation. Each value must also be a key. # # Change the following line to validate the input!!! keyset_equals_valueset = False # if keyset_equals_valueset: # This use of '.copy()' has to do with data in memory versus # the name of a variable. map_dict = mapping.copy() else: raise ValueError(\"Mapping does not specify valid permutation as dictionary.\") elif type(mapping) == list: # One-line notation. Have to check that the mapping corresponds to # the list [1, 2, ..., k] for some k. # # Change the following line to validate the input!!! valid_oneline = False # if valid_oneline: # build the mapping dictionary map_dict = { } for i in range(maxx): map_dict[i+1] = mapping[i] else: raise ValueError(\"Mapping does not specify valid one-line notation.\") elif type(mapping) == tuple: # Cycle notation. This is tricky! Skip it for now. raise NotImplementedError(\"Cannot currently define a permutation from cycle tuples\") else: raise TypeError(f\"Mapping must be list (oneline notation), tuple (cycle notation), or dictionary, not {type(mapping)}.\") # # We'll rewrite this later: if domain!=None: pass set_domain = set(map_dict.keys()) # Assign the value of map_dict into the self.mapping attribute self._mapping = map_dict # Set all attributes other than the canonical data storage. self._domain = set_domain  If you copied and pasted that into your file, it is likely that you are having errors. Try typing it in by hand instead.  Correct the two data validation lines from the code.  In your aam_proj2.py file, test your newly defined and corrected class. Add the following lines to the bottom of the aam_proj2.py file and execute it.  a = AlgoPerm([2, 1, 5, 6, 3, 4, 10, 9, 8, 7]) print(f\"a = {a}\") b = AlgoPerm({1: 2, 2: 3, 3: 5, 5: 1, 4: 4, 6: 6, 7: 7, 8: 8}) print(f\"b = {b}\")      Representations of permutations  Add the __repr__ method to your AlgoPerm class.   def __repr__(self): \"\"\"Return a string containing the mapping dictionary of an AlgoPerm.\"\"\" return str(self._mapping)   If you execute the aam-proj2.py file after making this change, you'll see that the print statements have a more pleasing output.     Additional methods  In the previous section, we discussed a number of mathematical operations which can be performed on permutations. The first and fundamentally most important operation to define for our AlgoPerm class is the calling method. This is what we mean when we use the notation to represent the value assigned by a function named to a domain value .   __call__ method  An object my_obj which is an instance of MyClass can be called using my_obj(x) if and only if the __call__ method is defined in MyClass and x is a valid input.   The arguments to the __call__ method in our AlgoPerm class are simple: the self argument (as always) and one other argument, which we will name other .    Calling AlgoPerm   There is a mathematically important reason and a computationally important reason to define this method. Mathematically, the method is important because permutations are functions, and functions are callable. Computationally it is important because we don't want to have to worry about exactly how the AlgoPerm class is written in order to use it. Specifically, once we write the __call__ method we don't have to keep track of the AlgoPerm._mapping most of the time, because we can instead use function notation.   Define a __call__ method in your AlgoPerm class.  def __call__(self, other): \"\"\"Perform self(other)\"\"\" try: return self._mapping[other] except KeyError: raise ValueError(f\"{other} is not in the domain of {self}\")   Test your new method in aam_proj2.py by adding print(a(8)) and print(b(31)) lines. Diagnose what occurs and why.   With the ability to use our AlgoPerm objects as functions, the next feature we should define is composition. Recalling that we want to read as after , we define new methods which are not special double-underscore methods.    AlgoPerm methods for domain and after  Define a domain method for AlgoPerm as follows.  def domain(self): \"\"\"Return the set consisting of the domain of self.\"\"\" return self._domain  While we could just continue to access the _domain attribute, it is good programming style to not refer directly to attributes, but instead use methods to access their values.  Define a after method for AlgoPerm , beginning as follows.  def after(self, other): \"\"\"Return the AlgoPerm obtained by composition of self after other.\"\"\" # 1. Validate that other is an AlgoPerm # # 2. Validate that the domain of other is a subset of the domain of self # # Otherwise, define an empty new mapping dictionary else: new_mapping = { } # 3. Iterate over all the elements of the domain of other, making the # correct assignments in new_mapping # # 4. Iterate over all the elements of the domain of self which are # not in the domain of other, making the correct assignments # in new_mapping # # Return the correct AlgoPerm return AlgoPerm(new_mapping)   The new method after has several steps described in comments. Finish the code so that the result of print(a.after(b)) in your aam_proj2.py file is {1: 1, 2: 5, 3: 3, 4: 6, 5: 2, 6: 4, 7: 10, 8: 9, 9: 8, 10: 7} . Hint: You should see what methods are available for the set class, by looking at help(set) .   Operator overloading is the fancy name for when we have one symbol (such as * ) which must perform multiple tasks in multiple different contexts. All of the double-underscore __methods__ we have been working with are the means by which Python performs operator overloading. Rather than continuing to use after for composition, it becomes much easier to use Python's multiplication operator * as we use it mathematically. Overload the * operator for AlgoPerm by defining the following new method.  def __mul__(self, right): \"\"\"Implement self*right.\"\"\" return self.after(right)  Since we know it is very important to be consistent with your left and right multiplication, we now note that the left multiplication of self*right is effected using __mul__(self, right) and the right multiplication of left * self is effected using a different method, __rmul__(self, left) . There is an order of operations in Python just as in mathematics, and Python checks for a valid left multiplication before checking for a valid right multiplication.     Inverses of AlgoPerm objects   Since a permutation is a bijection, an important last tool is to build a inverse method in the AlgoPerm class.   Finish the following code.  def inverse(self): \"\"\"Return the AlgoPerm which is the inverse of self.\"\"\" # Set pairs to be the list of tuples (x, self(x)) pairs = self._mapping.items() # Create an empty inverse mapping dictionary inv_mapping = { } # Iterate through pairs assigning the correct inverse mappings. # return AlgoPerm(inv_mapping)   In your aam_proj2.py file, investigate the difference between a*b.inverse() and (a*b).inverse() . Explain why they should be different, mathematically.     In the next section, we will investigate an application of permutations that makes all this work helpful.   "
},
{
  "id": "objectives-3",
  "level": "2",
  "url": "sec-perms-oop.html#objectives-3",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  We will use permutations to investigate the Python ideas of classes , objects , attributes , and methods .    Create properly named and properly formatted files in and write the class definition and docstring.  Combine and to initialize an object of type AlgoPerm .  Add methods and attributes which round out the utility of the AlgoPerm class in , , , and    "
},
{
  "id": "def-oop",
  "level": "2",
  "url": "sec-perms-oop.html#def-oop",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Object-oriented programming.",
  "body": " Object-oriented programming   In the viewpoint of object-oriented programming (OOP), objects contain data in the form of attributes and code in the form of methods . Python is a class-based language, where the class of an object determines its type; an object is a programming construct that can refer to itself, has certain data associated with itself, and can act in certain ways.   "
},
{
  "id": "tech-class",
  "level": "2",
  "url": "sec-perms-oop.html#tech-class",
  "type": "Technology",
  "number": "2.2.2",
  "title": "The <code class=\"code-inline tex2jax_ignore\">class<\/code> command.",
  "body": " The class command  Classes in Python are defined via a block structure, similarly to functions.   Python class definition   class MyClass: statement_1 statement_2 ... statement_n    Most of the statement_i lines at the first level of indentation to a class definition should be the definitions of methods . Assignments at the first level of indentation define class attributes , the values of which are held in common by all members of the class. Object attributes are defined within methods.  A method is a function defined within the first level of indentation of a class, and the first argument to a method is special: it is the name used within the method to refer to the object itself. In Python, the convention is to use self as the name for the first argument, and every method should require it.  "
},
{
  "id": "prj-perms-projfiles",
  "level": "2",
  "url": "sec-perms-oop.html#prj-perms-projfiles",
  "type": "Activity",
  "number": "2.1",
  "title": "Permutation project files.",
  "body": " Permutation project files   In this project, we'll be working in tandem in two files, the first containing our Class definition and the second being our main execution file. We want to separate the two so that we can use our permutation class file later in other projects via the import command without generating a bunch of output relating to this current project.   Using IDLE, create a blank Python module file called AlgoPerm.py in the same easy-to-find folder on your computer as you used for . The header information should have a file title of Math 3380 Permutations Class .  Create another blank file in the same location, called aam_proj2.py , and give it the correct header information.  On the first non-comment line of aam_proj2.py , insert the command from AlgoPerm import * . This will allow you to use all of the classes and functions defined in the AlgoPerm.py module in this file.  Start the class definition at the bottom of the file using  class AlgoPerm: \"\"\"A class of permutations useable for AAM.\"\"\"   "
},
{
  "id": "p-204",
  "level": "2",
  "url": "sec-perms-oop.html#p-204",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instantiation initialization "
},
{
  "id": "def-instantiation",
  "level": "2",
  "url": "sec-perms-oop.html#def-instantiation",
  "type": "Definition",
  "number": "2.2.4",
  "title": "Instantiation.",
  "body": " Instantiation   An instance is a particular member of a class. Class instantiation is the declaration that a named object belongs to a certain class. For example, declaring Fido is a dog is an instantiation of the class of dog to the object named Fido . Mathematically, this is allows an existential quantification : there exists a dog, named Fido.   This sidesteps the philosophical question of realism (the universal category of dog exists) versus nominalism (the category of dog only exists because we have objects so labeled).    "
},
{
  "id": "p-207",
  "level": "2",
  "url": "sec-perms-oop.html#p-207",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "default value "
},
{
  "id": "list-instantiating_ints",
  "level": "2",
  "url": "sec-perms-oop.html#list-instantiating_ints",
  "type": "Listing",
  "number": "2.2.5",
  "title": "",
  "body": " Predefined types do not require instantiation, but permit it.   >>>  bob = int(); print(bob)  0   "
},
{
  "id": "tech-instantiation",
  "level": "2",
  "url": "sec-perms-oop.html#tech-instantiation",
  "type": "Technology",
  "number": "2.2.6",
  "title": "Python object instantiation.",
  "body": " Python object instantiation  Important methods for Python classes often have a strange naming convention, having the form __methodname__ . The first of these we will use is the initialization method , called __init__ . It is very important that the __init__ method must have at least the self argument, along with arguments for any other information which must be known when creating a new object.   The __init__ method for a class definition   class MyClass: \"\"\"This is the class docstring which is printed by `help(MyClass)`\"\"\" def __init__(self, *args, **kwargs): statement_1 statement_2 statement_3 ...    After executing this class block containing a valid __init__ method, all that is necessary to create a new MyClass object is to assign the class to a name.   >>>  new_obj = MyClass(arg0, arg1, arg2, keya = \"bob\", keyb = \"larry\")   Using the class name MyClass as a function invokes the __init__ method in such a way that the name new_obj is associated with an object of MyClass and then automatically used as the self argument of the __init__ method.  "
},
{
  "id": "tech-argument_lists",
  "level": "2",
  "url": "sec-perms-oop.html#tech-argument_lists",
  "type": "Technology",
  "number": "2.2.8",
  "title": "Function argument lists.",
  "body": " Function argument lists  In we see two special arguments used in a function definition, *args and **kwargs . The names of the local variables defined by these arguments are respectively args and kwargs . The first, args , consists of a tuple of all positionally-determined arguments passed to the function. The second, kwargs , consists of a dictionary whose keys are the keywords of arguments passed to the function, and the associated values are the values of those arguments.   Functions allowing arbitrary arguments   >>>  def my_func(*args, **kwargs):  ...  print(type(args), len(args))  ...  print(type(kwargs), list(kwargs.items()))  ...    >>>  my_func(13, 17, 19,  ...  keya=\"a first keyword argument\"  ...  keyb=\"A SECOND!!\" )  <class 'tuple'> 3 <class 'dict'> [('keya', 'a first keyword argument'), ('keyb', 'A SECOND!!')]    "
},
{
  "id": "tech-self-argument",
  "level": "2",
  "url": "sec-perms-oop.html#tech-self-argument",
  "type": "Technology",
  "number": "2.2.10",
  "title": "The <code class=\"code-inline tex2jax_ignore\">self<\/code> argument of a method.",
  "body": " The self argument of a method  When defining a method for a class there are vanishingly few cases where the method does not need to be able to refer to the object on which it is called. This referent object is most often called self and is always the first argument of the function definition.  Remember: even if you forget to name the first argument to a method self , it always takes the value of the object on which the method is called, regardless of whether or not other arguments are provided or needed by the method definition.  "
},
{
  "id": "proj-perms-initmethod",
  "level": "2",
  "url": "sec-perms-oop.html#proj-perms-initmethod",
  "type": "Activity",
  "number": "2.2",
  "title": "Start the <code class=\"code-inline tex2jax_ignore\">__init__<\/code> method.",
  "body": " Start the __init__ method  Explain why the following might be a good start to the __init__ method and write a docstring that explains how the arguments are used.   class AlgoPerm: \"\"\"A class of permutations for use in Math 3380 Algorithms.\"\"\" def __init__(self, mapping, domain=None): \"\"\"docstring\"\"\" # Check to see whether mapping provides a valid permutation. 'Valid' # Check to see whether a domain was given, and if so, check # that it agrees with the domain of the mapping. 'Domain works' # Convert the given mapping into a 'canonical' storage format # and assign it to an attribute. 'Assign mapping' # Assign any other interesting attributes 'Assign attributes'   "
},
{
  "id": "tech-dict-keys_values_items",
  "level": "2",
  "url": "sec-perms-oop.html#tech-dict-keys_values_items",
  "type": "Technology",
  "number": "2.2.11",
  "title": "<code class=\"code-inline tex2jax_ignore\">dict.keys()<\/code>, <code class=\"code-inline tex2jax_ignore\">dict.values()<\/code>, and <code class=\"code-inline tex2jax_ignore\">dict.items()<\/code> methods.",
  "body": " dict.keys() , dict.values() , and dict.items() methods  The methods dict.keys() and dict.values() produce list -like objects containing the keys and values respectively of a dict . dict.items() produces a list -like object containing tuples (k,v) where k is a key and v its associated value. All three outputs are iterable.   Keys and values of dict show unexpected behavior   >>>  bob = {1:2, 'fruit':'tomato', 'pi':3.1415926535}  >>>  larry = {'fruit':bob[1], 'pi':bob['fruit'], 1:bob['pi']}  >>>  print(bob.keys(), larry.keys())  dict_keys([1, 'fruit', 'pi']) dict_keys(['fruit', 'pi', 1])  >>>  print(bob.keys() == larry.keys())  True  >>>  print(bob.values(), larry.values())  dict_values([2, 'tomato', 3.1415926535]) dict_values([2, 'tomato', 3.1415926535])  >>>  print(bob.values() == larry.values())  False  >>>  print(set(bob.values()) == set(larry.values()))  True    As demonstrated above, it is unclear by casual inspection whether the keys or values of a dictionary are in fact equal by using just the dict.keys() and dict.values() methods! Be careful.  "
},
{
  "id": "fact-list-is-permutation",
  "level": "2",
  "url": "sec-perms-oop.html#fact-list-is-permutation",
  "type": "Fact",
  "number": "2.2.13",
  "title": "",
  "body": " A list named in_list represents the one-line notation of a permutation if and only if the maximum element of in_list is M and when sorted the values of in_list correspond to the values of range(1, M+1) .  "
},
{
  "id": "tech-min-max",
  "level": "2",
  "url": "sec-perms-oop.html#tech-min-max",
  "type": "Technology",
  "number": "2.2.14",
  "title": "Python <code class=\"code-inline tex2jax_ignore\">min<\/code> and <code class=\"code-inline tex2jax_ignore\">max<\/code> built-in functions.",
  "body": " Python min and max built-in functions  The min function can be used in two ways: if given a single iterable argument arg1 , then min(arg1) returns the minimum element of arg1 . Given two or more arguments, min(arg1, arg2, ...) returns the minimum argument. As should be expected, max behaves in the corresponding manner but returns the maximum value.  It is not always clear what ordering is used among comparable items.   An example using the min and max commands in Python   >>>  min(\"This is a string\")  ' '  >>>  max(\"Bob\", \"bob\", \"Larry\")  'bob'    "
},
{
  "id": "tech-sorted",
  "level": "2",
  "url": "sec-perms-oop.html#tech-sorted",
  "type": "Technology",
  "number": "2.2.16",
  "title": "Python <code class=\"code-inline tex2jax_ignore\">sorted<\/code> built-in function.",
  "body": " Python sorted built-in function  Given an iterable argument arg1 , the built-in function sorted(arg1) returns an increasing sorted list of the contents of arg1 .   An example of the sorted built-in Python function   >>>  sorted(\"This is a string\".split())  ['This', 'a', 'is', 'string']    That example also contains a sneaky example of the str.split() method. The ordering used on strings is lexicographic (dictionary) ordering with the caveat that the order of characters is per their ordinal, via the ord function.  "
},
{
  "id": "algo-list-is-oneline",
  "level": "2",
  "url": "sec-perms-oop.html#algo-list-is-oneline",
  "type": "Algorithm",
  "number": "2.2.18",
  "title": "Verifying that a sequence is one-line notation.",
  "body": " Verifying that a sequence is one-line notation  Suppose that for some fixed a sequence is given, and let be a function which sorts sequences in ascending order.    Let .  If , then is the one-line notation of a permutation of .    "
},
{
  "id": "proj-perms-validation",
  "level": "2",
  "url": "sec-perms-oop.html#proj-perms-validation",
  "type": "Activity",
  "number": "2.3",
  "title": "Flesh out <code class=\"code-inline tex2jax_ignore\">__init__<\/code> with input validation.",
  "body": " Flesh out __init__ with input validation   In order to start building a useful permutation class, we make the assumption that the input has to be in one-line notation. This is easy to change later once we have a better understanding of what we want from our permutation code.   Implement your algorithm in the AlgoPerm class. Begin by editing the __init__ method of AlgoPerm so that it looks as follows:  def __init__(self, mapping, domain=None): # Check to see whether mapping provides a valid permutation. if type(mapping) == dict: # This is effectively two-line notation. Each value must also be a key. # # Change the following line to validate the input!!! keyset_equals_valueset = False # if keyset_equals_valueset: # This use of '.copy()' has to do with data in memory versus # the name of a variable. map_dict = mapping.copy() else: raise ValueError(\"Mapping does not specify valid permutation as dictionary.\") elif type(mapping) == list: # One-line notation. Have to check that the mapping corresponds to # the list [1, 2, ..., k] for some k. # # Change the following line to validate the input!!! valid_oneline = False # if valid_oneline: # build the mapping dictionary map_dict = { } for i in range(maxx): map_dict[i+1] = mapping[i] else: raise ValueError(\"Mapping does not specify valid one-line notation.\") elif type(mapping) == tuple: # Cycle notation. This is tricky! Skip it for now. raise NotImplementedError(\"Cannot currently define a permutation from cycle tuples\") else: raise TypeError(f\"Mapping must be list (oneline notation), tuple (cycle notation), or dictionary, not {type(mapping)}.\") # # We'll rewrite this later: if domain!=None: pass set_domain = set(map_dict.keys()) # Assign the value of map_dict into the self.mapping attribute self._mapping = map_dict # Set all attributes other than the canonical data storage. self._domain = set_domain  If you copied and pasted that into your file, it is likely that you are having errors. Try typing it in by hand instead.  Correct the two data validation lines from the code.  In your aam_proj2.py file, test your newly defined and corrected class. Add the following lines to the bottom of the aam_proj2.py file and execute it.  a = AlgoPerm([2, 1, 5, 6, 3, 4, 10, 9, 8, 7]) print(f\"a = {a}\") b = AlgoPerm({1: 2, 2: 3, 3: 5, 5: 1, 4: 4, 6: 6, 7: 7, 8: 8}) print(f\"b = {b}\")   "
},
{
  "id": "proj-perms-representations",
  "level": "2",
  "url": "sec-perms-oop.html#proj-perms-representations",
  "type": "Activity",
  "number": "2.4",
  "title": "Representations of permutations.",
  "body": " Representations of permutations  Add the __repr__ method to your AlgoPerm class.   def __repr__(self): \"\"\"Return a string containing the mapping dictionary of an AlgoPerm.\"\"\" return str(self._mapping)   If you execute the aam-proj2.py file after making this change, you'll see that the print statements have a more pleasing output.  "
},
{
  "id": "p-242",
  "level": "2",
  "url": "sec-perms-oop.html#p-242",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "calling "
},
{
  "id": "tech-_call__",
  "level": "2",
  "url": "sec-perms-oop.html#tech-_call__",
  "type": "Technology",
  "number": "2.2.19",
  "title": "<code class=\"code-inline tex2jax_ignore\">__call__<\/code> method.",
  "body": " __call__ method  An object my_obj which is an instance of MyClass can be called using my_obj(x) if and only if the __call__ method is defined in MyClass and x is a valid input.  "
},
{
  "id": "proj-perms-call_method",
  "level": "2",
  "url": "sec-perms-oop.html#proj-perms-call_method",
  "type": "Activity",
  "number": "2.5",
  "title": "Calling <code class=\"code-inline tex2jax_ignore\">AlgoPerm<\/code>.",
  "body": " Calling AlgoPerm   There is a mathematically important reason and a computationally important reason to define this method. Mathematically, the method is important because permutations are functions, and functions are callable. Computationally it is important because we don't want to have to worry about exactly how the AlgoPerm class is written in order to use it. Specifically, once we write the __call__ method we don't have to keep track of the AlgoPerm._mapping most of the time, because we can instead use function notation.   Define a __call__ method in your AlgoPerm class.  def __call__(self, other): \"\"\"Perform self(other)\"\"\" try: return self._mapping[other] except KeyError: raise ValueError(f\"{other} is not in the domain of {self}\")   Test your new method in aam_proj2.py by adding print(a(8)) and print(b(31)) lines. Diagnose what occurs and why.  "
},
{
  "id": "proj-perms-after_method",
  "level": "2",
  "url": "sec-perms-oop.html#proj-perms-after_method",
  "type": "Activity",
  "number": "2.6",
  "title": "<code class=\"code-inline tex2jax_ignore\">AlgoPerm<\/code> methods for <code class=\"code-inline tex2jax_ignore\">domain<\/code> and <code class=\"code-inline tex2jax_ignore\">after<\/code>.",
  "body": " AlgoPerm methods for domain and after  Define a domain method for AlgoPerm as follows.  def domain(self): \"\"\"Return the set consisting of the domain of self.\"\"\" return self._domain  While we could just continue to access the _domain attribute, it is good programming style to not refer directly to attributes, but instead use methods to access their values.  Define a after method for AlgoPerm , beginning as follows.  def after(self, other): \"\"\"Return the AlgoPerm obtained by composition of self after other.\"\"\" # 1. Validate that other is an AlgoPerm # # 2. Validate that the domain of other is a subset of the domain of self # # Otherwise, define an empty new mapping dictionary else: new_mapping = { } # 3. Iterate over all the elements of the domain of other, making the # correct assignments in new_mapping # # 4. Iterate over all the elements of the domain of self which are # not in the domain of other, making the correct assignments # in new_mapping # # Return the correct AlgoPerm return AlgoPerm(new_mapping)   The new method after has several steps described in comments. Finish the code so that the result of print(a.after(b)) in your aam_proj2.py file is {1: 1, 2: 5, 3: 3, 4: 6, 5: 2, 6: 4, 7: 10, 8: 9, 9: 8, 10: 7} . Hint: You should see what methods are available for the set class, by looking at help(set) .   Operator overloading is the fancy name for when we have one symbol (such as * ) which must perform multiple tasks in multiple different contexts. All of the double-underscore __methods__ we have been working with are the means by which Python performs operator overloading. Rather than continuing to use after for composition, it becomes much easier to use Python's multiplication operator * as we use it mathematically. Overload the * operator for AlgoPerm by defining the following new method.  def __mul__(self, right): \"\"\"Implement self*right.\"\"\" return self.after(right)  Since we know it is very important to be consistent with your left and right multiplication, we now note that the left multiplication of self*right is effected using __mul__(self, right) and the right multiplication of left * self is effected using a different method, __rmul__(self, left) . There is an order of operations in Python just as in mathematics, and Python checks for a valid left multiplication before checking for a valid right multiplication.  "
},
{
  "id": "proj-perms-inverse_method",
  "level": "2",
  "url": "sec-perms-oop.html#proj-perms-inverse_method",
  "type": "Activity",
  "number": "2.7",
  "title": "Inverses of <code class=\"code-inline tex2jax_ignore\">AlgoPerm<\/code> objects.",
  "body": " Inverses of AlgoPerm objects   Since a permutation is a bijection, an important last tool is to build a inverse method in the AlgoPerm class.   Finish the following code.  def inverse(self): \"\"\"Return the AlgoPerm which is the inverse of self.\"\"\" # Set pairs to be the list of tuples (x, self(x)) pairs = self._mapping.items() # Create an empty inverse mapping dictionary inv_mapping = { } # Iterate through pairs assigning the correct inverse mappings. # return AlgoPerm(inv_mapping)   In your aam_proj2.py file, investigate the difference between a*b.inverse() and (a*b).inverse() . Explain why they should be different, mathematically.  "
},
{
  "id": "sec-crypto-subst",
  "level": "1",
  "url": "sec-crypto-subst.html",
  "type": "Section",
  "number": "3.1",
  "title": "Simple substitution ciphers",
  "body": " Simple substitution ciphers   A substitution cipher is a permutation of the letters in an alphabet. Recall that an alphabet is a finite set of symbols, and that we will use two special set notations: to denote the set of capital letters of the English alphabet, and .     Monoalphabetic substitution  Also called simple substitution , encryption of a message by performing a single permutation is a monoalphabetic substitution. The Caesar cipher is one of the earliest known uses, and was a simple three-character shift of the alphabet. Represented in two-line notation over a ten-element set range(10) , this is . In this case, we could also write , using in the mathematical equivalent of its Python usage.   Modular arithmetic and indexing  Similarly to the convention that , we should consider the canonical -element set to be (which is the set of elements of range(n) ) rather than . This example shows one of the other reasons for doing so: modular arithmetic works correctly in . In arithmetic under modulus , all calculations are carried out normally but reported as remainders from integer division by .  Unfortunately this is not the convention of abstract algebra, where denotes the symmetric group of all permutations of .   Substitution ciphers are a form of shared secret cryptography, where the message originator and message receiver must agree on a secret encryption method prior to transmission and share that secret first. In this case, the mathematical formula of the permutation is the shared secret.   Shift cipher   The easiest type of encryption is a shift cipher of an alphabet , defined by for some constant .    Breaking a shift cipher  The message JYZWKTZGYVIJRIVVRJPKFSIVRB is encrypted with a shift cipher on the 26-letter alphabet . Decrypt it, and explain what the shared secret is for a shift cipher.   In general it is not quite so simple to break a substitution cipher on as it is to break a shift cipher; specifically, there are only 25 non-identity shift permutations of , but . If you were to try one million permutations per second and you had to test all permutations, it would take 12,788,288,341,153.146 years to test them all. There has to be a better way!     Frequency analysis  Thankfully we are not unarmed when it comes to decrypting a monoalphabetic substitution. Even though the pool of possible permutations is vast, we can analyze the frequencies with which each letter is used in normal text to try to determine parts of the mapping. It is quite easy to write a program in Python counting the frequency of occurrence of each letter in a string. For instance, taking the original 1972 etext of the Declaration of Independence from Project Gutenberg and converting it into all capital letters (which is how it was produced in 1972 since computers didn't have minuscule letters at that early date), we obtain the following results for the 8133 characters in the text:   Dictionary of frequencies of each character in the United States of America's Declaration of Independence   {'\\n': 165, 'T': 646, 'H': 352, 'E': 869, ' ': 1212, 'D': 256, 'C': 187, 'L': 229, 'A': 482, 'R': 425, 'I': 453, 'O': 519, 'N': 488, 'F': 184, 'P': 139, 'U': 210, 'S': 478, 'M': 145, 'W': 97, 'V': 74, ',': 107, 'B': 95, 'Y': 81, 'G': 130, 'Q': 6, \"'\": 1, 'K': 14, '.': 36, '-': 3, 'J': 16, 'Z': 4, ';': 10, 'X': 9, ':': 10, '&': 1}    This was produced using the following simple program.   A Python program to count the frequencies of each character in a string   The tally program   def tally(some_text): tally_dict = { } for c in some_text: try: tally_dict[c] += 1 except KeyError: tally_dict[c] = 1 print(f\"String Length: {len(some_text)}\") return(tally_dict)     Modifying the code slightly allows us to count just the alphabetic characters, and we find the following frequency results, listed from most common to least common.   Letter frequencies in the Declaration of Independence of the United States of America        # Letter Frequency  # Letter Frequency  # Letter Frequency  # Letter Frequency    0 E 869  7 R 425  14 M 145  21 J 16    1 T 646  8 H 352  15 P 139  22 K 14    2 O 519  9 D 256  16 G 130  23 X 9    3 N 488  10 L 229  17 W 97  24 Q 6    4 A 482  11 U 210  18 B 95  25 Z 4    5 S 478  12 C 187  19 Y 81     6 I 453  13 F 184  20 V 74      A general analysis of text shows the most frequently occurring English letters to be ETAOIN SHRDLU , which the above table shows to be correct (up to reordering). Hence if these letters can be correctly matched in the mapping, there are only remaining permutations. Even this is insurmountable to check by hand, but context can help greatly; looking over a long passage which has been partially decrypted often allows one to make reasonable guesses to other mappings of characters under a simple substitution. Unfortunately, this often requires a lot of guessing and checking, which is unreasonable without other tools from frequency analysis: there are only two one-letter words in English ( A and I ) relatively few common two-letter words (about 24 of them), and the frequency order for two-letter pairs (digraphs) and three-letter pairs (tri-graphs) can also be studied.  Unfortunately, all of that is, all of that is time consuming and requires a lot of guessing and checking. Having simple programs written to effectively tally the different types of frequencies, as well as allowing for simple trial-and-error substitions to be made, makes the cryptanalysis much smoother. Once whole words start to be identified, having a large vocabulary certainly helps fill in the rest, much as when playing Wheel of Fortune!   Breaking a simple substitution by frequency analysis  Consider the following text:   KP GP HMBHZVXKPGRRY IKV HEHPXPJ HGURY XP CTRY G YKTPJ OGP BGOH KTV KW VIH JGUUHV XP FIXBI IH RKNJHN XP BGUZHPVHUD ZRGBH GPN FGRSHN DRKFRY GD VIKTJI XP IHDXVGVXKP VKFGUND SKSTDISXP QUXNJH IH IGN DTBBHDDWTRRY GEKXNHN OHHVXPJ IXD RGPNRGNY KP VIH DVGXUBGDH IXD JGUUHV FGD TPNHU VIH UKKW KW G IXJI WXEHDVKUXHN IKTDH GPN FGD OKUH RXSH G BTZQKGUN VIGP G UKKO VIH RGPNRGNY FIK ZUKEXNHN IXO FXVI JGUUHV NXPPHUD GPN GVVHPNGPBH RXEHN KP VIH WRKKU QHRKF GPN HEHUY VXOH IH FHPV KTV IH FGD KQRXJHN VK ZGDD IHU SXVBIHP VIH NKKU KW FIXBI XPEGUXGQRY DVKKN KZHP GPN HGBI VXOH IH ZGDDHN VIH YKTPJ OGP IGN G DXBS WUXJIVHPHN WHHRXPJ FIXBI OGNH IXO DBKFR GPN WHHR GDIGOHN IH FGD IKZHRHDDRY XP NHQV VK IXD RGPNRGNY GPN FGD GWUGXN KW OHHVXPJ IHU VIXD FGD PKV QHBGTDH IH FGD BKFGUNRY GPN GQCHBV ATXVH VIH BKPVUGUY QTV WKU DKOH VXOH ZGDV IH IGN QHHP XP GP KEHUDVUGXPHN XUUXVGQRH BKPNXVXKP EHUJXPJ KP IYZKBIKPNUXG IH IGN QHBKOH DK BKOZRHVHRY GQDKUQHN XP IXODHRW GPN XDKRGVHN WUKO IXD WHRRKFD VIGV IH NUHGNHN OHHVXPJ PKV KPRY IXD RGPNRGNY QTV GPYKPH GV GRR IH FGD BUTDIHN QY ZKEHUVY QTV VIH GPMXHVXHD KW IXD ZKDXVXKP IGN KW RGVH BHGDHN VK FHXJI TZKP IXO IH IGN JXEHP TZ GVVHPNXPJ VK OGVVHUD KW ZUGBVXBGR XOZKUVGPBH IH IGN RKDV GRR NHDXUH VK NK DK PKVIXPJ VIGV GPY RGPNRGNY BKTRN NK IGN G UHGR VHUUKU WKU IXO QTV VK QH DVKZZHN KP VIH DVGXUD VK QH WKUBHN VK RXDVHP VK IHU VUXEXGR XUUHRHEGPV JKDDXZ VK ZHDVHUXPJ NHOGPND WKU ZGYOHPV VIUHGVD GPN BKOZRGXPVD GPN VK UGBS IXD QUGXPD WKU HMBTDHD VK ZUHEGUXBGVH VK RXH PK UGVIHU VIGP VIGV IH FKTRN BUHHZ NKFP VIH DVGXUD RXSH G BGV GPN DRXZ KTV TPDHHP   Applying frequency analysis to this text, we see the following:   [(148, 'H'), (121, 'G'), (105, 'V'), (102, 'K'), (90, 'P'), (87, 'X'), (82, 'I'), (76, 'N'), (74, 'D'), (70, 'U'), (58, 'R'), (37, 'B'), (27, 'Z'), (27, 'O'), (26, 'T'), (25, 'Y'), (24, 'J'), (24, 'F'), (23, 'W'), (21, 'Q'), (14, 'E'), (9, 'S'), (3, 'M'), (2, 'C'), (1, 'A')]   A first guess we can make from this analysis is that the letter H in the ciphertext is probably an E in the original passage. However, the passage is actually too short to get much more than that from the frequencies of single letters, so instead we use additional clues. The frequencies of three-letter words (not trigraphs, but whole words) are as follows:   [(12, 'GPN'), (11, 'VIH'), (8, 'IGN'), (8, 'FGD'), (7, 'IXD'), (4, 'WKU'), (4, 'QTV'), (4, 'IXO'), (3, 'KTV'), (3, 'IHU'), (2, 'PKV'), (2, 'OGP'), (2, 'GRR'), (1, 'RXH'), (1, 'IKV'), (1, 'GPY'), (1, 'FIK'), (1, 'BGV')]   Since we see GPN and VIH at the front of that list, and we already suspect that H has replaced E , we now have a strong argument that GPN is actually AND and VIH is actually THE . Here's a code that allows for replacement of guesses in a pair of decoder strings , passed as a two-element list called decoder .   A code to test the decoding guesses determined by frequency analysis of a monoalphabetic substitution   def test_decode(cmsg, decoder, chars=40): decoder_dict = {} for x,y in zip(decoder[0],decoder[1]): decoder_dict[x] = y msg_blanks = [ ] for x in cmsg: if x in decoder[0]: y = decoder_dict[x] msg_blanks += [y.lower()] else: msg_blanks += '_' out = [ ] for i in range(len(cmsg)\/\/chars + 1): out.append( \"\".join(cmsg[i*chars:(i+1)*chars] )) out.append( \"\".join(msg_blanks[i*chars:(i+1)*chars] )) out.append(\"\") return \"\\n\".join(out) trial = [' VIHGPN',' THEAND'] print(test_decode(cmsg, trial, 60))    Assuming cmsg in the listing above is the encrypted message of this problem, here is the beginning of the output of test_decode(cmsg, trial, 60) :   KP GP HMBHZVXKPGRRY IKV HEHPXPJ HGURY XP CTRY G YKTPJ OGP BG _n an e__e_t__na___ h_t e_en_n_ ea___ _n ____ a ___n_ _an _a OH KTV KW VIH JGUUHV XP FIXBI IH RKNJHN XP BGUZHPVHUD ZRGBH _e __t __ the _a__et _n _h__h he __d_ed _n _a__ente__ __a_e GPN FGRSHN DRKFRY GD VIKTJI XP IHDXVGVXKP VKFGUND SKSTDISXP and _a__ed ______ a_ th___h _n he__tat__n t__a_d_ _____h__n QUXNJH IH IGN DTBBHDDWTRRY GEKXNHN OHHVXPJ IXD RGPNRGNY KP V ___d_e he had ____e_______ a___ded _eet_n_ h__ _and_ad_ _n t IH DVGXUBGDH IXD JGUUHV FGD TPNHU VIH UKKW KW G IXJI WXEHDVK he _ta___a_e h__ _a__et _a_ _nde_ the ____ __ a h__h ___e_t_ UXHN IKTDH GPN FGD OKUH RXSH G BTZQKGUN VIGP G UKKO VIH RGPN __ed h___e and _a_ ___e ___e a _____a_d than a ____ the _and RGNY FIK ZUKEXNHN IXO FXVI JGUUHV NXPPHUD GPN GVVHPNGPBH RXE _ad_ _h_ _____ded h__ __th _a__et d_nne__ and attendan_e ___   We have no guarantee that the decoding we've supplied is absolutely correct, but the last line shows a clear indication that it might be: the word attendan_e is most likely attendance ; this tells us that B probably maps to C . Moreover, we see several times the undecrypted word KW ; since the first word KP is decoded as _n , it is likely that K should decode to either I or O , but the most commonly used two-letter word in English is of . Moreover, we see the third word HMBHZVXKPGRRY of the encoded message ends with RRY . It is very common in English to see words ending -lly , so we reason that RY should decode to LY , giving us a fixed point : the letter Y appears to have been encoded to itself! But then that would make the translation of the third word (after all these substitutions) e_ce_t_onally . As a first guess to that, we suppose that it is exceptionally , giving us the decoding of MZX as XPI . Since X and P are nowhere near the most-frequently used letters, this is exceptional deduction on our part!  We change trial in the above code and try again:   >>>  trial = [' VIHGPNBKWRYMZ',' THEANDCOFLYXP']  KP GP HMBHZVXKPGRRY IKV HEHPXPJ HGURY XP CTRY G YKTPJ OGP BG on an exceptionally hot e_enin_ ea_ly in __ly a yo_n_ _an ca OH KTV KW VIH JGUUHV XP FIXBI IH RKNJHN XP BGUZHPVHUD ZRGBH _e o_t of the _a__et in _hich he lod_ed in ca_pente__ place GPN FGRSHN DRKFRY GD VIKTJI XP IHDXVGVXKP VKFGUND SKSTDISXP and _al_ed _lo_ly a_ tho__h in he_itation to_a_d_ _o___h_in QUXNJH IH IGN DTBBHDDWTRRY GEKXNHN OHHVXPJ IXD RGPNRGNY KP V __id_e he had __cce__f_lly a_oided _eetin_ hi_ landlady on t IH DVGXUBGDH IXD JGUUHV FGD TPNHU VIH UKKW KW G IXJI WXEHDVK he _tai_ca_e hi_ _a__et _a_ _nde_ the _oof of a hi_h fi_e_to UXHN IKTDH GPN FGD OKUH RXSH G BTZQKGUN VIGP G UKKO VIH RGPN _ied ho__e and _a_ _o_e li_e a c_p_oa_d than a _oo_ the land RGNY FIK ZUKEXNHN IXO FXVI JGUUHV NXPPHUD GPN GVVHPNGPBH RXE lady _ho p_o_ided hi_ _ith _a__et dinne__ and attendance li_   At this point, the human brain becomes wonderfully competent at filling in blanks, even without knowing the source text; making reasonable guesses allows you to deduce all of the remaining mappings of the encoding. The only letter not occuring in the original encrypted message was L . Make sure you know what character was mapped to L in the encryption!      "
},
{
  "id": "p-265",
  "level": "2",
  "url": "sec-crypto-subst.html#p-265",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substitution cipher alphabet "
},
{
  "id": "p-266",
  "level": "2",
  "url": "sec-crypto-subst.html#p-266",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple substitution monoalphabetic substitution. Caesar cipher "
},
{
  "id": "rmk-modular_arithmetic",
  "level": "2",
  "url": "sec-crypto-subst.html#rmk-modular_arithmetic",
  "type": "Remark",
  "number": "3.1.1",
  "title": "Modular arithmetic and indexing.",
  "body": " Modular arithmetic and indexing  Similarly to the convention that , we should consider the canonical -element set to be (which is the set of elements of range(n) ) rather than . This example shows one of the other reasons for doing so: modular arithmetic works correctly in . In arithmetic under modulus , all calculations are carried out normally but reported as remainders from integer division by .  Unfortunately this is not the convention of abstract algebra, where denotes the symmetric group of all permutations of .  "
},
{
  "id": "p-269",
  "level": "2",
  "url": "sec-crypto-subst.html#p-269",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shared secret "
},
{
  "id": "def-shift_cipher",
  "level": "2",
  "url": "sec-crypto-subst.html#def-shift_cipher",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Shift cipher.",
  "body": " Shift cipher   The easiest type of encryption is a shift cipher of an alphabet , defined by for some constant .   "
},
{
  "id": "exc-breaking-shift-cipher",
  "level": "2",
  "url": "sec-crypto-subst.html#exc-breaking-shift-cipher",
  "type": "Checkpoint",
  "number": "3.1.3",
  "title": "Breaking a shift cipher.",
  "body": "Breaking a shift cipher  The message JYZWKTZGYVIJRIVVRJPKFSIVRB is encrypted with a shift cipher on the 26-letter alphabet . Decrypt it, and explain what the shared secret is for a shift cipher.  "
},
{
  "id": "list-declaration",
  "level": "2",
  "url": "sec-crypto-subst.html#list-declaration",
  "type": "Listing",
  "number": "3.1.4",
  "title": "",
  "body": " Dictionary of frequencies of each character in the United States of America's Declaration of Independence   {'\\n': 165, 'T': 646, 'H': 352, 'E': 869, ' ': 1212, 'D': 256, 'C': 187, 'L': 229, 'A': 482, 'R': 425, 'I': 453, 'O': 519, 'N': 488, 'F': 184, 'P': 139, 'U': 210, 'S': 478, 'M': 145, 'W': 97, 'V': 74, ',': 107, 'B': 95, 'Y': 81, 'G': 130, 'Q': 6, \"'\": 1, 'K': 14, '.': 36, '-': 3, 'J': 16, 'Z': 4, ';': 10, 'X': 9, ':': 10, '&': 1}   "
},
{
  "id": "tech-tallying_program",
  "level": "2",
  "url": "sec-crypto-subst.html#tech-tallying_program",
  "type": "Technology",
  "number": "3.1.5",
  "title": "A Python program to count the frequencies of each character in a string.",
  "body": " A Python program to count the frequencies of each character in a string   The tally program   def tally(some_text): tally_dict = { } for c in some_text: try: tally_dict[c] += 1 except KeyError: tally_dict[c] = 1 print(f\"String Length: {len(some_text)}\") return(tally_dict)    "
},
{
  "id": "table-letter_freq-declaration",
  "level": "2",
  "url": "sec-crypto-subst.html#table-letter_freq-declaration",
  "type": "Table",
  "number": "3.1.7",
  "title": "Letter frequencies in the Declaration of Independence of the United States of America",
  "body": " Letter frequencies in the Declaration of Independence of the United States of America        # Letter Frequency  # Letter Frequency  # Letter Frequency  # Letter Frequency    0 E 869  7 R 425  14 M 145  21 J 16    1 T 646  8 H 352  15 P 139  22 K 14    2 O 519  9 D 256  16 G 130  23 X 9    3 N 488  10 L 229  17 W 97  24 Q 6    4 A 482  11 U 210  18 B 95  25 Z 4    5 S 478  12 C 187  19 Y 81     6 I 453  13 F 184  20 V 74     "
},
{
  "id": "exmp-breaking_simple_substitution",
  "level": "2",
  "url": "sec-crypto-subst.html#exmp-breaking_simple_substitution",
  "type": "Example",
  "number": "3.1.8",
  "title": "Breaking a simple substitution by frequency analysis.",
  "body": " Breaking a simple substitution by frequency analysis  Consider the following text:   KP GP HMBHZVXKPGRRY IKV HEHPXPJ HGURY XP CTRY G YKTPJ OGP BGOH KTV KW VIH JGUUHV XP FIXBI IH RKNJHN XP BGUZHPVHUD ZRGBH GPN FGRSHN DRKFRY GD VIKTJI XP IHDXVGVXKP VKFGUND SKSTDISXP QUXNJH IH IGN DTBBHDDWTRRY GEKXNHN OHHVXPJ IXD RGPNRGNY KP VIH DVGXUBGDH IXD JGUUHV FGD TPNHU VIH UKKW KW G IXJI WXEHDVKUXHN IKTDH GPN FGD OKUH RXSH G BTZQKGUN VIGP G UKKO VIH RGPNRGNY FIK ZUKEXNHN IXO FXVI JGUUHV NXPPHUD GPN GVVHPNGPBH RXEHN KP VIH WRKKU QHRKF GPN HEHUY VXOH IH FHPV KTV IH FGD KQRXJHN VK ZGDD IHU SXVBIHP VIH NKKU KW FIXBI XPEGUXGQRY DVKKN KZHP GPN HGBI VXOH IH ZGDDHN VIH YKTPJ OGP IGN G DXBS WUXJIVHPHN WHHRXPJ FIXBI OGNH IXO DBKFR GPN WHHR GDIGOHN IH FGD IKZHRHDDRY XP NHQV VK IXD RGPNRGNY GPN FGD GWUGXN KW OHHVXPJ IHU VIXD FGD PKV QHBGTDH IH FGD BKFGUNRY GPN GQCHBV ATXVH VIH BKPVUGUY QTV WKU DKOH VXOH ZGDV IH IGN QHHP XP GP KEHUDVUGXPHN XUUXVGQRH BKPNXVXKP EHUJXPJ KP IYZKBIKPNUXG IH IGN QHBKOH DK BKOZRHVHRY GQDKUQHN XP IXODHRW GPN XDKRGVHN WUKO IXD WHRRKFD VIGV IH NUHGNHN OHHVXPJ PKV KPRY IXD RGPNRGNY QTV GPYKPH GV GRR IH FGD BUTDIHN QY ZKEHUVY QTV VIH GPMXHVXHD KW IXD ZKDXVXKP IGN KW RGVH BHGDHN VK FHXJI TZKP IXO IH IGN JXEHP TZ GVVHPNXPJ VK OGVVHUD KW ZUGBVXBGR XOZKUVGPBH IH IGN RKDV GRR NHDXUH VK NK DK PKVIXPJ VIGV GPY RGPNRGNY BKTRN NK IGN G UHGR VHUUKU WKU IXO QTV VK QH DVKZZHN KP VIH DVGXUD VK QH WKUBHN VK RXDVHP VK IHU VUXEXGR XUUHRHEGPV JKDDXZ VK ZHDVHUXPJ NHOGPND WKU ZGYOHPV VIUHGVD GPN BKOZRGXPVD GPN VK UGBS IXD QUGXPD WKU HMBTDHD VK ZUHEGUXBGVH VK RXH PK UGVIHU VIGP VIGV IH FKTRN BUHHZ NKFP VIH DVGXUD RXSH G BGV GPN DRXZ KTV TPDHHP   Applying frequency analysis to this text, we see the following:   [(148, 'H'), (121, 'G'), (105, 'V'), (102, 'K'), (90, 'P'), (87, 'X'), (82, 'I'), (76, 'N'), (74, 'D'), (70, 'U'), (58, 'R'), (37, 'B'), (27, 'Z'), (27, 'O'), (26, 'T'), (25, 'Y'), (24, 'J'), (24, 'F'), (23, 'W'), (21, 'Q'), (14, 'E'), (9, 'S'), (3, 'M'), (2, 'C'), (1, 'A')]   A first guess we can make from this analysis is that the letter H in the ciphertext is probably an E in the original passage. However, the passage is actually too short to get much more than that from the frequencies of single letters, so instead we use additional clues. The frequencies of three-letter words (not trigraphs, but whole words) are as follows:   [(12, 'GPN'), (11, 'VIH'), (8, 'IGN'), (8, 'FGD'), (7, 'IXD'), (4, 'WKU'), (4, 'QTV'), (4, 'IXO'), (3, 'KTV'), (3, 'IHU'), (2, 'PKV'), (2, 'OGP'), (2, 'GRR'), (1, 'RXH'), (1, 'IKV'), (1, 'GPY'), (1, 'FIK'), (1, 'BGV')]   Since we see GPN and VIH at the front of that list, and we already suspect that H has replaced E , we now have a strong argument that GPN is actually AND and VIH is actually THE . Here's a code that allows for replacement of guesses in a pair of decoder strings , passed as a two-element list called decoder .   A code to test the decoding guesses determined by frequency analysis of a monoalphabetic substitution   def test_decode(cmsg, decoder, chars=40): decoder_dict = {} for x,y in zip(decoder[0],decoder[1]): decoder_dict[x] = y msg_blanks = [ ] for x in cmsg: if x in decoder[0]: y = decoder_dict[x] msg_blanks += [y.lower()] else: msg_blanks += '_' out = [ ] for i in range(len(cmsg)\/\/chars + 1): out.append( \"\".join(cmsg[i*chars:(i+1)*chars] )) out.append( \"\".join(msg_blanks[i*chars:(i+1)*chars] )) out.append(\"\") return \"\\n\".join(out) trial = [' VIHGPN',' THEAND'] print(test_decode(cmsg, trial, 60))    Assuming cmsg in the listing above is the encrypted message of this problem, here is the beginning of the output of test_decode(cmsg, trial, 60) :   KP GP HMBHZVXKPGRRY IKV HEHPXPJ HGURY XP CTRY G YKTPJ OGP BG _n an e__e_t__na___ h_t e_en_n_ ea___ _n ____ a ___n_ _an _a OH KTV KW VIH JGUUHV XP FIXBI IH RKNJHN XP BGUZHPVHUD ZRGBH _e __t __ the _a__et _n _h__h he __d_ed _n _a__ente__ __a_e GPN FGRSHN DRKFRY GD VIKTJI XP IHDXVGVXKP VKFGUND SKSTDISXP and _a__ed ______ a_ th___h _n he__tat__n t__a_d_ _____h__n QUXNJH IH IGN DTBBHDDWTRRY GEKXNHN OHHVXPJ IXD RGPNRGNY KP V ___d_e he had ____e_______ a___ded _eet_n_ h__ _and_ad_ _n t IH DVGXUBGDH IXD JGUUHV FGD TPNHU VIH UKKW KW G IXJI WXEHDVK he _ta___a_e h__ _a__et _a_ _nde_ the ____ __ a h__h ___e_t_ UXHN IKTDH GPN FGD OKUH RXSH G BTZQKGUN VIGP G UKKO VIH RGPN __ed h___e and _a_ ___e ___e a _____a_d than a ____ the _and RGNY FIK ZUKEXNHN IXO FXVI JGUUHV NXPPHUD GPN GVVHPNGPBH RXE _ad_ _h_ _____ded h__ __th _a__et d_nne__ and attendan_e ___   We have no guarantee that the decoding we've supplied is absolutely correct, but the last line shows a clear indication that it might be: the word attendan_e is most likely attendance ; this tells us that B probably maps to C . Moreover, we see several times the undecrypted word KW ; since the first word KP is decoded as _n , it is likely that K should decode to either I or O , but the most commonly used two-letter word in English is of . Moreover, we see the third word HMBHZVXKPGRRY of the encoded message ends with RRY . It is very common in English to see words ending -lly , so we reason that RY should decode to LY , giving us a fixed point : the letter Y appears to have been encoded to itself! But then that would make the translation of the third word (after all these substitutions) e_ce_t_onally . As a first guess to that, we suppose that it is exceptionally , giving us the decoding of MZX as XPI . Since X and P are nowhere near the most-frequently used letters, this is exceptional deduction on our part!  We change trial in the above code and try again:   >>>  trial = [' VIHGPNBKWRYMZ',' THEANDCOFLYXP']  KP GP HMBHZVXKPGRRY IKV HEHPXPJ HGURY XP CTRY G YKTPJ OGP BG on an exceptionally hot e_enin_ ea_ly in __ly a yo_n_ _an ca OH KTV KW VIH JGUUHV XP FIXBI IH RKNJHN XP BGUZHPVHUD ZRGBH _e o_t of the _a__et in _hich he lod_ed in ca_pente__ place GPN FGRSHN DRKFRY GD VIKTJI XP IHDXVGVXKP VKFGUND SKSTDISXP and _al_ed _lo_ly a_ tho__h in he_itation to_a_d_ _o___h_in QUXNJH IH IGN DTBBHDDWTRRY GEKXNHN OHHVXPJ IXD RGPNRGNY KP V __id_e he had __cce__f_lly a_oided _eetin_ hi_ landlady on t IH DVGXUBGDH IXD JGUUHV FGD TPNHU VIH UKKW KW G IXJI WXEHDVK he _tai_ca_e hi_ _a__et _a_ _nde_ the _oof of a hi_h fi_e_to UXHN IKTDH GPN FGD OKUH RXSH G BTZQKGUN VIGP G UKKO VIH RGPN _ied ho__e and _a_ _o_e li_e a c_p_oa_d than a _oo_ the land RGNY FIK ZUKEXNHN IXO FXVI JGUUHV NXPPHUD GPN GVVHPNGPBH RXE lady _ho p_o_ided hi_ _ith _a__et dinne__ and attendance li_   At this point, the human brain becomes wonderfully competent at filling in blanks, even without knowing the source text; making reasonable guesses allows you to deduce all of the remaining mappings of the encoding. The only letter not occuring in the original encrypted message was L . Make sure you know what character was mapped to L in the encryption!  "
},
{
  "id": "sec-crypto-classic",
  "level": "1",
  "url": "sec-crypto-classic.html",
  "type": "Section",
  "number": "3.2",
  "title": "Other classical ciphers",
  "body": " Other classical ciphers   Beyond simple substitution there are several other interesting historical encryption schemes. The first we investigate is Playfair's Cipher, which performs a simple permutation on digraphs (two-letter words). Then we will discuss polyalphabetic substitution ciphers, which rely on a changing permutation to provide the encryption. Polyalphabetic substitutions are both historically relevant and theoretically interesting, as a particular type of polyalphabetic substitution gives us a provably unbreakable encryption method!     Increasing the alphabet: Playfair's cipher  Since we see that a little frequency analysis can go a long way towards decryption when we permute characters, we have to consider another method which makes the frequency-analysis approach more difficult. The method known as Playfair's cipher was first developed in 1854 by Charles Wheatstone, but popularized by Lyon Playfair, 1st Baron Playfair, and was in continuous use up through World War II. The principle benefit to Playfair is the simplicity of its execution by hand. At the same time, it shifts the alphabet of the permutation from an alphabet of 26 letters to an alphabet of 600 digraphs . Unfortunately there are certain characteristics of the permutations generated by Playfair's cipher that lend themselves to mathematical analysis.   Playfair's cipher  Assume that we have a string pmsg consisting of a message written in English plaintext which we wish to encrypt via Playfair.    Choose and share a key phrase, a short English plaintext.  Pre-process the key phrase into the Playfair grid using .  Process the plaintext pmsg into encryptable digraphs using .   Create an empty list enc_digraphs to eventually contain all of the encrypted digraphs.  Perform Playfair's cipher on each entry of the list digraphs one at a time using , adding the encrypted version of each to enc_digraphs .      The technical details of each of those subalgorithms appear at the bottom of this section, but it is much easier to describe the process with an example than it is to write a correct and rigorous algorithm.   Applying Playfair's cipher   To perform Playfair's cipher, the first step is to generate a shared secret, called the key phrase . This can be any memorable phrase in the target alphabet. For instance, we could choose the phrase Go Patriots! Talons up! in an excess of school spirit. Next we have to clean up the passphrase, which takes a few steps. First, convert all alphabetic characters to capitals, throw away all non-alphabetic characters, and append the alphabet to the end of the key phrase. For our example, that would give us   GOPATRIOTSTALONSUPABCDEFGHIJKLMNOPQRSTUVWXYZ   Next, replace all I characters with J characters. This is necessary as the algorithm relies on a 25-letter alphabet, and since J looks similar to I but is an uncommon letter we merge all the I and J characters together. Then remove all multiple instances of a letter. This process applied to our key phrase results in a pre-processed key phrase of   GOPATRJSLNUBCDEFHKMQVWXYZ    Now we write the Playfair grid . In a grid, starting in the top left, write the letters of the pre-processed key phrase. For our key phrase, this produces the following:   Playfair grid for the key phrase Go Patriots! Talons up!      The grid provides the permutation of digraphs in a rather clever way, and it's a symmetric key , meaning that the same key (the grid itself) is used to encrypt messages as is used to decrypt ciphertexts. As a message, suppose we want to encrypt the ridiculous message The bookkeeper remains sequestered. The suq question remains bizarre. Tax Xavier. This message is chosen because it has many double letters, which have to be treated carefully in another pre-processing step.  Convert the message to capitals, then replace all I characters with J . We begin breaking our message into two-letter pairs called digraphs , but we never want a digraph to contain the same letter twice. When that happens, we will insert an X between the two letters, unless the letters are both X ; in that case, insert a Q . This turns our message into the following:   TH EB OX OK KE EP ER RE MA JN SX SE QU ES TE RE DT HE SU QX QU ES TJ ON RE MA JN SB JZ AR RE TA XQ XA VJ ER    To encrypt this processed message, we work one digraph at a time, drawing a box in the Playfair grid around each pair of letters. For the digraph TH in our grid, that looks like this:   Playfair grid for the key phrase Go Patriots! Talons up! with the digraph TH boxed in red, EB boxed in blue, and MA boxed in green.      With the digraph boxed, there are three possible next steps.     Normal: If the box intersects more than one row and more than one column, then letters in the corners of the box are used to replace the digraph. The upper left letter replaces the upper right letter (and vice versa) and the lower left letter replaces the lower right letter (and vice versa). In this will result in the digraph TH mapping to OQ .   Right shift : If the box is all on one line in the grid, the box shifts one unit to the right, wrapping around the grid if necessary. The left letter of the old box is now replaced by the left letter of the new box, while the right letter of the old box is now replaced by the right letter of the new box. In this will result in the digraph EB being replaced by UC .   Down shift : If the box is all on one column of the grid, the box shifts one unit down, and the similar process is followed as when the letters were in the same row. In this will result in the digraph MA being replaced by YL .    Following these steps for each digraph, we obtain the following result, where the input digraph appears on the row above the output digraph.   TH EB OX OK KE EP ER RE MA JN SX SE QU ES TE RE DT HE OQ UC PW PH QC CT UN NU YL SR CP NC FE CN NQ NU EA QB  SU QX QU ES TJ ON RE MA JN SB JZ AR RE TA XQ XA VJ ER RC KZ FE CN ON TJ NU YL SR JC NW GL NU GT ZK YP WR UN   Frequently the ciphertext will be displayed in blocks of a fixed number of characters. Using an odd block size might incline a spy to think that Playfair's cipher was not being used! To reverse Playfair's cipher and decrypt our blocked ciphertext   OQUCPWPHQ CCTUNNUYL SRCPNCFEC NNQNUEAQB RCKZFECNO NTJNUYLSR JCNWGLNUG TZKYPWRUN   we simply feed the ciphertext back into the same grid, but this time use a left shift instead of right shift and an up shift instead of a down shift.   The particulars of the subalgorithms of Playfair's cipher appear here.   Playfair's cipher: pre-processing the key phrase  Suppose key_phrase is a string consisting of the original chosen key phrase.    Convert all alphabetic characters of key_phrase into capitals and discard any non-alphabetic characters.  Add the full alphabet to the end of key_phrase , in normal alphabetic order.  Replace all I characters in key_phrase with a J .  Remove all repetitions of a character from key_phrase until what is left is a list of 25 non-repeating capital letters.  Write these 25 characters into the positions of a grid, beginning at the top left entry. This is the Playfair grid .      Playfair's cipher: creating digraphs from an original message  Suppose that pmsg is a string consisting of a plaintext written in English.    Convert all alphabetic characters of pmsg into capitals and discard any non-alphabetic characters.  From pmsg , create a list digraphs of two-character words.  Suppose that x1 and x2 are the first two unused characters of pmsg .  If x1 != x2 , then add x1+x2 to the end of the list digraphs . Both x1 and x2 have now been used.  If x1 == x2 but x1 != 'X' , then add x1+'X' to the end of the list digraphs . On the other hand, if x1 == 'X' , add x1+'Q' to the end of digraphs . In either case, x1 has been used but x2 is still an unused character of pmsg .  In the event that only one letter remains unused at the end of this process, add x1+'X' to digraphs if the last letter of pmsg is x1 != 'X' , or add x1+'Q' to digraphs if the last letter of pmsg is x1 == 'X' .       Playfair's cipher: encrypting digraphs  Suppose that key_phrase is a string consisting of a key phrase pre-processed via and that digraphs is a list of digraphs from the English alphabet, with no letter repeated within a digraph and no characters I .    If using Playfair's cipher to encrypt a message from plaintext to a ciphertext, let shift = 1 . If using the cipher to decrypt an already encrypted message, let shift = -1 .  Suppose x1+x2 is in the list digraphs , where each of x1 and x2 is a single-character string.  Let r1 and c1 respectively be the row index and column index of x1 in the Playfair grid, while r2 and c2 are respectively the row index and column index oc x2 in the Playfair grid. All of r1,c1,r2,c2 will be elements of range(5) .  If r1 == r2 , then both entries are in the same row. Let R1 = R2 = r1 and let C1 = (c1 + shift) % 5 and C2= (c2 + shift) % 5 .  Else if c1 == c2 , then both entries are in the same column. Let R1 = (r1 + shift) % 5 , R2 = (r2 + shift) % 5 , and C1 = C2 = c1 .  Else it must be the case that r1 != r2 and c1 != c2 , since it cannot be that x1 == x2 . In this case, let R1 = r1 and R2 = r2 , but set C1 = c2 and C2 = c1 .  The encrypted version of x1 is the character y1 in Playfair grid row R1 and column C1 , and the encrypted version of x2 is the character y2 in Playfair grid row R2 and column C2 .        Polyalphabetic substitution   Polyalphabetic substitution is perhaps a poor name for these systems, which still have one alphabet but change the permutation used from character to character. More plainly, there is some sequence of permutations such that a message is encrypted to .     The tabula recta  For several polyalphabetic ciphers, the mechanism for performing the encryption is the same. The following matrix is called the tabula recta , depicted with row and column labels in the following:   The typical usage of the tabula recta is to pair an input letter designating the row of the matrix with a key letter, designating the column. The letter found in that row and column combination is then the encrypted version of that input under that key letter. The original use of the tabula recta in the Trithemius cipher used a repeating key of ABCDEF...Z . This makes the Trithemius cipher a modified shift cipher where the letter in index of the message is shifted by positions. The message HELLO STUDENTS would be transformed to HFNOS YACMOYFF under the Trithemius cipher.    Vigenère ciphers and the index of coincidence  A cipher invented by Giovan Battista Bellaso in the 1500s (but misattributed in the 1800s to Vigenère) improves upon this by adding a less predictable keyword. Rather than using the alphabet as the keyword, a different word is chosen and repeated to match the length of the message. This repeating keyphrase is then used to generate the shift used by applying the tabula recta. With a key phrase of GOPATS repeated to GOPAT SGOPATSG to match the length of HELLO STUDENTS produces the encrypted phrase NSALH YHJDXFZG .  Unfortunately when the key phrase is too short these ciphers are vulnerable to another attack involving frequency analysis, this time coupled with a tool called the index of coincidence , . Calculating the index of coincidence of a text and comparing it to the expected index of coincidence for the language permits the detection of a likely shift cipher. In the very specific circumstance that you believe a Vigenère cipher with a short key phrase has been used to encrypt a message, you can compute a index of coincidence, which calculates the for each string obtained by skipping characters at a time. If all such skipping strings show an value close to the original language, it is likely that the correct key phrase length has been detected.  Having detected the length of the key phrase, you next have to examine the letter frequencies in the skipping strings to the expected letter frequencies, to make a best guess at the value of the shift cipher used on each character. It is a relatively safe guess that the encrypted version of the letter E will be one of the 5-most-frequent letters in each skipping string; hence with a value of you will likely have to check around different possible key phrases by brute force to find the actual key phrase.    One-time pads  A modification to the Vigenère cipher renders it provably unbreakable. What this specifically means is that all equal-length plaintexts have an equal likelihood of encrypting to the same ciphertext; the modifications, however, are absolutely critical for this. Specifically, the pass phrase must be randomly generated , never reused , and longer than the plaintext . Under these conditions, the pass phrase is called a one-time pad , and Claude Shannon proved that any unbreakable encryption must be equivalent to a one-time pad.     The Enigma cipher  The most complicated encryption scheme devised prior to the invention of the modern computer actually led to the development of the modern computer, in a very real way. The Enigma cipher is a polyalphabetic substiution cipher built as an electromechanical encryption device. The device consists of a keyboard where letters are typed, a plugboard, several rotors, a reflector, and a lightboard where encrypted (or decrypted) letters are displayed. The plugboard acts as an involution , which is a permutation such that . If there are rotors, each acts as a permutation for , and the reflector acts as a final involution . When a key is pressed, the lightboard displays the letter corresponding to .  If this were the only complication of the Enigma device, it would be a very physically complicated monoalphabetic substitution. The genius of the Enigma is that when a key is pressed, a rotation mechanism would engage. The right rotor would step, and upon reaching a notch in its mechanism would make the middle rotor step. This in turn could turn the left rotor in the same way. Of the eight rotors in use during World War II, rotors VI, VII, and VIII each had two such notches, providing an irregular stepping to break up the odometer-style pattern of rotor stepping. The result of this stepping mathematically is equivalent to shifting just the bottom row of the two-line notation for that rotor's permutation by one position to the left. It is this stepping which makes Enigma polyalphabetic the permutation changes with each letter encrypted.  A further feature of the Enigma machine is that every setting of rotors and plugboard results in a derangement . This feature was patented prior to World War II, when Enigma was sold commercially, and greatly aided Polish algebraist Marian Rejewski in his work to break the encryption. The Polish bombe machine was another electro-mechanical device, this one invented to break the Enigma code; it was refined by Alan Turing at the Bletchley Park codebreaking office in Englad during World War II and used as a major part of the war effort to decrypt Nazi transmissions. These devices in turn led to the Colossus project, which created the world's first programmable, electronic, digital computer.   Derangement   Let be a set. A permutation is a derangement if and only if ; that is, for every .      "
},
{
  "id": "p-286",
  "level": "2",
  "url": "sec-crypto-classic.html#p-286",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "digraphs polyalphabetic substitution "
},
{
  "id": "p-287",
  "level": "2",
  "url": "sec-crypto-classic.html#p-287",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Playfair's cipher digraphs "
},
{
  "id": "algo-playfair_cipher",
  "level": "2",
  "url": "sec-crypto-classic.html#algo-playfair_cipher",
  "type": "Algorithm",
  "number": "3.2.1",
  "title": "Playfair's cipher.",
  "body": " Playfair's cipher  Assume that we have a string pmsg consisting of a message written in English plaintext which we wish to encrypt via Playfair.    Choose and share a key phrase, a short English plaintext.  Pre-process the key phrase into the Playfair grid using .  Process the plaintext pmsg into encryptable digraphs using .   Create an empty list enc_digraphs to eventually contain all of the encrypted digraphs.  Perform Playfair's cipher on each entry of the list digraphs one at a time using , adding the encrypted version of each to enc_digraphs .     "
},
{
  "id": "exmp-applying_playfair",
  "level": "2",
  "url": "sec-crypto-classic.html#exmp-applying_playfair",
  "type": "Example",
  "number": "3.2.2",
  "title": "Applying Playfair's cipher.",
  "body": " Applying Playfair's cipher   To perform Playfair's cipher, the first step is to generate a shared secret, called the key phrase . This can be any memorable phrase in the target alphabet. For instance, we could choose the phrase Go Patriots! Talons up! in an excess of school spirit. Next we have to clean up the passphrase, which takes a few steps. First, convert all alphabetic characters to capitals, throw away all non-alphabetic characters, and append the alphabet to the end of the key phrase. For our example, that would give us   GOPATRIOTSTALONSUPABCDEFGHIJKLMNOPQRSTUVWXYZ   Next, replace all I characters with J characters. This is necessary as the algorithm relies on a 25-letter alphabet, and since J looks similar to I but is an uncommon letter we merge all the I and J characters together. Then remove all multiple instances of a letter. This process applied to our key phrase results in a pre-processed key phrase of   GOPATRJSLNUBCDEFHKMQVWXYZ    Now we write the Playfair grid . In a grid, starting in the top left, write the letters of the pre-processed key phrase. For our key phrase, this produces the following:   Playfair grid for the key phrase Go Patriots! Talons up!      The grid provides the permutation of digraphs in a rather clever way, and it's a symmetric key , meaning that the same key (the grid itself) is used to encrypt messages as is used to decrypt ciphertexts. As a message, suppose we want to encrypt the ridiculous message The bookkeeper remains sequestered. The suq question remains bizarre. Tax Xavier. This message is chosen because it has many double letters, which have to be treated carefully in another pre-processing step.  Convert the message to capitals, then replace all I characters with J . We begin breaking our message into two-letter pairs called digraphs , but we never want a digraph to contain the same letter twice. When that happens, we will insert an X between the two letters, unless the letters are both X ; in that case, insert a Q . This turns our message into the following:   TH EB OX OK KE EP ER RE MA JN SX SE QU ES TE RE DT HE SU QX QU ES TJ ON RE MA JN SB JZ AR RE TA XQ XA VJ ER    To encrypt this processed message, we work one digraph at a time, drawing a box in the Playfair grid around each pair of letters. For the digraph TH in our grid, that looks like this:   Playfair grid for the key phrase Go Patriots! Talons up! with the digraph TH boxed in red, EB boxed in blue, and MA boxed in green.      With the digraph boxed, there are three possible next steps.     Normal: If the box intersects more than one row and more than one column, then letters in the corners of the box are used to replace the digraph. The upper left letter replaces the upper right letter (and vice versa) and the lower left letter replaces the lower right letter (and vice versa). In this will result in the digraph TH mapping to OQ .   Right shift : If the box is all on one line in the grid, the box shifts one unit to the right, wrapping around the grid if necessary. The left letter of the old box is now replaced by the left letter of the new box, while the right letter of the old box is now replaced by the right letter of the new box. In this will result in the digraph EB being replaced by UC .   Down shift : If the box is all on one column of the grid, the box shifts one unit down, and the similar process is followed as when the letters were in the same row. In this will result in the digraph MA being replaced by YL .    Following these steps for each digraph, we obtain the following result, where the input digraph appears on the row above the output digraph.   TH EB OX OK KE EP ER RE MA JN SX SE QU ES TE RE DT HE OQ UC PW PH QC CT UN NU YL SR CP NC FE CN NQ NU EA QB  SU QX QU ES TJ ON RE MA JN SB JZ AR RE TA XQ XA VJ ER RC KZ FE CN ON TJ NU YL SR JC NW GL NU GT ZK YP WR UN   Frequently the ciphertext will be displayed in blocks of a fixed number of characters. Using an odd block size might incline a spy to think that Playfair's cipher was not being used! To reverse Playfair's cipher and decrypt our blocked ciphertext   OQUCPWPHQ CCTUNNUYL SRCPNCFEC NNQNUEAQB RCKZFECNO NTJNUYLSR JCNWGLNUG TZKYPWRUN   we simply feed the ciphertext back into the same grid, but this time use a left shift instead of right shift and an up shift instead of a down shift.  "
},
{
  "id": "algo-playfair_key_preprocessing",
  "level": "2",
  "url": "sec-crypto-classic.html#algo-playfair_key_preprocessing",
  "type": "Algorithm",
  "number": "3.2.5",
  "title": "Playfair's cipher: pre-processing the key phrase.",
  "body": " Playfair's cipher: pre-processing the key phrase  Suppose key_phrase is a string consisting of the original chosen key phrase.    Convert all alphabetic characters of key_phrase into capitals and discard any non-alphabetic characters.  Add the full alphabet to the end of key_phrase , in normal alphabetic order.  Replace all I characters in key_phrase with a J .  Remove all repetitions of a character from key_phrase until what is left is a list of 25 non-repeating capital letters.  Write these 25 characters into the positions of a grid, beginning at the top left entry. This is the Playfair grid .    "
},
{
  "id": "algo-playfair_creating_digraphs",
  "level": "2",
  "url": "sec-crypto-classic.html#algo-playfair_creating_digraphs",
  "type": "Algorithm",
  "number": "3.2.6",
  "title": "Playfair's cipher: creating digraphs from an original message.",
  "body": " Playfair's cipher: creating digraphs from an original message  Suppose that pmsg is a string consisting of a plaintext written in English.    Convert all alphabetic characters of pmsg into capitals and discard any non-alphabetic characters.  From pmsg , create a list digraphs of two-character words.  Suppose that x1 and x2 are the first two unused characters of pmsg .  If x1 != x2 , then add x1+x2 to the end of the list digraphs . Both x1 and x2 have now been used.  If x1 == x2 but x1 != 'X' , then add x1+'X' to the end of the list digraphs . On the other hand, if x1 == 'X' , add x1+'Q' to the end of digraphs . In either case, x1 has been used but x2 is still an unused character of pmsg .  In the event that only one letter remains unused at the end of this process, add x1+'X' to digraphs if the last letter of pmsg is x1 != 'X' , or add x1+'Q' to digraphs if the last letter of pmsg is x1 == 'X' .     "
},
{
  "id": "algo-playfair_encrypting_digraphs",
  "level": "2",
  "url": "sec-crypto-classic.html#algo-playfair_encrypting_digraphs",
  "type": "Algorithm",
  "number": "3.2.7",
  "title": "Playfair's cipher: encrypting digraphs.",
  "body": " Playfair's cipher: encrypting digraphs  Suppose that key_phrase is a string consisting of a key phrase pre-processed via and that digraphs is a list of digraphs from the English alphabet, with no letter repeated within a digraph and no characters I .    If using Playfair's cipher to encrypt a message from plaintext to a ciphertext, let shift = 1 . If using the cipher to decrypt an already encrypted message, let shift = -1 .  Suppose x1+x2 is in the list digraphs , where each of x1 and x2 is a single-character string.  Let r1 and c1 respectively be the row index and column index of x1 in the Playfair grid, while r2 and c2 are respectively the row index and column index oc x2 in the Playfair grid. All of r1,c1,r2,c2 will be elements of range(5) .  If r1 == r2 , then both entries are in the same row. Let R1 = R2 = r1 and let C1 = (c1 + shift) % 5 and C2= (c2 + shift) % 5 .  Else if c1 == c2 , then both entries are in the same column. Let R1 = (r1 + shift) % 5 , R2 = (r2 + shift) % 5 , and C1 = C2 = c1 .  Else it must be the case that r1 != r2 and c1 != c2 , since it cannot be that x1 == x2 . In this case, let R1 = r1 and R2 = r2 , but set C1 = c2 and C2 = c1 .  The encrypted version of x1 is the character y1 in Playfair grid row R1 and column C1 , and the encrypted version of x2 is the character y2 in Playfair grid row R2 and column C2 .    "
},
{
  "id": "p-336",
  "level": "2",
  "url": "sec-crypto-classic.html#p-336",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tabula recta "
},
{
  "id": "p-337",
  "level": "2",
  "url": "sec-crypto-classic.html#p-337",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Trithemius cipher "
},
{
  "id": "p-339",
  "level": "2",
  "url": "sec-crypto-classic.html#p-339",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "index of coincidence "
},
{
  "id": "p-341",
  "level": "2",
  "url": "sec-crypto-classic.html#p-341",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-time pad "
},
{
  "id": "p-342",
  "level": "2",
  "url": "sec-crypto-classic.html#p-342",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "involution "
},
{
  "id": "def-derangement",
  "level": "2",
  "url": "sec-crypto-classic.html#def-derangement",
  "type": "Definition",
  "number": "3.2.8",
  "title": "Derangement.",
  "body": " Derangement   Let be a set. A permutation is a derangement if and only if ; that is, for every .   "
},
{
  "id": "sec-crypto-proj",
  "level": "1",
  "url": "sec-crypto-proj.html",
  "type": "Section",
  "number": "3.3",
  "title": "Project: Implementing cryptography in Python",
  "body": " Project: Implementing cryptography in Python  Crypto in Python    It is time to develop Python tools for some of our cryptographic methods.    Practice some cryptography by hand.  Implement DIANA, a Vigenère-style encryption formerly used by the NSA.  Extend the AlgoPerm class to be a more full-feature class of permutations.     Demonstrating understanding  It takes a higher level of understanding to implement a simple algorithm as a code than it does to be able to perform the algorithm. To that end, it is important to practice ideas by hand on paper.    Practice makes perfect   Now that we have discussed some cryptographic techniques, it is time to show that you have mastered them. Work out this activity on paper.   The message CQNAN JWM KJLT JPJRW is encrypted with a shift cipher. Explain how you could find the amount of shift without using a computer.  Find the decrypted phrase corresponding to CQNAN JWM KJLT JPJRW , on paper. Henceforth we'll refer to that key phrase as .  The permutation with one-line notation can be rotated by steps to obtain a new permutation with one-line notation . All shift ciphers on an alphabet can be considered as rotations of one another; what is the simplest permutation of which a shift cipher can be considered a rotation? Explain why.  Suppose you want to use as the key phrase for Playfair's cipher. On paper, write the Playfair grid corresponding to .  Remembering that the shift directions to decrypt using Playfair's cipher are up and left instead of down and right , use and Playfair's cipher to decrypt the following message.  GDTESG HFGNER LTPODB HERARF GWHBTE QNDFFE  The spaces in that message do not correspond to actual spaces . They merely provide spacing to make the encrypted message easier to process by hand.   Performing Playfair's cipher by hand is easy enough that a common use was in encrypting time-sensitive information: for instance, mortar fire on a location would commence in 15 minutes and so friendly personnel should vacate the area! By the time the enemy could decipher it, the information was no longer relevant.    Implementing cryptography    DIANA: Vigenère-style encryption   Implementation of the Vigenère cipher is suprisingly easy; we'll implement a slightly modified version called the DIANA cipher, used by the National Security Agency. The difference between the two is that the tabular rasa of the Vigenère cipher includes the identity permutation as the first column of the table, where in the DIANA system no letter of the key is represented by an identity permutation. The matrix of the DIANA cipher is as follows, in both alphabetix and arithmetic forms:    Use a nested for loop to create a list-of-lists containing the DIANA cipher. You'll need to create a mathematical formula (involving remainders!) for the element of the th row and th column of the DIANA matrix, where .  diana = [ ] for m in range( 26 ): new_row = [ ] for k in range( 26 ): # CHANGE THIS to the correct value involving k and m new_row.append( 0 ) diana.append( new_row ) print( diana )    Remember that ord('A') is 65, so to find the alphabet index of a capital letter stored as a string x would require using ord(x)-65 . If we write to mean the entry in the th row and th column of the numerical DIANA matrix given above, then we now have from task (a) a mathematical formula for the value of . Since that value is the encrypted value of a message character with index i using key character j , we can build a DIANA cipher!  The first step to applying the DIANA cipher given a cryptographic key key and a message msg is to ensure that both message and key consist only of capital letters, and that the cryptographic key is either already as long as the message or has been extended by repetition to be at least as long as the message. Then the key and message can be converted to lists of integers, which then can be processed through the DIANA cipher. In order to decrypt a message, we must acknowledge that the DIANA cipher is that it is an involution : if and only if .  Write a detailed step-by-step algorithm on paper to explain the DIANA cipher. Create a function diana(key, msg) which performs the DIANA cipher using an input string key to encrypt and decrypt a message string msg , which works correctly whether msg is plaintext or ciphertext.   Now we should fill out the rest of our AlgoPerm class so we would have the tools to make a rotating-permutation cipher like Enigma; while fully implementing Enigma is beyond the scope of this project, it will be nice to have the tools to do so if you choose later to continue experimenting.   Extending the AlgoPerm class  Begin by copying AlgoPerm.py into a new file, called ExtendedAlgoPerm.py . All your changes to the AlgoPerm class will be performed in the ExtendedAlgoPerm.py file.  The __init__ method of your AlgoPerm class must first be extended to allow for the mapping to represent the disjoint cycle decomposition of the permutation of . Here is a function which takes a tuple of tuples and converts it into an appropriate mapping dictionary.  def mapping_from_tuples(tuple_of_tuples): bad_cycles = ValueError(\"Badly formatted tuple for cycle notation.\") map_dict = { } for cyc in tuple_of_tuples: if type(cyc) != tuple: # It might still be bad input. raise bad_cycles else: # So now we know it's a tuple of tuples. for i,x in enumerate(cyc): # i is the index and x is the element of the cycle if x in map_dict.keys(): # This is a bad disjoint cycle notation! Not a bijection! raise bad_cycles try: y = cyc[i+1] # This will work unless we're at the end of the cycle already except IndexError: y = cyc[0] # Now y = f(x), if f is this permutation. map_dict[x] = y # Once that's done we've walked through the whole support # of the permutation, and now we have to make sure the # fixed set is in the domain as well. max_value = max(map_dict.keys()) for x in range(1 + max_value): if x in map_dict.keys(): # We've already seen this x, move along. continue else: map_dict[x] = x # Now map_dict is the right dictionary to use to build an # AlgoPerm, so rewrite this code into your own words! return map_dict  In order to fix your __init__ file, this function must be rewritten! Do so.  Add a support method to the class, as follows:  def support(self): supp = [ ] for x in self.domain(): if x==self(x): continue else: supp.append( x ) return set(supp)    Now that AlgoPerm.__init__ has been rewritten to allow input such as AlgoPerm( ((0,),(1,2,3),(4,),(5,6,7)) ) , we must include code to display our permutations in disjoint cycle notation as well as returning them as tuples of tuples. We will introduce two new methods: cycle_tuples and cycle_string . Since the code for cycle_tuples involves some looping, we are going to add a neat feature to our class. Specifically, we will make use of a try:... except:... block so that no matter how many times we call the cycle_tuples method, the computation is only performed once.  Start the method as below. The lines beginning with #### will be changed.  def cycle_tuples(self): '''Return self in disjoint cycle notation as a tuple of tuples. Single-element tuples will be left off unless self is the identity, in which case this will return ((x,),), which is the tuple-of-tuples notation for the identity permutation when x is the minimum element of self.domain()''' try: # If self has an attribute _cycle_tuples, this will work. return self._cycle_tuples # if not, it will raise an AttributeError, which is handled by... except AttributeError: # Since tuples are immutable, everything must be created as a list. list_of_cycles = [ ] # In order to create the cycle decomposition, we need an ordered list # of all the domain elements which are not fixed by self, but in # a mutable way. The following should work! symbol_list = sorted(self.support()) #### This is the part you will work out in successive steps. #### It will involve some looping so these three comments will #### end up being removed and replaced by a nested while loop. if list_of_cycles == [ ]: # Inside this block, we see that self is the identity. self._cycle_tuples = ( ( min(self.domain()), ), ) # To be nice for our next method, let's define the string version as well. self._cycle_tuples = f\"({min(self.domain())})\" else: # Otherwise we've create a list containing tuples of each interesting # cycle in the decomposition of self. self._cycle_tuples = tuple(list_of_cycles) # And we have to be a little more careful with the string version here self._cycle_string = '' for cyc in list_of_cycles: self._cycle_string += str(cyc) # Now we've defined the interesting attribute of self, so return it. return self._cycle_tuples  The algorithm for producing the disjoint cycle notation appeared in the first section of this chapter, in . It consists of a loop which puts elements of the domain into cycles, starting with the minimum element of the support, and proceeding until all of the support elements have either been placed into cycles or discarded; only the elements of the support need to be considered because disjoint cycle notation does not include single-element cycles unless the permutation is the identity! The while loop must repeat as long as symbol_list is non-empty. The first task inside the while loop will be to remove the 0th-indexed element from symbol_list . This is exactly what the list.pop(index) method does: it returns the element in the specified index from the list, and simultaneously removes it from the list. Thus x = symbol_list.pop(0) will always assign the 0th-indexed element of symbol_list to x and shorten symbol_list by removing its 0th-indexed element. Next a new list must be created representing the cycle which is about to be created: new_cycle = [ x ] . In order to create the cycle, we must iterate until the image of the last element appended to new_cycle is equal to the initial element of new_cycle . Since we have defined the __call__ method, we can check this as the condition of a while loop by testing to see if self( new_cycle[-1] ) differs from new_cycle[0] . So long as these two are unequal, we must assign a new variable y = self( new_cycle[-1] ) , then remove y from symbol_list using the list.remove(...) method, and finally append y to the end of new_cycle . Once that loop has completed, we simply check if new_cycle is a single-element list: if so, we skip to the next iteration of the outer while loop using continue . Otherwise, we append tuple( new_cycle ) to our list_of_cycles . This completes the nested while loop! Convert that explanation into code and replace the #### lines. Having written the cycle_tuples method in such a way that its execution saves the _cycle_string attribute, we now have an easy way to write the cycle_string method, again using the try:... except AttributeError:... block.  def cycle_string(self): try: return self._cycle_string except AttributeError: # If the attribute wasn't defined, we need to run the cycle_tuples method, # but we don't need its output so we'll just let it run without saving # the returned value. self.cycle_tuples() return self._cycle_string  An alternative way to perform that same function safely is to use the builtin hasattr(value, attr_name) function; this function takes any object as value and any string as attr_name and returns True if value has an attribute with the same name as the contents of the attr_name string. Implement cycle_string as a method using an if:... else:... block instead of try:... except:...   Permutation rotations The key component of the Enigma machine is in its physical rotation of the permutations. The physical mechanism made this extremely straightforward, and we can use careful slicing to cause the same change. Suppose we defined sigma = AlgoPerm([5,4,3,0,1,2]) , which is . We want to define a method rotate(self, steps) which has the following outputs:  Rotations of the permutation    Input  Output (in cycle notation)    sigma.rotate(0)     sigma.rotate(1)     sigma.rotate(7)     sigma.rotate(-1)     Implement the rotate(self, steps) method.     "
},
{
  "id": "objectives-5",
  "level": "2",
  "url": "sec-crypto-proj.html#objectives-5",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "  It is time to develop Python tools for some of our cryptographic methods.    Practice some cryptography by hand.  Implement DIANA, a Vigenère-style encryption formerly used by the NSA.  Extend the AlgoPerm class to be a more full-feature class of permutations.   "
},
{
  "id": "proj-crypto-manual",
  "level": "2",
  "url": "sec-crypto-proj.html#proj-crypto-manual",
  "type": "Activity",
  "number": "3.1",
  "title": "Practice makes perfect.",
  "body": " Practice makes perfect   Now that we have discussed some cryptographic techniques, it is time to show that you have mastered them. Work out this activity on paper.   The message CQNAN JWM KJLT JPJRW is encrypted with a shift cipher. Explain how you could find the amount of shift without using a computer.  Find the decrypted phrase corresponding to CQNAN JWM KJLT JPJRW , on paper. Henceforth we'll refer to that key phrase as .  The permutation with one-line notation can be rotated by steps to obtain a new permutation with one-line notation . All shift ciphers on an alphabet can be considered as rotations of one another; what is the simplest permutation of which a shift cipher can be considered a rotation? Explain why.  Suppose you want to use as the key phrase for Playfair's cipher. On paper, write the Playfair grid corresponding to .  Remembering that the shift directions to decrypt using Playfair's cipher are up and left instead of down and right , use and Playfair's cipher to decrypt the following message.  GDTESG HFGNER LTPODB HERARF GWHBTE QNDFFE  The spaces in that message do not correspond to actual spaces . They merely provide spacing to make the encrypted message easier to process by hand.  "
},
{
  "id": "proj-crypto-digitizing_viginere",
  "level": "2",
  "url": "sec-crypto-proj.html#proj-crypto-digitizing_viginere",
  "type": "Activity",
  "number": "3.2",
  "title": "DIANA: Vigenère-style encryption.",
  "body": " DIANA: Vigenère-style encryption   Implementation of the Vigenère cipher is suprisingly easy; we'll implement a slightly modified version called the DIANA cipher, used by the National Security Agency. The difference between the two is that the tabular rasa of the Vigenère cipher includes the identity permutation as the first column of the table, where in the DIANA system no letter of the key is represented by an identity permutation. The matrix of the DIANA cipher is as follows, in both alphabetix and arithmetic forms:    Use a nested for loop to create a list-of-lists containing the DIANA cipher. You'll need to create a mathematical formula (involving remainders!) for the element of the th row and th column of the DIANA matrix, where .  diana = [ ] for m in range( 26 ): new_row = [ ] for k in range( 26 ): # CHANGE THIS to the correct value involving k and m new_row.append( 0 ) diana.append( new_row ) print( diana )    Remember that ord('A') is 65, so to find the alphabet index of a capital letter stored as a string x would require using ord(x)-65 . If we write to mean the entry in the th row and th column of the numerical DIANA matrix given above, then we now have from task (a) a mathematical formula for the value of . Since that value is the encrypted value of a message character with index i using key character j , we can build a DIANA cipher!  The first step to applying the DIANA cipher given a cryptographic key key and a message msg is to ensure that both message and key consist only of capital letters, and that the cryptographic key is either already as long as the message or has been extended by repetition to be at least as long as the message. Then the key and message can be converted to lists of integers, which then can be processed through the DIANA cipher. In order to decrypt a message, we must acknowledge that the DIANA cipher is that it is an involution : if and only if .  Write a detailed step-by-step algorithm on paper to explain the DIANA cipher. Create a function diana(key, msg) which performs the DIANA cipher using an input string key to encrypt and decrypt a message string msg , which works correctly whether msg is plaintext or ciphertext.  "
},
{
  "id": "proj-crypto-extending_AlgoPerm",
  "level": "2",
  "url": "sec-crypto-proj.html#proj-crypto-extending_AlgoPerm",
  "type": "Activity",
  "number": "3.3",
  "title": "Extending the <code class=\"code-inline tex2jax_ignore\">AlgoPerm<\/code> class.",
  "body": " Extending the AlgoPerm class  Begin by copying AlgoPerm.py into a new file, called ExtendedAlgoPerm.py . All your changes to the AlgoPerm class will be performed in the ExtendedAlgoPerm.py file.  The __init__ method of your AlgoPerm class must first be extended to allow for the mapping to represent the disjoint cycle decomposition of the permutation of . Here is a function which takes a tuple of tuples and converts it into an appropriate mapping dictionary.  def mapping_from_tuples(tuple_of_tuples): bad_cycles = ValueError(\"Badly formatted tuple for cycle notation.\") map_dict = { } for cyc in tuple_of_tuples: if type(cyc) != tuple: # It might still be bad input. raise bad_cycles else: # So now we know it's a tuple of tuples. for i,x in enumerate(cyc): # i is the index and x is the element of the cycle if x in map_dict.keys(): # This is a bad disjoint cycle notation! Not a bijection! raise bad_cycles try: y = cyc[i+1] # This will work unless we're at the end of the cycle already except IndexError: y = cyc[0] # Now y = f(x), if f is this permutation. map_dict[x] = y # Once that's done we've walked through the whole support # of the permutation, and now we have to make sure the # fixed set is in the domain as well. max_value = max(map_dict.keys()) for x in range(1 + max_value): if x in map_dict.keys(): # We've already seen this x, move along. continue else: map_dict[x] = x # Now map_dict is the right dictionary to use to build an # AlgoPerm, so rewrite this code into your own words! return map_dict  In order to fix your __init__ file, this function must be rewritten! Do so.  Add a support method to the class, as follows:  def support(self): supp = [ ] for x in self.domain(): if x==self(x): continue else: supp.append( x ) return set(supp)    Now that AlgoPerm.__init__ has been rewritten to allow input such as AlgoPerm( ((0,),(1,2,3),(4,),(5,6,7)) ) , we must include code to display our permutations in disjoint cycle notation as well as returning them as tuples of tuples. We will introduce two new methods: cycle_tuples and cycle_string . Since the code for cycle_tuples involves some looping, we are going to add a neat feature to our class. Specifically, we will make use of a try:... except:... block so that no matter how many times we call the cycle_tuples method, the computation is only performed once.  Start the method as below. The lines beginning with #### will be changed.  def cycle_tuples(self): '''Return self in disjoint cycle notation as a tuple of tuples. Single-element tuples will be left off unless self is the identity, in which case this will return ((x,),), which is the tuple-of-tuples notation for the identity permutation when x is the minimum element of self.domain()''' try: # If self has an attribute _cycle_tuples, this will work. return self._cycle_tuples # if not, it will raise an AttributeError, which is handled by... except AttributeError: # Since tuples are immutable, everything must be created as a list. list_of_cycles = [ ] # In order to create the cycle decomposition, we need an ordered list # of all the domain elements which are not fixed by self, but in # a mutable way. The following should work! symbol_list = sorted(self.support()) #### This is the part you will work out in successive steps. #### It will involve some looping so these three comments will #### end up being removed and replaced by a nested while loop. if list_of_cycles == [ ]: # Inside this block, we see that self is the identity. self._cycle_tuples = ( ( min(self.domain()), ), ) # To be nice for our next method, let's define the string version as well. self._cycle_tuples = f\"({min(self.domain())})\" else: # Otherwise we've create a list containing tuples of each interesting # cycle in the decomposition of self. self._cycle_tuples = tuple(list_of_cycles) # And we have to be a little more careful with the string version here self._cycle_string = '' for cyc in list_of_cycles: self._cycle_string += str(cyc) # Now we've defined the interesting attribute of self, so return it. return self._cycle_tuples  The algorithm for producing the disjoint cycle notation appeared in the first section of this chapter, in . It consists of a loop which puts elements of the domain into cycles, starting with the minimum element of the support, and proceeding until all of the support elements have either been placed into cycles or discarded; only the elements of the support need to be considered because disjoint cycle notation does not include single-element cycles unless the permutation is the identity! The while loop must repeat as long as symbol_list is non-empty. The first task inside the while loop will be to remove the 0th-indexed element from symbol_list . This is exactly what the list.pop(index) method does: it returns the element in the specified index from the list, and simultaneously removes it from the list. Thus x = symbol_list.pop(0) will always assign the 0th-indexed element of symbol_list to x and shorten symbol_list by removing its 0th-indexed element. Next a new list must be created representing the cycle which is about to be created: new_cycle = [ x ] . In order to create the cycle, we must iterate until the image of the last element appended to new_cycle is equal to the initial element of new_cycle . Since we have defined the __call__ method, we can check this as the condition of a while loop by testing to see if self( new_cycle[-1] ) differs from new_cycle[0] . So long as these two are unequal, we must assign a new variable y = self( new_cycle[-1] ) , then remove y from symbol_list using the list.remove(...) method, and finally append y to the end of new_cycle . Once that loop has completed, we simply check if new_cycle is a single-element list: if so, we skip to the next iteration of the outer while loop using continue . Otherwise, we append tuple( new_cycle ) to our list_of_cycles . This completes the nested while loop! Convert that explanation into code and replace the #### lines. Having written the cycle_tuples method in such a way that its execution saves the _cycle_string attribute, we now have an easy way to write the cycle_string method, again using the try:... except AttributeError:... block.  def cycle_string(self): try: return self._cycle_string except AttributeError: # If the attribute wasn't defined, we need to run the cycle_tuples method, # but we don't need its output so we'll just let it run without saving # the returned value. self.cycle_tuples() return self._cycle_string  An alternative way to perform that same function safely is to use the builtin hasattr(value, attr_name) function; this function takes any object as value and any string as attr_name and returns True if value has an attribute with the same name as the contents of the attr_name string. Implement cycle_string as a method using an if:... else:... block instead of try:... except:...   Permutation rotations The key component of the Enigma machine is in its physical rotation of the permutations. The physical mechanism made this extremely straightforward, and we can use careful slicing to cause the same change. Suppose we defined sigma = AlgoPerm([5,4,3,0,1,2]) , which is . We want to define a method rotate(self, steps) which has the following outputs:  Rotations of the permutation    Input  Output (in cycle notation)    sigma.rotate(0)     sigma.rotate(1)     sigma.rotate(7)     sigma.rotate(-1)     Implement the rotate(self, steps) method.  "
},
{
  "id": "sec-linalg-vectors",
  "level": "1",
  "url": "sec-linalg-vectors.html",
  "type": "Section",
  "number": "4.1",
  "title": "Vectors",
  "body": " Vectors   To talk about the type of functions called linear transformations, we need first to talk about what types of things are domains and codomains of these functions. The basic space of intetrest is a vector space . In many physical contexts a vector is simply a directed magnitude , which is to say some amount of measurement pointing along an arrow. Unfortunately, that is not a good definition, because it relies on a property which is not actually necessary for all of the things we want to do with vectors.   Notation for complex numbers  While most mathematicians prefer the notation for a complex number , where , programmers, engineers, and scientists have adopted the notation . In the interest of being consistent with Python, we will use notation throughout the text.     Vector space axioms  The conditions in the following definition are referred to as the vector space axioms .   Vector space   Let be a set where addition in is denoted by when and where elements of can be multiplied by complex numbers; that is we can write when and . Moreover, we must have a well-defined notion of equality within . Then is a vector space over if and only if all of the following conditions are satisfied:    Additive Closure  If then .  Scalar Closure  If and then .   Commutativity  If then .  Additive Associativity  If then .  Additive Zero  There is a vector such that for all .  Additive Inverses  For each there is a vector such that .  Scalar Multiplicative Associativity  If and then .  Distributivity across Vector Sums  If and then .  Distributivity across Scalar Sums  If and then .  Scalar One  If , then .    If is a vector space over then is the field of scalars of , the elements of are vectors , and when referring to we say that the elements of are scalars .    Those ten conditions are precisely the conditions necessary to make directed magnitude into a rigorous definition which coincides with observable physical phenomena, which is why they are the axioms! Notationally, different texts may use different symbols to represent vectors; and are both common.    Column vectors  Our introductory example of a vector space is the fundamentally most important example.   The vector space   Let , and define to be the set . For any and , we define , the kth component of , and we say that when , precisely when for every . We further define the following operations on :    Addition If , then is the vector satisfying for each ; and  Scalar multiplication If and , then is the vector satisfying for each .       is a vector space   For every , the set with addition and multiplication as defined in is a vector space over .    To prove that a set with given operations is a vector space over requires verifying that all the axioms hold. This is a standard exercise in any linear algebra textbook and follows directly using the component notation.    The vector space also inherits the complex conjugate operation from its underlying field of scalars.   Complex conjugate   Let , where and is the unique number such that . Then the complex conjugate of is . If instead the complex number is represented in its polar form as , then .  In the complex vector space this extends naturally, and for each we define the conjugate of to be the unique vector satisfying for every .      Linear transformations  Multivariate calculus is one of the first places students encounter vectors, and in calculus the functions from one real vector space to another take many interesting forms. Of course, the original interest in calculus was describing physical motion, so the functions of multivariate calculus seem like simply higher-dimensional versions of differential calculus functions.   Functions between vector spaces  In fact, multivariate calculus starts with multi-variable functions and proceeds through an analysis of those before moving to the study of vector-valued functions, and only towards then end of the course develops functions , such as the function given by . Here one can think of the vectors in the domain as ordered triples and the vectors in the codomain as ordered pairs, following component-wise operations.   Unlike in multivariate calculus, we are not restricted to ordered tuples of input; we have defined vector spaces in full generality. So we can define our special class of functions in its full generality as well.   Linear transformation   Let be vector spaces over and let be a function. Then is a linear transformation from to if and only if:     for any pair of , and   for every and .      An effective way to remember this is to think that linear transformations faithfully turn scalar multiplication and addition in the domain vector space into scalar multiplication and addition in the codomain vector space, preserving the scalars. If you add in the bijectivity condition which allowed us to define permutations, you get something even better than a well-behaved mapping between vector spaces.  Some linear transformations of  Verify that the following are linear transformations:     given by    given by    given by       Vector space isomorphism   A linear transformation which is a bijection is a vector space isomorphism from to .    As in most settings, isomorphism of vector spaces is important as it shows that the domain and codomain are fundamentally the same structure under different representations.   Every complex vector space is a   If is a complex vector space, then there is some such that is isomorphic to .      Inner product spaces  The idea of directed magnitude used in many vector contexts is an additional property which can be attached to a complex vector space. It is important for these definitions to remember the idea of conjugation of complex numbers, so we begin there.   Inner product   Define a function . The function is an inner product if and only if it satisfies the following properties:    Conjugate symmetry  for every ;  Linearity in the first argument  for all and ; and  Positive-definiteness  whenever     A complex vector space equipped with an inner product is called an inner product space .     Standard Hermitian inner product   The standard Hermitian inner product on is defined by .    In a normal calculus sequence, the vector spaces used restrict the field of scalars from to . In this special case the conjugation is irrelevant (since for all ) and the Hermitian inner product becomes the ordinary dot product , given by , which relates to the physics formula involving the angle between the vectors, .  It may seem arbitrary to introduce the Hermitian inner product, but the requirement that a complex inner product must be conjugate symmetric makes it necessary: the regular dot product is symmetric, not conjugate symmetric.  Finally, the magnitude of a vector in an inner product space is closely related to that inner product.   Magnitude in   The norm of a vector is the scalar quantity . The value , and is also called the magnitude of .     Hermitian inner product and magnitude   If , then .      "
},
{
  "id": "p-384",
  "level": "2",
  "url": "sec-linalg-vectors.html#p-384",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector space "
},
{
  "id": "convention-3",
  "level": "2",
  "url": "sec-linalg-vectors.html#convention-3",
  "type": "Convention",
  "number": "4.1.1",
  "title": "Notation for complex numbers.",
  "body": " Notation for complex numbers  While most mathematicians prefer the notation for a complex number , where , programmers, engineers, and scientists have adopted the notation . In the interest of being consistent with Python, we will use notation throughout the text.  "
},
{
  "id": "p-386",
  "level": "2",
  "url": "sec-linalg-vectors.html#p-386",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector space axioms "
},
{
  "id": "def-vector_space",
  "level": "2",
  "url": "sec-linalg-vectors.html#def-vector_space",
  "type": "Definition",
  "number": "4.1.2",
  "title": "Vector space.",
  "body": " Vector space   Let be a set where addition in is denoted by when and where elements of can be multiplied by complex numbers; that is we can write when and . Moreover, we must have a well-defined notion of equality within . Then is a vector space over if and only if all of the following conditions are satisfied:    Additive Closure  If then .  Scalar Closure  If and then .   Commutativity  If then .  Additive Associativity  If then .  Additive Zero  There is a vector such that for all .  Additive Inverses  For each there is a vector such that .  Scalar Multiplicative Associativity  If and then .  Distributivity across Vector Sums  If and then .  Distributivity across Scalar Sums  If and then .  Scalar One  If , then .    If is a vector space over then is the field of scalars of , the elements of are vectors , and when referring to we say that the elements of are scalars .   "
},
{
  "id": "definition-complex_nspace",
  "level": "2",
  "url": "sec-linalg-vectors.html#definition-complex_nspace",
  "type": "Definition",
  "number": "4.1.3",
  "title": "The vector space <span class=\"process-math\">\\(\\CV{n}\\)<\/span>.",
  "body": " The vector space   Let , and define to be the set . For any and , we define , the kth component of , and we say that when , precisely when for every . We further define the following operations on :    Addition If , then is the vector satisfying for each ; and  Scalar multiplication If and , then is the vector satisfying for each .     "
},
{
  "id": "thm-complex_nspace_is_vectorspace",
  "level": "2",
  "url": "sec-linalg-vectors.html#thm-complex_nspace_is_vectorspace",
  "type": "Theorem",
  "number": "4.1.4",
  "title": "<span class=\"process-math\">\\(\\CV{n}\\)<\/span> is a vector space.",
  "body": " is a vector space   For every , the set with addition and multiplication as defined in is a vector space over .    To prove that a set with given operations is a vector space over requires verifying that all the axioms hold. This is a standard exercise in any linear algebra textbook and follows directly using the component notation.   "
},
{
  "id": "p-408",
  "level": "2",
  "url": "sec-linalg-vectors.html#p-408",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex conjugate "
},
{
  "id": "defn-complex_conjugate",
  "level": "2",
  "url": "sec-linalg-vectors.html#defn-complex_conjugate",
  "type": "Definition",
  "number": "4.1.5",
  "title": "Complex conjugate.",
  "body": " Complex conjugate   Let , where and is the unique number such that . Then the complex conjugate of is . If instead the complex number is represented in its polar form as , then .  In the complex vector space this extends naturally, and for each we define the conjugate of to be the unique vector satisfying for every .   "
},
{
  "id": "exmp-vectorfunction",
  "level": "2",
  "url": "sec-linalg-vectors.html#exmp-vectorfunction",
  "type": "Example",
  "number": "4.1.6",
  "title": "Functions between vector spaces.",
  "body": " Functions between vector spaces  In fact, multivariate calculus starts with multi-variable functions and proceeds through an analysis of those before moving to the study of vector-valued functions, and only towards then end of the course develops functions , such as the function given by . Here one can think of the vectors in the domain as ordered triples and the vectors in the codomain as ordered pairs, following component-wise operations.  "
},
{
  "id": "def-linear_transformation",
  "level": "2",
  "url": "sec-linalg-vectors.html#def-linear_transformation",
  "type": "Definition",
  "number": "4.1.7",
  "title": "Linear transformation.",
  "body": " Linear transformation   Let be vector spaces over and let be a function. Then is a linear transformation from to if and only if:     for any pair of , and   for every and .     "
},
{
  "id": "exc-linear_transformation",
  "level": "2",
  "url": "sec-linalg-vectors.html#exc-linear_transformation",
  "type": "Checkpoint",
  "number": "4.1.8",
  "title": "Some linear transformations of <span class=\"process-math\">\\(\\CV{n}\\)<\/span>.",
  "body": "Some linear transformations of  Verify that the following are linear transformations:     given by    given by    given by     "
},
{
  "id": "defn-vector_space_isomorphism",
  "level": "2",
  "url": "sec-linalg-vectors.html#defn-vector_space_isomorphism",
  "type": "Definition",
  "number": "4.1.9",
  "title": "Vector space isomorphism.",
  "body": " Vector space isomorphism   A linear transformation which is a bijection is a vector space isomorphism from to .   "
},
{
  "id": "thm-every_complex_space_is_nspace",
  "level": "2",
  "url": "sec-linalg-vectors.html#thm-every_complex_space_is_nspace",
  "type": "Theorem",
  "number": "4.1.10",
  "title": "Every complex vector space is a <span class=\"process-math\">\\(\\CV{n}\\)<\/span>.",
  "body": " Every complex vector space is a   If is a complex vector space, then there is some such that is isomorphic to .   "
},
{
  "id": "p-427",
  "level": "2",
  "url": "sec-linalg-vectors.html#p-427",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjugation "
},
{
  "id": "defn-inner_prod",
  "level": "2",
  "url": "sec-linalg-vectors.html#defn-inner_prod",
  "type": "Definition",
  "number": "4.1.11",
  "title": "Inner product.",
  "body": " Inner product   Define a function . The function is an inner product if and only if it satisfies the following properties:    Conjugate symmetry  for every ;  Linearity in the first argument  for all and ; and  Positive-definiteness  whenever     A complex vector space equipped with an inner product is called an inner product space .   "
},
{
  "id": "defn-hermitian_ip",
  "level": "2",
  "url": "sec-linalg-vectors.html#defn-hermitian_ip",
  "type": "Definition",
  "number": "4.1.12",
  "title": "Standard Hermitian inner product.",
  "body": " Standard Hermitian inner product   The standard Hermitian inner product on is defined by .   "
},
{
  "id": "p-435",
  "level": "2",
  "url": "sec-linalg-vectors.html#p-435",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "defn-vector_magnitude",
  "level": "2",
  "url": "sec-linalg-vectors.html#defn-vector_magnitude",
  "type": "Definition",
  "number": "4.1.13",
  "title": "Magnitude in <span class=\"process-math\">\\(\\CV{n}\\)<\/span>.",
  "body": " Magnitude in   The norm of a vector is the scalar quantity . The value , and is also called the magnitude of .   "
},
{
  "id": "thm-hip_and_norm",
  "level": "2",
  "url": "sec-linalg-vectors.html#thm-hip_and_norm",
  "type": "Theorem",
  "number": "4.1.14",
  "title": "Hermitian inner product and magnitude.",
  "body": " Hermitian inner product and magnitude   If , then .   "
},
{
  "id": "sec-linalg-vecproj",
  "level": "1",
  "url": "sec-linalg-vecproj.html",
  "type": "Section",
  "number": "4.2",
  "title": "Project: Vectors in Python",
  "body": " Project: Vectors in Python  Vectors in Python    With a solid foundation of what it means to be a vector space we can turn our attention to developing a class of complex vectors in Python.    Create a class of vectors in Python, called AlgoVector , including the following methods:   __init__ and __repr__    __mul__ and __rmul__    __add__ and __radd__    __getitem__ , __len__ , and __eq__    entries , conjugate , inner_product , and norm     Test the AlgoVector class by making some simple computations .     Complex numbers are a built-in type in Python, using the complex type. The easiest way to represent a complex number is using a complex literal , matching the form 5+3j . We note that Python adopts the engineering and scientific usage of rather than the mathematical usage of . The easiest ways to convert an arbitrary number x into a complex number are to compute (1+0j)*(x) or to use complex(x) . These use the same number of key-strokes to type, so the latter is probably better than the former as it is more explicitly a conversion of type.    Getting started with initialization and representation  Even though the normal representation of a complex vector in is as a column of numbers, the typical input will be a row of numbers; this allows users to easily input a vector via the input (1+3j, -5j, 2) . Some experimentation with Python will quickly demonstrate that an input of 1+3j produces an output of (1+3j) , with parentheses added to draw the eye to the complex number.   Initialization of the AlgoVector class   We will want to work in two files again: a file AlgoVector.py containing your class definition and a file aam_proj4.py containing all testing code.   Files and headers Make sure both files have appropriate headers, and start the aam_proj4.py file with from AlgoVector import * so that you have access to your class definition.  Initialization algorithm  As always, it is important to start by considering what validation must be performed on the input to the __init__ method for the new class. Since we want to create vectors from a list or tuple of entries, we will specify our __init__ method as follows, which determines both the names of the arguments to the method as well as the important attribute name for the class:   def __init__(self, entries): '''The initialization method for class AlgoVector''' # perform all validation # build the data that will replace None below: self._components = None   What is a good way to ensure that type(entries) is either list or tuple ? Implement that and replace the first comment line in the above code. Since not every literal element of entries will have the complex type, we need to build a new list whose elements are the original elements of entries cast into the complex type; we have done this before using a for loop. Replace the second comment line in the above code with the appropriate for loop, storing the correct list of data in a local variable. We definitely do not want to have mutable vectors. Replace the line self._components = None , assigning to the attribute the tuple of whatever list you constructed in the previous step.  You should now have a functional __init__ method which defines exactly one attribute.   Representation method Since __repr__ is supposed to produce the string which would exactly recreate your object if it were used as input, we do not want to produce any interesting column vector output. Implement the following:  def entries(self): '''Return the tuple of entries\/components of self.''' return self._components def __repr__(self): '''Faithful string representation of AlgoVector''' return str(self.entries())  In your aam_proj4.py file, test that everything is working by checking the output of the following:  vec1 = AlgoVector([0+1j, 1+0j, 1+1j]) vec2 = AlgoVector([1j, 1, '1+1j']) print(vec1) print(vec2)   Equality of vectors  While the two vectors vec1 and vec2 produced in the previous step should be equal, adding the line print(vec1 == vec2) to your aam_proj4.py file will quickly demonstrate that they are not equal, as far as Python is concerned. Without a __eq__ method, the only way to detemine quality that Python has is to check the memory used by each object, which is not mathematically an interesting notion of equality.  Recalling that two column vectors are equal precisely when they agree in each entry, we see that we need a few more tools to define __eq__ properly.  The __getitem__ method is used by Python to allow indexing into a container type. To be more specific, when we type container[index] , the Python interpreter translates that to container.__getitem__(index) . Add the following to your AlgoVector.py file, in such a way that print(vec1[1]) evaluated at the end of aam_proj4.py will produce the output (1+0j) .  def __getitem__(self, entry_index): '''Return self[entry_index]''' the_entries = self.entries() # Fix the following line so this method works. return None  Another build-in that we've used for containers which we now must define is the method to handle len . Unsurprisingly this is defined by __len__ . Add this to your class file.  def __len__(self): '''Return len(self)''' return len(self.entries())  Now we can write an equality-testing code, implemented via the __eq__ method. Fix the following, and add it to your class file.  def __eq__(self, other): '''Return self==other, as vectors''' if type(other) != AlgoVector or len(other) != len(self): return False else: compare = [ ] for k in range(len(self)): # Use our __getitem__ to add the appropriate True or False # value to the list `compare` compare.append( None ) # The `all` command returns True if every element of the input # list evaluates to True. It's like a massive \"and\" statement. return all(compare)   You should now be able to test print(vec1 == vec2) at the end of the aam_proj4.py file and get the mathematically correct answer.      Vector addition and scalar multiplication  Our AlgoVector class at this point satisfies very few of the things necessary to represent ; we have indexing as in and we can test equality, but we have not defined the two operations around which the axioms hinge: vector addition and scalar multiplication. We already learned that multiplication via * is handled by the __mul__ and __rmul__ methods in . In order to use the + operator, we must likewise define __add__ and __radd__ .   Overloading + and *   In we will discover that scalar * AlgoVector is not the only use case for * with vectors; however, until we develop those ideas all that needs to be checked to verify that multiplication will operate is to ensure that the other factor in the product is able to be represented as a complex . On the other hand, in order for vector addition to make sense, not only must summands be complex vectors, they must be vectors of the same dimension.   Scalar-vector multiplication  In order to be very explicit with our algorithms, we need to enforce the notion that scalar multiplication is actually scalar-vector multiplication. That means our AlgoVector must be the right-hand factor, so we want __mul__(self, right) to always produce an error and for __rmul__(self, left) to be carefully defined.  To be very precise with notation, in a product , the value is the multiplier and is the multiplicand . This terminology is not often used since most people never advance in mathematics to the point where multiplication is non-commutative.  Add a __mul__(self, right) method to your AlgoVector class which always raises a TypeError , indicating by the error message that left-multiplication by AlgoVector is invalid. Now add the following to the class:  def __rmul__(self, left): '''Return left*self''' try: scalar = complex(left) except TypeError: raise TypeError(f\"{left} is unsuitable scalar for scalar-vecprojtor multiplication.\") new_entries = [ ] for x in self.entries(): # Fix the following line. new_entries.append( None ) return AlgoVector(new_entries)  Fix the for loop so that it works correctly. Test your multiplication code by trying 0*vec1 , '1-1j'*vec2 , and vec1*9 .  Vector addition  Since we know from that vector addition is commutative, we will want vec1 + vec2 to have the same result as vec2 + vec1 . However the order of operations for Python defaults to attempting __add__ before __radd__ , which means that __radd__ must always raise an error once __add__ is correctly defined.  Implement addition using this code, and replace the comment so that the code works.  def __add__(self, right): '''return self+right''' if type(right)==AlgoVector: if len(right)==len(self): new_entries = [ ] # You can't just loop over the elements of self, and you can't # zip(...) self and right together because we haven't made # AlgoVector zip-able. Create in this spot a for loop that makes # the remaining lines of this method do the right thing. # return AlgoVector(new_entries) else: raise ValueError(\"AlgoVectors have different lengths.\") else: raise TypeError(f\"Cannot add AlgoVector and {type(right)}.\")  With a working __add__ method, include the following in your AlgoVector class  def __radd__(self, left): '''return left+self''' # This should never trigger with left being an AlgoVector, so... raise TypeError(f'Cannot add {type(left)} and AlgoVector.')      Additional class methods  In Python the complex class has a method conjugate , which we want to replicate for our AlgoVector class, and we also want to add methods to compute the inner product and the norm according to their definitions.   Adding a conjugate method  Describe mathematically what happens when a vector is conjugated, and do so in a written algorithm.  Complete the following method in your AlgoVector class:  def conjugate(self): new_entries = [ ] for x in self.entries(): # # Here's what you need to change! # new_entries.append( None ) return AlgoVector(new_entries)   Test your method in the aam_proj4.py file by calculating vec1 + vec2.conjugate() and (vec1 + vec2).conjugate() .    Adding inner_product and norm methods   The inner_product method is straight-forward, but in order to define the regular norm we need to add a line to the beginning of the AlgoVector.py file:   from math import sqrt   This gives us access to the mathematical square root function.   Implementing inner_product Begin with the following code, which is a stub of what you need to have working.  def inner_product(self, right): '''Return the value <self, right>, the Hermitian inner product of self and right.''' if type(right) != AlgoVector: raise TypeError('Cannot compute inner product if second argument is not AlgoVector') elif len(right) != len(self): raise ValueError('Cannot compute inner product between AlgoVectors of different lengths') else: current_total = 0 for x,y in zip(self.entries(), right.entries()): # # You didn't think I was going to give you the whole thing? # current_total += 0 return current_total  Correct the necessary line so that the method returns the Hermitian inner product.  Implementing norm Once inner_product works, you can write a single line of code to return the correct norm by combining sqrt and inner_product . Finish this code by replacing the pass statement.  def norm(self): '''Return ||self||''' pass      Simple computations   Testing AlgoVector by computing interesting values   Complete each of the following tasks in aam_proj4.py .   Create a list of 10 vectors, veclist which contains in the th index the vector of length 10 whose th index is the number . That is, make .  For each , compute the value of .  For each , compute the value of .    "
},
{
  "id": "objectives-6",
  "level": "2",
  "url": "sec-linalg-vecproj.html#objectives-6",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "  With a solid foundation of what it means to be a vector space we can turn our attention to developing a class of complex vectors in Python.    Create a class of vectors in Python, called AlgoVector , including the following methods:   __init__ and __repr__    __mul__ and __rmul__    __add__ and __radd__    __getitem__ , __len__ , and __eq__    entries , conjugate , inner_product , and norm     Test the AlgoVector class by making some simple computations .   "
},
{
  "id": "p-448",
  "level": "2",
  "url": "sec-linalg-vecproj.html#p-448",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex literal "
},
{
  "id": "proj-vecproj-init_and_repr",
  "level": "2",
  "url": "sec-linalg-vecproj.html#proj-vecproj-init_and_repr",
  "type": "Activity",
  "number": "4.1",
  "title": "Initialization of the <code class=\"code-inline tex2jax_ignore\">AlgoVector<\/code> class.",
  "body": " Initialization of the AlgoVector class   We will want to work in two files again: a file AlgoVector.py containing your class definition and a file aam_proj4.py containing all testing code.   Files and headers Make sure both files have appropriate headers, and start the aam_proj4.py file with from AlgoVector import * so that you have access to your class definition.  Initialization algorithm  As always, it is important to start by considering what validation must be performed on the input to the __init__ method for the new class. Since we want to create vectors from a list or tuple of entries, we will specify our __init__ method as follows, which determines both the names of the arguments to the method as well as the important attribute name for the class:   def __init__(self, entries): '''The initialization method for class AlgoVector''' # perform all validation # build the data that will replace None below: self._components = None   What is a good way to ensure that type(entries) is either list or tuple ? Implement that and replace the first comment line in the above code. Since not every literal element of entries will have the complex type, we need to build a new list whose elements are the original elements of entries cast into the complex type; we have done this before using a for loop. Replace the second comment line in the above code with the appropriate for loop, storing the correct list of data in a local variable. We definitely do not want to have mutable vectors. Replace the line self._components = None , assigning to the attribute the tuple of whatever list you constructed in the previous step.  You should now have a functional __init__ method which defines exactly one attribute.   Representation method Since __repr__ is supposed to produce the string which would exactly recreate your object if it were used as input, we do not want to produce any interesting column vector output. Implement the following:  def entries(self): '''Return the tuple of entries\/components of self.''' return self._components def __repr__(self): '''Faithful string representation of AlgoVector''' return str(self.entries())  In your aam_proj4.py file, test that everything is working by checking the output of the following:  vec1 = AlgoVector([0+1j, 1+0j, 1+1j]) vec2 = AlgoVector([1j, 1, '1+1j']) print(vec1) print(vec2)   Equality of vectors  While the two vectors vec1 and vec2 produced in the previous step should be equal, adding the line print(vec1 == vec2) to your aam_proj4.py file will quickly demonstrate that they are not equal, as far as Python is concerned. Without a __eq__ method, the only way to detemine quality that Python has is to check the memory used by each object, which is not mathematically an interesting notion of equality.  Recalling that two column vectors are equal precisely when they agree in each entry, we see that we need a few more tools to define __eq__ properly.  The __getitem__ method is used by Python to allow indexing into a container type. To be more specific, when we type container[index] , the Python interpreter translates that to container.__getitem__(index) . Add the following to your AlgoVector.py file, in such a way that print(vec1[1]) evaluated at the end of aam_proj4.py will produce the output (1+0j) .  def __getitem__(self, entry_index): '''Return self[entry_index]''' the_entries = self.entries() # Fix the following line so this method works. return None  Another build-in that we've used for containers which we now must define is the method to handle len . Unsurprisingly this is defined by __len__ . Add this to your class file.  def __len__(self): '''Return len(self)''' return len(self.entries())  Now we can write an equality-testing code, implemented via the __eq__ method. Fix the following, and add it to your class file.  def __eq__(self, other): '''Return self==other, as vectors''' if type(other) != AlgoVector or len(other) != len(self): return False else: compare = [ ] for k in range(len(self)): # Use our __getitem__ to add the appropriate True or False # value to the list `compare` compare.append( None ) # The `all` command returns True if every element of the input # list evaluates to True. It's like a massive \"and\" statement. return all(compare)   You should now be able to test print(vec1 == vec2) at the end of the aam_proj4.py file and get the mathematically correct answer.   "
},
{
  "id": "proj-vecproj-add_and_mul",
  "level": "2",
  "url": "sec-linalg-vecproj.html#proj-vecproj-add_and_mul",
  "type": "Activity",
  "number": "4.2",
  "title": "Overloading <code class=\"code-inline tex2jax_ignore\">+<\/code> and <code class=\"code-inline tex2jax_ignore\">*<\/code>.",
  "body": " Overloading + and *   In we will discover that scalar * AlgoVector is not the only use case for * with vectors; however, until we develop those ideas all that needs to be checked to verify that multiplication will operate is to ensure that the other factor in the product is able to be represented as a complex . On the other hand, in order for vector addition to make sense, not only must summands be complex vectors, they must be vectors of the same dimension.   Scalar-vector multiplication  In order to be very explicit with our algorithms, we need to enforce the notion that scalar multiplication is actually scalar-vector multiplication. That means our AlgoVector must be the right-hand factor, so we want __mul__(self, right) to always produce an error and for __rmul__(self, left) to be carefully defined.  To be very precise with notation, in a product , the value is the multiplier and is the multiplicand . This terminology is not often used since most people never advance in mathematics to the point where multiplication is non-commutative.  Add a __mul__(self, right) method to your AlgoVector class which always raises a TypeError , indicating by the error message that left-multiplication by AlgoVector is invalid. Now add the following to the class:  def __rmul__(self, left): '''Return left*self''' try: scalar = complex(left) except TypeError: raise TypeError(f\"{left} is unsuitable scalar for scalar-vecprojtor multiplication.\") new_entries = [ ] for x in self.entries(): # Fix the following line. new_entries.append( None ) return AlgoVector(new_entries)  Fix the for loop so that it works correctly. Test your multiplication code by trying 0*vec1 , '1-1j'*vec2 , and vec1*9 .  Vector addition  Since we know from that vector addition is commutative, we will want vec1 + vec2 to have the same result as vec2 + vec1 . However the order of operations for Python defaults to attempting __add__ before __radd__ , which means that __radd__ must always raise an error once __add__ is correctly defined.  Implement addition using this code, and replace the comment so that the code works.  def __add__(self, right): '''return self+right''' if type(right)==AlgoVector: if len(right)==len(self): new_entries = [ ] # You can't just loop over the elements of self, and you can't # zip(...) self and right together because we haven't made # AlgoVector zip-able. Create in this spot a for loop that makes # the remaining lines of this method do the right thing. # return AlgoVector(new_entries) else: raise ValueError(\"AlgoVectors have different lengths.\") else: raise TypeError(f\"Cannot add AlgoVector and {type(right)}.\")  With a working __add__ method, include the following in your AlgoVector class  def __radd__(self, left): '''return left+self''' # This should never trigger with left being an AlgoVector, so... raise TypeError(f'Cannot add {type(left)} and AlgoVector.')   "
},
{
  "id": "proj-vecproj-conjugate",
  "level": "2",
  "url": "sec-linalg-vecproj.html#proj-vecproj-conjugate",
  "type": "Activity",
  "number": "4.3",
  "title": "Adding a <code class=\"code-inline tex2jax_ignore\">conjugate<\/code> method.",
  "body": " Adding a conjugate method  Describe mathematically what happens when a vector is conjugated, and do so in a written algorithm.  Complete the following method in your AlgoVector class:  def conjugate(self): new_entries = [ ] for x in self.entries(): # # Here's what you need to change! # new_entries.append( None ) return AlgoVector(new_entries)   Test your method in the aam_proj4.py file by calculating vec1 + vec2.conjugate() and (vec1 + vec2).conjugate() .  "
},
{
  "id": "proj-vecproj-innerprod_norm",
  "level": "2",
  "url": "sec-linalg-vecproj.html#proj-vecproj-innerprod_norm",
  "type": "Activity",
  "number": "4.4",
  "title": "Adding <code class=\"code-inline tex2jax_ignore\">inner_product<\/code> and <code class=\"code-inline tex2jax_ignore\">norm<\/code> methods.",
  "body": " Adding inner_product and norm methods   The inner_product method is straight-forward, but in order to define the regular norm we need to add a line to the beginning of the AlgoVector.py file:   from math import sqrt   This gives us access to the mathematical square root function.   Implementing inner_product Begin with the following code, which is a stub of what you need to have working.  def inner_product(self, right): '''Return the value <self, right>, the Hermitian inner product of self and right.''' if type(right) != AlgoVector: raise TypeError('Cannot compute inner product if second argument is not AlgoVector') elif len(right) != len(self): raise ValueError('Cannot compute inner product between AlgoVectors of different lengths') else: current_total = 0 for x,y in zip(self.entries(), right.entries()): # # You didn't think I was going to give you the whole thing? # current_total += 0 return current_total  Correct the necessary line so that the method returns the Hermitian inner product.  Implementing norm Once inner_product works, you can write a single line of code to return the correct norm by combining sqrt and inner_product . Finish this code by replacing the pass statement.  def norm(self): '''Return ||self||''' pass   "
},
{
  "id": "proj-vecproj-computations",
  "level": "2",
  "url": "sec-linalg-vecproj.html#proj-vecproj-computations",
  "type": "Activity",
  "number": "4.5",
  "title": "Testing <code class=\"code-inline tex2jax_ignore\">AlgoVector<\/code> by computing interesting values.",
  "body": " Testing AlgoVector by computing interesting values   Complete each of the following tasks in aam_proj4.py .   Create a list of 10 vectors, veclist which contains in the th index the vector of length 10 whose th index is the number . That is, make .  For each , compute the value of .  For each , compute the value of .  "
},
{
  "id": "sec-linalg-matrices",
  "level": "1",
  "url": "sec-linalg-matrices.html",
  "type": "Section",
  "number": "4.3",
  "title": "Matrices over <span class=\"process-math\">\\(\\CV{n}\\)<\/span>",
  "body": " Matrices over  Complex matrices   We begin with the traditional definition of a matrix, but we will quickly put it to a non-traditional use to provide motivation for matrix arithmetic.   Matrix over   Consider a set . We denote to be the  matrix whose cth column is the vector , for . We extend our bracket notation from vectors as follows: . To remove the bracket notation, if we define then .  For a matrix we define the row dimension of to be and the column dimension of to be .    Our use of the bracket notation allows the following theorem.   Matrices form a vector space over   Let and define to be the set of all matrices over , and define operations of addition and scalar multiplication in as follows:  Matrix addition Let . Then define to be the unique element of satisfying for every and .  Scalar-matrix multiplication Let and let . Then is the unique element of satisfying for every and .    Under these operations, is a complex vector space.       Matrix-vector products  Matrices are more than a convenient way to store rectangular data, but to build their very useful features we need another idea from vector theory.   Linear combination and span of a set   Let be a set of complex vectors each of length . A vector is a linear combination from the set if and only if there is a sequence of complex numbers such that . The set of all such linear combinations from is the span of , denoted .     The standard unit basis   An interesting example of the span of a set arises from looking at a special set of vectors , where is the unique vector which satisfies . With these vectors and any other vector which satisfies , we can write . Thus , which means every vector can be written as a linear combination from .     Matrix-vector product   Let be vectors such that and let . Then the matrix-vector product is the linear combination .    Bracket notation gives us another way to think of the matrix-vector product.   Components of a matrix-vector product   Let be vectors such that and let . Then for every , .    What is more fascinating than this product in its own right is the behavior obtained when you consider products of arbitrary vectors by a fixed matrix.   Matrix-vector products are linear transformations   Let and . Define a function by for each . Then is a linear transformation.    Suppose and , and assume are vectors such that . Then . Also, . Hence is a linear transformation.    This might not be surprising, given the fact that we established as a vector space. The following result is perhaps more surprising.   Matrix representation of a transformation   Let be a linear transformation. Then there is a matrix such that .    For each , let be the vector satisfying . Further, define for each . It is left as an exercise to the reader to verify that the matrix satisfies .      Matrix-matrix products  Since we have established that left-multiplication of a vector by a matrix (the matrix-vector product) is actually the same as an application of a function to a vector, it should be unsurprising that matrix-matrix products act like function composition!   Matrix-matrix product   Let , , and . Then the matrix-matrix product exists if and only if . When , then .    The more traditional way to evaluate matrix-matrix products is component-wise.   Entries of a matrix-matrix product   Suppose that and . Then for each and .     Matrix-matrix products do composition   If and , then satisfies .      "
},
{
  "id": "defn-matrix",
  "level": "2",
  "url": "sec-linalg-matrices.html#defn-matrix",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Matrix over <span class=\"process-math\">\\(\\Comps\\)<\/span>.",
  "body": " Matrix over   Consider a set . We denote to be the  matrix whose cth column is the vector , for . We extend our bracket notation from vectors as follows: . To remove the bracket notation, if we define then .  For a matrix we define the row dimension of to be and the column dimension of to be .   "
},
{
  "id": "thm-matrices_form_vectorspace",
  "level": "2",
  "url": "sec-linalg-matrices.html#thm-matrices_form_vectorspace",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "Matrices form a vector space over <span class=\"process-math\">\\(\\Comps\\)<\/span>.",
  "body": " Matrices form a vector space over   Let and define to be the set of all matrices over , and define operations of addition and scalar multiplication in as follows:  Matrix addition Let . Then define to be the unique element of satisfying for every and .  Scalar-matrix multiplication Let and let . Then is the unique element of satisfying for every and .    Under these operations, is a complex vector space.   "
},
{
  "id": "defn-lincomb_span",
  "level": "2",
  "url": "sec-linalg-matrices.html#defn-lincomb_span",
  "type": "Definition",
  "number": "4.3.3",
  "title": "Linear combination and span of a set.",
  "body": " Linear combination and span of a set   Let be a set of complex vectors each of length . A vector is a linear combination from the set if and only if there is a sequence of complex numbers such that . The set of all such linear combinations from is the span of , denoted .   "
},
{
  "id": "exmp-standard_basis",
  "level": "2",
  "url": "sec-linalg-matrices.html#exmp-standard_basis",
  "type": "Example",
  "number": "4.3.4",
  "title": "The standard unit basis.",
  "body": " The standard unit basis   An interesting example of the span of a set arises from looking at a special set of vectors , where is the unique vector which satisfies . With these vectors and any other vector which satisfies , we can write . Thus , which means every vector can be written as a linear combination from .   "
},
{
  "id": "defn-matrix_vector_product",
  "level": "2",
  "url": "sec-linalg-matrices.html#defn-matrix_vector_product",
  "type": "Definition",
  "number": "4.3.5",
  "title": "Matrix-vector product.",
  "body": " Matrix-vector product   Let be vectors such that and let . Then the matrix-vector product is the linear combination .   "
},
{
  "id": "thm-components-mvp",
  "level": "2",
  "url": "sec-linalg-matrices.html#thm-components-mvp",
  "type": "Theorem",
  "number": "4.3.6",
  "title": "Components of a matrix-vector product.",
  "body": " Components of a matrix-vector product   Let be vectors such that and let . Then for every , .   "
},
{
  "id": "thm-transformation_of_a_matrix",
  "level": "2",
  "url": "sec-linalg-matrices.html#thm-transformation_of_a_matrix",
  "type": "Theorem",
  "number": "4.3.7",
  "title": "Matrix-vector products are linear transformations.",
  "body": " Matrix-vector products are linear transformations   Let and . Define a function by for each . Then is a linear transformation.    Suppose and , and assume are vectors such that . Then . Also, . Hence is a linear transformation.   "
},
{
  "id": "thm-every_transformation_has_a_matrix",
  "level": "2",
  "url": "sec-linalg-matrices.html#thm-every_transformation_has_a_matrix",
  "type": "Theorem",
  "number": "4.3.8",
  "title": "Matrix representation of a transformation.",
  "body": " Matrix representation of a transformation   Let be a linear transformation. Then there is a matrix such that .    For each , let be the vector satisfying . Further, define for each . It is left as an exercise to the reader to verify that the matrix satisfies .   "
},
{
  "id": "defn-mmp",
  "level": "2",
  "url": "sec-linalg-matrices.html#defn-mmp",
  "type": "Definition",
  "number": "4.3.9",
  "title": "Matrix-matrix product.",
  "body": " Matrix-matrix product   Let , , and . Then the matrix-matrix product exists if and only if . When , then .   "
},
{
  "id": "thm-mmp_by_entry",
  "level": "2",
  "url": "sec-linalg-matrices.html#thm-mmp_by_entry",
  "type": "Theorem",
  "number": "4.3.10",
  "title": "Entries of a matrix-matrix product.",
  "body": " Entries of a matrix-matrix product   Suppose that and . Then for each and .   "
},
{
  "id": "thm-mmp_is_composition",
  "level": "2",
  "url": "sec-linalg-matrices.html#thm-mmp_is_composition",
  "type": "Theorem",
  "number": "4.3.11",
  "title": "Matrix-matrix products do composition.",
  "body": " Matrix-matrix products do composition   If and , then satisfies .   "
},
{
  "id": "sec-linalg-matproj",
  "level": "1",
  "url": "sec-linalg-matproj.html",
  "type": "Section",
  "number": "4.4",
  "title": "Project: Matrices in Python",
  "body": " Project: Matrices in Python  Matrices in Python    With a good understanding of how to implement vectors in the AlgoVector class, moving to an implementation of matrices is a matter of extension rather than new definitions.     Create a class AlgoMatrix of matrices in Python, including the following methods:     In , __init__ and __repr__     In , dims(self) which returns the row and column dimensions of self as a tuple, as well as __str__ , __getitem__ , and __eq__     In , __mul__ and __rmul__     In , __add__ and __radd__        Add the following additional methods to the AlgoVector class:     In , column(self, col_index) which returns the column vector in the index col_index of self , as well as columns(self) which returns a tuple of all column vectors of self     In , conjugate(self) which returns the conjugate matrix of self     In , augment(self, right) which performs augmentation of the matrix self by an object right of appropriate type and dimensions.    In , transpose(self) which returns the transpose matrix of self , described below.       Test your AlgoVector by making some computations in your aam_proj5.py file.      AlgoMatrix basics  We would like to consider two different methods of initializing an AlgoMatrix . The default is to allow any rectangular grid of complex numbers, but to encourage the idea that a matrix can be represented , where for appropriate and , we will also permit a list of vectors all of the same length.   AlgoMatrix initialization   In order to develop the __init__(self, grid) method, we have to validate the input. We will allow the initialization to fail naturally if we attempt to index into grid and it is not an indexable object.   Setting up your files The main class file should be AlgoMatrix.py with an appropriate header followed by from AlgoVector import * . The testing and worknig file should be aam_proj5.py with an appropriate header. Further, the initializtion method should begin as follows:   class AlgoMatrix: def __init__(self, grid): '''Initialize an AlgoMatrix from 'grid', which is either a list of list (or tuple or tuple or some combination thereof) of complex values, or a list (or tuple) of AlgoVector objects.''' try: if type(grid[0]) == AlgoVector: # This will get filled in during the next task else: # This will get filled in during the next after that # Then we have to write the exception handler, because without an # 'except:' block this will cause a SyntaxError   A list of AlgoVector objects Inside the first step of the validation, the important things to check are to determine whether remaining elements of grid are actually AlgoVector objects and also to determine that all have the same length. Replace the above code with the following, making modifications as necessary:   if type(grid[0]) == AlgoVector: n = len(grid) # The next line works as long as AlgoVector has a __len__ method! m = len(grid[0]) new_grid = [ ] for x in grid[0].entries(): new_grid.append( [x] ) for vec in grid[1:]: if type(vec) != AlgoVector: raise TypeError('Malformed list of AlgoVector objects') elif len(vec) != m: raise ValueError('Malformed list of AlgoVector objects') else: for r in range(m): # Now you have to fill in: we want to add the rth entry of # the current vector, vec, to the rth row of new_grid. continue else: # This will get filled in during the next task   A list of lists of complex -compatible objects This execution path proceeds slightly more smoothly, as the input is not of a form which is trying to specify a matrix in the transpose order of columns before rows. Complete the following:   else: m = len(grid) n = len(grid[0]) new_grid = [ ] for r in range(m): if len(grid[r]) != n: raise ValueError('Malformed grid of complex numbers') new_grid.append( [ ] ) for c in range(n): # What do we want to actually append into our new rows? new_grid[-1].append( complex( 0 ) )   Handling exceptions As it turns out, we actually want to stop the execution of the program if any of the generated exceptions come up. This is handled by simply putting the command raise in the except:... block without any argument. This causes the exception which brought about the problem to be passed up to the next level; this could be a try:... except:... block in a calling function, or it could be the main execution loop of Python. In the latter case, this causes an error and stops execution of your code! Of course, you also have to store the important data attributes outside the exception handler, since the assignment of attributes is the final step of creating a usable class object.   except: raise self._data = tuple(tuple(row) for row in new_grid) self._row_dim = len(new_grid) self._col_dim = len(new_grid[0])   Representation Representing the object is next. Return the str version of self._data instead of \"None\" in the below code.   def __repr__(self): return \"None\"   Test your work up to this point! At this point you have a substantial amount of code, although you are not finished. Test your work in aam_proj5.py by creating the following matrices and vectors: . Explicitly print the representation of these matrices using print(repr(a_matrix)) , where a_matrix is replaced by the variable names you choose for and .   Before we get to operations involving multiple objects, we want to set up bracket notation for matrices. Just as we use to represent the entry in the rth-indexed row and cth-indexed column of a matrix , we want to use the_mat[r,c] to represent the same object for an AlgoMatrix called the_mat . We implement this using __getitem__ but we have to be slightly careful about the arguments to the method.   Matrix entries and testing equality  Matrix dimension Since a dims function is necessary in order to check that the input to __getitem__ falls within the range of valid indices, as well as to check matrix equality, we first define a dims(self) method.   def dims(self): '''Return the (row,column) dimensions of self.''' return (self._row_dim, self._col_dim)   Fetching from an index The only care necessary is to make sure that the pair of indices is passed as a single variable. Implement the following.   def __getitem__(self, index_pair): '''if r,c == index_pair, return self[r,c]''' r,c = index_pair m,n = self.dims() if r not in range(m) or c not in range(n): raise IndexError('No such entry.') else: # What needs to be returned?   Well-formatted output While the __repr__ method is sufficient for a class file, it will be difficult to see whether or not your matrices are correct in tuple-of-tuples form. Implement this __str__ method.  def __str__(self): \"\"\"Return a human-readable matrix of self\"\"\" # This is highly condensed code. Copy it exactly and change nothing. try: return self._nice_str except AttributeError: m,n = self.dims() str_mat = [[str(self[r,c]).replace('(','').replace(')','') for c in range(n)] for r in range(m)] clen = [max( len(str_mat[r][c]) for r in range(m) ) for c in range(n)] str_mat = [[(\"{s:>%d}\"%clen[c]).format(s=str_mat[r][c]) for c in range(n)] for r in range(m)] str_mat = [(\"[ \"+', '.join(row) + \" ]\") for row in str_mat] str_mat = \"[\" + \"\\n \".join(str_mat) + \"]\" self._nice_str = str_mat return str_mat   Testing matrix equality Three things need to be tested when executing __eq__(self, right) : firstly, the argument right must be of type AlgoMatrix ; secondly, the dimensions of self and right must agree; thirdly, the values in each entry of self and of right must agree. Good thing we defined __getitem__ ! Implement the following, determining whether each of bool_1 , bool_2 , and bool_3 needs to be True or False .   def __eq__(self, right): if type(self) == type(right): if self.dims() == right.dims(): m,n = self.dims() for r in range(m): for c in range(n): if self[r,c] != right[r,c]: return bool_1 return bool_2 return bool_3   Testing your work In your aam_proj5.py file, print the matrices and you defined previously, this time just using the print(...) command as normal. Also find the dimensions using your program, and check to see if .   Since we have included our AlgoVector class from the beginning, it makes sense to analyze matrix multiplication in three distinct forms: two forms where the matrix is the multiplier (left factor) and one where it is the multiplicand (right factor).   Multiplication in AlgoMatrix   The two forms of multiplication with a matrix as the multiplier are matrix-vector multiplication and matrix-matrix multiplication. In each case, there is a consideration as to the size of the multiplicand as compared to the size of the multiplier, and those sizes will need to be checked during input validation. The only other valid multiplication case occurs when a non-matrix is the multiplier and the matrix is the multiplicand, which only occurs during scalar multiplication; therefore in that case the only constraint is to check that the scalar is in fact a complex number.   AlgoMatrix as multiplier: __mul__  Begin with the following:    def __mul__(self, right): '''Return self*right, which necessitates that right be an AlgoVector or another AlgoMatrix.''' if type(right) == type(self): # This is matrix-matrix multiplication pass elif type(right) == AlgoVector: # This is matrix-vector multiplication pass else: raise TypeError(f'Cannot multiply AlgoMatrix*{type(right)}')   Matrix-matrix multiplication While it is best to define matrix-matrix multiplication as iterated matrix-vector multiplication, that is not the optimal way to implement the product. Instead, it's best to check the dimensions of the two matrices and proceed to build the product of and by using when and .   if type(right) == type(self): # This is matrix-matrix multiplication m,n = self.dims() p,q = right.dims() # What condition needs to be checked on this line to ensure # dimensions are correct? if condition: new_grid = [ ] # How many rows has the product matrix? for r in range( number_of_rows ): new_grid.append( [ ] ) # How many columns has the product matrix? for c in range( number_of_columns ): total = 0 # How many terms must be summed? for k in range( number_of_terms ): total += self[r,k] * right[k,c] new_grid[-1].append(total) return AlgoMatrix(new_grid) else: raise ValueError(\"Dimension mismatch\")  Note that as usual there are several places where that code must be modified to work correctly. Matrix-vector multiplication Recall that according to its definition, a matrix-vector product is a linear combination of vectors. Once again the best way to define the product is not the most efficient way to compute it; we instead use the component-wise approach to build the result as a list using where and .  elif type(right) == AlgoVector: # This is matrix-vector multiplication m,n = self.dims() if len(right) == n: # The dimensions of the vector and matrix are compatible new_list = [ ] for c in range(n): new_list.append( ) else: raise ValueError(\"Dimension mismatch\")   AlgoMatrix as multiplicand Unlike vectors, since matrix-matrix multiplication exists there is a use case for matrices being the multiplicand. However that particular use case is handled in Python (via order of operations) by left multiplication and __mul__ . Therefore all we need to implement in the __rmul__ method is scalar-matrix multiplication, which operates the same way in AlgoMatrix as in AlgoVector , extended to handle both rows and columns.  def __rmul__(self, left): try: scalar = complex(left) except: raise TypeError(f\"Invalid scalar {left} for AlgoMatrix multiplication\") new_grid = [ ] m,n = self.dims() for r in range(m): new_grid.append( [ ] ) for c in range(n): # # What has to go in the inner lists? # Append that to new_grid[-1] # continue return AlgoMatrix(new_grid)   Test your work up to this point! Now define a new AlgoMatrix in your aam_proj5.py file, representing the matrix and test your multiplication code to see if and are equal.   Compared to multiplication, addition inside is a breeze.   Addition in AlgoMatrix  Implementation of addition follows the pattern in AlgoMatrix that was established in AlgoVector : raise an error for __radd__ and do the straightforward computation in __add__ . Since other types natively do not add with AlgoMatrix we can safely let the failure to allow an AlgoMatrix to be a right-summand to fall onto the left addition of the other class.   def __add__(self, right): '''Return self+right''' # validate type of right if TEST_CONDITION1: # Compare dimensions m,n = self.dims() p,q = right.dims() if TEST_CONDITION2: new_grid = [ ] for r in range(m): new_grid.append( [ ] ) for c in range(n): # # What has to go in the inner lists? # Append that to new_grid[-1] # Remember: we implemented bracket notation! # return AlgoMatrix(new_grid) else: raise ValueError(\"Dimension mismatch\") else: raise TypeError(f\"Cannot add AlgoMatrix and {type(right)}\")   Test this in your aam_proj5.py file by checking to see that .     Named AlgoMatrix methods  In addition to the AlgoMatrix.dims() method we defined above, we should create some other named methods.   AlgoMatrix as column matrices   The notation for a matrix is sometimes called augmented notation . Regardless of what the notation is called, its use implies that we sometimes wish to isolate a particular column vector of a matrix, or consider the list of all column vectors.   Isolating a single column vector First we write a method which produces a particular indexed column vector.  def column(self, col_index): \"\"\"Return the column vector of self in the given column index.\"\"\" if col_index not in range(self._col_dim): raise IndexError(f'Bad column index {col_index}.') else: new_list = [ ] for r in range(self._row_dim): # # Here we only want a list, not a grid; what must # be in the rth row of the output vector? # continue return AlgoVector(new_list)   Creating the tuple of all column vectors We can leverage the just-written AlgoMatrix.column(col_index) method to create a method which returns a tuple of all the column vectors of a matrix.  def columns(self): '''Return a tuple of all column vectors of self''' new_list = [ ] # # Write this yourself! # return tuple(new_list)   Test your work up to this point! Once again, what we already have used in aam_proj5.py can be utilized to test if your code is working. Try the following, replacing the variable name B with the name of your matrix .  print(AlgoMatrix(B.columns()) == B)    Now move on to implementing conjugation, where .   Complex conjugate of an AlgoMatrix  This activity is no more complicated than it was for vectors, except in the use of the nested loop structure.   def conjugate(self): '''Return the complex conjugate of self.''' new_grid = [ ] for r in range(self._row_dim): new_grid.append( [ ] ) for c in range(self._col_dim): # # What do we append to new_grid[-1] this time? # continue return AlgoMatrix(new_grid)   Test this in aam_proj5.py by printing .   As a sort of reverse procedure of the column and columns methods defined above, we define augmentation of a matrix.: given a matrix and a vector , you can augment by , resulting in a matrix with columns in indices 0 through exactly the columns of but with the vector as a column of index . Moreover, given a matrix , the similarly-defined matrix has columns with indices 0 through equal to the corresponding column of , but additionally another columns, where the column indexed is the column of with index .   Augmented matrices   Let be given, and suppose , , and . Then we can define the matrix  augmented by to be the matrix . While proper use of notation dictates that the entries should be , we suppress the inner brackets and allow that is the unique matrix satisfying .  Similarly, is the matrix augmented by , satisfying      Some augmented matrices   Consider the following matrices and vector: Then by augmentation we have the matrices and given by .     AlgoMatrix augmentation  We should easily see how to use our special definition of initialization by lists of column vectors to perform augmentation. In fact, augmentation is the reason why that option for initialization is a good idea!   def augment(self, right): '''Return the augmented matrix [self|right]''' m,n = self.dims() if type(right) == AlgoVector: if len(right)==m: return AlgoMatrix( self.columns() + tuple([right]) ) else: raise ValueError('Dimension mismatch') elif type(right) == AlgoMatrix: p,q = right.dims() if p==m: return AlgoMatrix( self.columns() + right.columns() ) else: raise ValueError('Dimension mismatch') else: raise TypeError(f'Cannot augment AlgoMatrix by {type(right)}.')   In aam_proj5.py , test this by printing the matrices and ; are they equal?   Now for something completely different! We discussed that every matrix is associated with a linear transformation defined by for every . We did not discuss the existence of the matrix transpose, which provides a function with domain and codomain which is related to but is generally not , an amazing but interesting fact!   Transpose of a matrix   Suppose that . Then there is a unique matrix called the transpose of , denoted , satisfying for all and .  Further, the linear transformation associated with is necessarily given by for any .    The relationship between the dimensions of and ensure the following theorem.   Certain matrix products always exist   Suppose that , so that . Then both and exist, with and .     Transpose of an AlgoMatrix  The definition in terms of entries using bracket notation makes the transpose mostly simple to define; care needs to be taken to make sure the dimension is correct.   def transpose(self): '''Return the matrix transpose of self.''' new_grid = [ ] for c in range(self._col_dim): new_grid.append( [ ] ) for r in range(self._row_dim): # # Do not be fooled! Append the correct entry of self # in this position to new_grid[-1] # continue return AlgoMatrix(new_grid)   To test this, calculate the following in aam_proj5.py : and then draw a conclusion about the relationship between , , and .    "
},
{
  "id": "objectives-7",
  "level": "2",
  "url": "sec-linalg-matproj.html#objectives-7",
  "type": "Objectives",
  "number": "4.4",
  "title": "",
  "body": "  With a good understanding of how to implement vectors in the AlgoVector class, moving to an implementation of matrices is a matter of extension rather than new definitions.     Create a class AlgoMatrix of matrices in Python, including the following methods:     In , __init__ and __repr__     In , dims(self) which returns the row and column dimensions of self as a tuple, as well as __str__ , __getitem__ , and __eq__     In , __mul__ and __rmul__     In , __add__ and __radd__        Add the following additional methods to the AlgoVector class:     In , column(self, col_index) which returns the column vector in the index col_index of self , as well as columns(self) which returns a tuple of all column vectors of self     In , conjugate(self) which returns the conjugate matrix of self     In , augment(self, right) which performs augmentation of the matrix self by an object right of appropriate type and dimensions.    In , transpose(self) which returns the transpose matrix of self , described below.       Test your AlgoVector by making some computations in your aam_proj5.py file.    "
},
{
  "id": "proj-matproj-init",
  "level": "2",
  "url": "sec-linalg-matproj.html#proj-matproj-init",
  "type": "Activity",
  "number": "4.6",
  "title": "<code class=\"code-inline tex2jax_ignore\">AlgoMatrix<\/code> initialization.",
  "body": " AlgoMatrix initialization   In order to develop the __init__(self, grid) method, we have to validate the input. We will allow the initialization to fail naturally if we attempt to index into grid and it is not an indexable object.   Setting up your files The main class file should be AlgoMatrix.py with an appropriate header followed by from AlgoVector import * . The testing and worknig file should be aam_proj5.py with an appropriate header. Further, the initializtion method should begin as follows:   class AlgoMatrix: def __init__(self, grid): '''Initialize an AlgoMatrix from 'grid', which is either a list of list (or tuple or tuple or some combination thereof) of complex values, or a list (or tuple) of AlgoVector objects.''' try: if type(grid[0]) == AlgoVector: # This will get filled in during the next task else: # This will get filled in during the next after that # Then we have to write the exception handler, because without an # 'except:' block this will cause a SyntaxError   A list of AlgoVector objects Inside the first step of the validation, the important things to check are to determine whether remaining elements of grid are actually AlgoVector objects and also to determine that all have the same length. Replace the above code with the following, making modifications as necessary:   if type(grid[0]) == AlgoVector: n = len(grid) # The next line works as long as AlgoVector has a __len__ method! m = len(grid[0]) new_grid = [ ] for x in grid[0].entries(): new_grid.append( [x] ) for vec in grid[1:]: if type(vec) != AlgoVector: raise TypeError('Malformed list of AlgoVector objects') elif len(vec) != m: raise ValueError('Malformed list of AlgoVector objects') else: for r in range(m): # Now you have to fill in: we want to add the rth entry of # the current vector, vec, to the rth row of new_grid. continue else: # This will get filled in during the next task   A list of lists of complex -compatible objects This execution path proceeds slightly more smoothly, as the input is not of a form which is trying to specify a matrix in the transpose order of columns before rows. Complete the following:   else: m = len(grid) n = len(grid[0]) new_grid = [ ] for r in range(m): if len(grid[r]) != n: raise ValueError('Malformed grid of complex numbers') new_grid.append( [ ] ) for c in range(n): # What do we want to actually append into our new rows? new_grid[-1].append( complex( 0 ) )   Handling exceptions As it turns out, we actually want to stop the execution of the program if any of the generated exceptions come up. This is handled by simply putting the command raise in the except:... block without any argument. This causes the exception which brought about the problem to be passed up to the next level; this could be a try:... except:... block in a calling function, or it could be the main execution loop of Python. In the latter case, this causes an error and stops execution of your code! Of course, you also have to store the important data attributes outside the exception handler, since the assignment of attributes is the final step of creating a usable class object.   except: raise self._data = tuple(tuple(row) for row in new_grid) self._row_dim = len(new_grid) self._col_dim = len(new_grid[0])   Representation Representing the object is next. Return the str version of self._data instead of \"None\" in the below code.   def __repr__(self): return \"None\"   Test your work up to this point! At this point you have a substantial amount of code, although you are not finished. Test your work in aam_proj5.py by creating the following matrices and vectors: . Explicitly print the representation of these matrices using print(repr(a_matrix)) , where a_matrix is replaced by the variable names you choose for and .  "
},
{
  "id": "proj-matprok-entries_and_equality",
  "level": "2",
  "url": "sec-linalg-matproj.html#proj-matprok-entries_and_equality",
  "type": "Activity",
  "number": "4.7",
  "title": "Matrix entries and testing equality.",
  "body": " Matrix entries and testing equality  Matrix dimension Since a dims function is necessary in order to check that the input to __getitem__ falls within the range of valid indices, as well as to check matrix equality, we first define a dims(self) method.   def dims(self): '''Return the (row,column) dimensions of self.''' return (self._row_dim, self._col_dim)   Fetching from an index The only care necessary is to make sure that the pair of indices is passed as a single variable. Implement the following.   def __getitem__(self, index_pair): '''if r,c == index_pair, return self[r,c]''' r,c = index_pair m,n = self.dims() if r not in range(m) or c not in range(n): raise IndexError('No such entry.') else: # What needs to be returned?   Well-formatted output While the __repr__ method is sufficient for a class file, it will be difficult to see whether or not your matrices are correct in tuple-of-tuples form. Implement this __str__ method.  def __str__(self): \"\"\"Return a human-readable matrix of self\"\"\" # This is highly condensed code. Copy it exactly and change nothing. try: return self._nice_str except AttributeError: m,n = self.dims() str_mat = [[str(self[r,c]).replace('(','').replace(')','') for c in range(n)] for r in range(m)] clen = [max( len(str_mat[r][c]) for r in range(m) ) for c in range(n)] str_mat = [[(\"{s:>%d}\"%clen[c]).format(s=str_mat[r][c]) for c in range(n)] for r in range(m)] str_mat = [(\"[ \"+', '.join(row) + \" ]\") for row in str_mat] str_mat = \"[\" + \"\\n \".join(str_mat) + \"]\" self._nice_str = str_mat return str_mat   Testing matrix equality Three things need to be tested when executing __eq__(self, right) : firstly, the argument right must be of type AlgoMatrix ; secondly, the dimensions of self and right must agree; thirdly, the values in each entry of self and of right must agree. Good thing we defined __getitem__ ! Implement the following, determining whether each of bool_1 , bool_2 , and bool_3 needs to be True or False .   def __eq__(self, right): if type(self) == type(right): if self.dims() == right.dims(): m,n = self.dims() for r in range(m): for c in range(n): if self[r,c] != right[r,c]: return bool_1 return bool_2 return bool_3   Testing your work In your aam_proj5.py file, print the matrices and you defined previously, this time just using the print(...) command as normal. Also find the dimensions using your program, and check to see if .  "
},
{
  "id": "proj-matproj-multiplication",
  "level": "2",
  "url": "sec-linalg-matproj.html#proj-matproj-multiplication",
  "type": "Activity",
  "number": "4.8",
  "title": "Multiplication in <code class=\"code-inline tex2jax_ignore\">AlgoMatrix<\/code>.",
  "body": " Multiplication in AlgoMatrix   The two forms of multiplication with a matrix as the multiplier are matrix-vector multiplication and matrix-matrix multiplication. In each case, there is a consideration as to the size of the multiplicand as compared to the size of the multiplier, and those sizes will need to be checked during input validation. The only other valid multiplication case occurs when a non-matrix is the multiplier and the matrix is the multiplicand, which only occurs during scalar multiplication; therefore in that case the only constraint is to check that the scalar is in fact a complex number.   AlgoMatrix as multiplier: __mul__  Begin with the following:    def __mul__(self, right): '''Return self*right, which necessitates that right be an AlgoVector or another AlgoMatrix.''' if type(right) == type(self): # This is matrix-matrix multiplication pass elif type(right) == AlgoVector: # This is matrix-vector multiplication pass else: raise TypeError(f'Cannot multiply AlgoMatrix*{type(right)}')   Matrix-matrix multiplication While it is best to define matrix-matrix multiplication as iterated matrix-vector multiplication, that is not the optimal way to implement the product. Instead, it's best to check the dimensions of the two matrices and proceed to build the product of and by using when and .   if type(right) == type(self): # This is matrix-matrix multiplication m,n = self.dims() p,q = right.dims() # What condition needs to be checked on this line to ensure # dimensions are correct? if condition: new_grid = [ ] # How many rows has the product matrix? for r in range( number_of_rows ): new_grid.append( [ ] ) # How many columns has the product matrix? for c in range( number_of_columns ): total = 0 # How many terms must be summed? for k in range( number_of_terms ): total += self[r,k] * right[k,c] new_grid[-1].append(total) return AlgoMatrix(new_grid) else: raise ValueError(\"Dimension mismatch\")  Note that as usual there are several places where that code must be modified to work correctly. Matrix-vector multiplication Recall that according to its definition, a matrix-vector product is a linear combination of vectors. Once again the best way to define the product is not the most efficient way to compute it; we instead use the component-wise approach to build the result as a list using where and .  elif type(right) == AlgoVector: # This is matrix-vector multiplication m,n = self.dims() if len(right) == n: # The dimensions of the vector and matrix are compatible new_list = [ ] for c in range(n): new_list.append( ) else: raise ValueError(\"Dimension mismatch\")   AlgoMatrix as multiplicand Unlike vectors, since matrix-matrix multiplication exists there is a use case for matrices being the multiplicand. However that particular use case is handled in Python (via order of operations) by left multiplication and __mul__ . Therefore all we need to implement in the __rmul__ method is scalar-matrix multiplication, which operates the same way in AlgoMatrix as in AlgoVector , extended to handle both rows and columns.  def __rmul__(self, left): try: scalar = complex(left) except: raise TypeError(f\"Invalid scalar {left} for AlgoMatrix multiplication\") new_grid = [ ] m,n = self.dims() for r in range(m): new_grid.append( [ ] ) for c in range(n): # # What has to go in the inner lists? # Append that to new_grid[-1] # continue return AlgoMatrix(new_grid)   Test your work up to this point! Now define a new AlgoMatrix in your aam_proj5.py file, representing the matrix and test your multiplication code to see if and are equal.  "
},
{
  "id": "proj-matproj-addition",
  "level": "2",
  "url": "sec-linalg-matproj.html#proj-matproj-addition",
  "type": "Activity",
  "number": "4.9",
  "title": "Addition in <code class=\"code-inline tex2jax_ignore\">AlgoMatrix<\/code>.",
  "body": " Addition in AlgoMatrix  Implementation of addition follows the pattern in AlgoMatrix that was established in AlgoVector : raise an error for __radd__ and do the straightforward computation in __add__ . Since other types natively do not add with AlgoMatrix we can safely let the failure to allow an AlgoMatrix to be a right-summand to fall onto the left addition of the other class.   def __add__(self, right): '''Return self+right''' # validate type of right if TEST_CONDITION1: # Compare dimensions m,n = self.dims() p,q = right.dims() if TEST_CONDITION2: new_grid = [ ] for r in range(m): new_grid.append( [ ] ) for c in range(n): # # What has to go in the inner lists? # Append that to new_grid[-1] # Remember: we implemented bracket notation! # return AlgoMatrix(new_grid) else: raise ValueError(\"Dimension mismatch\") else: raise TypeError(f\"Cannot add AlgoMatrix and {type(right)}\")   Test this in your aam_proj5.py file by checking to see that .  "
},
{
  "id": "proj-matproj-column_matrices",
  "level": "2",
  "url": "sec-linalg-matproj.html#proj-matproj-column_matrices",
  "type": "Activity",
  "number": "4.10",
  "title": "<code class=\"code-inline tex2jax_ignore\">AlgoMatrix<\/code> as column matrices.",
  "body": " AlgoMatrix as column matrices   The notation for a matrix is sometimes called augmented notation . Regardless of what the notation is called, its use implies that we sometimes wish to isolate a particular column vector of a matrix, or consider the list of all column vectors.   Isolating a single column vector First we write a method which produces a particular indexed column vector.  def column(self, col_index): \"\"\"Return the column vector of self in the given column index.\"\"\" if col_index not in range(self._col_dim): raise IndexError(f'Bad column index {col_index}.') else: new_list = [ ] for r in range(self._row_dim): # # Here we only want a list, not a grid; what must # be in the rth row of the output vector? # continue return AlgoVector(new_list)   Creating the tuple of all column vectors We can leverage the just-written AlgoMatrix.column(col_index) method to create a method which returns a tuple of all the column vectors of a matrix.  def columns(self): '''Return a tuple of all column vectors of self''' new_list = [ ] # # Write this yourself! # return tuple(new_list)   Test your work up to this point! Once again, what we already have used in aam_proj5.py can be utilized to test if your code is working. Try the following, replacing the variable name B with the name of your matrix .  print(AlgoMatrix(B.columns()) == B)   "
},
{
  "id": "proj-matproj-conjugate",
  "level": "2",
  "url": "sec-linalg-matproj.html#proj-matproj-conjugate",
  "type": "Activity",
  "number": "4.11",
  "title": "Complex conjugate of an <code class=\"code-inline tex2jax_ignore\">AlgoMatrix<\/code>.",
  "body": " Complex conjugate of an AlgoMatrix  This activity is no more complicated than it was for vectors, except in the use of the nested loop structure.   def conjugate(self): '''Return the complex conjugate of self.''' new_grid = [ ] for r in range(self._row_dim): new_grid.append( [ ] ) for c in range(self._col_dim): # # What do we append to new_grid[-1] this time? # continue return AlgoMatrix(new_grid)   Test this in aam_proj5.py by printing .  "
},
{
  "id": "defn-matrix_augmentation",
  "level": "2",
  "url": "sec-linalg-matproj.html#defn-matrix_augmentation",
  "type": "Definition",
  "number": "4.4.1",
  "title": "Augmented matrices.",
  "body": " Augmented matrices   Let be given, and suppose , , and . Then we can define the matrix  augmented by to be the matrix . While proper use of notation dictates that the entries should be , we suppress the inner brackets and allow that is the unique matrix satisfying .  Similarly, is the matrix augmented by , satisfying    "
},
{
  "id": "exmp-matrix_augmentation",
  "level": "2",
  "url": "sec-linalg-matproj.html#exmp-matrix_augmentation",
  "type": "Example",
  "number": "4.4.2",
  "title": "Some augmented matrices.",
  "body": " Some augmented matrices   Consider the following matrices and vector: Then by augmentation we have the matrices and given by .   "
},
{
  "id": "proj-matproj-augmentation",
  "level": "2",
  "url": "sec-linalg-matproj.html#proj-matproj-augmentation",
  "type": "Activity",
  "number": "4.12",
  "title": "<code class=\"code-inline tex2jax_ignore\">AlgoMatrix<\/code> augmentation.",
  "body": " AlgoMatrix augmentation  We should easily see how to use our special definition of initialization by lists of column vectors to perform augmentation. In fact, augmentation is the reason why that option for initialization is a good idea!   def augment(self, right): '''Return the augmented matrix [self|right]''' m,n = self.dims() if type(right) == AlgoVector: if len(right)==m: return AlgoMatrix( self.columns() + tuple([right]) ) else: raise ValueError('Dimension mismatch') elif type(right) == AlgoMatrix: p,q = right.dims() if p==m: return AlgoMatrix( self.columns() + right.columns() ) else: raise ValueError('Dimension mismatch') else: raise TypeError(f'Cannot augment AlgoMatrix by {type(right)}.')   In aam_proj5.py , test this by printing the matrices and ; are they equal?  "
},
{
  "id": "defn-matrix_transpose",
  "level": "2",
  "url": "sec-linalg-matproj.html#defn-matrix_transpose",
  "type": "Definition",
  "number": "4.4.3",
  "title": "Transpose of a matrix.",
  "body": " Transpose of a matrix   Suppose that . Then there is a unique matrix called the transpose of , denoted , satisfying for all and .  Further, the linear transformation associated with is necessarily given by for any .   "
},
{
  "id": "thm-matrix_transpose_products",
  "level": "2",
  "url": "sec-linalg-matproj.html#thm-matrix_transpose_products",
  "type": "Theorem",
  "number": "4.4.4",
  "title": "Certain matrix products always exist.",
  "body": " Certain matrix products always exist   Suppose that , so that . Then both and exist, with and .   "
},
{
  "id": "proj-matproj-transpose",
  "level": "2",
  "url": "sec-linalg-matproj.html#proj-matproj-transpose",
  "type": "Activity",
  "number": "4.13",
  "title": "Transpose of an <code class=\"code-inline tex2jax_ignore\">AlgoMatrix<\/code>.",
  "body": " Transpose of an AlgoMatrix  The definition in terms of entries using bracket notation makes the transpose mostly simple to define; care needs to be taken to make sure the dimension is correct.   def transpose(self): '''Return the matrix transpose of self.''' new_grid = [ ] for c in range(self._col_dim): new_grid.append( [ ] ) for r in range(self._row_dim): # # Do not be fooled! Append the correct entry of self # in this position to new_grid[-1] # continue return AlgoMatrix(new_grid)   To test this, calculate the following in aam_proj5.py : and then draw a conclusion about the relationship between , , and .  "
},
{
  "id": "sec-matapps-ssles",
  "level": "1",
  "url": "sec-matapps-ssles.html",
  "type": "Section",
  "number": "5.1",
  "title": "Solving Systems of Linear Equations",
  "body": " Solving Systems of Linear Equations   Matrix manipulation can be found in many applied mathematical fields, and the principle reason for this is the utility of amtrices in solving systems of simultaneous linear equations.   System of Linear Equations   A system of linear equations (SLE) is a collection of equations in variables of the form where all the values for and . A vector is a solution to the system of linear equations if and only if for all .    This should look familiar to everyone, as there are also signs of this being a linear combination!  Since we already have the language of matrices and vectors, we can take the definition of an SLE and recast it as a vector equation very easily. Consider the following: given  a constant matrix satisfying   a variable vector satisfying , and  a constant vector satisfying   for all and , we can recast the equation using bracket notation for entries. In fact, for all by definition of matrix-vector product, and so by definition of vector equality this is the vector equation .   Augmented matrix representation of a SLE   The SLE represented by a vector equation will also has an augmented matrix representation , specifically the matrix .    In order to build an algorithm for solving systems of equations, we need to carefully define a few more matrix operations.    Elementary row operations  There are precisely three new operations which must be added to the algebraic operations on to allow us to build an amazing algorithm. We will call these the row swap , the row scaling , and elimination operations; the last name is not necessarily accurate to the operation but is precisely the use to which we will put the operation.   Row swap operation   The operation applied to the matrix produces the matrix satisfying . That is to say, is the same as except rows and have been swapped.     Row scaling operation   The operation applied to the matrix produces the matrix satisfying . That is to say, is the same as except all entries in row have been scaled by a factor of .     Row elimination operation   The operation applied to the matrix produces the matrix satisfying . That is to say, is produced from by scaling row of by a factor of , and adding corresponding entries of that row to the entris of row ; the resulting row remains in row and row of is identical to that in .    Without examples, these three operations can be quite confusing.   Examples of the elementary row operations   Let us begin with a particular matrix , . We will denote the performance of a row operation with an annotated arrow, like so: .   Swapping rows This operation does not introduce any problems, as it simply rearranges the elements of a matrix. For instance,   Scaling a row Unlike swapping a row, scaling a row can introduce difficulties as the process of complex multiplication (especially by a reciprocal) can be tedious and reqire a conversion to floating point representations. For an easy example, see this:   Eliminating a row While this operation can be used for any and valid row indices, its most typical use is to change the left-most nonzero entry in a row into a zero, by adding a multiple of another row. For instance, the leftmost nonzero entry of the row index 1 in is ; to add a scalar multiple of the row of index 0 to this and eliminate the requires scaling the top row by the constant . That is, .   The difficulties here are not found in exact arithmetic, but in the approximation to exact arithmetic which is carried out during floating point computation. With exact numeric types, none of these problems occur, but this necessitates the use of sophisticated computer algebra systems or more sophisticated mathematical resources than Python's math package. Just in this example, for instance, we see the following:   >>>  1-36j\/7  (1-5.142857142857142j)     It is interesting that for each of these elementary row operations there is an associated elementary matrix which provides by left-multiplication the same effect.   Elementary matrices   Let be the unique identity matrix of size , satisfying . Moreover, let . Then for any , .    The matrix serves as the left-multiplicative identity on , since for every . Moreover in the matrix is the multiplicative identity for both sides of multiplication, since whenever .    Row equivalence and solutions to SLEs  It is beyond the scope of this class to prove the following results, but they are intrinsicly important to the study of SLEs.   Row-equivalent matrices   Two matrices are row-equivalent if there is a finite sequence of elementary row operations such that .     Row-equivalent augmented matrices have the same solutions   Suppose that and such that the augmented matrices and are row-equivalent. Then is a solution to the augmented system if and only if is a solution to the augmented system ; that is, if and only if .    This is important but not all-important until we discover that there is a particular form of matrix which allows for easy determination of the solutions of an augmented system.   Reduced row-echelon form   A matrix is in reduced row-echelon form , abbreviated RREF , if and only if it satisfies the following conditions:  ZR@B: Zero-Rows at the Bottom  Any row of consisting only of zeros has a greater row index than any row containing any nonzero elements; visually this is further down in the matrix.  LMNZ=1: Leftmost Nonzeros Equal 1  In any row of not consisting only of zeros, the leftmost nonzero (LMNZ) entry is a 1. The LMNZ is the nonzero entry of least column index.  LMNZKC: Leftmost Nonzeros Kill Columns  In a column containing a LMNZ, the only nonzero entry in the column is the LMNZ.   LMNZGDR: Leftmost Nonzeros Go Down and Right  If rows index and have , then the column index of the LMNZ in row is less than the column index of the LMNZ in row ; visually that makes the LMNZs go down and right, starting in the upper left corner of the matrix.    These can be formalized in terms of entry notation using brackets, but it is not fully necessary to do so. Moreover, let be the set of column indices containing LMNZs; these are called pivot columns , as another term for the matrix position containing a LMNZ is a pivot position . Similarly let be the complementary set of column indices not containing a LMNZ, so that .    The sets and will be used algorithmically to produce a general solution to a system of linear equations.   Matrices in RREF and not in RREF  A matrix in RREF  The matrix is in RREF. Check:  ZR@B The matrix has one row all of zeros, and it occurs at the bottom, beneath any row containing a nonzero element. Good. LMNZ=1 In the first rows indexed 0, 1, and 2, there are nonzero entries. The leftmost nonzero entries of these rows are , , and . Very good! LMNZKC Columns indexed 0, 1, and 3 contain LMNZs, and all other elements are 0. Great! LMNZGDR The pairs of row indices and column indices of LMNZs in are, in order, , , and , which are in lexicographic order, which is correct. Done!  A matrix not in RREF The matrix actually fails all four conditions.   We have defined RREF, but not demonstrated its usefulness, nor have we given any additional properties of RREF matrices. The most important property of the RREF is the following result.   Existence and Uniqueness of RREF   Let . Then there is a matrix which is in reduced row-echelon form and is row-equivalent to ; moreover, if there are two such matrices which are both in reduced row-echelon form and each is row-equivalent to , then .    Due to the existence and uniqueness result, it is common to discuss the reduced row-echelon form of a matrix , when really we mean a matrix in RREF which is row-equivalent to the matrix .   GJE notation  We often write when we mean that is the matrix in RREF which is row-equivalent to , specifically to avoid that lengthy phrase.   Since we mentioned above that the matrix is multiplicative identity in , it is interesting to note which matrices in have multiplicative inverses.   Matrix inverses   Let . Then a matrix is an inverse of if and only if . If such a matrix exists, the matrix is said to be invertible .     Matrix inverse uniqueness   Suppose that with and . Then , and as such the unique inverse of is denoted .    If and , then .    We already have all of the tools to find when it exists.   Elementary matrices are invertible   Let be integers and a complex number. Then , , and are all invertible matrices, with , , and .    Recalling the definitions of , , and in terms of elementary row operations, we see that we can extend those definitions as follows: as all the row operations are trivially reversible. Each of the second arrows on the above lines corresponds to the row operation which, when performed on , results in the inverse matrices stated in the theorem.    There are many proofs of the following theorem via many different techniques, but the result is what we desire.   GJE produces matrix inverses   Let and let be matrices such that . Then is invertible if and only if , and in that case .     "
},
{
  "id": "defn-sle",
  "level": "2",
  "url": "sec-matapps-ssles.html#defn-sle",
  "type": "Definition",
  "number": "5.1.1",
  "title": "System of Linear Equations.",
  "body": " System of Linear Equations   A system of linear equations (SLE) is a collection of equations in variables of the form where all the values for and . A vector is a solution to the system of linear equations if and only if for all .   "
},
{
  "id": "defn-sle_augmented_rep",
  "level": "2",
  "url": "sec-matapps-ssles.html#defn-sle_augmented_rep",
  "type": "Definition",
  "number": "5.1.2",
  "title": "Augmented matrix representation of a SLE.",
  "body": " Augmented matrix representation of a SLE   The SLE represented by a vector equation will also has an augmented matrix representation , specifically the matrix .   "
},
{
  "id": "p-587",
  "level": "2",
  "url": "sec-matapps-ssles.html#p-587",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row swap row scaling elimination "
},
{
  "id": "defn-row_swap",
  "level": "2",
  "url": "sec-matapps-ssles.html#defn-row_swap",
  "type": "Definition",
  "number": "5.1.3",
  "title": "Row swap operation.",
  "body": " Row swap operation   The operation applied to the matrix produces the matrix satisfying . That is to say, is the same as except rows and have been swapped.   "
},
{
  "id": "defn-row_scale",
  "level": "2",
  "url": "sec-matapps-ssles.html#defn-row_scale",
  "type": "Definition",
  "number": "5.1.4",
  "title": "Row scaling operation.",
  "body": " Row scaling operation   The operation applied to the matrix produces the matrix satisfying . That is to say, is the same as except all entries in row have been scaled by a factor of .   "
},
{
  "id": "defn-row_elim",
  "level": "2",
  "url": "sec-matapps-ssles.html#defn-row_elim",
  "type": "Definition",
  "number": "5.1.5",
  "title": "Row elimination operation.",
  "body": " Row elimination operation   The operation applied to the matrix produces the matrix satisfying . That is to say, is produced from by scaling row of by a factor of , and adding corresponding entries of that row to the entris of row ; the resulting row remains in row and row of is identical to that in .   "
},
{
  "id": "exmp-elem_row_ops",
  "level": "2",
  "url": "sec-matapps-ssles.html#exmp-elem_row_ops",
  "type": "Example",
  "number": "5.1.6",
  "title": "Examples of the elementary row operations.",
  "body": " Examples of the elementary row operations   Let us begin with a particular matrix , . We will denote the performance of a row operation with an annotated arrow, like so: .   Swapping rows This operation does not introduce any problems, as it simply rearranges the elements of a matrix. For instance,   Scaling a row Unlike swapping a row, scaling a row can introduce difficulties as the process of complex multiplication (especially by a reciprocal) can be tedious and reqire a conversion to floating point representations. For an easy example, see this:   Eliminating a row While this operation can be used for any and valid row indices, its most typical use is to change the left-most nonzero entry in a row into a zero, by adding a multiple of another row. For instance, the leftmost nonzero entry of the row index 1 in is ; to add a scalar multiple of the row of index 0 to this and eliminate the requires scaling the top row by the constant . That is, .   The difficulties here are not found in exact arithmetic, but in the approximation to exact arithmetic which is carried out during floating point computation. With exact numeric types, none of these problems occur, but this necessitates the use of sophisticated computer algebra systems or more sophisticated mathematical resources than Python's math package. Just in this example, for instance, we see the following:   >>>  1-36j\/7  (1-5.142857142857142j)    "
},
{
  "id": "p-597",
  "level": "2",
  "url": "sec-matapps-ssles.html#p-597",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary matrix "
},
{
  "id": "thm-elem_matrices",
  "level": "2",
  "url": "sec-matapps-ssles.html#thm-elem_matrices",
  "type": "Theorem",
  "number": "5.1.7",
  "title": "Elementary matrices.",
  "body": " Elementary matrices   Let be the unique identity matrix of size , satisfying . Moreover, let . Then for any , .   "
},
{
  "id": "p-599",
  "level": "2",
  "url": "sec-matapps-ssles.html#p-599",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left-multiplicative identity "
},
{
  "id": "defn-row_equivalence",
  "level": "2",
  "url": "sec-matapps-ssles.html#defn-row_equivalence",
  "type": "Definition",
  "number": "5.1.8",
  "title": "Row-equivalent matrices.",
  "body": " Row-equivalent matrices   Two matrices are row-equivalent if there is a finite sequence of elementary row operations such that .   "
},
{
  "id": "thm-row_equivalent_same_solution",
  "level": "2",
  "url": "sec-matapps-ssles.html#thm-row_equivalent_same_solution",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "Row-equivalent augmented matrices have the same solutions.",
  "body": " Row-equivalent augmented matrices have the same solutions   Suppose that and such that the augmented matrices and are row-equivalent. Then is a solution to the augmented system if and only if is a solution to the augmented system ; that is, if and only if .   "
},
{
  "id": "defn-rref",
  "level": "2",
  "url": "sec-matapps-ssles.html#defn-rref",
  "type": "Definition",
  "number": "5.1.10",
  "title": "Reduced row-echelon form.",
  "body": " Reduced row-echelon form   A matrix is in reduced row-echelon form , abbreviated RREF , if and only if it satisfies the following conditions:  ZR@B: Zero-Rows at the Bottom  Any row of consisting only of zeros has a greater row index than any row containing any nonzero elements; visually this is further down in the matrix.  LMNZ=1: Leftmost Nonzeros Equal 1  In any row of not consisting only of zeros, the leftmost nonzero (LMNZ) entry is a 1. The LMNZ is the nonzero entry of least column index.  LMNZKC: Leftmost Nonzeros Kill Columns  In a column containing a LMNZ, the only nonzero entry in the column is the LMNZ.   LMNZGDR: Leftmost Nonzeros Go Down and Right  If rows index and have , then the column index of the LMNZ in row is less than the column index of the LMNZ in row ; visually that makes the LMNZs go down and right, starting in the upper left corner of the matrix.    These can be formalized in terms of entry notation using brackets, but it is not fully necessary to do so. Moreover, let be the set of column indices containing LMNZs; these are called pivot columns , as another term for the matrix position containing a LMNZ is a pivot position . Similarly let be the complementary set of column indices not containing a LMNZ, so that .   "
},
{
  "id": "exmp-rref",
  "level": "2",
  "url": "sec-matapps-ssles.html#exmp-rref",
  "type": "Example",
  "number": "5.1.11",
  "title": "Matrices in RREF and not in RREF.",
  "body": " Matrices in RREF and not in RREF  A matrix in RREF  The matrix is in RREF. Check:  ZR@B The matrix has one row all of zeros, and it occurs at the bottom, beneath any row containing a nonzero element. Good. LMNZ=1 In the first rows indexed 0, 1, and 2, there are nonzero entries. The leftmost nonzero entries of these rows are , , and . Very good! LMNZKC Columns indexed 0, 1, and 3 contain LMNZs, and all other elements are 0. Great! LMNZGDR The pairs of row indices and column indices of LMNZs in are, in order, , , and , which are in lexicographic order, which is correct. Done!  A matrix not in RREF The matrix actually fails all four conditions.  "
},
{
  "id": "thm-rref_existence_uniqueness",
  "level": "2",
  "url": "sec-matapps-ssles.html#thm-rref_existence_uniqueness",
  "type": "Theorem",
  "number": "5.1.12",
  "title": "Existence and Uniqueness of RREF.",
  "body": " Existence and Uniqueness of RREF   Let . Then there is a matrix which is in reduced row-echelon form and is row-equivalent to ; moreover, if there are two such matrices which are both in reduced row-echelon form and each is row-equivalent to , then .   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-matapps-ssles.html#remark-3",
  "type": "Remark",
  "number": "5.1.13",
  "title": "GJE notation.",
  "body": " GJE notation  We often write when we mean that is the matrix in RREF which is row-equivalent to , specifically to avoid that lengthy phrase.  "
},
{
  "id": "defn-matrix_inverse",
  "level": "2",
  "url": "sec-matapps-ssles.html#defn-matrix_inverse",
  "type": "Definition",
  "number": "5.1.14",
  "title": "Matrix inverses.",
  "body": " Matrix inverses   Let . Then a matrix is an inverse of if and only if . If such a matrix exists, the matrix is said to be invertible .   "
},
{
  "id": "thm-matrix_inverse-uni",
  "level": "2",
  "url": "sec-matapps-ssles.html#thm-matrix_inverse-uni",
  "type": "Theorem",
  "number": "5.1.15",
  "title": "Matrix inverse uniqueness.",
  "body": " Matrix inverse uniqueness   Suppose that with and . Then , and as such the unique inverse of is denoted .    If and , then .   "
},
{
  "id": "thm-elem_matrix_inverses",
  "level": "2",
  "url": "sec-matapps-ssles.html#thm-elem_matrix_inverses",
  "type": "Theorem",
  "number": "5.1.16",
  "title": "Elementary matrices are invertible.",
  "body": " Elementary matrices are invertible   Let be integers and a complex number. Then , , and are all invertible matrices, with , , and .    Recalling the definitions of , , and in terms of elementary row operations, we see that we can extend those definitions as follows: as all the row operations are trivially reversible. Each of the second arrows on the above lines corresponds to the row operation which, when performed on , results in the inverse matrices stated in the theorem.   "
},
{
  "id": "thm-matrix_inverse",
  "level": "2",
  "url": "sec-matapps-ssles.html#thm-matrix_inverse",
  "type": "Theorem",
  "number": "5.1.17",
  "title": "GJE produces matrix inverses.",
  "body": " GJE produces matrix inverses   Let and let be matrices such that . Then is invertible if and only if , and in that case .   "
},
{
  "id": "sec-matapps-gje_proj",
  "level": "1",
  "url": "sec-matapps-gje_proj.html",
  "type": "Section",
  "number": "5.2",
  "title": "Project: Gauss-Jordan Elimination",
  "body": " Project: Gauss-Jordan Elimination  GJE in Python    This section contains the theoretical descriptions of the Gauss-Jordan Elimination algorithm, in two distinct variations, along with explanations of why the naive method first presented is insufficient in most computational settings.    Learn the formal techniques of GJE.  Implement the elementary row operations as methods in the AlgoMatrix class.  Combine the elementary row operations to perform Gauss-Jordan elimination with partial pivoting, and add a gje method to the AlgoMatrix class.  Create a method in the AlgoMatrix class to compute the inverse of a square matrix, or to raise an error if the matrix is singular.     Given an arbitrary matrix , Gauss-Jordan elimination (GJE) is the best general-purpose algorithm for producing a matrix which is row-equivalent to and is in reduced row-echelon form. The algorithm proceeds iteratively through the matrix by a process of identifying a pivot position, scaling the row containing that pivot position so that the pivot position contains a 1, and then using the 1 in that pivot position to eliminate all nonzero elements in the pivot column. The variations among different types of GJE are referred to as pivoting strategeies , algorithms which choose the optimal row to swap into the preferred row for pivoting. In fact, the pivot selection and swapping of an entry into the pivot position is the only difference in the many algorithms, since the pivot selection step is the only step which does not change the final result of the algorithm.  We begin with the algorithm which seems to most easily satisfy the four points of , wherein the only time a number in a potential pivot position is swapped is when the pivot position contains a zero.    Gauss-Jordan elimination with naive pivoting  In the algorithms in this section, it is clearest to speak of performing an elementary row operation on a matrix as an in-place change of the matrix. This replaces the awkwardness of keeping track of an index of a last element of a sequence as the sequence is being built. In implementation it is simple enough to perform these changes on a copy of the original matrix, or even simply on a copy of the list-of-lists making up the data of the matrix. We use the notation to represent that is transformed by the operation ; this shortens the two steps of followed by assigning to take the value of into a single step of notation.   Gauss-Jordan elimination   Given a matrix , let be a copy of that matrix.  Let and .  While and , repeat the following:  Pivot Selection If , do the following:  Let be the least row index satisfying and . If no such exists, increase by 1 and return to step (2).  Let .    Scaling pivot row Set , and if , let   Elimination phase For every row index , do the following:  Let .  Let     Increase both and by 1.    When step (2) finishes, the matrix is in reduced row-echelon form and is row-equivalent to the initial matrix .       It is frequently useful to preform a GJE algorithm on an augmented matrix where and ; in this case the augmentation line is treated as the edge of the matrix for the purposes of halting; pivot selection never continues when as the algorithm terminates at that point.     Swamping: the computational flaw in naive pivoting  We must frequently recall when performing computational algorithms that an algorithm which works perfectly on paper can fail catastrophically when converted from calculations over to calculations over the floating-point approximations to . Consider the following small example.   Calculations in exact arithmetic  Let and consider the SLE with augmented matrix . Then following the naive algorithm and using exact arithmetic, we have If our solution vector is , then we see .   Unfortunately, the 64-bit specification for floating point arithmetic which is in modern use can only see differences larger than about times the scale of the number. Hence in floating point arithmetic, we have staggeringly different results with the naive algorithm.   Calculations in floating point arithmetic  Let and consider the SLE with augmented matrix . Then following the naive algorithm and using floating point arithmetic, we have . As shown in the previous example, this is very incorrect , even in approximation.     Gauss-Jordan elimination with partial pivoting  Fortunately the algorithmic modification which overcomes the problem of swamping is minor: the pivot position must be selected so that it is always the element of greatest absolute value in its subcolumn.   Gauss-Jordan elimination with Partial Pivoting   Given a matrix , let be a copy of that matrix.  Let and .  While and , repeat the following:  Pivot Selection Let be the least row index satisfying and such that for all .  If , increase by 1 and return to step (2).  If , let .    Scaling pivot row Set , and if , let   Elimination phase For every row index , do the following:  Let .  Let     Increase both and by 1.    When step (2) finishes, the matrix is in reduced row-echelon form and is row-equivalent to the initial matrix .      This slight change fixes the swamping even in small example!   Drain the swamp!   Let and consider the SLE with augmented matrix . Then following the partial pivoting algorithm and using exact arithmetic, we have to swap rows immediately, obtaining . This was our approximate solution in the exact case; we have lost some precision, but very, very little.      Implementing GJE with PP  In order to build a working GJE implementation, you need to have a fully functional AlgoMatrix class; everything is built upon that.   Implementing the elementary row operations   We want to build these carefully so that AlgoMatrix has rswap , rscale , and relim methods which return row-equivalent matrices having performed the appropriate operation.   Swapping rows  We first want to build a function which swaps elements in a list ; if we can build such a function, it is an easy application to be able to swap rows in a AlgoMatrix .  Suppose that grid is a list of entries and are valid indices of grid . What is the slice of grid prior to ? What is the slice of grid containing only the th entry of grid ? What is the slice of grid between indices and but not containing either? What is the slice of grid containing only the th element of grid ? And finally, what is the slice of grid beyond the index not containing the element in index ? How could you add together the slices from the preceding part to swap the elements in indices and of grid ? Complete the following function in your aam_proj6.py file by setting out to the appropriate value in a single line .  def gswap(grid, r1, r2): \"\"\"Return a list consisting of the contents of grid with elements in indices r1 and r2 swapped.\"\"\" out = None return out  Adapt the function gswap from the previous subtask to the following method in your AlgoMatrix.py class file.  def rswap(self, r1, r2): \"\"\"Return the AlgoMatrix obtained from self by swapping rows with indices r1 and r2.\"\"\" out = None return AlgoMatrix(out)   Scaling a row  Similarly to (a), we first work on a list .  Suppose that grid is a list of entries and , and suppose . Suppose further that the element of grid in index is a container, like a list or tuple . How could you create a new version of that container whose elements have all been multiplied by ? Complete the following function in your aam_proj6.py file to produce the effect described in the function's docstring.  def gscale(grid, alpha, r1): \"\"\"Return a list whose elements are identical to those of grid, except in the index r1, which has been scaled by a factor of alpha.\"\"\" temp_entry = [ ] for entry in grid[r1]: temp_entry.append( None ) # Build out on the next line using slicing and addition. out = None return out  Adapt the function gscale from the previous subtask to the following method in your AlgoMatrix.py class file.  def rscale(self, alpha, r1): \"\"\"Return the AlgoMatrix obtained from self by scaling the row with index r1 by a factor of alpha.\"\"\" out = None return AlgoMatrix(out)   Eliminating one row using a scalar multiple of another  This task is a combination of tasks (a) and (b).  Complete the following function in your aam_proj6.py file to produce the effect described in the function's docstring.  def gelim(grid, alpha, r1, r2): \"\"\"Return a list whose elements are identical to those of grid, except in the index r2, which has been modified by adding to it term-by-term the elements of the entry in index r1 scaled by a factor of alpha.\"\"\" temp_entry = [ ] for entry1, entry2 in zip(grid[r1], grid[r2]): temp_entry.append( None ) # Build out on the next line using slicing and addition. out = None return out  In your AlgoMatrix.py class file, complete the method below by adapting the gelim function.  def relim(self, alpha, r1, r2): \"\"\"Return a row-equivalent matrix to self which is obtained by performing the elimination operation which adds to the row with index r2 term-by-term the elements of the row with index r1 scaled by alpha.\"\"\" out = None return AlgoMatrix(out)    Now you have adequate tools to combine the row operations and implement the GJE algorithm as a method in the AlgoMatrix class.   Implement Gauss-Jordan Elimination with Partial Pivoting  Complete the following in AlgoMatrix.py by replacing the well-marked comments with the appropriate code.   def gje(self, ncols=None): '''Perform Gauss-Jordan elimination with Partial Pivoting on the first ncols of self; if ncols is not specified, perform the algorithm on the entire matrix.''' m, n = self.dims() if ncols in range(n): max_col = ncols elif ncols == None: max_col = n else: raise ValueError(\"Invalid number of columns to left of augmentation.\") r, c = 0, 0 grid = AlgoMatrix(self._data) while r< m and c< max_col: # Pivot Selection temp_max = abs(grid[r, c]) piv_row = r for r_prime in range(r+1, m): # Find the greatest modulus entry in the subcolumn if abs(grid[r_prime, c]) > temp_max: temp_max = abs(grid[r_prime, c]) piv_row = r_prime if temp_max == 0: # # Something needs to happen here to move the process to the # next column; the continue line below makes the process # go back to the beginning of the while loop, which is # necessary. What must change to make the process move to # the next column? Replace this comment. # continue elif piv_row != r: # Swap rows, we found a bigger pivot! # # Remember that grid is an AlgoMatrix and that the # row operations produce a new row-equivalent matrix # rather than changing self. # grid = None if grid[r, c] != 1: # Scale pivot row alpha = grid[r, c] # # Remember that grid is an AlgoMatrix and that the # row operations produce a new row-equivalent matrix # rather than changing self. # grid = None for r_prime in range(m): # Eliminate column entries outside pivot row if r_prime == r: continue alpha = grid[r_prime, c] # # Remember that grid is an AlgoMatrix and that the # row operations produce a new row-equivalent matrix # rather than changing self. # grid = None # Step down and right r += 1 c += 1 return grid     Identity matrices  Write a function in aam_proj6.py which returns the identity AlgoMatrix of size cols .   def idmat(cols): \"\"\"Return the identity matrix of size cols\"\"\" if type(cols) != int: raise TypeError(\"Bad size\") elif cols <= 0: raise ValueError(\"Bad size\") out = [ ] for r in range(cols): out.append( [ ] ) for c in range(cols): if r==c: out.append(None) else: out.append(None) return AlgoMatrix(out)     Inverse matrices  Use augmentation, Gauss-Jordan elimination, and the creation of an AlgoMatrix from a slice of the columns of another AlgoMatrix together to add the following method to the AlgoMatrix class:   def inverse(self): \"\"\"Return the inverse of self if self is a nonsingular square matrix.\"\"\" m, n = self.dims() if m == n: # Build the correct augmented matrix augmentation = None bigger_mat = None # Find the RREF matrix row-equivalent to it. rref_bigger_mat = None # Extract the correct columns from it as slices left_submat = None right_submat = None # Return the answer if SOME_NICE_CONDITION: return AlgoMatrix(THE_CORRECT_INPUT) else: raise ValueError(\"Singular matrix\") else: raise ValueError(\"Non-square matrices are not invertible.\")      "
},
{
  "id": "objectives-8",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#objectives-8",
  "type": "Objectives",
  "number": "5.2",
  "title": "",
  "body": "  This section contains the theoretical descriptions of the Gauss-Jordan Elimination algorithm, in two distinct variations, along with explanations of why the naive method first presented is insufficient in most computational settings.    Learn the formal techniques of GJE.  Implement the elementary row operations as methods in the AlgoMatrix class.  Combine the elementary row operations to perform Gauss-Jordan elimination with partial pivoting, and add a gje method to the AlgoMatrix class.  Create a method in the AlgoMatrix class to compute the inverse of a square matrix, or to raise an error if the matrix is singular.   "
},
{
  "id": "p-635",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#p-635",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss-Jordan elimination (GJE) pivoting strategeies "
},
{
  "id": "algo-gje",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#algo-gje",
  "type": "Algorithm",
  "number": "5.2.1",
  "title": "Gauss-Jordan elimination.",
  "body": " Gauss-Jordan elimination   Given a matrix , let be a copy of that matrix.  Let and .  While and , repeat the following:  Pivot Selection If , do the following:  Let be the least row index satisfying and . If no such exists, increase by 1 and return to step (2).  Let .    Scaling pivot row Set , and if , let   Elimination phase For every row index , do the following:  Let .  Let     Increase both and by 1.    When step (2) finishes, the matrix is in reduced row-echelon form and is row-equivalent to the initial matrix .     "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#remark-4",
  "type": "Remark",
  "number": "5.2.2",
  "title": "",
  "body": " It is frequently useful to preform a GJE algorithm on an augmented matrix where and ; in this case the augmentation line is treated as the edge of the matrix for the purposes of halting; pivot selection never continues when as the algorithm terminates at that point.  "
},
{
  "id": "exmp-no_swamping_exact",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#exmp-no_swamping_exact",
  "type": "Example",
  "number": "5.2.3",
  "title": "Calculations in exact arithmetic.",
  "body": " Calculations in exact arithmetic  Let and consider the SLE with augmented matrix . Then following the naive algorithm and using exact arithmetic, we have If our solution vector is , then we see .  "
},
{
  "id": "exmp-swamping",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#exmp-swamping",
  "type": "Example",
  "number": "5.2.4",
  "title": "Calculations in floating point arithmetic.",
  "body": " Calculations in floating point arithmetic  Let and consider the SLE with augmented matrix . Then following the naive algorithm and using floating point arithmetic, we have . As shown in the previous example, this is very incorrect , even in approximation.  "
},
{
  "id": "algo-gje_pp",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#algo-gje_pp",
  "type": "Algorithm",
  "number": "5.2.5",
  "title": "Gauss-Jordan elimination with Partial Pivoting.",
  "body": " Gauss-Jordan elimination with Partial Pivoting   Given a matrix , let be a copy of that matrix.  Let and .  While and , repeat the following:  Pivot Selection Let be the least row index satisfying and such that for all .  If , increase by 1 and return to step (2).  If , let .    Scaling pivot row Set , and if , let   Elimination phase For every row index , do the following:  Let .  Let     Increase both and by 1.    When step (2) finishes, the matrix is in reduced row-echelon form and is row-equivalent to the initial matrix .     "
},
{
  "id": "exmp-drain_the_swamp",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#exmp-drain_the_swamp",
  "type": "Example",
  "number": "5.2.6",
  "title": "Drain the swamp!",
  "body": " Drain the swamp!   Let and consider the SLE with augmented matrix . Then following the partial pivoting algorithm and using exact arithmetic, we have to swap rows immediately, obtaining . This was our approximate solution in the exact case; we have lost some precision, but very, very little.   "
},
{
  "id": "proj-matapps-elem_row_ops",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#proj-matapps-elem_row_ops",
  "type": "Activity",
  "number": "5.1",
  "title": "Implementing the elementary row operations.",
  "body": " Implementing the elementary row operations   We want to build these carefully so that AlgoMatrix has rswap , rscale , and relim methods which return row-equivalent matrices having performed the appropriate operation.   Swapping rows  We first want to build a function which swaps elements in a list ; if we can build such a function, it is an easy application to be able to swap rows in a AlgoMatrix .  Suppose that grid is a list of entries and are valid indices of grid . What is the slice of grid prior to ? What is the slice of grid containing only the th entry of grid ? What is the slice of grid between indices and but not containing either? What is the slice of grid containing only the th element of grid ? And finally, what is the slice of grid beyond the index not containing the element in index ? How could you add together the slices from the preceding part to swap the elements in indices and of grid ? Complete the following function in your aam_proj6.py file by setting out to the appropriate value in a single line .  def gswap(grid, r1, r2): \"\"\"Return a list consisting of the contents of grid with elements in indices r1 and r2 swapped.\"\"\" out = None return out  Adapt the function gswap from the previous subtask to the following method in your AlgoMatrix.py class file.  def rswap(self, r1, r2): \"\"\"Return the AlgoMatrix obtained from self by swapping rows with indices r1 and r2.\"\"\" out = None return AlgoMatrix(out)   Scaling a row  Similarly to (a), we first work on a list .  Suppose that grid is a list of entries and , and suppose . Suppose further that the element of grid in index is a container, like a list or tuple . How could you create a new version of that container whose elements have all been multiplied by ? Complete the following function in your aam_proj6.py file to produce the effect described in the function's docstring.  def gscale(grid, alpha, r1): \"\"\"Return a list whose elements are identical to those of grid, except in the index r1, which has been scaled by a factor of alpha.\"\"\" temp_entry = [ ] for entry in grid[r1]: temp_entry.append( None ) # Build out on the next line using slicing and addition. out = None return out  Adapt the function gscale from the previous subtask to the following method in your AlgoMatrix.py class file.  def rscale(self, alpha, r1): \"\"\"Return the AlgoMatrix obtained from self by scaling the row with index r1 by a factor of alpha.\"\"\" out = None return AlgoMatrix(out)   Eliminating one row using a scalar multiple of another  This task is a combination of tasks (a) and (b).  Complete the following function in your aam_proj6.py file to produce the effect described in the function's docstring.  def gelim(grid, alpha, r1, r2): \"\"\"Return a list whose elements are identical to those of grid, except in the index r2, which has been modified by adding to it term-by-term the elements of the entry in index r1 scaled by a factor of alpha.\"\"\" temp_entry = [ ] for entry1, entry2 in zip(grid[r1], grid[r2]): temp_entry.append( None ) # Build out on the next line using slicing and addition. out = None return out  In your AlgoMatrix.py class file, complete the method below by adapting the gelim function.  def relim(self, alpha, r1, r2): \"\"\"Return a row-equivalent matrix to self which is obtained by performing the elimination operation which adds to the row with index r2 term-by-term the elements of the row with index r1 scaled by alpha.\"\"\" out = None return AlgoMatrix(out)   "
},
{
  "id": "proj-matapps-gje",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#proj-matapps-gje",
  "type": "Activity",
  "number": "5.2",
  "title": "Implement Gauss-Jordan Elimination with Partial Pivoting.",
  "body": " Implement Gauss-Jordan Elimination with Partial Pivoting  Complete the following in AlgoMatrix.py by replacing the well-marked comments with the appropriate code.   def gje(self, ncols=None): '''Perform Gauss-Jordan elimination with Partial Pivoting on the first ncols of self; if ncols is not specified, perform the algorithm on the entire matrix.''' m, n = self.dims() if ncols in range(n): max_col = ncols elif ncols == None: max_col = n else: raise ValueError(\"Invalid number of columns to left of augmentation.\") r, c = 0, 0 grid = AlgoMatrix(self._data) while r< m and c< max_col: # Pivot Selection temp_max = abs(grid[r, c]) piv_row = r for r_prime in range(r+1, m): # Find the greatest modulus entry in the subcolumn if abs(grid[r_prime, c]) > temp_max: temp_max = abs(grid[r_prime, c]) piv_row = r_prime if temp_max == 0: # # Something needs to happen here to move the process to the # next column; the continue line below makes the process # go back to the beginning of the while loop, which is # necessary. What must change to make the process move to # the next column? Replace this comment. # continue elif piv_row != r: # Swap rows, we found a bigger pivot! # # Remember that grid is an AlgoMatrix and that the # row operations produce a new row-equivalent matrix # rather than changing self. # grid = None if grid[r, c] != 1: # Scale pivot row alpha = grid[r, c] # # Remember that grid is an AlgoMatrix and that the # row operations produce a new row-equivalent matrix # rather than changing self. # grid = None for r_prime in range(m): # Eliminate column entries outside pivot row if r_prime == r: continue alpha = grid[r_prime, c] # # Remember that grid is an AlgoMatrix and that the # row operations produce a new row-equivalent matrix # rather than changing self. # grid = None # Step down and right r += 1 c += 1 return grid   "
},
{
  "id": "proj-matapps-identity",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#proj-matapps-identity",
  "type": "Activity",
  "number": "5.3",
  "title": "Identity matrices.",
  "body": " Identity matrices  Write a function in aam_proj6.py which returns the identity AlgoMatrix of size cols .   def idmat(cols): \"\"\"Return the identity matrix of size cols\"\"\" if type(cols) != int: raise TypeError(\"Bad size\") elif cols <= 0: raise ValueError(\"Bad size\") out = [ ] for r in range(cols): out.append( [ ] ) for c in range(cols): if r==c: out.append(None) else: out.append(None) return AlgoMatrix(out)   "
},
{
  "id": "proj-matapps-inverse",
  "level": "2",
  "url": "sec-matapps-gje_proj.html#proj-matapps-inverse",
  "type": "Activity",
  "number": "5.4",
  "title": "Inverse matrices.",
  "body": " Inverse matrices  Use augmentation, Gauss-Jordan elimination, and the creation of an AlgoMatrix from a slice of the columns of another AlgoMatrix together to add the following method to the AlgoMatrix class:   def inverse(self): \"\"\"Return the inverse of self if self is a nonsingular square matrix.\"\"\" m, n = self.dims() if m == n: # Build the correct augmented matrix augmentation = None bigger_mat = None # Find the RREF matrix row-equivalent to it. rref_bigger_mat = None # Extract the correct columns from it as slices left_submat = None right_submat = None # Return the answer if SOME_NICE_CONDITION: return AlgoMatrix(THE_CORRECT_INPUT) else: raise ValueError(\"Singular matrix\") else: raise ValueError(\"Non-square matrices are not invertible.\")   "
},
{
  "id": "sec-matapps-ludecomp",
  "level": "1",
  "url": "sec-matapps-ludecomp.html",
  "type": "Section",
  "number": "5.3",
  "title": "<span class=\"process-math\">\\(PA=LU\\)<\/span> Decomposition",
  "body": " Decomposition   An application of the Gaussian elimination algorithm without its Jordan component is involved in a procedure for solving multiple matrix equations. Consider that there is a matrix and a set of vectors such that all the solutions to must be determined for all . In order to solve all of these problems using Gauss-Jordan elimination in a naive manner, it would be necessary to perform the GJE process times. A technique which allows GJE to be performed only once would be of great benefit.    Special factors  In general, any representation of a matrix of the form is referred to as a decomposition or factorization of ; the type of decomposition depends upon the desired properties of the factors. We begin with a definition of two interesting types of square matrices: upper and lower triangular matrices.   Triangular matrices   A matrix is square if and only if . A square matrix is  Upper triangular if and only if whenever ,  Lower triangular if and only if whenever , and is  Diagonal if and only if whenever .      Every square matrix which is in row-echelon form is necessarily upper triangular, and a careful application of the Gaussian elimination algorithm to a matrix will produce matrices , , and such that   is a permutation matrix obtained as a product of row-swapping matrices,   is lower triangular, and   is upper triangular and row-equivalent to .     decomposition of   Suppose that is an invertible matrix. Then there is a permutation matrix and a pair of lower and upper triangular matrices and such that .    We will apply the Gaussian elimination algorithm with partial pivoting (GEPP) but limiting the eligible row operations only to swapping rows via and elimination via . Initially let , the identity matrix in ; we will modify a matrix which is initally equal to .  In the process of applying the GEPP algorithm to , whenever an operation occurs, also perform . Moreover, when the operation is applied to eliminate a value in row index and column index , rather than writing put .  When the GEPP algorithm completes, the matrix is the correct permutation matrix. The matrix contains all of the necessary elements of both matrices and , which meed to be extracted into the triangular matrices. Specifically we let be the lower triangular matrix satisfying Further, is the upper triangular matrix satisfying   Since this matrix is the product of the inverse matrices corresponding to each of the eliminations mentioned previously, and is the result of those eliminations, it is necessarily the case that .     A worked decomposition example   Suppose that . Then the sequence of row operations and resulting matrices are as follows below. Notice that the value of the permutation matrix is only given when it changes, and entries of enclosed in boxes are those which are recorded to be extracted into .   Extracting and from this matrix, we obtain        Solving systems via decomposition  Now we can put this decomposition to work using basic algebra properties of matrices to solve a simple matrix equation. Beginning from when , we observe that , so . Introducing an intermediate equation and writing , we have to solve and then . These are easy to solve via substitution.   Solution via forward substitution   Given an invertible lower triangular matrix and a vector , the solution to the matrix-vector product equation satisfies , and as such solving for in the order of involves only direct substitution.     Solution via back substitution   Given an invertible upper triangular matrix and a vector , the solution to the matrix-vector product equation satisfies , and as such solving for in the order of involves only direct substitution.       Algorithms for decomposition  The algorithm for decomposition is little different from any other Gaussian elimination algorithm. In order to operate efficiently and not require the same row operations to be performed on multiple matrices, we will carefully work in a list of lists and convert the final result to a tuple of three AlgoMatrix objects.   decomposition   Suppose that be a matrix, and initialize to be the identity matrix of size .  Let and   While and , repeat the following:  Partial pivoting   If all for , increase by 1 and return to step (2).  Let be the least row index such that .  If , then and ; otherwise proceed to step (2.b).    Elimination  For each do the following:  If , continue to the next value of .  Otherwise, let .  For each , update the value of by setting it equal to via the elimination operation.  Reset .    Increase and each by 1.    When the while loop in step (2) terminates, the matrix is the correct permutation matrix, and we may simply extract the values of and from .  Let be the matrix satisfying   Let be the matrix satisfying         A crucial and easy-to-miss part of the algorithm is Step (2.b.iii); in order to store the values for in place of the unnecessary zeroes which normally appear below the diagonal of a matrix in row-echelon form, it is essential that only the values to the right of the diagonal be recomputed during the elimination steps. The elimination which actually is known to send values to zero must not do so, otherwise the lower triangular matrix is lost. The following is a method implementing our algorithm, suitable fo inclusion in the AlgoMatrix class.   An implementation of the algorithm using partial pivoting.   def palu(self, debug=False): m,n = self.dims() if m!=n: raise ValueError(\"Cannot PA=LU decompose nonsquare matrix.\") # Initialize grids grid = [[entry for entry in row] for row in self._data] # Skim the data pmat = [[1 if r==c else 0 for c in range(n)] for r in range(m)] debug_out = [] # Start at upper left r,c = 0,0 while (r < m) and (c < n): # Check if rows need swapped debug_out.append( str(grid) ) cur_max = abs(grid[r][c]) piv = r for r_prime in range(r+1, m): if abs(grid[r_prime][c]) > cur_max: cur_max = abs(grid[r_prime][c]) piv = r_prime # if cur_max == 0, shift right. if cur_max == 0: c += 1 continue # otherwise check if rows need swapped elif piv != r: debug_out.append(f\"Swap R({r})<->R({r_prime})\") # interchange elements of lists grid[piv],grid[r] = grid[r],grid[piv] pmat[piv],pmat[r] = pmat[r],pmat[piv] # No scaling # Elimination for r_prime in range(r+1, m): if grid[r_prime][c] == 0: continue alpha = grid[r_prime][c] \/ grid[r][c] # Since we want to maintain the lower-triangular part for L, we only alter # columns c+1 through n of grid[r_prime] grid[r_prime][c+1:] = [-alpha*grid[r][c_prime] + grid[r_prime][c_prime] for c_prime in range(c+1,n)] # Then store the alpha value in grid[r_prime][c] to pull out for L later grid[r_prime][c] = alpha debug_out.append(f\"Elim ({-alpha})*R({r}) + R({r_prime})\") r += 1 c += 1 P = AlgoMatrix(pmat) L = AlgoMatrix([[1 if r==c else (grid[r][c] if r > c else 0) for c in range(n)] for r in range(m)]) U = AlgoMatrix([[grid[r][c] if r <= c else 0 for c in range(n)] for r in range(m)]) if debug: print(\"\\n\".join(debug_out)) return P,L,U     "
},
{
  "id": "p-689",
  "level": "2",
  "url": "sec-matapps-ludecomp.html#p-689",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decomposition factorization "
},
{
  "id": "defn-triangular_matrix",
  "level": "2",
  "url": "sec-matapps-ludecomp.html#defn-triangular_matrix",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Triangular matrices.",
  "body": " Triangular matrices   A matrix is square if and only if . A square matrix is  Upper triangular if and only if whenever ,  Lower triangular if and only if whenever , and is  Diagonal if and only if whenever .     "
},
{
  "id": "thm-ludecomp",
  "level": "2",
  "url": "sec-matapps-ludecomp.html#thm-ludecomp",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "<span class=\"process-math\">\\(PA=LU\\)<\/span> decomposition of <span class=\"process-math\">\\(A\\)<\/span>.",
  "body": " decomposition of   Suppose that is an invertible matrix. Then there is a permutation matrix and a pair of lower and upper triangular matrices and such that .    We will apply the Gaussian elimination algorithm with partial pivoting (GEPP) but limiting the eligible row operations only to swapping rows via and elimination via . Initially let , the identity matrix in ; we will modify a matrix which is initally equal to .  In the process of applying the GEPP algorithm to , whenever an operation occurs, also perform . Moreover, when the operation is applied to eliminate a value in row index and column index , rather than writing put .  When the GEPP algorithm completes, the matrix is the correct permutation matrix. The matrix contains all of the necessary elements of both matrices and , which meed to be extracted into the triangular matrices. Specifically we let be the lower triangular matrix satisfying Further, is the upper triangular matrix satisfying   Since this matrix is the product of the inverse matrices corresponding to each of the eliminations mentioned previously, and is the result of those eliminations, it is necessarily the case that .   "
},
{
  "id": "exmp-ludecomp-worked",
  "level": "2",
  "url": "sec-matapps-ludecomp.html#exmp-ludecomp-worked",
  "type": "Example",
  "number": "5.3.3",
  "title": "A worked <span class=\"process-math\">\\(PA=LU\\)<\/span> decomposition example.",
  "body": " A worked decomposition example   Suppose that . Then the sequence of row operations and resulting matrices are as follows below. Notice that the value of the permutation matrix is only given when it changes, and entries of enclosed in boxes are those which are recorded to be extracted into .   Extracting and from this matrix, we obtain    "
},
{
  "id": "thm-forward-sub",
  "level": "2",
  "url": "sec-matapps-ludecomp.html#thm-forward-sub",
  "type": "Theorem",
  "number": "5.3.4",
  "title": "Solution via forward substitution.",
  "body": " Solution via forward substitution   Given an invertible lower triangular matrix and a vector , the solution to the matrix-vector product equation satisfies , and as such solving for in the order of involves only direct substitution.   "
},
{
  "id": "thm-back_sub",
  "level": "2",
  "url": "sec-matapps-ludecomp.html#thm-back_sub",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "Solution via back substitution.",
  "body": " Solution via back substitution   Given an invertible upper triangular matrix and a vector , the solution to the matrix-vector product equation satisfies , and as such solving for in the order of involves only direct substitution.   "
},
{
  "id": "algo-ludecomp",
  "level": "2",
  "url": "sec-matapps-ludecomp.html#algo-ludecomp",
  "type": "Algorithm",
  "number": "5.3.6",
  "title": "<span class=\"process-math\">\\(PA=LU\\)<\/span> decomposition.",
  "body": " decomposition   Suppose that be a matrix, and initialize to be the identity matrix of size .  Let and   While and , repeat the following:  Partial pivoting   If all for , increase by 1 and return to step (2).  Let be the least row index such that .  If , then and ; otherwise proceed to step (2.b).    Elimination  For each do the following:  If , continue to the next value of .  Otherwise, let .  For each , update the value of by setting it equal to via the elimination operation.  Reset .    Increase and each by 1.    When the while loop in step (2) terminates, the matrix is the correct permutation matrix, and we may simply extract the values of and from .  Let be the matrix satisfying   Let be the matrix satisfying        "
},
{
  "id": "listing-15",
  "level": "2",
  "url": "sec-matapps-ludecomp.html#listing-15",
  "type": "Listing",
  "number": "5.3.7",
  "title": "",
  "body": " An implementation of the algorithm using partial pivoting.   def palu(self, debug=False): m,n = self.dims() if m!=n: raise ValueError(\"Cannot PA=LU decompose nonsquare matrix.\") # Initialize grids grid = [[entry for entry in row] for row in self._data] # Skim the data pmat = [[1 if r==c else 0 for c in range(n)] for r in range(m)] debug_out = [] # Start at upper left r,c = 0,0 while (r < m) and (c < n): # Check if rows need swapped debug_out.append( str(grid) ) cur_max = abs(grid[r][c]) piv = r for r_prime in range(r+1, m): if abs(grid[r_prime][c]) > cur_max: cur_max = abs(grid[r_prime][c]) piv = r_prime # if cur_max == 0, shift right. if cur_max == 0: c += 1 continue # otherwise check if rows need swapped elif piv != r: debug_out.append(f\"Swap R({r})<->R({r_prime})\") # interchange elements of lists grid[piv],grid[r] = grid[r],grid[piv] pmat[piv],pmat[r] = pmat[r],pmat[piv] # No scaling # Elimination for r_prime in range(r+1, m): if grid[r_prime][c] == 0: continue alpha = grid[r_prime][c] \/ grid[r][c] # Since we want to maintain the lower-triangular part for L, we only alter # columns c+1 through n of grid[r_prime] grid[r_prime][c+1:] = [-alpha*grid[r][c_prime] + grid[r_prime][c_prime] for c_prime in range(c+1,n)] # Then store the alpha value in grid[r_prime][c] to pull out for L later grid[r_prime][c] = alpha debug_out.append(f\"Elim ({-alpha})*R({r}) + R({r_prime})\") r += 1 c += 1 P = AlgoMatrix(pmat) L = AlgoMatrix([[1 if r==c else (grid[r][c] if r > c else 0) for c in range(n)] for r in range(m)]) U = AlgoMatrix([[grid[r][c] if r <= c else 0 for c in range(n)] for r in range(m)]) if debug: print(\"\\n\".join(debug_out)) return P,L,U   "
},
{
  "id": "sec-gtalgos-basics",
  "level": "1",
  "url": "sec-gtalgos-basics.html",
  "type": "Section",
  "number": "6.1",
  "title": "Graph basics",
  "body": " Graph basics   Graph   A graph is an ordered pair , where is a set of vertices and is a set of edges , where edges are unordered pairs of distinct vertices. That is,   In order to simplify notation, we will write instead of for an edge.     There are many, many different formulations for the definition of a graph. Some definitions are suffiently relaxed that an edge can loop back from a vertex to itself these are generally called loops . Likewise, edges can be defined as independent objects with endpoints , which allows for more than one edge to have vertices and as endpoints. We make the distinction that graphs which have loops or multiple edges are multigraphs . In fact some graph theorists extend the definition even further to allow edges to have more than two vertices    The Petersen graph   A famous example of a graph is the Petersen graph , . Here it is drawn with its vertex set consisting of the collection of subsets of size 2 of the set , with an edge between vertices if and only if they are disjoint as sets. This labeling of the Petersen graph is convenient for several application in algebraic graph theory .        Adjacent and incident   Two vertices are adjacent if and only if . An edge is incident with a vertex if and only if there is another vertex such that .     Vertex degree   The degree of a vertex is the number of vertices adjacent to ; that is, . Another term for the vertex degree is valence , as borrowed from chemistry, and historically some authors have preferred to denote valence.     Subgraphs   A graph is a subgraph of if and only if and . The subgraph is the subgraph of induced by if and only if . That is, is an induced subgraph of if and only if every edge of between vertices of is an edge of . There are many competing notations for induced subgraphs, but we will denote the induced subgraph of in by .     Some subgraphs of the Petersen graph  If we relabel the vertices of the Petersen graph as then the subgraph induced by has edge set , highlighted in red.       Graph isomorphism   Two graphs and are isomorphic if there is a function such that the following three conditions hold.  Injective If with , then .  Surjective If , then there is some such that .  Graph Homomorphism  if and only if with and .    If such a function exists, we write .    Each of these conditions independently are important, but their combination is essential in graph theory: a graph isomorphism is an adjacency-preserving bijection between vertex sets .   Graph automorphism   Let . A permutation which satisfies condition (3) of the definition of is a graph automorphism . The set of all automorphisms of a graph is denoted .     Isomorphism is not equality   Consider the graphs and . Since , obviously . However choosing any bijection suffices to produce a graph isomorphism from to , so      Paths   Suppose is a graph and . A path between and is any sequence such that for each and if . This can also be called a -path . A path containing edges is a path of length  .     Graph distance   Let be a graph and . The distance from to is the length of a shortest path between and . If no such path exists, the distance from to is . Distance between and in the graph is sometimes denoted , which can be easily confused with the notation for degree.     Cycles in graphs   A cycle is a sequence such that for each and if except for . A cycle containing edges is an -cycle, and is isomorphic to the cycle graph .     Paths and a cycle in the Petersen graph  It is easy to draw the Petersen graph with two distinct (and openly disjoint) -paths, one highlighted in red and the other in blue. The union of the red and blue paths is a 9-cycle in .       Connected graphs   The graph is connected if and only if for any two distinct vertices there is at least one -path.     Components of a graph   A subgraph of a graph is a component of if and only if and is disconnected for any vertex . Clearly, a connected graph has only one component.     Trees and forests   A connected graph containing no cycles is called a tree . An arbitrary graph containing no cycles is called a forest . For a given graph , a forest where is called a spanning forest . A spanning tree of a connected graph is defined analogously.    These are just a few of the basic definitions of graph theory. It is a subject which is very appealing for research as the problems are often visually interesting. Since problems in the field are very accessible, some mathematicians are mildly derogatory towards graph theory, calling the field recreational mathematics. If that is so, then the vast number of graph theorists are perhaps the luckiest of all mathematicians: their chosen field of research is seen to be fun and games by their colleagues!  All joking aside, graph theory and the larger discipline of combinatorics are deeply applicable fields. There are many pratical, real world problems which are modeled by discrete systems (rather than continuous systems, such as used in differential equations or traditional applied math courses), and graph theory techniques are often the best solution to these problems. So while combinatorics is not generally considered part of applied mathematics, it is very much applicable mathematics .  "
},
{
  "id": "defn-graph",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-graph",
  "type": "Definition",
  "number": "6.1.1",
  "title": "Graph.",
  "body": " Graph   A graph is an ordered pair , where is a set of vertices and is a set of edges , where edges are unordered pairs of distinct vertices. That is,   In order to simplify notation, we will write instead of for an edge.   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-gtalgos-basics.html#remark-5",
  "type": "Remark",
  "number": "6.1.2",
  "title": "",
  "body": " There are many, many different formulations for the definition of a graph. Some definitions are suffiently relaxed that an edge can loop back from a vertex to itself these are generally called loops . Likewise, edges can be defined as independent objects with endpoints , which allows for more than one edge to have vertices and as endpoints. We make the distinction that graphs which have loops or multiple edges are multigraphs . In fact some graph theorists extend the definition even further to allow edges to have more than two vertices  "
},
{
  "id": "exmp-petersen_graph",
  "level": "2",
  "url": "sec-gtalgos-basics.html#exmp-petersen_graph",
  "type": "Example",
  "number": "6.1.3",
  "title": "The Petersen graph.",
  "body": " The Petersen graph   A famous example of a graph is the Petersen graph , . Here it is drawn with its vertex set consisting of the collection of subsets of size 2 of the set , with an edge between vertices if and only if they are disjoint as sets. This labeling of the Petersen graph is convenient for several application in algebraic graph theory .      "
},
{
  "id": "defn-adjacent",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-adjacent",
  "type": "Definition",
  "number": "6.1.4",
  "title": "Adjacent and incident.",
  "body": " Adjacent and incident   Two vertices are adjacent if and only if . An edge is incident with a vertex if and only if there is another vertex such that .   "
},
{
  "id": "defn-vertex_degree",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-vertex_degree",
  "type": "Definition",
  "number": "6.1.5",
  "title": "Vertex degree.",
  "body": " Vertex degree   The degree of a vertex is the number of vertices adjacent to ; that is, . Another term for the vertex degree is valence , as borrowed from chemistry, and historically some authors have preferred to denote valence.   "
},
{
  "id": "defn-subgraph",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-subgraph",
  "type": "Definition",
  "number": "6.1.6",
  "title": "Subgraphs.",
  "body": " Subgraphs   A graph is a subgraph of if and only if and . The subgraph is the subgraph of induced by if and only if . That is, is an induced subgraph of if and only if every edge of between vertices of is an edge of . There are many competing notations for induced subgraphs, but we will denote the induced subgraph of in by .   "
},
{
  "id": "exmp-petersen_subgraph",
  "level": "2",
  "url": "sec-gtalgos-basics.html#exmp-petersen_subgraph",
  "type": "Example",
  "number": "6.1.7",
  "title": "Some subgraphs of the Petersen graph.",
  "body": " Some subgraphs of the Petersen graph  If we relabel the vertices of the Petersen graph as then the subgraph induced by has edge set , highlighted in red.     "
},
{
  "id": "defn-graph_isomorphism",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-graph_isomorphism",
  "type": "Definition",
  "number": "6.1.8",
  "title": "Graph isomorphism.",
  "body": " Graph isomorphism   Two graphs and are isomorphic if there is a function such that the following three conditions hold.  Injective If with , then .  Surjective If , then there is some such that .  Graph Homomorphism  if and only if with and .    If such a function exists, we write .   "
},
{
  "id": "defn-graph_automorphism",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-graph_automorphism",
  "type": "Definition",
  "number": "6.1.9",
  "title": "Graph automorphism.",
  "body": " Graph automorphism   Let . A permutation which satisfies condition (3) of the definition of is a graph automorphism . The set of all automorphisms of a graph is denoted .   "
},
{
  "id": "exmp-isom_not_equal",
  "level": "2",
  "url": "sec-gtalgos-basics.html#exmp-isom_not_equal",
  "type": "Example",
  "number": "6.1.10",
  "title": "Isomorphism is not equality.",
  "body": " Isomorphism is not equality   Consider the graphs and . Since , obviously . However choosing any bijection suffices to produce a graph isomorphism from to , so    "
},
{
  "id": "defn-path",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-path",
  "type": "Definition",
  "number": "6.1.11",
  "title": "Paths.",
  "body": " Paths   Suppose is a graph and . A path between and is any sequence such that for each and if . This can also be called a -path . A path containing edges is a path of length  .   "
},
{
  "id": "defn-graph_distance",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-graph_distance",
  "type": "Definition",
  "number": "6.1.12",
  "title": "Graph distance.",
  "body": " Graph distance   Let be a graph and . The distance from to is the length of a shortest path between and . If no such path exists, the distance from to is . Distance between and in the graph is sometimes denoted , which can be easily confused with the notation for degree.   "
},
{
  "id": "defn-cycle_graphs",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-cycle_graphs",
  "type": "Definition",
  "number": "6.1.13",
  "title": "Cycles in graphs.",
  "body": " Cycles in graphs   A cycle is a sequence such that for each and if except for . A cycle containing edges is an -cycle, and is isomorphic to the cycle graph .   "
},
{
  "id": "exmp-cylces_in_petersen",
  "level": "2",
  "url": "sec-gtalgos-basics.html#exmp-cylces_in_petersen",
  "type": "Example",
  "number": "6.1.14",
  "title": "Paths and a cycle in the Petersen graph.",
  "body": " Paths and a cycle in the Petersen graph  It is easy to draw the Petersen graph with two distinct (and openly disjoint) -paths, one highlighted in red and the other in blue. The union of the red and blue paths is a 9-cycle in .     "
},
{
  "id": "defn-connected_graph",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-connected_graph",
  "type": "Definition",
  "number": "6.1.15",
  "title": "Connected graphs.",
  "body": " Connected graphs   The graph is connected if and only if for any two distinct vertices there is at least one -path.   "
},
{
  "id": "defn-graph_component",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-graph_component",
  "type": "Definition",
  "number": "6.1.16",
  "title": "Components of a graph.",
  "body": " Components of a graph   A subgraph of a graph is a component of if and only if and is disconnected for any vertex . Clearly, a connected graph has only one component.   "
},
{
  "id": "defn-tree",
  "level": "2",
  "url": "sec-gtalgos-basics.html#defn-tree",
  "type": "Definition",
  "number": "6.1.17",
  "title": "Trees and forests.",
  "body": " Trees and forests   A connected graph containing no cycles is called a tree . An arbitrary graph containing no cycles is called a forest . For a given graph , a forest where is called a spanning forest . A spanning tree of a connected graph is defined analogously.   "
},
{
  "id": "sec-gtalgos-mst",
  "level": "1",
  "url": "sec-gtalgos-mst.html",
  "type": "Section",
  "number": "6.2",
  "title": "Minimum spanning trees and forests",
  "body": " Minimum spanning trees and forests  Minimum spanning trees   We revisit the original idea for the text, the minimum spanning tree. To begin we will need a precise definition.   Weighted graphs   A weighted graph is an ordered triple where is a set of vertices, is a set edges, and is a edge-weight function .  A weighted digraph is an ordered triple where the edge set is replaced by a set of ordered pairs of vertices, which are called arrows or directed edges . The weight function then is .    The problem of finding a spanning tree in a connected graph is identical to the problem of finding a minimum spanning tree in a connected weighted graph, since in the former case you can have the weight function be constant-valued. There are two algorithms commonly used to teach this topic: the Jarník-Prim algorithm and Kruskal's algorithm, the latter of which will produce a minimum spanning forest consisting of minimum spanning trees of each component of the original graph.    Jarník-Prim Algorithm  The first algorithm we will explore to build a minimum spanning tree was developed by Czech mathematician Vojtĕch Jarník in 1930 and then independently rediscovered by Robert Prim in 1957 and Edsger Dijkstra in 1959. The weights of each edge are considered exactly to be costs of adding the edge to the graph. Unfortunately, without the introduction of a more complicated data structure than we have previously discussed we must implement the algorithm in a sub-optimal way. Using arrays or lists the computational complexity of the algorithm is ; optimal strategies involve the use of heaps.  The idea of the algorithm is very simple, and the implementation can be made simple at the cost of longer run times. Suppose there is a finite weighted graph with weight function and a cost function such that initially for all . Choose a vertex and set , and let be the ordered set of vertices of a tree.  The algorithm proceeds from here inductively: suppose is the vertex most recently added to and let be the neighbors of in which are not already vertices of . For each , let . In the case where the cost of a vertex is changed, denote as the predecessor of . After so considering each vertex, any vertex of of least cost is the next vertex to add to . As long as the original graph is connected, every vertex will eventually be added to , and since no edge is added between a new vertex and an old vertex of , the result is necessarily a tree.   An example applying the Jarník-Prim algorithm   Consider a graph with the following weighted edges:                   1   2   4   1     9   5   10   4     8   5   7   5     7   9   9   7     9   5   7   10    We will asume that the first vertex to be added is , so that and , for each . Adding to updates the cost and predecessor functions to the following:                0  1  2  3  4  5  6  7  8  9     0*    1  2  4    1  9     *  ?  ?  0  0  0  ?  ?  0  0    The notation indicates that the vertex has already been added and does not need to be considered. Consulting the table, we see that the least expensive and least indexed vertex to next add to the tree is .  The neighbors of are , , and , but the cost to add with predecessor is and ; hence the only change is to vertex .                0  1  2  3  4  5  6  7  8  9     0*    1*  2  4   8  1  9     *  ?  ?  0  0  0  ?  3  0  0    Proceeding in this manner, we generate the cost table.   Table of iterations of the cost function.    Step              0  0*                      1  0*      1*  2  4      1  9    2  0*      1*  2  4    8  1*  9    3  0*  5  8  1*  2*  4  10  8  1*  7     After this point, no changes are made to the cost function, and vertices are added in order of least cost. Next we produce the table of predecessors.   Table of iterations of the predecessor function.    Step              0  *                      1  *      0  0  0      0  0    2  *      0  0  0    3  0  0    3  *  8  8  0  0  0  8  3  0  4         Min Heaps    A min heap is a special data structure representing a rooted tree, with the condition that a parent vertex is always ordered before its children .    Heaps provide extremely efficient algorithms when knowing the position of a minimal (or maximal, for a max heap) element of a data set is necessary. Hence they are the optimal data structure for Dijkstra's algorithm, and they provide a very efficient data structure for storing the vertices of a graph when using the Jarník-Prim Algorithm to produce a minimum spanning tree of a connected graph.  There is a standard way to develop a heap class representing a binary min heap. The data is stored in a list such that the children of the element stored in index are stored in indices and , and with every insertion into the heap the array is rebalanced to maintain this heap condition. While this is of course a fascinating algorithm, the implementation of a heap data structure to produce an optimized version of this algorithm, or any other algorithm, is beyond the current scope of this text.    Kruskal's algorithm   Joseph Kruskal first published his solution to the minimum spanning tree problem in 1956; again, this is a wonderful, almost intuitive algorithm, which hinges on an awesome use of mathematical induction. The caveat is that the weight function for Kruskal's algorithm must be a non-negative function, .    If is a forest and is an edge where and are not in the same component of , then is a forest.     Suppose is a totally disconnected graph, and let . Then and are (naturally) in separate components. The graph contains no cycles, since a graph with only one edge cannot contain a cycle.  Suppose is a forest and are vertices in different components of . Assume, towards a contradiction, that contains a cycle. Then there is a cycle where and when and . If for any , then we have contradicted the assumption that was a forest. On the other hand, if , then we may relabel the cycle . But then is a -path, contradicting the assumption that and are in different components of . In either case, we have a contradiction.   Hence we have an immediate method of producing a spanning forest include any edge which does not connect components. More importantly, we have all that is necessary for Kruskal's algorithm: if the graph is weighted, the edge of minimal weight which does not introduce a cycle is added in every iteration.   Kruskal's Spanning Tree algorithm   Let be a weighted graph where and such that whenever .  Suppose , , , , and   For each , let . Do the following:  If and and where , then let and let . Otherwise, let .     is a minimum spanning tree for .       Applying Kruskal's Algorithm   Consider the graph with the following weighted edges:     Weight  Edge  Weight  Edge  Weight  Edge  Weight  Edge    1    4    7    9      1    5    7    9      2    5    7    9      2    5    7    10      4    5    8    10      The graph with this edge set on and weight function is depicted in . To begin applying Kruskal's algorithm to find a spanning tree of with minimal weight, we assign each vertex to its own component; thus, the partition of the vertices is    A weighted graph .      For the sake of abbreviated notation, we define the function such that if and only if . The algorithm proceeds as follows: the edge of least weight is , with . Since , the edge can be included in the tree. We will merge the component into , since the two components are of equal size and . Hence we make and . The next edge of least weight is , also with ; since and , we must merge and just as we did and . The process is tabulated below.   Tabulation of steps of Kruskal's Algorithm           Step  Weight      Include ?    0  1     0     3  True    1  1     4     8  True   2  2     3     8  True   3  2     8     8  False   4  4     8     5  True   5  4     1     8  True   6  5     8     2  True   7  5     8     7  True   8  5     8     8  False   9  5     8     8  False   10  7     8     8  False   11  7     8     8  False   12  7     8     9  True   13  7     8     8  False   14  8     8     6  True   15  9     8     8  False   16  9     8     8  False   17  9     8     8  False   18  10     8     8  False   19  10     8     8  False     The same graph with the minimum spanning tree discovered via Kruskal's algorithm highlighted with red edges.          Implementing Kruskal's algorithm  In a very naive approach to Kruskal's algorithm, the function reporting the component of vertex is not implemented. This requires two searches through the components for each edge. We avoid this at the cost of storing both the component of each vertex as well as the vertices in each component.   A Python implementation of Kruskal's algorithm.   def kruskal(verts, wedges, verbose=False): WE = sorted((l,u,v) for u,v,l in wedges) comp_of = {v:v for v in verts} vert_of = {v:[v] for v in verts} keep = [] dump = [] out_grid = [] for i,(w,u,v) in enumerate(WE): cu, cv = comp_of[u], comp_of[v] row = [w,u,cu,v,cv,cu!=cv] out_grid.append( row ) if cu==cv: dump.append( (u,v,w) ) continue keep.append( (u,v,w) ) if len(vert_of[cu]) > len(vert_of[cv]): v,u = u,v cu,cv = cv,cu vert_of[cv] += vert_of[cu] while len(vert_of[cu])>0: comp_of[vert_of[cu].pop()] = cv if verbose: out_grid = [[\"Weight\", \"u\", \"C(u)\", \"v\", \"C(v)\", \"Include?\"]] out_grid += [[str(entr) for entr in row] for row in out_grid] mc = [max(len(out_grid[r][c]) for r in range(len(out_grid))) for c in range(len(out_grid[0]))] new_out_grid = [[] for _ in out_grid] for c in range(len(out_grid[0])): for r in range(len(out_grid)): new_out_grid[r].append((\"{x:>%d}\"% mc[c]).format(x=out_grid[r][c])) print( \"\\n\".join([\" | \".join(row) for row in new_out_grid])) return keep,dump      "
},
{
  "id": "p-752",
  "level": "2",
  "url": "sec-gtalgos-mst.html#p-752",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimum spanning tree. "
},
{
  "id": "defn-weighted_graph",
  "level": "2",
  "url": "sec-gtalgos-mst.html#defn-weighted_graph",
  "type": "Definition",
  "number": "6.2.1",
  "title": "Weighted graphs.",
  "body": " Weighted graphs   A weighted graph is an ordered triple where is a set of vertices, is a set edges, and is a edge-weight function .  A weighted digraph is an ordered triple where the edge set is replaced by a set of ordered pairs of vertices, which are called arrows or directed edges . The weight function then is .   "
},
{
  "id": "p-755",
  "level": "2",
  "url": "sec-gtalgos-mst.html#p-755",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanning tree minimum spanning tree minimum spanning forest "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-gtalgos-mst.html#example-20",
  "type": "Example",
  "number": "6.2.2",
  "title": "An example applying the Jarník-Prim algorithm.",
  "body": " An example applying the Jarník-Prim algorithm   Consider a graph with the following weighted edges:                   1   2   4   1     9   5   10   4     8   5   7   5     7   9   9   7     9   5   7   10    We will asume that the first vertex to be added is , so that and , for each . Adding to updates the cost and predecessor functions to the following:                0  1  2  3  4  5  6  7  8  9     0*    1  2  4    1  9     *  ?  ?  0  0  0  ?  ?  0  0    The notation indicates that the vertex has already been added and does not need to be considered. Consulting the table, we see that the least expensive and least indexed vertex to next add to the tree is .  The neighbors of are , , and , but the cost to add with predecessor is and ; hence the only change is to vertex .                0  1  2  3  4  5  6  7  8  9     0*    1*  2  4   8  1  9     *  ?  ?  0  0  0  ?  3  0  0    Proceeding in this manner, we generate the cost table.   Table of iterations of the cost function.    Step              0  0*                      1  0*      1*  2  4      1  9    2  0*      1*  2  4    8  1*  9    3  0*  5  8  1*  2*  4  10  8  1*  7     After this point, no changes are made to the cost function, and vertices are added in order of least cost. Next we produce the table of predecessors.   Table of iterations of the predecessor function.    Step              0  *                      1  *      0  0  0      0  0    2  *      0  0  0    3  0  0    3  *  8  8  0  0  0  8  3  0  4      "
},
{
  "id": "definition-58",
  "level": "2",
  "url": "sec-gtalgos-mst.html#definition-58",
  "type": "Definition",
  "number": "6.2.5",
  "title": "",
  "body": "  A min heap is a special data structure representing a rooted tree, with the condition that a parent vertex is always ordered before its children .   "
},
{
  "id": "theorem-28",
  "level": "2",
  "url": "sec-gtalgos-mst.html#theorem-28",
  "type": "Theorem",
  "number": "6.2.6",
  "title": "",
  "body": "  If is a forest and is an edge where and are not in the same component of , then is a forest.   "
},
{
  "id": "proof-15",
  "level": "2",
  "url": "sec-gtalgos-mst.html#proof-15",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose is a totally disconnected graph, and let . Then and are (naturally) in separate components. The graph contains no cycles, since a graph with only one edge cannot contain a cycle.  Suppose is a forest and are vertices in different components of . Assume, towards a contradiction, that contains a cycle. Then there is a cycle where and when and . If for any , then we have contradicted the assumption that was a forest. On the other hand, if , then we may relabel the cycle . But then is a -path, contradicting the assumption that and are in different components of . In either case, we have a contradiction.  "
},
{
  "id": "algorithm-14",
  "level": "2",
  "url": "sec-gtalgos-mst.html#algorithm-14",
  "type": "Algorithm",
  "number": "6.2.7",
  "title": "Kruskal's Spanning Tree algorithm.",
  "body": " Kruskal's Spanning Tree algorithm   Let be a weighted graph where and such that whenever .  Suppose , , , , and   For each , let . Do the following:  If and and where , then let and let . Otherwise, let .     is a minimum spanning tree for .     "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-gtalgos-mst.html#example-21",
  "type": "Example",
  "number": "6.2.8",
  "title": "Applying Kruskal's Algorithm.",
  "body": " Applying Kruskal's Algorithm   Consider the graph with the following weighted edges:     Weight  Edge  Weight  Edge  Weight  Edge  Weight  Edge    1    4    7    9      1    5    7    9      2    5    7    9      2    5    7    10      4    5    8    10      The graph with this edge set on and weight function is depicted in . To begin applying Kruskal's algorithm to find a spanning tree of with minimal weight, we assign each vertex to its own component; thus, the partition of the vertices is    A weighted graph .      For the sake of abbreviated notation, we define the function such that if and only if . The algorithm proceeds as follows: the edge of least weight is , with . Since , the edge can be included in the tree. We will merge the component into , since the two components are of equal size and . Hence we make and . The next edge of least weight is , also with ; since and , we must merge and just as we did and . The process is tabulated below.   Tabulation of steps of Kruskal's Algorithm           Step  Weight      Include ?    0  1     0     3  True    1  1     4     8  True   2  2     3     8  True   3  2     8     8  False   4  4     8     5  True   5  4     1     8  True   6  5     8     2  True   7  5     8     7  True   8  5     8     8  False   9  5     8     8  False   10  7     8     8  False   11  7     8     8  False   12  7     8     9  True   13  7     8     8  False   14  8     8     6  True   15  9     8     8  False   16  9     8     8  False   17  9     8     8  False   18  10     8     8  False   19  10     8     8  False     The same graph with the minimum spanning tree discovered via Kruskal's algorithm highlighted with red edges.       "
},
{
  "id": "listing-16",
  "level": "2",
  "url": "sec-gtalgos-mst.html#listing-16",
  "type": "Listing",
  "number": "6.2.12",
  "title": "",
  "body": " A Python implementation of Kruskal's algorithm.   def kruskal(verts, wedges, verbose=False): WE = sorted((l,u,v) for u,v,l in wedges) comp_of = {v:v for v in verts} vert_of = {v:[v] for v in verts} keep = [] dump = [] out_grid = [] for i,(w,u,v) in enumerate(WE): cu, cv = comp_of[u], comp_of[v] row = [w,u,cu,v,cv,cu!=cv] out_grid.append( row ) if cu==cv: dump.append( (u,v,w) ) continue keep.append( (u,v,w) ) if len(vert_of[cu]) > len(vert_of[cv]): v,u = u,v cu,cv = cv,cu vert_of[cv] += vert_of[cu] while len(vert_of[cu])>0: comp_of[vert_of[cu].pop()] = cv if verbose: out_grid = [[\"Weight\", \"u\", \"C(u)\", \"v\", \"C(v)\", \"Include?\"]] out_grid += [[str(entr) for entr in row] for row in out_grid] mc = [max(len(out_grid[r][c]) for r in range(len(out_grid))) for c in range(len(out_grid[0]))] new_out_grid = [[] for _ in out_grid] for c in range(len(out_grid[0])): for r in range(len(out_grid)): new_out_grid[r].append((\"{x:>%d}\"% mc[c]).format(x=out_grid[r][c])) print( \"\\n\".join([\" | \".join(row) for row in new_out_grid])) return keep,dump   "
},
{
  "id": "sec-gtalgos-shortestpath",
  "level": "1",
  "url": "sec-gtalgos-shortestpath.html",
  "type": "Section",
  "number": "6.3",
  "title": "Shortest Paths",
  "body": " Shortest Paths    Erdős Number  The mathematician Paul Erdős is renowned for having been one of the most prolific mathematicians of the 20th century, as well as one of the most social: he wrote papers with more than 500 collaborators over his career. Due to his frequent collaborations, one of his coauthors assigned to Paul an Erdős number of 0, for being Paul Erdős. Each of Erdős's coauthors were assigned an Erdős number of 1. Their coauthors who did not coauthor with Erdős were assigned an Erdős number of 2, and so on.  This builds a rooted collaboration graph : a graph whose vertices are mathematicians and edges are coauthorship on a paper, with a special root vertex designated as Paul Erdős. The distance in this graph is the length of a shortest path between vertices. The question then is how to determine a shortest path.  While this problem is described in terms of something lighthearted, shortest paths are important in other mediums as well. In fact, one of the largest graphs under current study is the Facebook graph! If a transmission of a message in a network is more likely to have errors introduced with each subsequent connection traversed, it is important to minimize the number of transmissions. With a little creativity, the shortest path problem can be applied to hyperspace routing for a particular type of fictional faster-than-light travel.    Dijkstra's Algorithm   In 1956, Dutch computer scientist Edsger Dijkstra developed an algorithm for solving this problem. His solution, now known as Dijkstra's algorithm , is both elegant and simple. A root vertex is specified as having distance 0; its neighbors have distance 1. The neighbors of those vertices with distance 1 are next specified to have distance 2, unless they previously had distance 0; and so on. Those vertices which cannot be reached by a path from the root have distance .   Dijkstra's Shortest Path Algorithm   Let be a graph, and let be a particular vertex in . We will define to be the currently known distance from to , and to be an initially empty set. For each , we define to be the predecessor of in a shortest path from .  Mark and for every .  While , do the following:  Let be any vertex in .  Add to .  For each neighbor of , if , set , and set .    Return the triple for each .      In fact, Dijkstra's algorithm produces what is called a breadth-first traversal of from the root vertex . For each vertex in the same component of as , there is a finite sequence of predecessors which can be followed backwards from to ; for vertices in other components, no such predecessor exists and the distance is infinite. We'll illustrate the algorithm with the example of a graph with two components, one of which is a single isolated vertex.   A graph with two components: the vertex is isolated from all other vertices.         A full example of Dijkstra's algorithm  Consider the graph with vertex set and edge set   This graph is depicted in . If we designate the root vertex to be , we can begin the process. The iterations are explained briefly, and all steps are tabulated below in . Since , we set and takes no values. As the only unvisited vertex at finite distance from , we mark as visited by putting . Looking at the neighbors of , we see that ; since the distance to both is currently infinite, we redefine and as follows:   Since , we choose next to visit ; hence and we observe that the as-yet-unvisited neighbors of are , , and . We again update and :   Proceeding in this manner, we will visit vertices , , , , , and before something strange happens: every vertex will have been visited or ``seen\" on its shortest path, except for . While will eventually be added to , it will never be seen as a neighbor of another vertex, and will never be assigned a predecessor.     Iterations of Dijkstra's algorithm on the graph from .     Current    Updating Vertices    Step  Vertex  Distance  Predecessor      0  1  0  None  [2, 14]  (1, 1)   1  2  1  1  [5, 7, 15]  (2, 2)   2  14  1  1  [8, 12, 13]  (2, 14)   3  5  2  2  [11]  (3, 5)   4  7  2  2  [3]  (3, 7)   5  15  2  2  [4, 9]  (3, 15)   6  8  2  14  [6]  (3, 8)   7  12  2  14  [10]  (3, 12)   8  13  2  14  [ ]  (3, 13)   9  11  3  5  [ ]  (4, 11)   10  3  3  7  [ ]  (4, 3)   11  4  3  15  [ ]  (4, 4)   12  9  3  15  [ ]  (4, 9)   13  6  3  8  [ ]  (4, 6)   14  10  3  12  [ ]  (4, 10)   15  16   None  [ ]  ( , 16)     Are there other ways to find shortest paths? Of course. The beauty of using Dijkstra's algorithm is that when you first encounter a vertex, you're already recording its shortest path. It will never be the case that this algorithm encounters a vertex at some large distance and then updates it to a smaller distance.    "
},
{
  "id": "algorithm-15",
  "level": "2",
  "url": "sec-gtalgos-shortestpath.html#algorithm-15",
  "type": "Algorithm",
  "number": "6.3.1",
  "title": "Dijkstra's Shortest Path Algorithm.",
  "body": " Dijkstra's Shortest Path Algorithm   Let be a graph, and let be a particular vertex in . We will define to be the currently known distance from to , and to be an initially empty set. For each , we define to be the predecessor of in a shortest path from .  Mark and for every .  While , do the following:  Let be any vertex in .  Add to .  For each neighbor of , if , set , and set .    Return the triple for each .     "
},
{
  "id": "fig_dijkstra_exmp",
  "level": "2",
  "url": "sec-gtalgos-shortestpath.html#fig_dijkstra_exmp",
  "type": "Figure",
  "number": "6.3.2",
  "title": "",
  "body": " A graph with two components: the vertex is isolated from all other vertices.      "
},
{
  "id": "tab_dijkstra_exmp",
  "level": "2",
  "url": "sec-gtalgos-shortestpath.html#tab_dijkstra_exmp",
  "type": "Table",
  "number": "6.3.3",
  "title": "Iterations of Dijkstra's algorithm on the graph <span class=\"process-math\">\\(\\Gamma\\)<\/span> from Figure 6.3.2.",
  "body": " Iterations of Dijkstra's algorithm on the graph from .     Current    Updating Vertices    Step  Vertex  Distance  Predecessor      0  1  0  None  [2, 14]  (1, 1)   1  2  1  1  [5, 7, 15]  (2, 2)   2  14  1  1  [8, 12, 13]  (2, 14)   3  5  2  2  [11]  (3, 5)   4  7  2  2  [3]  (3, 7)   5  15  2  2  [4, 9]  (3, 15)   6  8  2  14  [6]  (3, 8)   7  12  2  14  [10]  (3, 12)   8  13  2  14  [ ]  (3, 13)   9  11  3  5  [ ]  (4, 11)   10  3  3  7  [ ]  (4, 3)   11  4  3  15  [ ]  (4, 4)   12  9  3  15  [ ]  (4, 9)   13  6  3  8  [ ]  (4, 6)   14  10  3  12  [ ]  (4, 10)   15  16   None  [ ]  ( , 16)    "
},
{
  "id": "sec-gtalgos-maxflowmincut",
  "level": "1",
  "url": "sec-gtalgos-maxflowmincut.html",
  "type": "Section",
  "number": "6.4",
  "title": "Maximizing flow",
  "body": " Maximizing flow   Capacitated networks  All information flows over some sort of network, whether it be electronic or otherwise; you can think of communicating person-to-person as a pair of nodes and a regular graph edge connecting them, while a person lecturing to a group might be modeled more accurately by a hypergraph Remember that a hypergraph permits edges to contain more than two vertices. . Similarly, the logistic problem of transporting goods and services across the country can be modeled using a transportation network.  In both of these cases, there is a sort of maximum capacity for the transfer, and this gives us the concept of a capacitated network. This is much like a weighted graph, but we tend to think of networks as directed. Additionally we must consider that not ever connection in a network can be utilized to its full capacity at all times; hence we have two numbers associated with each edge, the flow and the capacity .  A capacitated network also has two special vertices: the source , , and target (or sink), . The flow begins form the source and terminates at the sink a flow is valid if and only if the flow into each vertex is equal to the flow out of the vertex, with exceptions at and , and the flow across each directed edge is less than or equal to the capacity of that edge.    Max flow  In nearly every application, the desire is to maximize the flow from to across the network; since what is flowing across most networks is not a physical fluid, the problem of maximizing flow is discrete-mathematical rather than a problem of physics solved by differential equations.    Suppose is a directed graph with source vertex  and target vertex  . A capacity function  for is the maximum amount of flow which can pass across an edge; this is denoted for the directed edge . A flow function  for is a function satisfying the following two constraints:  (Capacity Constraint) for all , and  (Conservation of Flow) for each ,    The value of flow for a flow function is defined by   Generally, we wish to maximize the value over all possible flows.      Suppose is a capacitated network with source and target . An is a partition such that and . The cut-set of is the set of edges . We notice that if a flow of is put on all edges in the cur-set of , then . The capacity of the cut is   Just as it is interesting to determine a maximum flow over a network, there are applications when finding a minimum-capacity cut-set is desirable.     Max-flow Min-cut Theorem   The maximum value of a flow is equal to the minimum capacity of an cut.      Dinitz' Algorithm  The original solution to the problem of calculating a maximum flow was published in 1956 by L. R. Ford, Jr. and D. R. Fulkerson. The modified version presented here was produced by Yefim Dinitz as a response to a pre-class exercise in (Georg) Adel'son-Vel'sky's Algorithm class. According to Dinitz, he was at the time unaware of the basic details of the Ford-Fulkerson algorithm upon which his algorithm improves.  Both algorithms proceed in this general fashion: given a flow, determine which edges have residual capacity. In the residual graph, try to find a flow which can augment the current flow. When no such flow can be found, a maximum flow has been found.  The foremost reason an improvement was needed to the Ford-Fulkerson algorithm is its failure to terminate in certain cases of networks with irrational capacities. As the algorithm is successful in constructing a maximum flow whenever it terminates, an improvement to the algorithm was more likely than a replacement. Dinitz' improvement utilized shortest paths to overcome the conceptual flaw in Ford-Fulkerson during the step of finding an augmenting path. Hence we will first discuss the modification to Dikstra's algorithm which produces the necessary shortest path graph.  The modification to Dijkstra's algorithm to construct a subgraph consisting of all shortest paths from to is conceptually deep but easy to implement. Suppose with , where is the source vertex. Rather than recording a single -path, we records every vertex such that and there is an arc Recall that we are working over directed graphs now. from to .   Modified Dikstra: All Shortest Paths from  Suppose that is a capacitated network with source vertex and target vertex .  Initialize the distance and predecessor functions, for each . Also, define a set of visited vertices.  While , repeat the following steps:  Let be an unvisited vertex nearest to ; that is,  For each such that , , and :  update the distance to by setting , and  update the set of predecessors of , , to include .     Add to .     Return the values of and for each .     The true improvement of Dinitz' algorithm over the earlier Ford-Fulkerson algorithm is not in its use of this shortest path algorithm once, but twice: if the output is used to define a new set of arrows we can use the modified shortest path algorithm now on the graph with edge set and source to ensure that the only shortest paths we retain are -paths.   Applying Dinitz' algorithm    (A) A capacitated network, ; (B) the result of applying on ; (C) the layered graph  resulting from the application of on .      The graph in (A) is a capacitated network with ; only the indices of vertices are shown in the figure. Suppose we wish to apply Dijkstra's algorithm to this graph rooted at . The neighbors of are ; visiting each of these in turn we see that the neighbors of are ; however, , so we do not update the predecessors of . Likewise, . As this provides new paths of the same length to both and , we add as a predecessor of each of those vertices.  Recalling that the modified Dijkstra's algorithm provides a sort of predecessor graph , we have obtained the capacitated network shown in the figure as (B). The second step of producing the layered data structure is to apply Dijkstra's algorithm on this intermediate graph, rooted now at the target vertex . As the graph is directed, we see that vertices and are unreachable in the intermediate graph when rooted at ; hence the resulting layered graph of the figure labelled (C) has vertex at distance , vertices and at distance , and vertex at distance .    It is important to make a note about the structure of produced from two successive applications of . We first produced from by including the reverse edges of exactly those edges lying on shortest paths emanating from ; we then construct from by including only those edges on shortest paths terminating at . Hence every path in beginning at will terminate at and will be a shortest such path . This structure must be maintained as we augment the flow across the network, for two reasons: as edges become saturated An edge is saturated when , where is the flow and is the capacity. they must be removed from the residual capacity graph, just as residual capacities of unsaturated edges must be decreased. When saturated edges are removed, this can result in a vertex with no successors or with no predecessors, and both of these types of vertex lie on no -path in .  The graph is referred to as a layered structure since we can think of the vertices as lying in distance layers away from such that any edge has the property . Thus maintaining those layers means we need no special algorithm to find augmenting paths: any path emanating from in a well-maintained layered graph will eventually terminate at . The order in which paths are followed can change the final assignment of flow to edges, but interestingly cannot change the total final value of the flow. The flow assigned along the path is the minimum residual capacity along any edge of the path.   Pathfinding  Suppose is the result of two applications of on a capacitated network .  Let .  Inductively choose for such that , until .  Let .  The augmenting path to be returned is the path and the augmenting flow is on each of those edges.      Continued from previous example.    (A) An augmenting path with flow value in from . (B) After updating the residual capacities of edges in , the edge was saturated and therefore removed. This leaves with no successor vertices, so the edge (shown with reduced capacity) must also be removed as no additional flow can move from to along . (C) The graph after maintenance.      In our graph , has only two successors: and . Choosing , we see that the only successor of in is , so . Our augmenting path is then ; as this flow only consists of two edges of capacities and respectively, it is clear that .  The current flow in our graph is for all , and we now have an augmenting path and flow. So we update the flow value to accommodate the augmentation:   We update our residual capacities and see that edge is now saturated; removing this edge from we find that now has no successors and so all edges terminating at must also be removed in graph maintenance.  Having maintained the graph, we see that the path remains and permits another augmenting flow of . Again updating, we have   Now no augmenting flows remain in after maintenance, as is saturated and hence has no predecessors in .  In order to continue to augment the flow, we must again determine the residual capacities and build a new residual graph taking into account the current flow .     About graph maintenance: there are several different ways that this can be handled, all with the same result but different in individual process. Dinitz originally kept track of the endpoints of edges which became saturated as the algorithm updated the residual capacities along an augmenting path. After these capacities were updated, the algorithm processed through lists of vertices which might have been left with either no successors or no predecessors. In our implementation, we opt for a recursive solution: when an edge becomes saturated, we call a process Clean-to-source on its head vertex and then a process Clean-to-Target on its tail vertex . These two processes behave similarly, but in opposite directions. The first, Clean-to-source , determines whether has any successors; if not, Clean-to-source is run on each predecessor of . Likewise Clean-to-Target checks whether has any predecessors, and if not, Clean-to-Target is run on each successor of .    Maintenance of layered graph   Suppose is the layered graph structure output from two successive applications of , that is an augmenting path with augmenting flow value .  For each , update by subtracting from it the value .  For an edge where after updating, , do the following:  Clean-to-source from a vertex   The vertex has no successors in precisely when  If has no successors and is not the source vertex , consider the set of predecessors of .  For each , set . For each with no successors other than , clean-to-source from the vertex .   Clean-to-target from a vertex   The vertex has no predecessors in precisely when .  If has no sucessors and is not the target vertex , consider the set of successors of .  For each , set . For each with no predecessors other than , clean-to-target from the vertex .     After both cleaning processes have finished for all saturated edges, remove from any edge with .      We now have all the pieces in place to actually state Dinitz' algorithm.   Dinitz' Max Flow Algorithm   Suppose we are given a capacitated network with capacity function , source , and target .  Define the initial flow for or .  Repeat the following:  Calculate the residual capacity function  , given by: We remark that a positive flow of provides exactly that much capacity to the reverse edge .  Let be the residual graph with  Apply to to produce ; apply again to to obtain the layered graph . When no shortest paths from to are found in constructing , the flow is optimal.  Repeat the following:  Use to find an augmenting path with flow value in . If no augmenting path exists, return to step a.  Update by adding to the flow for each edge where are adjacent vertices in .  Perform upon .             Implementing Dinitz' Algorithm  There are a number of algorithms which need to be separately implemented as functions in order for the Dinitz Maximum Flow algorithm to operate.   Implementation of returning the lists of predecessors of each vertex.   def all_shortest_paths(vertex_set, warrows, source): # Note: float('inf') represents Infinity. unvisited_distance = [(0,source)] unvisited_distance += [(float('inf'), v) for v in vertex_set if v!=source] distance = {v:d for d,v in unvisited_distance} predecessor = {v:[] for v in vertex_set} visited = [ ] while len(visited) < len(vertex_set): # find nearest unvisited vertex unvisited_distance.sort() du, u = unvisited_distance.pop(0) for v, cap_uv in warrows[u].items(): if v in visited: continue elif (du + 1 <= distance[v]) and (cap_uv > 0): unvisited_distance.remove( (distance[v], v) ) distance[v] = du + 1 if u not in predecessor[v]: predecessor[v].append( u ) unvisited_distance.append( (distance[v], v) ) visited.append( u ) return predecessor     A function which takes a dictionary of lists of predecessor vertices and a dictionary of arrows of a directed graph and returns the reversed arrows corresponding to the given predecessor relationships.   def build_back_arrows(vertex_set, warrows, predecessors): back_arrows = {v:{} for v in vertex_set} for u,pu in predecessors.items(): for v in pu: try: back_arrows[u][v] = warrows[v][u] except KeyError: back_arrows[u] = {v:warrows[v][u]} return back_arrows     Implementation of   def pathfinding(warrows:dict, source, target): augpath = [source] augflow = float('inf') while augpath[-1] != target: neighbors = list(warrows[augpath[-1]].items()) next_vert, next_cap = neighbors[0] if next_cap < augflow: augflow = next_cap augpath.append(next_vert) return augpath, augflow     Predecessor and successor functions for layered graph maintenance in Dinitz' algorithm   def predecessors(warrows:dict, vertex): return [w for w,nbrs in warrows.items() if vertex in nbrs.keys() and warrows[w][vertex] > 0 ] def successors(warrows:dict, vertex): return [w for w,c in warrows[vertex].items() if c>0]     Cleaning functions for layered graph maintenance in Dinitz' algorithm   def clean_to_source(layered_cap, vertex, source): if vertex!=source and len(successors(layered_cap, vertex)) == 0: for w in predecessors(layered_cap, vertex): layered_cap[w][vertex] = 0 if len(successors(layered_cap, w))==0: layered_cap = clean_to_source(layered_cap, w, source) return layered_cap def clean_to_target(layered_cap, vertex, target): if vertex!=target and len(predecessors(layered_cap, vertex))==0: for w in successors(layered_cap, vertex): layered_cap[vertex][w] = 0 if predecessors(layered_cap, w) in ([vertex], []): layered_cap = clean_to_target(layered_cap, w, target) return layered_cap     Layered graph maintenance in Dinitz' algorithm   def maintain_layers(layered_cap, aug_path, aug_flow, source, target): pairs = zip(aug_path[:-1], aug_path[1:]) for u,v in pairs: layered_cap[u][v] -= aug_flow if layered_cap[u][v] == 0: layered_cap = clean_to_source(layered_cap, u, source) layered_cap = clean_to_target(layered_cap, v, target) pruners = [] for u,nbrs in layered_cap.copy().items(): for v,c in nbrs.items(): if c==0: pruners.append( (u,v) ) for u,v in pruners: del layered_cap[u][v] return layered_cap     Dinitz algorithm implemented in Python   def dinitz(vertex_set, capacity, source, target, debug=False): cap_edges = [(u,v,c) for u,out_arrows in capacity.items() for v,c in out_arrows.items()] # Initialize Zero Flow total_flow = 0 flow = {u:{v:0 for v in out_arrows.keys()} for u,out_arrows in capacity.items()} for u,v,c in cap_edges: try: flow[v][u] = 0 except: flow[v] = {u:0} while True: # Create residual capacity res_capacity = {u:{v:c-flow[u][v] for v,c in out_arrows.items()} for u,out_arrows in capacity.items()} for u,v,c in cap_edges: try: res_capacity[v][u] = flow[u][v] except KeyError: res_capacity[v] = {u:flow[u][v]} res_capacity = {u:{v:c for v,c in out_arrows.items() if c>0} for u,out_arrows in res_capacity.items()} if debug: print(f\"Residual Capacities computed:\\n{res_capacity}\") # Create layered graph pred = all_shortest_paths(vertex_set, res_capacity, source) back_cap = build_back_arrows(vertex_set, res_capacity, pred) pred = all_shortest_paths(vertex_set, back_cap, target) layered_capacity = build_back_arrows(vertex_set, back_cap, pred) if debug: print(f\"Layered Graph computed:\\n{layered_capacity}\") if layered_capacity[source] == {}: print(f\"Maximum flow of {total_flow} achieved.\") break try: # Repeatedly find augmenting paths while True: ap, af = pathfinding(layered_capacity, source, target) if debug: print(f\"Augmenting path {ap} of capacity {af} found.\") total_flow += af for u,v in zip(ap[:-1],ap[1:]): flow[u][v] += af layered_capacity = maintain_layers(layered_capacity, ap, af, source, target) if debug: print(f\"After maintenance, layered graph is:\\n{layered_capacity}\") except: if debug: print(f\"No more augmenting paths.\") continue # prune empty flows flow = {u:{v:f for v,f in flow_arrows.items() if f>0} for u,flow_arrows in flow.items()} return flow    Once you have all that code implemented, you can test it using a simple program.   verts = range(6) cap = {0:{1:50, 2:10}, 1:{2:10, 3:5, 4: 8}, 2:{1:20, 3:10, 5:20, 4:20}, 3:{4:13}, 4:{}, 5:{4:20}} s = 0 t = 4 print(dinitz(verts, cap, 0, 4, True))     "
},
{
  "id": "definition-59",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#definition-59",
  "type": "Definition",
  "number": "6.4.1",
  "title": "",
  "body": "  Suppose is a directed graph with source vertex  and target vertex  . A capacity function  for is the maximum amount of flow which can pass across an edge; this is denoted for the directed edge . A flow function  for is a function satisfying the following two constraints:  (Capacity Constraint) for all , and  (Conservation of Flow) for each ,    The value of flow for a flow function is defined by   Generally, we wish to maximize the value over all possible flows.   "
},
{
  "id": "definition-60",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#definition-60",
  "type": "Definition",
  "number": "6.4.2",
  "title": "",
  "body": "  Suppose is a capacitated network with source and target . An is a partition such that and . The cut-set of is the set of edges . We notice that if a flow of is put on all edges in the cur-set of , then . The capacity of the cut is   Just as it is interesting to determine a maximum flow over a network, there are applications when finding a minimum-capacity cut-set is desirable.   "
},
{
  "id": "theorem-29",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#theorem-29",
  "type": "Theorem",
  "number": "6.4.3",
  "title": "Max-flow Min-cut Theorem.",
  "body": " Max-flow Min-cut Theorem   The maximum value of a flow is equal to the minimum capacity of an cut.   "
},
{
  "id": "p-812",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#p-812",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "residual capacity. "
},
{
  "id": "alg_mod_dijkstra",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#alg_mod_dijkstra",
  "type": "Algorithm",
  "number": "6.4.4",
  "title": "Modified Dikstra: All Shortest Paths from <span class=\"process-math\">\\(s\\)<\/span>.",
  "body": " Modified Dikstra: All Shortest Paths from  Suppose that is a capacitated network with source vertex and target vertex .  Initialize the distance and predecessor functions, for each . Also, define a set of visited vertices.  While , repeat the following steps:  Let be an unvisited vertex nearest to ; that is,  For each such that , , and :  update the distance to by setting , and  update the set of predecessors of , , to include .     Add to .     Return the values of and for each .    "
},
{
  "id": "exmp_capnet_1",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#exmp_capnet_1",
  "type": "Example",
  "number": "6.4.5",
  "title": "Applying Dinitz' algorithm.",
  "body": " Applying Dinitz' algorithm    (A) A capacitated network, ; (B) the result of applying on ; (C) the layered graph  resulting from the application of on .      The graph in (A) is a capacitated network with ; only the indices of vertices are shown in the figure. Suppose we wish to apply Dijkstra's algorithm to this graph rooted at . The neighbors of are ; visiting each of these in turn we see that the neighbors of are ; however, , so we do not update the predecessors of . Likewise, . As this provides new paths of the same length to both and , we add as a predecessor of each of those vertices.  Recalling that the modified Dijkstra's algorithm provides a sort of predecessor graph , we have obtained the capacitated network shown in the figure as (B). The second step of producing the layered data structure is to apply Dijkstra's algorithm on this intermediate graph, rooted now at the target vertex . As the graph is directed, we see that vertices and are unreachable in the intermediate graph when rooted at ; hence the resulting layered graph of the figure labelled (C) has vertex at distance , vertices and at distance , and vertex at distance .   "
},
{
  "id": "alg_pathfind",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#alg_pathfind",
  "type": "Algorithm",
  "number": "6.4.7",
  "title": "Pathfinding.",
  "body": " Pathfinding  Suppose is the result of two applications of on a capacitated network .  Let .  Inductively choose for such that , until .  Let .  The augmenting path to be returned is the path and the augmenting flow is on each of those edges.    "
},
{
  "id": "example-23",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#example-23",
  "type": "Example",
  "number": "6.4.8",
  "title": "Continued from previous example..",
  "body": " Continued from previous example.    (A) An augmenting path with flow value in from . (B) After updating the residual capacities of edges in , the edge was saturated and therefore removed. This leaves with no successor vertices, so the edge (shown with reduced capacity) must also be removed as no additional flow can move from to along . (C) The graph after maintenance.      In our graph , has only two successors: and . Choosing , we see that the only successor of in is , so . Our augmenting path is then ; as this flow only consists of two edges of capacities and respectively, it is clear that .  The current flow in our graph is for all , and we now have an augmenting path and flow. So we update the flow value to accommodate the augmentation:   We update our residual capacities and see that edge is now saturated; removing this edge from we find that now has no successors and so all edges terminating at must also be removed in graph maintenance.  Having maintained the graph, we see that the path remains and permits another augmenting flow of . Again updating, we have   Now no augmenting flows remain in after maintenance, as is saturated and hence has no predecessors in .  In order to continue to augment the flow, we must again determine the residual capacities and build a new residual graph taking into account the current flow .   "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#remark-6",
  "type": "Remark",
  "number": "6.4.10",
  "title": "",
  "body": " About graph maintenance: there are several different ways that this can be handled, all with the same result but different in individual process. Dinitz originally kept track of the endpoints of edges which became saturated as the algorithm updated the residual capacities along an augmenting path. After these capacities were updated, the algorithm processed through lists of vertices which might have been left with either no successors or no predecessors. In our implementation, we opt for a recursive solution: when an edge becomes saturated, we call a process Clean-to-source on its head vertex and then a process Clean-to-Target on its tail vertex . These two processes behave similarly, but in opposite directions. The first, Clean-to-source , determines whether has any successors; if not, Clean-to-source is run on each predecessor of . Likewise Clean-to-Target checks whether has any predecessors, and if not, Clean-to-Target is run on each successor of .  "
},
{
  "id": "alg_maint",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#alg_maint",
  "type": "Algorithm",
  "number": "6.4.11",
  "title": "Maintenance of layered graph.",
  "body": " Maintenance of layered graph   Suppose is the layered graph structure output from two successive applications of , that is an augmenting path with augmenting flow value .  For each , update by subtracting from it the value .  For an edge where after updating, , do the following:  Clean-to-source from a vertex   The vertex has no successors in precisely when  If has no successors and is not the source vertex , consider the set of predecessors of .  For each , set . For each with no successors other than , clean-to-source from the vertex .   Clean-to-target from a vertex   The vertex has no predecessors in precisely when .  If has no sucessors and is not the target vertex , consider the set of successors of .  For each , set . For each with no predecessors other than , clean-to-target from the vertex .     After both cleaning processes have finished for all saturated edges, remove from any edge with .     "
},
{
  "id": "algorithm-19",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#algorithm-19",
  "type": "Algorithm",
  "number": "6.4.12",
  "title": "Dinitz' Max Flow Algorithm.",
  "body": " Dinitz' Max Flow Algorithm   Suppose we are given a capacitated network with capacity function , source , and target .  Define the initial flow for or .  Repeat the following:  Calculate the residual capacity function  , given by: We remark that a positive flow of provides exactly that much capacity to the reverse edge .  Let be the residual graph with  Apply to to produce ; apply again to to obtain the layered graph . When no shortest paths from to are found in constructing , the flow is optimal.  Repeat the following:  Use to find an augmenting path with flow value in . If no augmenting path exists, return to step a.  Update by adding to the flow for each edge where are adjacent vertices in .  Perform upon .          "
},
{
  "id": "list-dinitz_all_shortest_paths",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#list-dinitz_all_shortest_paths",
  "type": "Listing",
  "number": "6.4.13",
  "title": "",
  "body": " Implementation of returning the lists of predecessors of each vertex.   def all_shortest_paths(vertex_set, warrows, source): # Note: float('inf') represents Infinity. unvisited_distance = [(0,source)] unvisited_distance += [(float('inf'), v) for v in vertex_set if v!=source] distance = {v:d for d,v in unvisited_distance} predecessor = {v:[] for v in vertex_set} visited = [ ] while len(visited) < len(vertex_set): # find nearest unvisited vertex unvisited_distance.sort() du, u = unvisited_distance.pop(0) for v, cap_uv in warrows[u].items(): if v in visited: continue elif (du + 1 <= distance[v]) and (cap_uv > 0): unvisited_distance.remove( (distance[v], v) ) distance[v] = du + 1 if u not in predecessor[v]: predecessor[v].append( u ) unvisited_distance.append( (distance[v], v) ) visited.append( u ) return predecessor   "
},
{
  "id": "list-dinitz_predecessors_to_backarrows",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#list-dinitz_predecessors_to_backarrows",
  "type": "Listing",
  "number": "6.4.14",
  "title": "",
  "body": " A function which takes a dictionary of lists of predecessor vertices and a dictionary of arrows of a directed graph and returns the reversed arrows corresponding to the given predecessor relationships.   def build_back_arrows(vertex_set, warrows, predecessors): back_arrows = {v:{} for v in vertex_set} for u,pu in predecessors.items(): for v in pu: try: back_arrows[u][v] = warrows[v][u] except KeyError: back_arrows[u] = {v:warrows[v][u]} return back_arrows   "
},
{
  "id": "list-dinitz_pathfinding",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#list-dinitz_pathfinding",
  "type": "Listing",
  "number": "6.4.15",
  "title": "",
  "body": " Implementation of   def pathfinding(warrows:dict, source, target): augpath = [source] augflow = float('inf') while augpath[-1] != target: neighbors = list(warrows[augpath[-1]].items()) next_vert, next_cap = neighbors[0] if next_cap < augflow: augflow = next_cap augpath.append(next_vert) return augpath, augflow   "
},
{
  "id": "list-dinitz_preds_succs",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#list-dinitz_preds_succs",
  "type": "Listing",
  "number": "6.4.16",
  "title": "",
  "body": " Predecessor and successor functions for layered graph maintenance in Dinitz' algorithm   def predecessors(warrows:dict, vertex): return [w for w,nbrs in warrows.items() if vertex in nbrs.keys() and warrows[w][vertex] > 0 ] def successors(warrows:dict, vertex): return [w for w,c in warrows[vertex].items() if c>0]   "
},
{
  "id": "list-dinitz_cleaning_functions",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#list-dinitz_cleaning_functions",
  "type": "Listing",
  "number": "6.4.17",
  "title": "",
  "body": " Cleaning functions for layered graph maintenance in Dinitz' algorithm   def clean_to_source(layered_cap, vertex, source): if vertex!=source and len(successors(layered_cap, vertex)) == 0: for w in predecessors(layered_cap, vertex): layered_cap[w][vertex] = 0 if len(successors(layered_cap, w))==0: layered_cap = clean_to_source(layered_cap, w, source) return layered_cap def clean_to_target(layered_cap, vertex, target): if vertex!=target and len(predecessors(layered_cap, vertex))==0: for w in successors(layered_cap, vertex): layered_cap[vertex][w] = 0 if predecessors(layered_cap, w) in ([vertex], []): layered_cap = clean_to_target(layered_cap, w, target) return layered_cap   "
},
{
  "id": "list-dinitz_maintenance",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#list-dinitz_maintenance",
  "type": "Listing",
  "number": "6.4.18",
  "title": "",
  "body": " Layered graph maintenance in Dinitz' algorithm   def maintain_layers(layered_cap, aug_path, aug_flow, source, target): pairs = zip(aug_path[:-1], aug_path[1:]) for u,v in pairs: layered_cap[u][v] -= aug_flow if layered_cap[u][v] == 0: layered_cap = clean_to_source(layered_cap, u, source) layered_cap = clean_to_target(layered_cap, v, target) pruners = [] for u,nbrs in layered_cap.copy().items(): for v,c in nbrs.items(): if c==0: pruners.append( (u,v) ) for u,v in pruners: del layered_cap[u][v] return layered_cap   "
},
{
  "id": "list-dinitz",
  "level": "2",
  "url": "sec-gtalgos-maxflowmincut.html#list-dinitz",
  "type": "Listing",
  "number": "6.4.19",
  "title": "",
  "body": " Dinitz algorithm implemented in Python   def dinitz(vertex_set, capacity, source, target, debug=False): cap_edges = [(u,v,c) for u,out_arrows in capacity.items() for v,c in out_arrows.items()] # Initialize Zero Flow total_flow = 0 flow = {u:{v:0 for v in out_arrows.keys()} for u,out_arrows in capacity.items()} for u,v,c in cap_edges: try: flow[v][u] = 0 except: flow[v] = {u:0} while True: # Create residual capacity res_capacity = {u:{v:c-flow[u][v] for v,c in out_arrows.items()} for u,out_arrows in capacity.items()} for u,v,c in cap_edges: try: res_capacity[v][u] = flow[u][v] except KeyError: res_capacity[v] = {u:flow[u][v]} res_capacity = {u:{v:c for v,c in out_arrows.items() if c>0} for u,out_arrows in res_capacity.items()} if debug: print(f\"Residual Capacities computed:\\n{res_capacity}\") # Create layered graph pred = all_shortest_paths(vertex_set, res_capacity, source) back_cap = build_back_arrows(vertex_set, res_capacity, pred) pred = all_shortest_paths(vertex_set, back_cap, target) layered_capacity = build_back_arrows(vertex_set, back_cap, pred) if debug: print(f\"Layered Graph computed:\\n{layered_capacity}\") if layered_capacity[source] == {}: print(f\"Maximum flow of {total_flow} achieved.\") break try: # Repeatedly find augmenting paths while True: ap, af = pathfinding(layered_capacity, source, target) if debug: print(f\"Augmenting path {ap} of capacity {af} found.\") total_flow += af for u,v in zip(ap[:-1],ap[1:]): flow[u][v] += af layered_capacity = maintain_layers(layered_capacity, ap, af, source, target) if debug: print(f\"After maintenance, layered graph is:\\n{layered_capacity}\") except: if debug: print(f\"No more augmenting paths.\") continue # prune empty flows flow = {u:{v:f for v,f in flow_arrows.items() if f>0} for u,flow_arrows in flow.items()} return flow   "
},
{
  "id": "sec-intro-idle",
  "level": "1",
  "url": "sec-intro-idle.html",
  "type": "Section",
  "number": "A.1",
  "title": "Getting started with Python",
  "body": " Getting started with Python   We began with a neat practical algorithm. Unfortunately, even with a very good understanding of the problem and its solution a beginner is not ready to turn the complete algorithm into a working computer code, or program .    Getting IDLE  There are many, many different ways to get started as a Python programmer, but the first thing you need is to download Python itself. Download the latest version (3.10 as of this writing) from . Once you have Python, the next tool you should have is an IDE (integrated development environment). The default Python IDE which comes bundled with Python is called IDLE.   Other IDEs  You do not have to use IDLE. Any text editor will work to edit your files (such as Notepad) and once you have the Python interpreter installed, you can run Python scripts. That being said, it's often easiest to write code inside an IDE so that you can use some sort of debugging.     Visual Studio Code , by Microsoft, with the Python extension installed. VS Code is an extremely full-featured IDE, but is a fairly big program. This is the current IDE of choice of the author of this textbook since it can flexibly work in the latex typesetting language for mathematics as well, if the right extensions are enabled.   Atom , by Github, with the script package installed. Atom is a very hackable text editor which can be treated as an IDE by adding enough packages.   Thonny , originally by the University of Tartu and now maintained by the global community of users. Thonny actually comes bundled with its own installation of Python and so doesn't require you to download from at all.  Thonny is actually designed for absolute beginners and is so user-friendly that it is pre-installed in the Raspbian operating system for RaspberryPi microcomputers, often used to teach programming to children. That being said it is still a functional Python IDE.  A final alternative, and a strong one, is to sign up for an account at and use CoCalc as your development environment. The major caveat here is that you must be online to access your files. This textbook was rewritten on CoCalc!     All that being said, the basic assumption of this text is that you are working in IDLE.    Interactive Mode  When you first run IDLE, you're greeted with a box that looks like this:   Starting IDLE   Python 3.10.0 (tags\/v3.10.0:b494f59, Oct 4 2021, 19:00:18) [MSC v.1929 64 bit (AMD64)] on win32 Type \"help\", \"copyright\", \"credits\" or \"license()\" for more information.  >>>      Different versions of IDLE may have some sort of dividing line where the prompt >>> is separated from the input, and the color scheme of the IDLE window can be configured by the user, so the window might look different depending upon who is using it.  When you type commands at the prompt and press enter (or return), they are executed.   The Python prompt for Interactive Mode   >>>  2 + (3 \/ 5 ** 4)  2.0048    Interactive mode is of limited use, but is very good for doing quick calculations or checking to see if your syntax is correct.   Syntax   The syntax of a programming language is the set of rules which decide what combinations of symbols are meaningful in the language.    Python was designed to be as easy to write and read as possible, and to be very easy to go from an algorithm to a working program. Anything more complicated than a single line will be written in a module , which is a sequence of Python commands saved in a text file (usually with file extension .py ). Python modules can be opened, edited, and executed all within IDLE.   Quitting Python  If you're using Python via IDLE, just close all of your IDLE windows to quit the program. If not, you can use   >>>  quit()       A first Python module  From within IDLE, do the following:    Open a new file, either from the File menu or pressing Ctrl-N .  Type print(\"Hello, world!\") in the blank file.  Save it somewhere memorable (like a Python folder on your desktop) as hello_world.py   From the Run menu, select Run Module, or press F5 on your keyboard.    After a second, you should see some output in the IDLE Shell window, like so:   The output of running the Hello, World! module.   = RESTART: C:\/Users\/sgraves\/OneDrive - The University of Texas at Tyler\/Python\/hello_world.py Hello, world!  >>>     Congratulations! You can no longer say you have never written a computer program.  We will frequently be writing modules and listing code examples in the text, so they will appear like so:   The Hello, world! program   print(\"Hello, world!\")    All of your actual work in Python should be done in modules, which are also called scripts . It is convenient to have one folder where you keep all of your Python code, and even more convenient to name your Python modules sensibly so that they can be reused if ever you have the need.   "
},
{
  "id": "p-873",
  "level": "2",
  "url": "sec-intro-idle.html#p-873",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "program "
},
{
  "id": "rem-other-ides",
  "level": "2",
  "url": "sec-intro-idle.html#rem-other-ides",
  "type": "Remark",
  "number": "A.1.1",
  "title": "Other IDEs.",
  "body": " Other IDEs  You do not have to use IDLE. Any text editor will work to edit your files (such as Notepad) and once you have the Python interpreter installed, you can run Python scripts. That being said, it's often easiest to write code inside an IDE so that you can use some sort of debugging.     Visual Studio Code , by Microsoft, with the Python extension installed. VS Code is an extremely full-featured IDE, but is a fairly big program. This is the current IDE of choice of the author of this textbook since it can flexibly work in the latex typesetting language for mathematics as well, if the right extensions are enabled.   Atom , by Github, with the script package installed. Atom is a very hackable text editor which can be treated as an IDE by adding enough packages.   Thonny , originally by the University of Tartu and now maintained by the global community of users. Thonny actually comes bundled with its own installation of Python and so doesn't require you to download from at all.  Thonny is actually designed for absolute beginners and is so user-friendly that it is pre-installed in the Raspbian operating system for RaspberryPi microcomputers, often used to teach programming to children. That being said it is still a functional Python IDE.  A final alternative, and a strong one, is to sign up for an account at and use CoCalc as your development environment. The major caveat here is that you must be online to access your files. This textbook was rewritten on CoCalc!    "
},
{
  "id": "list-starting_idle",
  "level": "2",
  "url": "sec-intro-idle.html#list-starting_idle",
  "type": "Listing",
  "number": "A.1.2",
  "title": "",
  "body": " Starting IDLE   Python 3.10.0 (tags\/v3.10.0:b494f59, Oct 4 2021, 19:00:18) [MSC v.1929 64 bit (AMD64)] on win32 Type \"help\", \"copyright\", \"credits\" or \"license()\" for more information.  >>>     "
},
{
  "id": "listing-25",
  "level": "2",
  "url": "sec-intro-idle.html#listing-25",
  "type": "Listing",
  "number": "A.1.3",
  "title": "",
  "body": " The Python prompt for Interactive Mode   >>>  2 + (3 \/ 5 ** 4)  2.0048   "
},
{
  "id": "def-intro-syntax",
  "level": "2",
  "url": "sec-intro-idle.html#def-intro-syntax",
  "type": "Definition",
  "number": "A.1.4",
  "title": "Syntax.",
  "body": " Syntax   The syntax of a programming language is the set of rules which decide what combinations of symbols are meaningful in the language.   "
},
{
  "id": "p-888",
  "level": "2",
  "url": "sec-intro-idle.html#p-888",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "module "
},
{
  "id": "tech-quitting-python",
  "level": "2",
  "url": "sec-intro-idle.html#tech-quitting-python",
  "type": "Technology",
  "number": "A.1.5",
  "title": "Quitting Python.",
  "body": " Quitting Python  If you're using Python via IDLE, just close all of your IDLE windows to quit the program. If not, you can use   >>>  quit()    "
},
{
  "id": "list-hello_world_output",
  "level": "2",
  "url": "sec-intro-idle.html#list-hello_world_output",
  "type": "Listing",
  "number": "A.1.6",
  "title": "",
  "body": " The output of running the Hello, World! module.   = RESTART: C:\/Users\/sgraves\/OneDrive - The University of Texas at Tyler\/Python\/hello_world.py Hello, world!  >>>    "
},
{
  "id": "list-hello_world",
  "level": "2",
  "url": "sec-intro-idle.html#list-hello_world",
  "type": "Listing",
  "number": "A.1.7",
  "title": "",
  "body": " The Hello, world! program   print(\"Hello, world!\")   "
},
{
  "id": "sec-intro_basicdata",
  "level": "1",
  "url": "sec-intro_basicdata.html",
  "type": "Section",
  "number": "A.2",
  "title": "Basic data types",
  "body": " Basic data types   Computers can keep track of all sorts of information, but a good way to classify the basic data types are into numeric and non-numeric data.    Numerical data types  In mathematics prior to Calculus, the basic type of things you study are numbers, pretty vaguely defined, and then in calculus you're introduced to the idea of sets of numbers:   Mathematically, there are certain actions which can be taken using all of these numbers: your basic algebraic operations, with a few notable exceptions. The idea that different kinds of number can have different kinds of properties is the essence of the programming data type . The first and easiest data type to work with in Python is the int type, and the easiest way to start working with int s is to assign one to a name.   The help command  When working in Python, if you're not sure what to do next, you can access Python's built-in help menu from the console.   >>>  help()  Welcome to Python 3.8's help utility! If this is your first time using Python, you should definitely check out the tutorial on the Internet at https:\/\/docs.python.org\/3.8\/tutorial\/. Enter the name of any module, keyword, or topic to get help on writing Python programs and using Python modules. To quit this help utility and return to the interpreter, just type \"quit\". To get a list of available modules, keywords, symbols, or topics, type \"modules\", \"keywords\", \"symbols\", or \"topics\". Each module also comes with a one-line summary of what it does; to list the modules whose name or summary contain a given string such as \"spam\", type \"modules spam\". help>   You should freely use help as often as you want.   Data types matter in programming because computers are brainless machines. This is why syntax matters: the computer needs to know what a thing is to know what to do with it. Mathematically, if we read then we assume that both and are things for which the expression is sensible, but that is due to years of learning mathematical syntax.   Assignment vs. equality  Generally speaking, programming languages use a different syntax for the declarative statement Let take the value 3 than they do for the question Is equal to 3? Mathematicians do not, relying on the surrounding context to determine what is meant by .  To assign the value 3 to the variable named in python, we use x = 3 . To inquire whether or not the variable named is equal to 3, we use x == 3 . The spaces around the operators = and == are conventional and help make readable code.   Assignment vs. equality   >>>  x = 3  >>>  x == 3  True  >>>  y == 3  Traceback (most recent call last): File \"<stdin>\", line 1, in <module> NameError: name 'y' is not defined      Assignment produces no output  A statement like x = 3 in Python never produces output. To see the value of the variable named x , use print(x) .   All of the common mathematical operations are defined in Python, with only two slightly strange behaviors:   Arithmetic operators in Python     Operation  Implementation    Addition  a + b    Multiplication  a * b    Subtraction  a - b    Floating Point Division  a \/ b    Integer Quotient  a \/\/ b    Integer Remainder  a % b    Powers  a ** b     You might wonder what floating point division is and how it differs from normal division. The difficulty with division on a computer is that not every real number can exactly be represented in computer memory with . For a full explanation of this, see the official IEEE Standard 754 for Floating-Point Arithmetic or read the Wikipedia page . In any case, the Python operation a \/ b produces the floating point approximation of rather than the exact value, even when and are integer powers of 2.  The convention that a ** b (rather than a ^ b ) represents is the deliberate choice of the developer of Python, allowing a ^ b to represent the bitwise XOR operation. Beginning programmers don't usually need bitwise XOR.  To use more math functions than these, Python includes a standard math package. To include it, add import math to the beginning of a module, then access the functions inside the math library by using math.sqrt(...) and so on.   Loading additional packages  Python comes preinstalled with many useful packages, loaded using the import command.   Using the import math command   >>>  import math  >>>  math.sqrt(15)  3.872983346207417    The use of dot notation to access functions within a module is standard within Python and will be used extensively.     Non-numeric data types   The two most useful non-numeric data types are Boolean values of True and False (stored in the bool data type) and strings , which encompass every sequence of printable or non-printable character. Strings have data type str .    Boolean variables  The Boolean values of True and False are fundamental to logical conversation and do not need much explanation. However, the laws of logic allow many operations to combine Boolean values in interesting ways.   Logical Operators    Name  Operator    Conjunction  and    Disjunction  or    Negation  not     To really understand what the logical operators do, let's look at a truth table where the values of variables p and q take the various possible combinations of True and False .   Truth table for the basic logical operators of and , or , and not .    p  q  p and q  p or q  not p    False  False  False  False  True    False  True  False  True  True    True  False  False  True  False    True  True  True  True  False      Type conversion  In Python, True and False are actually integer values. You can always attempt to convert one data type into another by using the name of the target data type like a function.   Integer values of the bool values   >>>  int(False)  0  >>>  int(True)  1    Converting one data type into another this way is called type conversion or type casting .   Boolean data types are used extensively to control the flow of execution of an algorithm, as can be seen in and later in .    Strings  A finite sequence of symbols enclosed in matching single or double quotes is a string , represented by the str data type.   Valid strings  There are many different valid combinations of quotes which can enclose a string.   Valid input strings   >>>  'Single quotes may enclose a string'  'Single quotes may enclose a string'  >>>  \"Double quotes may enclose a string\"  'Double quotes may enclose a string'  >>>  '''Multiline strings  ...  may be enclosed in three single quotes'''  'Multiline strings\\nmay be enclosed in three single quotes'  >>>  \"\"\"Alternately, they may  ...  be enclosed in three double quotes.\"\"\"  'Alternately, they may\\nbe enclosed in three double quotes.'  >>>  '\"Quotes may be mixed,\" said he, \"but I may not quote nor contract.\"'  '\"Quotes may be mixed,\" said he, \"but I may not quote nor contract.\"'  >>>  \"They've been reversed here.\"  \"They've been reversed here.\"  >>>  print(\"This isn't the best example.\\n\\t- Dr. Graves\")  This isn't the best example. - Dr. Graves    As can be seen above, Python uses single quotes internally. Also the line break character is changed to \\n for internal storage. This is called an escape character , and there are several: \\' , \\\" , \\n , \\t , and \\\\ , among them.  To see a str in its proper form, with all escape characters replaced with the correct output, we use the print(...) function, as shown above.   There are many other things one can do with strings, since the str class comes equipped with many interesting attributes and methods , but those topics are best saved for later.   Formatted strings  The one additional feature of strings that can be used early and to great gain is the ability to modify strings for output based upon string formatting . There are several ways to do this:    printf -style String Formatting is named after the printf command for the C\/C++ programming languages. In this mode, certain percent-codes (such as %s , %d , and %f ) can be included in a string and then replaced via the % operator.  The String Format Method allows keywords enclosed in curly brackets (like {keyword} ) to be replaced as arguments to the str.format(...) method.   Formatted string literals allow a string to be defined similarly to the string format method, but using Python evaluation within the string.    First see a demonstration of the % operator for strings.   Changing a string using the % operator   >>>  print(\"\"\"This %s contains several (%d) percent codes,  ...  which are replaced (%f) by using the percent operator.  ...  \"\"\" % ('string', 3, 3.15926535) )  This string contains several (3) percent codes, which are replaced (3.159265) by using the percent operator.    Next consider an example of the use of the str.format(...) method.   The str.format method   >>>  print(\"\"\"A similar {a} which has {num} replacements.  ...  Notice that the {lcb}...{rcb} keywords can be replaced  ...  by any value whatsoever.\"\"\".format(a='StRiNg', num=7.31,  ...  lcb=\"{\", rcb=\"}\") )  A similar StRiNg which has 7.31 replacements. Notice that the {...} keywords can be replaced by any value whatsoever.    Finally, the method using f-strings .   Formatted string literals, called fstrings   >>>  name = \"Bob the Tomato\"  >>>  multiplicity = 5  >>>  out = f\"{name} can be copied {multiplicity} times: {multiplicity*name}\"  >>>  name = \"Larry the Cucumber\"  multiplicity = 2  >>>  print(out)  Bob the Tomato can be copied 5 times: Bob the TomatoBob the TomatoBob the TomatoBob the TomatoBob the Tomato    Note in this last example that the value of the fstring out is not changed even when the values associated with the names used to construct out changed.     "
},
{
  "id": "p-900",
  "level": "2",
  "url": "sec-intro_basicdata.html#p-900",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "numeric non-numeric "
},
{
  "id": "p-902",
  "level": "2",
  "url": "sec-intro_basicdata.html#p-902",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "data type "
},
{
  "id": "tech-help",
  "level": "2",
  "url": "sec-intro_basicdata.html#tech-help",
  "type": "Technology",
  "number": "A.2.1",
  "title": "The <code class=\"code-inline tex2jax_ignore\">help<\/code> command.",
  "body": " The help command  When working in Python, if you're not sure what to do next, you can access Python's built-in help menu from the console.   >>>  help()  Welcome to Python 3.8's help utility! If this is your first time using Python, you should definitely check out the tutorial on the Internet at https:\/\/docs.python.org\/3.8\/tutorial\/. Enter the name of any module, keyword, or topic to get help on writing Python programs and using Python modules. To quit this help utility and return to the interpreter, just type \"quit\". To get a list of available modules, keywords, symbols, or topics, type \"modules\", \"keywords\", \"symbols\", or \"topics\". Each module also comes with a one-line summary of what it does; to list the modules whose name or summary contain a given string such as \"spam\", type \"modules spam\". help>   You should freely use help as often as you want.  "
},
{
  "id": "tech-assign_vs_equals",
  "level": "2",
  "url": "sec-intro_basicdata.html#tech-assign_vs_equals",
  "type": "Technology",
  "number": "A.2.2",
  "title": "Assignment vs. equality.",
  "body": " Assignment vs. equality  Generally speaking, programming languages use a different syntax for the declarative statement Let take the value 3 than they do for the question Is equal to 3? Mathematicians do not, relying on the surrounding context to determine what is meant by .  To assign the value 3 to the variable named in python, we use x = 3 . To inquire whether or not the variable named is equal to 3, we use x == 3 . The spaces around the operators = and == are conventional and help make readable code.   Assignment vs. equality   >>>  x = 3  >>>  x == 3  True  >>>  y == 3  Traceback (most recent call last): File \"<stdin>\", line 1, in <module> NameError: name 'y' is not defined    "
},
{
  "id": "obs-assignment-no-output",
  "level": "2",
  "url": "sec-intro_basicdata.html#obs-assignment-no-output",
  "type": "Observation",
  "number": "A.2.4",
  "title": "Assignment produces no output.",
  "body": " Assignment produces no output  A statement like x = 3 in Python never produces output. To see the value of the variable named x , use print(x) .  "
},
{
  "id": "tab-arithmetic_operators",
  "level": "2",
  "url": "sec-intro_basicdata.html#tab-arithmetic_operators",
  "type": "Table",
  "number": "A.2.5",
  "title": "Arithmetic operators in Python",
  "body": " Arithmetic operators in Python     Operation  Implementation    Addition  a + b    Multiplication  a * b    Subtraction  a - b    Floating Point Division  a \/ b    Integer Quotient  a \/\/ b    Integer Remainder  a % b    Powers  a ** b    "
},
{
  "id": "p-911",
  "level": "2",
  "url": "sec-intro_basicdata.html#p-911",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bitwise XOR "
},
{
  "id": "tech-import",
  "level": "2",
  "url": "sec-intro_basicdata.html#tech-import",
  "type": "Technology",
  "number": "A.2.6",
  "title": "Loading additional packages.",
  "body": " Loading additional packages  Python comes preinstalled with many useful packages, loaded using the import command.   Using the import math command   >>>  import math  >>>  math.sqrt(15)  3.872983346207417    The use of dot notation to access functions within a module is standard within Python and will be used extensively.  "
},
{
  "id": "p-915",
  "level": "2",
  "url": "sec-intro_basicdata.html#p-915",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Boolean values strings "
},
{
  "id": "tab-logical_operators",
  "level": "2",
  "url": "sec-intro_basicdata.html#tab-logical_operators",
  "type": "Table",
  "number": "A.2.8",
  "title": "Logical Operators",
  "body": " Logical Operators    Name  Operator    Conjunction  and    Disjunction  or    Negation  not    "
},
{
  "id": "p-917",
  "level": "2",
  "url": "sec-intro_basicdata.html#p-917",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth table "
},
{
  "id": "tab-truth_table-logical_operators",
  "level": "2",
  "url": "sec-intro_basicdata.html#tab-truth_table-logical_operators",
  "type": "Table",
  "number": "A.2.9",
  "title": "Truth table for the basic logical operators of <code class=\"code-inline tex2jax_ignore\">and<\/code>, <code class=\"code-inline tex2jax_ignore\">or<\/code>, and <code class=\"code-inline tex2jax_ignore\">not<\/code>.",
  "body": " Truth table for the basic logical operators of and , or , and not .    p  q  p and q  p or q  not p    False  False  False  False  True    False  True  False  True  True    True  False  False  True  False    True  True  True  True  False    "
},
{
  "id": "tech-typecasting",
  "level": "2",
  "url": "sec-intro_basicdata.html#tech-typecasting",
  "type": "Technology",
  "number": "A.2.10",
  "title": "Type conversion.",
  "body": " Type conversion  In Python, True and False are actually integer values. You can always attempt to convert one data type into another by using the name of the target data type like a function.   Integer values of the bool values   >>>  int(False)  0  >>>  int(True)  1    Converting one data type into another this way is called type conversion or type casting .  "
},
{
  "id": "p-921",
  "level": "2",
  "url": "sec-intro_basicdata.html#p-921",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "string "
},
{
  "id": "tech-strings",
  "level": "2",
  "url": "sec-intro_basicdata.html#tech-strings",
  "type": "Technology",
  "number": "A.2.12",
  "title": "Valid strings.",
  "body": " Valid strings  There are many different valid combinations of quotes which can enclose a string.   Valid input strings   >>>  'Single quotes may enclose a string'  'Single quotes may enclose a string'  >>>  \"Double quotes may enclose a string\"  'Double quotes may enclose a string'  >>>  '''Multiline strings  ...  may be enclosed in three single quotes'''  'Multiline strings\\nmay be enclosed in three single quotes'  >>>  \"\"\"Alternately, they may  ...  be enclosed in three double quotes.\"\"\"  'Alternately, they may\\nbe enclosed in three double quotes.'  >>>  '\"Quotes may be mixed,\" said he, \"but I may not quote nor contract.\"'  '\"Quotes may be mixed,\" said he, \"but I may not quote nor contract.\"'  >>>  \"They've been reversed here.\"  \"They've been reversed here.\"  >>>  print(\"This isn't the best example.\\n\\t- Dr. Graves\")  This isn't the best example. - Dr. Graves    As can be seen above, Python uses single quotes internally. Also the line break character is changed to \\n for internal storage. This is called an escape character , and there are several: \\' , \\\" , \\n , \\t , and \\\\ , among them.  To see a str in its proper form, with all escape characters replaced with the correct output, we use the print(...) function, as shown above.  "
},
{
  "id": "p-925",
  "level": "2",
  "url": "sec-intro_basicdata.html#p-925",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "attributes methods "
},
{
  "id": "tech-formatted-strings",
  "level": "2",
  "url": "sec-intro_basicdata.html#tech-formatted-strings",
  "type": "Technology",
  "number": "A.2.14",
  "title": "Formatted strings.",
  "body": " Formatted strings  The one additional feature of strings that can be used early and to great gain is the ability to modify strings for output based upon string formatting . There are several ways to do this:    printf -style String Formatting is named after the printf command for the C\/C++ programming languages. In this mode, certain percent-codes (such as %s , %d , and %f ) can be included in a string and then replaced via the % operator.  The String Format Method allows keywords enclosed in curly brackets (like {keyword} ) to be replaced as arguments to the str.format(...) method.   Formatted string literals allow a string to be defined similarly to the string format method, but using Python evaluation within the string.    First see a demonstration of the % operator for strings.   Changing a string using the % operator   >>>  print(\"\"\"This %s contains several (%d) percent codes,  ...  which are replaced (%f) by using the percent operator.  ...  \"\"\" % ('string', 3, 3.15926535) )  This string contains several (3) percent codes, which are replaced (3.159265) by using the percent operator.    Next consider an example of the use of the str.format(...) method.   The str.format method   >>>  print(\"\"\"A similar {a} which has {num} replacements.  ...  Notice that the {lcb}...{rcb} keywords can be replaced  ...  by any value whatsoever.\"\"\".format(a='StRiNg', num=7.31,  ...  lcb=\"{\", rcb=\"}\") )  A similar StRiNg which has 7.31 replacements. Notice that the {...} keywords can be replaced by any value whatsoever.    Finally, the method using f-strings .   Formatted string literals, called fstrings   >>>  name = \"Bob the Tomato\"  >>>  multiplicity = 5  >>>  out = f\"{name} can be copied {multiplicity} times: {multiplicity*name}\"  >>>  name = \"Larry the Cucumber\"  multiplicity = 2  >>>  print(out)  Bob the Tomato can be copied 5 times: Bob the TomatoBob the TomatoBob the TomatoBob the TomatoBob the Tomato    Note in this last example that the value of the fstring out is not changed even when the values associated with the names used to construct out changed.  "
},
{
  "id": "sec-intro-containers",
  "level": "1",
  "url": "sec-intro-containers.html",
  "type": "Section",
  "number": "A.3",
  "title": "Container data types",
  "body": " Container data types   In Python, data types which can contain other data are called container data types. The three easiest general containers to work with are lists , tuples , and dictionaries. A typical use of a container is to store data collected in a repeated operation of a program.    The list data type   Lists serve as a general purpose container.   Defining a list  Any comma-separated sequence of syntactically valid expressions enclosed in a matching pair of square brackets [ and ] is a list . The empty list  [] is a valid list.   Some list data   >>>  foo = \"This is a string, not a list\"  >>>  bar = [1, 2, foo, [5, 5, 5]]  >>>  type(bar)  <class 'list'>  >>>  print( bar )  [1, 2, 'This is a string, not a list', [5, 5, 5]]     Since lists contain other data it is very important to be able to access that data. Python provides two related ways to access the data contained in a list: indexing and slicing .    Indexing and slicing  The index of an element of a list is the distance in the list from that element to the start of the list. The element at the start of the list is thus in index 0, the next element in index 1, the next in index 2, and so on. Thus a list consisting of 10 elements has indices 0 through 9. For a list the_list , we access the element in index by using the_list[i] ; this is similar to indexing a mathematical sequence as .   >>>  the_list = ['bob', 'larry', 3.14159, 1-1j, 'fifth']  >>>  the_list[0]  'bob'   Unlike a mathematical sequence, Python allows indexing from the back of the list as well. When indexing from the back of the list, it is important to remember that the same principle applies as above: the negative index is the distance from the front of an element to the back of the list. Continuing the above, we have:   >>>  the_list[-2]  (1-1j)  >>>  the_list[-1]  'fifth'   Since , the negative zero index is the same as the zero index:   >>>  the_list[-0]  'bob'  >>>  the_list[0]  'bob'   To access a sublist of a list, we use a slice . The first number of the slice is the index of the element to start the sublist, and the second number of the slice is the index of the first element not to include. To slice starting at index 1 and stopping before index 5 of the_list , we would use the_list[1:5] . Since the_list only had five elements we will define a longer list to experiment.   >>>  new_list = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,  ...  610, 987, 1597, 2584, 4181, 6765, 10946]  >>>  new_list[1:5]  [2, 3, 5, 8]   You can slice by skipping indices, as well, by supplying a third term.   >>>  new_list[1:15:2]  [2, 5, 13, 34, 89, 233, 610]    Python allows an interesting behavior with regard to indexing and slicing. While you cannot index beyond the bounds of a list, you are always permitted to slice beyond the bounds of the list. Thus with the above code, the_list[8] would generate an IndexError , but new_list[50:100:3] would output the empty list, [] .   Finally, if you want to slice from the beginning of the list up to the th index, you use new_list[:j] . If you want to slice from the th index to the end of the list, you use new_list[i:] . If you want to slice a whole copy of a list (there are valid reasons to do this), use new_list[:] . If you want the reverse of a list, you slice the whole thing from beginning to end using a skip of negative one: new_list[::-1] .    Operators and methods  Indexing and slicing are just the beginnings of what can be done with lists. We can also combine two lists into a longer one (additively) or elongate a list by making it contain several copied of itself (multiplicatively). Continuing the above examples, we have:   >>>  the_list + new_list  ['bob', 'larry', 3.14159, (1-1j), 'fifth', 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946]  >>>  3 * the_list  ['bob', 'larry', 3.14159, (1-1j), 'fifth', 'bob', 'larry', 3.14159, (1-1j), 'fifth', 'bob', 'larry', 3.14159, (1-1j), 'fifth']    list addition is not commutative  Generally speaking, if a and b are lists, then a+b is different from b+a .   These are operators which we are used to working with algebraically, now given new meaning to interact with lists. Methods are different: they are functions specific to the list data type accessed using dot notation . When working with a new data type, a good way to see the full list of all of its methods is to ask for help , but beware! The help files are very detailed. Try help(list) at the Python prompt.  Many of the methods (all of those named __likethis__ ) are special. We will discuss those later in the text when we discuss operator overloading in . The list class has several other methods as well. Assuming that we are using the_list from above, here is a basic overview of several of the more useful methods:     the_list.append(x) : Increases the length of the_list by sticking the value x at the end   the_list.count(x) : Returns the number of times x occurs in the_list without changing the_list       Mutability  The property of mutability is special: if a numerically-index contained allows you to assign a new value into a particular index, then that container is mutable . If not, the container is immutable. Lists are a mutable data type, since we can make an assignment new_list[5] = 'reginald' , so long as new_list[5] is a valid index.     The tuple data type  A tuple behaves very much like a list, except for two important points: they are enclosed in parentheses ( and ) instead of square braclets, and they are immutable . You cannout assign a new variable to a particular index of a tuple without instead overwriting the whole tuple .  Since a tuple must be overwritten to be changed, several of the methods differ from those for the list class. The differences can be seen in a careful comparison of help(tuple) versus help(list) .    The dict data type  In order to explain how a Python dict behaves, it is instructive to consider the mathematical definition of a function.   Mathematical function   A function  from a set to a set is a rule which assigns to each value in the set exactly one value from the set .  The set is called the domain of  and the set is called the codomain of  . The set is the image of  , or sometimes the image of under  .  Hence if is a function, , and such that , , and , then .    In Python, a dict acts very much like a simple mathematical function, where the domain is a set of hashable objects . The elements of the domain of a dict are called its keys and the elements of its image are called its values . Since the idea of a hashable object is complicated, a simpler idea is to think that keys of a dict must be immutable items or non-containers.   Defining a dict  Dictionaries can be defined in two important ways.     my_dict = {k1:v1, k2:v2, ..., k100:v100} would produce a dict with 100 paired keys and values.   my_dict = dict( [(k1, v1), (k2, v2), ..., (k100, v100)] ) would produce the same dict .     Python dictionaries are mutable, and in fact once a dict has been defined, new key-value pairs can be added to the dictionary simply by assigning the new value to the correct key: my_dict[new_key] = new_value .   Strings are containers, too!  It is very important to recognize that strings can be sliced and indexed exactly as can lists and tuples, which makes str a container data type as well. Strings are immutable!      Sets are a special container  It is also possible to construct mathematical sets in Python, using the set(some_object) constructor. The argument some_object must be itself a container of hashable objects, much like the keys of a dict .   Defining a set  Usually the argument to set is a list or tuple , but str is also permitted since strings (of length 1) are hashable. Otherwise, all normal mathematical properties of expected for sets hold for the set class.   Defining sets removes repeated elements   >>>  a = set([1,2,3,4])  >>>  b = set([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,4])  >>>  print(a==b)  True      "
},
{
  "id": "p-935",
  "level": "2",
  "url": "sec-intro-containers.html#p-935",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "container lists tuples dictionaries. "
},
{
  "id": "tech-lists",
  "level": "2",
  "url": "sec-intro-containers.html#tech-lists",
  "type": "Technology",
  "number": "A.3.1",
  "title": "Defining a <code class=\"code-inline tex2jax_ignore\">list<\/code>.",
  "body": " Defining a list  Any comma-separated sequence of syntactically valid expressions enclosed in a matching pair of square brackets [ and ] is a list . The empty list  [] is a valid list.   Some list data   >>>  foo = \"This is a string, not a list\"  >>>  bar = [1, 2, foo, [5, 5, 5]]  >>>  type(bar)  <class 'list'>  >>>  print( bar )  [1, 2, 'This is a string, not a list', [5, 5, 5]]    "
},
{
  "id": "p-938",
  "level": "2",
  "url": "sec-intro-containers.html#p-938",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indexing slicing "
},
{
  "id": "p-939",
  "level": "2",
  "url": "sec-intro-containers.html#p-939",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "index "
},
{
  "id": "p-942",
  "level": "2",
  "url": "sec-intro-containers.html#p-942",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slice "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-intro-containers.html#remark-8",
  "type": "Remark",
  "number": "A.3.3",
  "title": "",
  "body": " Python allows an interesting behavior with regard to indexing and slicing. While you cannot index beyond the bounds of a list, you are always permitted to slice beyond the bounds of the list. Thus with the above code, the_list[8] would generate an IndexError , but new_list[50:100:3] would output the empty list, [] .  "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-intro-containers.html#remark-9",
  "type": "Remark",
  "number": "A.3.4",
  "title": "<code class=\"code-inline tex2jax_ignore\">list<\/code> addition is not commutative.",
  "body": " list addition is not commutative  Generally speaking, if a and b are lists, then a+b is different from b+a .  "
},
{
  "id": "p-948",
  "level": "2",
  "url": "sec-intro-containers.html#p-948",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Methods "
},
{
  "id": "p-953",
  "level": "2",
  "url": "sec-intro-containers.html#p-953",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutability mutable "
},
{
  "id": "def-math-function",
  "level": "2",
  "url": "sec-intro-containers.html#def-math-function",
  "type": "Definition",
  "number": "A.3.5",
  "title": "Mathematical function.",
  "body": " Mathematical function   A function  from a set to a set is a rule which assigns to each value in the set exactly one value from the set .  The set is called the domain of  and the set is called the codomain of  . The set is the image of  , or sometimes the image of under  .  Hence if is a function, , and such that , , and , then .   "
},
{
  "id": "p-960",
  "level": "2",
  "url": "sec-intro-containers.html#p-960",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "keys values "
},
{
  "id": "tech-dicts",
  "level": "2",
  "url": "sec-intro-containers.html#tech-dicts",
  "type": "Technology",
  "number": "A.3.6",
  "title": "Defining a <code class=\"code-inline tex2jax_ignore\">dict<\/code>.",
  "body": " Defining a dict  Dictionaries can be defined in two important ways.     my_dict = {k1:v1, k2:v2, ..., k100:v100} would produce a dict with 100 paired keys and values.   my_dict = dict( [(k1, v1), (k2, v2), ..., (k100, v100)] ) would produce the same dict .    "
},
{
  "id": "fact-intro-containers-strs",
  "level": "2",
  "url": "sec-intro-containers.html#fact-intro-containers-strs",
  "type": "Fact",
  "number": "A.3.7",
  "title": "Strings are containers, too!",
  "body": " Strings are containers, too!  It is very important to recognize that strings can be sliced and indexed exactly as can lists and tuples, which makes str a container data type as well. Strings are immutable!   "
},
{
  "id": "tech-defining-sets",
  "level": "2",
  "url": "sec-intro-containers.html#tech-defining-sets",
  "type": "Technology",
  "number": "A.3.8",
  "title": "Defining a <code class=\"code-inline tex2jax_ignore\">set<\/code>.",
  "body": " Defining a set  Usually the argument to set is a list or tuple , but str is also permitted since strings (of length 1) are hashable. Otherwise, all normal mathematical properties of expected for sets hold for the set class.   Defining sets removes repeated elements   >>>  a = set([1,2,3,4])  >>>  b = set([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,4])  >>>  print(a==b)  True    "
},
{
  "id": "sec-intro-iteration",
  "level": "1",
  "url": "sec-intro-iteration.html",
  "type": "Section",
  "number": "A.4",
  "title": "Iteration",
  "body": " Iteration   Computers were invented initially for the purpose of performing normal calculations quickly and repeatedly. There are two simple ways to think of repeating a task: either one sets out to repeat the task on each element of some list, or one performs a task repeatedly so long as some condition is met. These correspond to the two fundamental methods of iteration available to Python programmers: for loops and while loops .    For loops  Consider the mathematical problem of finding the equation of a straight line containing both of the points and . It takes just a moment to write down the formula , , or and plug in the respective constants. However it becomes more costly in terms of time if the same calculation needs to be carried out for several hundred pairs of points! In fact, even reading in several hundred pairs of points from a file in order to do such a calculation is tedious.  For loops are the ideal programming construction to use when a repetitive task or procedure must be performed on a predetermined set of inputs or a predetermined number of times. Specifically, Python will allow a for loop to repeat over any container which is an iterable , like a tuple or list .   for loops  To perform a task repeatedly while a variable loop_var successively takes each value in a list, tuple, or other iterable my_container , we use the for loop block structure , as follows:   A typical use of the for block structure   for loop_var in my_container: # Print the value of loop_var print(loop_var) # Perform a task # Perform another task # And so on    This is shown as part of a module rather than input to the Python console to emphasize the block structure. In Python, blocks of code are indicated by the level of indentation of the code. It is normal for Python editors to insert 2 or 4 spaces when the tab key on the keyboard is pressed, rather than the special tab character represented in Python by '\\t' . This is an important behavior to the Python interpreter, and provides a very good reason to use a Python editor or IDE instead of a text editor for writing Python code!  The colon : at the end of the first line indicates to Python that the interpreter should expect an indented block starting on the next line.   The hash marks appearing in the above technology description are an important code-writing tool.   Comments  A comment is any code which is not evaluated by Python. The special symbol # in Python denotes the start of a comment, and so whenever # occurs outside of a string it begins a comment. Comments are used to make a note for someone reading the code.   The Python implementation of for loops is very practical. Given a finite mathematical sequence of elements the important values are the values , not the values of itself! This is one way Python differs from the implementation by more earlier programming languages.   For loops in other languages  In many other languages the normal behavior is different, and for loops can only take successive integer values. For instance, in C++ the following code starts the integer at the value 0 and so long as prints the value of (that's the cout << i; part) and then increases the value of by one (that's the i++ ) part.   An example of a for loop in C++   for (int i = 0; i < 20; i++ ){ cout << i; }    This is the traditional use of a for loop: the looping variable serves as an index variable (like a subscript variable) and is changed until a certain range condition is met. This behavior is still available in Python, using the range function . To produce the same output as the above C++ code in Python is uncomplicated.   The same for loop as reproduced in Python   for i in range(20): print(i)     The range function as remarked above is an iterable, since it can be iterated over by a for loop. The several ways to call the range function and its output in each case are important.   The range function  The output of a range function is not a list or a tuple , though it acts like one. It is a special range object , but can be easily converted to a list or tuple by type casting. Here are the basic uses of the range function, assuming my_list , m , n , and k are defined.   The uses of the range function in Python    Command  Output    range(m)  The indices of a container of length    range(m,n)  The indices sliced by my_list[m:n]    range(m,n,k)  The indices sliced by my_list[m:n:k]     As an example, the following would be produced at the Python console. The fourth input shows that the range object output on its own is not a list.   Some range examples   >>>  list(range(5))  [0, 1, 2, 3, 4]  >>>  list(range(5,10))  [5, 6, 7, 8, 9]  >>>  list(range(5,20,3))  [5, 8, 11, 14, 17]  >>>  print(range(5))  range(0, 5)       While loops  The other type of common iteration is to repeatedly perform a task so long as some condition is true, which is a sort of transition between talking about iteration and conditional statements!   while loops  A while block depends for its execution on a conditioning expression, and the block executes repeatedly so long as the expression evaluates to True . Here is a short example of a while loop which will terminate after a few iterations.   A small example of a while loop   counter = 10 while (counter > 0): print( counter ) counter = counter - 1    Note that the parentheses on the second line are unnecessary, but they help a reader recognize the condition for the loop. Any statement which can evaluate to either True or False can appear as the condition of a while loop.   The following example of a while loop is called an infinite loop , because it will never terminate. Generally speaking, a program stuck in an infinite loop in Python can be terminated by pressing Ctrl-C , which triggers a KeyboardInterrupt .   The canonical example of an infinite while loop   while True: pass    The pass statement is a do-nothing statement which is syntactically valid to be a do-nothing statement. This means an indented block containing a pass statement will do nothing. This is especially useful when first learning programming.    All of these concepts will combine in the next section as we move towards building useful programs in functions.   "
},
{
  "id": "p-969",
  "level": "2",
  "url": "sec-intro-iteration.html#p-969",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "for loops while loops "
},
{
  "id": "p-971",
  "level": "2",
  "url": "sec-intro-iteration.html#p-971",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iterable "
},
{
  "id": "tech-forloop",
  "level": "2",
  "url": "sec-intro-iteration.html#tech-forloop",
  "type": "Technology",
  "number": "A.4.1",
  "title": "<code class=\"code-inline tex2jax_ignore\">for<\/code> loops.",
  "body": " for loops  To perform a task repeatedly while a variable loop_var successively takes each value in a list, tuple, or other iterable my_container , we use the for loop block structure , as follows:   A typical use of the for block structure   for loop_var in my_container: # Print the value of loop_var print(loop_var) # Perform a task # Perform another task # And so on    This is shown as part of a module rather than input to the Python console to emphasize the block structure. In Python, blocks of code are indicated by the level of indentation of the code. It is normal for Python editors to insert 2 or 4 spaces when the tab key on the keyboard is pressed, rather than the special tab character represented in Python by '\\t' . This is an important behavior to the Python interpreter, and provides a very good reason to use a Python editor or IDE instead of a text editor for writing Python code!  The colon : at the end of the first line indicates to Python that the interpreter should expect an indented block starting on the next line.  "
},
{
  "id": "tech-comments",
  "level": "2",
  "url": "sec-intro-iteration.html#tech-comments",
  "type": "Technology",
  "number": "A.4.3",
  "title": "Comments.",
  "body": " Comments  A comment is any code which is not evaluated by Python. The special symbol # in Python denotes the start of a comment, and so whenever # occurs outside of a string it begins a comment. Comments are used to make a note for someone reading the code.  "
},
{
  "id": "rem-for_loops_other_langs",
  "level": "2",
  "url": "sec-intro-iteration.html#rem-for_loops_other_langs",
  "type": "Remark",
  "number": "A.4.4",
  "title": "For loops in other languages.",
  "body": " For loops in other languages  In many other languages the normal behavior is different, and for loops can only take successive integer values. For instance, in C++ the following code starts the integer at the value 0 and so long as prints the value of (that's the cout << i; part) and then increases the value of by one (that's the i++ ) part.   An example of a for loop in C++   for (int i = 0; i < 20; i++ ){ cout << i; }    This is the traditional use of a for loop: the looping variable serves as an index variable (like a subscript variable) and is changed until a certain range condition is met. This behavior is still available in Python, using the range function . To produce the same output as the above C++ code in Python is uncomplicated.   The same for loop as reproduced in Python   for i in range(20): print(i)    "
},
{
  "id": "tech-rangefunction",
  "level": "2",
  "url": "sec-intro-iteration.html#tech-rangefunction",
  "type": "Technology",
  "number": "A.4.7",
  "title": "The <code class=\"code-inline tex2jax_ignore\">range<\/code> function.",
  "body": " The range function  The output of a range function is not a list or a tuple , though it acts like one. It is a special range object , but can be easily converted to a list or tuple by type casting. Here are the basic uses of the range function, assuming my_list , m , n , and k are defined.   The uses of the range function in Python    Command  Output    range(m)  The indices of a container of length    range(m,n)  The indices sliced by my_list[m:n]    range(m,n,k)  The indices sliced by my_list[m:n:k]     As an example, the following would be produced at the Python console. The fourth input shows that the range object output on its own is not a list.   Some range examples   >>>  list(range(5))  [0, 1, 2, 3, 4]  >>>  list(range(5,10))  [5, 6, 7, 8, 9]  >>>  list(range(5,20,3))  [5, 8, 11, 14, 17]  >>>  print(range(5))  range(0, 5)    "
},
{
  "id": "tech-whileloop",
  "level": "2",
  "url": "sec-intro-iteration.html#tech-whileloop",
  "type": "Technology",
  "number": "A.4.10",
  "title": "<code class=\"code-inline tex2jax_ignore\">while<\/code> loops.",
  "body": " while loops  A while block depends for its execution on a conditioning expression, and the block executes repeatedly so long as the expression evaluates to True . Here is a short example of a while loop which will terminate after a few iterations.   A small example of a while loop   counter = 10 while (counter > 0): print( counter ) counter = counter - 1    Note that the parentheses on the second line are unnecessary, but they help a reader recognize the condition for the loop. Any statement which can evaluate to either True or False can appear as the condition of a while loop.  "
},
{
  "id": "p-986",
  "level": "2",
  "url": "sec-intro-iteration.html#p-986",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite loop "
},
{
  "id": "listing-42",
  "level": "2",
  "url": "sec-intro-iteration.html#listing-42",
  "type": "Listing",
  "number": "A.4.12",
  "title": "",
  "body": " The canonical example of an infinite while loop   while True: pass   "
},
{
  "id": "sec-intro-functions",
  "level": "1",
  "url": "sec-intro-functions.html",
  "type": "Section",
  "number": "A.5",
  "title": "Functions and conditional statements",
  "body": " Functions and conditional statements   We already have a good, useable definition of functions in . That definition still actually holds for programming functions.   Programming function   Also called a subroutine , a function in computer programming is a sequence of program instructions encapsulated into a unit which can be references elsewhere in a program.    Any self-contained implementation of any algorithm can be considered as a subroutine, so we will use function specifically for those which are defined in Python using the def command.    def ining new functions  As hinted by the title of this subsection, the command in Python which allows functions to be defined is def .   Defining functions with def  In order to define a function in Python, we use the def block structure as follows:   An example of using a def block structure   def my_func(arg1, arg2, arg3=default_val): \"\"\"The multiline string which comes immediately after a 'def' statement is the docstring, which is displayed when 'help(my_func)' is used at the Python console.\"\"\" # Some procedure goes here # # Every function either explicitly returns a value or the program \"falls # off\" the end of the function, which effectively returns the value # None, of NoneType. return arg1    The expression my_func is the name of the function, the values arg1 , arg2 , and arg3 are arguments to the function, and arg3=default_val indicates that the third argument is optional as a default value is provided. Whatever follows the return statement, or is passed to the return statement in parentheses, is the value sent back to the calling routine where the function was invoked.   Every piece of code that is written can be wrapped in a function with a memorable name and saved by a user in a single location for later use. This allows a programmer to efficiently reuse code that has already been written, rather than having to reimplement known algorithms repeatedly. Extremely common or basic-level functions are actually written into Python, and a list of these built-in functions is available at the Python documentation website.    Controlling flow of programs  In order to write good, meaningful functions, we need to be able to emulate mathematical functions with piecewise definitions. Take for example the Kronecker delta function, The value of changes depending upon whether or not the input arguments and satisfy . The control of the flow of a program can also depend upon the value of variables, and the structure which enables this is the if:... elif:... else:... block structure.   Conditional statements  The if:... elif:... else:... structure permits a program to execute different subroutines depending upon the state of various conditional variables. Consider the following example.   if cond1: # If cond1 evaluate to True, do the following: opt_function1(...) elif cond2: # If cond1 evaluates to False but cond2 evaluates to True, do the # following: opt_function2(...) else: # If none of the conditions in the original if or any subsequent # elif statements evaluates to True, then do the following: else_function(...)   After an if:... elif:... else:... block executes, the program does not repeat it (because it is a conditional statement, not an iteration) but returns to the same level of indentation as the original if: and continues the execution.   We have now put together enough pieces of programming that we can look at some interesting mathematical problems!    The Collatz Conjecture  This problem was introduced by Lothat Collatz in 1937. Define a mathematical sequence by the following rule: begin with any positive integer , and set . Subsequent terms in the sequence are determined from the preceding terms according to this rule:    The Collatz Conjecture   No matter the choice of , any such sequence will eventually contain the number 1.    This simple statement gives an easy programming exercise but has an interesting conclusion: no one knows whether or not the Collatz Conjecture is true! It is an open problem in combinatorics, which has defied the attempts at proof of some of the greatest mathematicians of the last 100 years.   A Python implementation of the Collatz sequence using a for loop.   def iterative_collatz(n): \"\"\"An iterative version of the Collatz sequence which runs a maximum of 10000 steps.\"\"\" output = [ n ] current_value = n for i in range(10000): if current_value % 2 == 0: current_value = current_value \/\/ 2 else: current_value = 3 * current_value + 1 output.append( current_value ) if current_value == 1: return( output ) return( output )    Type the previous listing into a file called collatz.py in your directory for Python files, and then open IDLE. At the prompt, run import collatz and then run collatz(39) . What is your result?   Typing vs. copying and pasting code  One of the best ways to learn programming is to simply learn by experimentation, but a minimal working knowledge of syntax and programming methods is needed before that is possible. Another very good way to learn to program is to manually type in code from another source, seeking to explain and understand it along the way. If you transcribe another person's program into your own, try to put an explanatory comment on every line to see if you understand what the program is doing!   What might seem a better way to write a Collatz-sequence program would be to start building a sequence at the input number n and continue as long as the last element of the sequence is not 1, but there are several serious problems with that approach. First and foremost, if the Collatz conjecture is actually false, there is some input n for which that program would never terminate! Since all current research indicates that the Collatz conjecture is probably true, the other worse problem is that generating a long sequence uses up system memory in the computer, and eventually (for a long enough sequence) you could run out of memory and crash Python! The good news is that running a computer out of memory in this way causes no long-term problems; quitting Python is usually enough to solve the problem and allow the operating system to reallocate that memory.    "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-intro-functions.html#def-function",
  "type": "Definition",
  "number": "A.5.1",
  "title": "Programming function.",
  "body": " Programming function   Also called a subroutine , a function in computer programming is a sequence of program instructions encapsulated into a unit which can be references elsewhere in a program.   "
},
{
  "id": "tech-def",
  "level": "2",
  "url": "sec-intro-functions.html#tech-def",
  "type": "Technology",
  "number": "A.5.2",
  "title": "Defining functions with <code class=\"code-inline tex2jax_ignore\">def<\/code>.",
  "body": " Defining functions with def  In order to define a function in Python, we use the def block structure as follows:   An example of using a def block structure   def my_func(arg1, arg2, arg3=default_val): \"\"\"The multiline string which comes immediately after a 'def' statement is the docstring, which is displayed when 'help(my_func)' is used at the Python console.\"\"\" # Some procedure goes here # # Every function either explicitly returns a value or the program \"falls # off\" the end of the function, which effectively returns the value # None, of NoneType. return arg1    The expression my_func is the name of the function, the values arg1 , arg2 , and arg3 are arguments to the function, and arg3=default_val indicates that the third argument is optional as a default value is provided. Whatever follows the return statement, or is passed to the return statement in parentheses, is the value sent back to the calling routine where the function was invoked.  "
},
{
  "id": "p-996",
  "level": "2",
  "url": "sec-intro-functions.html#p-996",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Kronecker delta "
},
{
  "id": "tech-if_elif_else",
  "level": "2",
  "url": "sec-intro-functions.html#tech-if_elif_else",
  "type": "Technology",
  "number": "A.5.4",
  "title": "Conditional statements.",
  "body": " Conditional statements  The if:... elif:... else:... structure permits a program to execute different subroutines depending upon the state of various conditional variables. Consider the following example.   if cond1: # If cond1 evaluate to True, do the following: opt_function1(...) elif cond2: # If cond1 evaluates to False but cond2 evaluates to True, do the # following: opt_function2(...) else: # If none of the conditions in the original if or any subsequent # elif statements evaluates to True, then do the following: else_function(...)   After an if:... elif:... else:... block executes, the program does not repeat it (because it is a conditional statement, not an iteration) but returns to the same level of indentation as the original if: and continues the execution.  "
},
{
  "id": "conjecture-1",
  "level": "2",
  "url": "sec-intro-functions.html#conjecture-1",
  "type": "Conjecture",
  "number": "A.5.5",
  "title": "The Collatz Conjecture.",
  "body": " The Collatz Conjecture   No matter the choice of , any such sequence will eventually contain the number 1.   "
},
{
  "id": "list-collatz",
  "level": "2",
  "url": "sec-intro-functions.html#list-collatz",
  "type": "Listing",
  "number": "A.5.6",
  "title": "",
  "body": " A Python implementation of the Collatz sequence using a for loop.   def iterative_collatz(n): \"\"\"An iterative version of the Collatz sequence which runs a maximum of 10000 steps.\"\"\" output = [ n ] current_value = n for i in range(10000): if current_value % 2 == 0: current_value = current_value \/\/ 2 else: current_value = 3 * current_value + 1 output.append( current_value ) if current_value == 1: return( output ) return( output )   "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-intro-functions.html#remark-11",
  "type": "Remark",
  "number": "A.5.7",
  "title": "Typing vs. copying and pasting code.",
  "body": " Typing vs. copying and pasting code  One of the best ways to learn programming is to simply learn by experimentation, but a minimal working knowledge of syntax and programming methods is needed before that is possible. Another very good way to learn to program is to manually type in code from another source, seeking to explain and understand it along the way. If you transcribe another person's program into your own, try to put an explanatory comment on every line to see if you understand what the program is doing!  "
},
{
  "id": "sec-intro-errors",
  "level": "1",
  "url": "sec-intro-errors.html",
  "type": "Section",
  "number": "A.6",
  "title": "Errors and exception handling",
  "body": " Errors and exception handling   There's only one way for a program to run correctly, but so many different ways errors can appear. Some errors are easy to diagnose and fix and others can ruin whole days trying to pin down. Errors in programming fall broadly into two classes: exceptions and bugs.    Exceptions  Exceptions are those errors which (left untreated) stop the execution of code abruptly. On the scale of all possible errors, this is clearly worse than executes flawlessly , but not much. In Python an Exception is a special data type which is used for all sorts of regularly-occurring programming errors. The following are some of the more common exceptions which arise when working with Python, in no particular order.   Syntax Error  A Python SyntaxError is the programming equivalent of a grammatically incorrect sentence, where you've written something which violates the basic rules of the Python language. Python will show you in the error message exactly where your Syntax error occurs. Here's an example:   An example which will produce a SyntaxError   >>>  foo = \"This is a test\"  >>>  bar =  SyntaxError: invalid syntax      Index errors  An IndexError is raised when you try to access an index of a container with regular indexing (like lists, tuples, and strings, but not dictionaries) but outside the bounds of the valid indices.   An example which will produce a IndexError   >>>  foo = \"this is a string\"  >>>  bar = len(foo) + 5  >>>  foo[bar]  Traceback (most recent call last): File \"<pyshell#8>\", line 1, in <module> foo[bar] IndexError: string index out of range      Key errors  The KeyError is closely related to the IndexError , but for dictionaries! If a key is attempted to be referenced which has not been declared to have a value, a KeyError will result.   An example which will produce a KeyError   >>>  foo = {'bob':[1, 'the shrimp'], (2,3): (1,2,3,'the pineapple')}  >>>  print( list( foo.keys() ) )  ['bob', (2, 3)]  >>>  print( foo['bar'] )  Traceback (most recent call last): File \"<pyshell#3>\", line 1, in <module> print( foo['bar'] ) KeyError: 'bar'      Type errors  Another very common error is the TypeError , which is raised whenever the data type of a variable used in a computation is unexpected by the function being called. For instance, many mathematical functions expect numerical input, but the Python interpreter won't know the error exists until it attempts to execute the expression.   An example which will produce a TypeError   >>>  \"This is a string\"\/2  Traceback (most recent call last) File \"<stdin>\", line 1, in <module> TypeError: unsupported operand type(s) for \/: 'str' and 'int'     There are many other types of errors which will be encountered as you try to write codes, too many to describe. Other common exceptions you might see are ValueError , AttributeError , DivideByZeroError , and one which I use frequently as a control mechanism, RuntimeError . In most cases, the well written code underlying whatever you are attempting involves a raise command, the method by which an exception is generally triggered. A notable exception to this is the KeyboardInterrupt , which us useful to remember: it is triggered by pressign Ctrl-C on your keyboard while a program is running in Python.    Handling exceptions  There is a school of engineering design called by many names which expresses the belief that a system should only fail into a known state or that a system that fails should do so securely. Applied to programming this idea is expressed in exception handling where violations of the logic of a program are anticipated and treated before they occur. As we should perhaps expect, Python implements this with a block data structure, the try:... except:... block.   Python exception handling  Any exception generated in the indented block following a try: command will attempt to be caught by one of a sequence of except ... : blocks which follow. As only one exception is generated at a time, this behaves as an if:... elif:... sequence; for instance, if one of the blocks begins with except RuntimeError as error_message: , then that block will only be executed when the body of the try: block raises a RuntimeError(...) ; the optional argument to the error is named error_message within this except block.  These exceptions are usually triggered by a raise command. Here is a meaningless example demonstrating the use of the structure.   An example of a try:... except:... block   n = 1 try: if n==1: raise RuntimeError('First error') elif n==2: raise ValueError('Second error') else: raise TypeError('Third error') except RuntimeError as error_message: print \"We have encountered a RuntimeError, specifically {0}\".format(error_message) pass except: print \"All errors but RuntimeErrors are caught here!\" pass print \"The program now exits cleanly.\"     The code listing in is intentionally stupid. The code doesn't actually do anything except demonstrate the try:... except:... block structure.  Memo-ization A cool use of dictionaries and the try:... except:... block is called memo-ization , although it is usually written without the hyphen. Consider the following implementation of the Collatz sequence.  An implementation of the Collatz sequence problem using a dictionary to store previously-computed resluts.   coll_mem = {1:[1], 2:[2,1], 4:[4,2,1]} def memoized_coll(x): try: return coll_mem[x] except KeyError: if not type(x)==int or x<1: return None elif x%2==0: next_val = x\/\/2 else: next_val = 3 * x + 1 coll_mem[x] = [x] + memoized_coll(next_val) return coll_mem[x]   Picking apart the code, we see that first it sets up a dictionary of known values. Then when asked to produce the Collatz sequence from a given input, the function tries to return the value stored in that key of the dictionary. If no such key exists, a KeyError is generated; when that happens, the program falls back on the form of generating the sequence. Suppose this task is iterated over all integers up to some given value; that is, are checked. For a given input value , when will the memoized version of the function always have the key stored in the dictionary? What has to happen to the next_val in the sequence for this to be the case?   Recursively-defined functions  A function like memoized_coll in which refers to itself is a recursive function. Typically the first recursively-defined function seen by students is the function which defines the Fibonacci sequence , for when .     Controlling the flow of a program  Generating errors via the raise command is an extremely powerful way to disrupt the flow of a program. A raise statement outside of a try:... except:... block will halt the program, so they are to be used sparingly. Two other statements which modify the flow of a program in an abrupt way are continue and break .   Python continue statements  When continue is encountered during the execution of a loop, the current step of the loop immediately completes and the loop condition is reevaluated, moving to the next object in a for loop or retesting the conditional of a while loop.  This is particularly useful in cases where the code must handle cases for the loop which do nothing, or are exempt from the behavior encoded in the block structure of the loop, but that do not halt the execution of the loop.    Python break statements  When break is encountered in the execution of a loop, the loop immediately terminates and the program continues past the looping block structure. Unlike with a continue statement, any further elements over which a for loop was programmed to iterate are skipped.     Semantic errors, or bugs  When left unhandled, exceptions halt the flow of the program, which may be undesirable but at least allows the programmer to detect that an error has occurred with great ease. On the other hand, semantic errors are discreet.   Semantic errors are bugs   A semantic error or bug occurs when a program appears to work, but produces a result other than what was expected. This can occur either due to an error in the algorithm or an error in the implementation of the algorithm.    Bugs are called semantic errors because they do not violate the syntactic rules of the language, but rather are syntactically valid but semantically meaningless. The following English sentence is likewise grammatically well-formed but semantically meaningless:   Colorless green ideas sleep furiously.  Noam Chomsky, Syntactic Structures, 1957   Semantic errors are sometiems difficult to remedy; one strategy is to simulate the execution of a code by hand, writing down all of the state changes of variables as they occur to see when the error actually arises. Many programming IDEs include automatic debuggers which assist with this, allowing for more complicated problems to be remedied. For a discussion on why software errors are called bugs, see Wikipedia.    "
},
{
  "id": "tech-syntaxerror",
  "level": "2",
  "url": "sec-intro-errors.html#tech-syntaxerror",
  "type": "Technology",
  "number": "A.6.1",
  "title": "Syntax Error.",
  "body": " Syntax Error  A Python SyntaxError is the programming equivalent of a grammatically incorrect sentence, where you've written something which violates the basic rules of the Python language. Python will show you in the error message exactly where your Syntax error occurs. Here's an example:   An example which will produce a SyntaxError   >>>  foo = \"This is a test\"  >>>  bar =  SyntaxError: invalid syntax    "
},
{
  "id": "tech-indexerror",
  "level": "2",
  "url": "sec-intro-errors.html#tech-indexerror",
  "type": "Technology",
  "number": "A.6.3",
  "title": "Index errors.",
  "body": " Index errors  An IndexError is raised when you try to access an index of a container with regular indexing (like lists, tuples, and strings, but not dictionaries) but outside the bounds of the valid indices.   An example which will produce a IndexError   >>>  foo = \"this is a string\"  >>>  bar = len(foo) + 5  >>>  foo[bar]  Traceback (most recent call last): File \"<pyshell#8>\", line 1, in <module> foo[bar] IndexError: string index out of range    "
},
{
  "id": "tech-keyerror",
  "level": "2",
  "url": "sec-intro-errors.html#tech-keyerror",
  "type": "Technology",
  "number": "A.6.5",
  "title": "Key errors.",
  "body": " Key errors  The KeyError is closely related to the IndexError , but for dictionaries! If a key is attempted to be referenced which has not been declared to have a value, a KeyError will result.   An example which will produce a KeyError   >>>  foo = {'bob':[1, 'the shrimp'], (2,3): (1,2,3,'the pineapple')}  >>>  print( list( foo.keys() ) )  ['bob', (2, 3)]  >>>  print( foo['bar'] )  Traceback (most recent call last): File \"<pyshell#3>\", line 1, in <module> print( foo['bar'] ) KeyError: 'bar'    "
},
{
  "id": "tech-typeerror",
  "level": "2",
  "url": "sec-intro-errors.html#tech-typeerror",
  "type": "Technology",
  "number": "A.6.7",
  "title": "Type errors.",
  "body": " Type errors  Another very common error is the TypeError , which is raised whenever the data type of a variable used in a computation is unexpected by the function being called. For instance, many mathematical functions expect numerical input, but the Python interpreter won't know the error exists until it attempts to execute the expression.   An example which will produce a TypeError   >>>  \"This is a string\"\/2  Traceback (most recent call last) File \"<stdin>\", line 1, in <module> TypeError: unsupported operand type(s) for \/: 'str' and 'int'    "
},
{
  "id": "p-1013",
  "level": "2",
  "url": "sec-intro-errors.html#p-1013",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exception handling "
},
{
  "id": "tech-try-except",
  "level": "2",
  "url": "sec-intro-errors.html#tech-try-except",
  "type": "Technology",
  "number": "A.6.9",
  "title": "Python exception handling.",
  "body": " Python exception handling  Any exception generated in the indented block following a try: command will attempt to be caught by one of a sequence of except ... : blocks which follow. As only one exception is generated at a time, this behaves as an if:... elif:... sequence; for instance, if one of the blocks begins with except RuntimeError as error_message: , then that block will only be executed when the body of the try: block raises a RuntimeError(...) ; the optional argument to the error is named error_message within this except block.  These exceptions are usually triggered by a raise command. Here is a meaningless example demonstrating the use of the structure.   An example of a try:... except:... block   n = 1 try: if n==1: raise RuntimeError('First error') elif n==2: raise ValueError('Second error') else: raise TypeError('Third error') except RuntimeError as error_message: print \"We have encountered a RuntimeError, specifically {0}\".format(error_message) pass except: print \"All errors but RuntimeErrors are caught here!\" pass print \"The program now exits cleanly.\"    "
},
{
  "id": "exc-memoization",
  "level": "2",
  "url": "sec-intro-errors.html#exc-memoization",
  "type": "Checkpoint",
  "number": "A.6.11",
  "title": "Memo-ization.",
  "body": "Memo-ization A cool use of dictionaries and the try:... except:... block is called memo-ization , although it is usually written without the hyphen. Consider the following implementation of the Collatz sequence.  An implementation of the Collatz sequence problem using a dictionary to store previously-computed resluts.   coll_mem = {1:[1], 2:[2,1], 4:[4,2,1]} def memoized_coll(x): try: return coll_mem[x] except KeyError: if not type(x)==int or x<1: return None elif x%2==0: next_val = x\/\/2 else: next_val = 3 * x + 1 coll_mem[x] = [x] + memoized_coll(next_val) return coll_mem[x]   Picking apart the code, we see that first it sets up a dictionary of known values. Then when asked to produce the Collatz sequence from a given input, the function tries to return the value stored in that key of the dictionary. If no such key exists, a KeyError is generated; when that happens, the program falls back on the form of generating the sequence. Suppose this task is iterated over all integers up to some given value; that is, are checked. For a given input value , when will the memoized version of the function always have the key stored in the dictionary? What has to happen to the next_val in the sequence for this to be the case? "
},
{
  "id": "rem-recursion",
  "level": "2",
  "url": "sec-intro-errors.html#rem-recursion",
  "type": "Remark",
  "number": "A.6.13",
  "title": "Recursively-defined functions.",
  "body": " Recursively-defined functions  A function like memoized_coll in which refers to itself is a recursive function. Typically the first recursively-defined function seen by students is the function which defines the Fibonacci sequence , for when .  "
},
{
  "id": "tech-continue",
  "level": "2",
  "url": "sec-intro-errors.html#tech-continue",
  "type": "Technology",
  "number": "A.6.14",
  "title": "Python <code class=\"code-inline tex2jax_ignore\">continue<\/code> statements.",
  "body": " Python continue statements  When continue is encountered during the execution of a loop, the current step of the loop immediately completes and the loop condition is reevaluated, moving to the next object in a for loop or retesting the conditional of a while loop.  This is particularly useful in cases where the code must handle cases for the loop which do nothing, or are exempt from the behavior encoded in the block structure of the loop, but that do not halt the execution of the loop.  "
},
{
  "id": "tech-break",
  "level": "2",
  "url": "sec-intro-errors.html#tech-break",
  "type": "Technology",
  "number": "A.6.15",
  "title": "Python <code class=\"code-inline tex2jax_ignore\">break<\/code> statements.",
  "body": " Python break statements  When break is encountered in the execution of a loop, the loop immediately terminates and the program continues past the looping block structure. Unlike with a continue statement, any further elements over which a for loop was programmed to iterate are skipped.  "
},
{
  "id": "p-1025",
  "level": "2",
  "url": "sec-intro-errors.html#p-1025",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semantic errors "
},
{
  "id": "def-semantic-error",
  "level": "2",
  "url": "sec-intro-errors.html#def-semantic-error",
  "type": "Definition",
  "number": "A.6.16",
  "title": "Semantic errors are bugs.",
  "body": " Semantic errors are bugs   A semantic error or bug occurs when a program appears to work, but produces a result other than what was expected. This can occur either due to an error in the algorithm or an error in the implementation of the algorithm.   "
},
{
  "id": "app-find-defs",
  "level": "1",
  "url": "app-find-defs.html",
  "type": "Section",
  "number": "B.1",
  "title": "Definitions",
  "body": " Definitions  This section provides a comprehensive list of all formal mathematical definitions in the text.   "
},
{
  "id": "app-find-tech",
  "level": "1",
  "url": "app-find-tech.html",
  "type": "Section",
  "number": "B.2",
  "title": "Technology and Algorithms",
  "body": "Technology and Algorithms  All of the introductions to Python technology and all algorithms.   "
},
{
  "id": "app-find-results",
  "level": "1",
  "url": "app-find-results.html",
  "type": "Section",
  "number": "B.3",
  "title": "Lemmas, Propositions, and Theorems",
  "body": "Lemmas, Propositions, and Theorems  This section provides a comprehensive list of all mathematical theorems throughout the text.   "
},
{
  "id": "app-find-projects",
  "level": "1",
  "url": "app-find-projects.html",
  "type": "Section",
  "number": "B.4",
  "title": "Projects",
  "body": " Projects  A comprehensive guide to all the parts of all of the projects for the text.   "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "C",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < >  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:  Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
