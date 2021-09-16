# In this repository, I will show what I learned in Node.js
Node.js is a runtime environment for executing JavaScript code in the backend. The main features are highly scalable, data-intensive, real-time apps. Why it is so special is:

- Easy to get started for the development.
- Great for prototyping and agile development.
- Superfast and highly scalable.

# What is run-time environment friendly?
Whenever we write JavaScript code, its code will be translated by JS engine for each web browser such as chakra in IE, v8 in google chrome, and spider monkey in Firefox. After that, it will be translated by machine code inside of the web browser. But the problem is sometimes it behaves differently because each browser has a different JS engine where is runtime environment during our code is running. So Ryan Dahl thought why don't we execute JavaScript outside of the browser. He took the v8 engine from Google and embedded it with C++, and call it Node.exe.

# Why do Node.js have highly scalable, data-intensive, and real-time apps?
Because this is non-blocking or asynchronous. Briefly saying, one waiter takes an order from the table, gives it to the kitchen, and takes an order from another table. Therefore, this waiter can take an order again and again. Applying with Node.js, a single thread can be used to handle multiple requests.

# Node applications are default with asynchronous.
One of the personally interesting things is the event queue. When a request arrives, a single thread will be used to handle it. if we need to query a database or thread, its thread does not wait for the database to return the data. While the database is executing our query, its thread will be used for another client. And then, when the database prepares the result, it puts a message as Event queue. Node.js keeps monitoring this event queue in the background. When it finds an event in the queue, it will take it out and execute it. This is the reason why Node.js is ideal for I/O intensive apps, superfast, and highly scalable.

# What not to do with Node.js?
Node.js is not for CPU intensive app such as video encoding, image manipulation or application that has to calculate a lot using CPU. Since Node applications are single-threaded, when performing the calculations to serve one client to other clients, it has to wait. So it should not be used for CPU-intensive apps.
