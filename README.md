# Fireboy & Watergirl: PSPACE-complete

[![msh - stars](https://img.shields.io/github/stars/DeLaPF/FBWG-PSPACE-Complete?color=ffbd19)](https://github.com/DeLaPF/FBWG-PSPACE-Complete)

Load *custom* JSON files into Fireboy & Watergirl: In the Forest Temple  
_(Works on all sites currently tested)_  

<p align="center" >
  <img src="https://github.com/DeLaPF/FBWG-PSPACE-Complete/blob/master/images/NTL.png" alt="Non-Crossing Toggle-Lock" width="480"/>
</p>

-----
### Instructions
You will be redirecting http/https requests from the tutorial level to my custom Non-Crossing Toggle-Lock level.  
_(This, however, also works with any json that you may want to redirect to)_

How to use:
1. Install the [Requestly](https://requestly.io/blog/2018/04/07/install-requestly-in-chrome-and-firefox/) extension/add-on onto either Firefox or Chrome
2. Create Redirect Request Rule (as shown below)
![Requestly](https://github.com/DeLaPF/FBWG-PSPACE-Complete/blob/master/images/Requestly.png)
3. Click on _Save Rule_  
4. Open Fireboy & Watergirl in a new tab and select the tutorial level  
  _(this should work for any website that has FBWG, however you can use this [link](https://html5-games.io/game/fireboy-and-watergirl/) to be sure)_  
6. You're done!!! The custom level should be up and running for you to test

### Proof
#### PSPACE
Any state in Fireboy & Watergirl can be encoded as follows, by storing the position of the two players, a list of the objects (moving platforms, buttons, and levers) given their initial data, and a binary string representing the state of each group of objects. The positions of the two players can be stored in  n bits where n =  r\[ows\] * c\[olums\] of the level. There can be at most n objects in a level (the true maximum is lower, but this will serve for this proof), and each of the objects store their initial data in the form of their start position/size (n bits), end position/size (n bits), and state (1 bit), thus giving each object an encoding size of 2n + 1 bits and the list of objects a size of n(2n + 1) = 2n^2 + n bits. The maximum length of the binary string representing the states of the objects is equal to the number of groups of objects (objects grouped together switch states together), again we will assume a length of n (although the true maximum is lower) and thus an encoding size of n bits. This results in a total encoding size of n\[players\] + 2n^2 + n\[objects\] + n\[states\] = 2n^2 + 3n bits, which falls under PSPACE.

#### PSPACE-hardness
By use of the Motion Planning framework the Non-Crossing Toggle-Lock, or any of the other PSPACE-hard gadgets alone, are sufficient in proving the PSPACE-hardness of Fireboy & Watergirl, given the additional stipulation that the overworlds entering and leaving any gadget require a Dam (a locking device that requires the use of both Fireboy and Watergirl to move past—as seen in the yellow and purple groups of objects in the above picture of the NTL level).
Thus, Fireboy & Watergirl is PSPACE-complete.

#### Note
A state is reached by having all objects of a given group in the same state, i.e., all levers must be facing the same direction otherwise you will find yourself in an in-between state (this does not break anything, but is good to note when testing levels with more than one level in a group).

### Additional Information
As I alluded to prior, it is entirely possible for you to upload your own custom levels using this same method; all that is required for you to do so is to upload your own .json file to GitHub or any other place where you will be able to link to your file, and replace the redirect Destination with the URL to your own .json FBWG level.
The json file is relatively straightforward as is, though there are other usable objects not included in my .json, so I can make a guide on how to use it if someone raises an issue and needs help.

-----
#### Credits

Author: [DeLaPF](https://github.com/DeLaPF)

-----

<h4 align="center" >
    Give a star to this repository <a href="https://github.com/DeLaPF/FBWG-PSPACE-Complete" > here</a>!
</h4>

<p align="center" >
    <a href="https://github.com/gekigek99/DeLaPF/FBWG-PSPACE-Complete/stargazers" >
        <img src="https://reporoster.com/stars/DeLaPF/FBWG-PSPACE-Complete" >
    </a>
</p>
