Naming convention


Class always starts with two letters that identifies the framework: BaraCSS = .bc-...

Easier migrations.
This makes easier to migrate existing applications to use the new framework.
Using the identifier gives you the possibility to make a soft migration,
implementing the new styles avoiding the class override.

Multiple frameworks.
This gives you the chance to implement multiple frameworks that uses this convention.



Class uses two letter of each word of the style property: .bc-cu-po = cursor: pointer;

If there are more properties with the same letter you can use a third letter to make the difference.
Eg.
.bc-dir-lt = direction: ltr;
.bc-dis-no = display: none;

Fast learning curve.
If you know the property you want to use you will not need to see the documentation.




If new property is added but the two letters are already used you will need to use the 3 initial letters.

Prepare for the future.
It's possible that new style properties will be included in the future or
simply there are properties that were not included in the current release, to avoid conflicts new properties
with repeated initials will use 3 letters instead of 2.



If new property has a derived word of other property use last letters instead of next one.

When we have properties with similar names is possible that those will be similar so instead of using a 3 letter
use the last letters to make them different.
Eg.
small = sm
smaller = smr

*note: careful with this, be sure that when you implement this there are no other rules using that name.



Responsive classes will use double - to by defined.

Responsive classes will be defined by the use of --x at the end of the class, where x is the size.
Eg.
.bc-te-ali-ce--xs
.bc-te-ali-ce--s



Classes with values will use the number and number + p in case of percentage.

To make differences between values that use percentage and pixels, pixels will be defined by the number and percentages will include the p at the end of the value.
Eg.
.bc-bo-ra-5
.bc-bo-ra-50p

