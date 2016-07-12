---
layout: post
title:  "Java: Pass by Value or Pass by Reference"
date:   2014-11-23 22:54:21 -0500
---

Lately, I’ve begun answering questions on StackOverflow. I frequent the Java 
tag and I’ve noticed one recurring question in particular. Quite often, programmers experience a 
range of issues related to a misunderstanding of how exactly Java passes method parameters.

First, let’s talk about what the Java Virtual Machine stores on the heap versus on the stack. All 
the primatives – `long`, `int`, `short`, `byte`, `char`, `double`, `float`, and references – are stored on the 
stack. Memory stored on the stack is handled entirely by the Operating System. Everything else in 
Java – Objects, arrays, and so on – are stored on the heap. Memory allocated on the heap must be 
handled by the Java Virtual Machine. The JVM keeps track of all the references and as soon as 
there are no references to an object, the JVM flags it for garbage collection. The garbage 
collector runs on a daemon thread and frees all of the flagged memory on the heap when it runs.

Here’s a line you may or may not have heard before: Java passes by value. In other words, when you 
pass a variable to a method, a copy of the variable is made for the method to use. It’s true. 
What’s sometimes confusing for people though is that Java passes whatever is stored on the stack by 
value. For an Object or an array, the value stored on the stack is a reference to the allocated 
memory on the heap. In other words, if you have an object as a parameter, a copy of the pointer is 
made and it is set to point to the original object.

What exactly does that mean? If you dereference the pointer and change the underlying value on the 
heap, it does change the initial variable. On the other hand, if you reassign the parameter, you 
are only changing the method’s local reference to point to a different memory location. The 
initial variable is not changed.

Consider the class Person.

{% highlight java %}
public class Person {

    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
{% endhighlight %}

Let’s say we want to create a method `changePersonToJim(Person personB)` that will take `personB` 
and change the name of the person to Jim and the age of the person to 26. Maybe we could try 
someting like this:

{% highlight java %}
public static void main(String[] args) {
    Person personA = new Person("Bob", 35);
    changePersonToJim(personA);
}

public static void changePersonToJim(Person personB) {
    personB = new Person("Jim", 26); // what will happen?
}
{% endhighlight %}

What happens? Well, the memory will look like the diagram below just after the method is called 
(note we are representing memory on the stack with squares and memory on the heap with circles).

![Diagram 1][1]

Note that a new reference is made and given to the method. Initially, both references reference 
the same person. What happens after the method executes?

![Diagram 2][2]

As we can see, when we reassign `personB`, a new Person is allocated on the heap. Our reference 
in personB then changes to point to this newly allocated Person. What about the initial 
variable, `personA`? As you can see, personA still references the same value on the heap. It is 
not changed!

What if we change our method to look like this?

{% highlight java %}
public static void main(String[] args) {
    Person personA = new Person("Bob", 35);
    changePersonToJim(personA);
}

public static void changePersonToJim(Person personB) {
    personB.setName("Jim");
    personB.setAge(26);
}
{% endhighlight %}

Since there’s no reassignment, the reference never changes. Both `personA` and `personB` always point 
to the same object on the heap. When we call `personB.setName` and `personB.setAge`, we dereference the i
pointer and change the actual value on the heap. The result is that both `personA` and `personB` now 
point to a Person object with a name of “Jim” and an age of 26.

![Diagram 3][3]

A second common thing to do is to change the method signature from void to Person. We then return 
the reference to the newly created Person and we can reassign the original reference to point to 
it. The old Person that was allocated on the heap then will then have no more references to it 
and it will be flagged for garbage collection.

Hopefully this post is of some help to you in understanding how exactly Java passes its parameters. 
If you’re still confused, [this StackOverflow answer](http://stackoverflow.com/questions/40480/is-java-pass-by-reference-or-pass-by-value) has many good explanations.

[1]: /assets/1.png
[2]: /assets/2.png
[3]: /assets/3.png

