import React from 'react';
import useTitle from '../hooks/useTitles';

const Blogs = () => {
  useTitle('Pheaven | Blog')
    return (
        <div className='container-fuild my-5'>

<div className=' p-3   mx-auto mb-5  font-bold text-purple-700 '>
<h1 className='text-4xl text-center'>Some important questions that a developer needs a lot</h1>
</div>




<div className='p-2'>
<p className='text-2xl px-5 font-bold'>1. Question: What is an access token and refresh token? How do they work and where should we store them on the client-side ?</p>
<p className='px-6 py-3'> <span className='font-bold text-purple-800 italic'>Answer :</span> An access token is like a special pass or ID card that a user receives when they log in to a website or app. It contains information about the user, such as their identity and permissions. Think of it as a digital ID card that proves you have the right to access certain parts of a website or perform specific actions.

When a user wants to access a protected resource or perform an action, they present their access token as proof of their identity. It's like showing your ID card to enter a restricted area or gain special privileges.

However, access tokens have an expiration time for security reasons. They are designed to be short-lived and usually last only for a limited period, such as a few minutes or hours. This helps prevent unauthorized access to user accounts if the token is somehow stolen or intercepted.

To handle situations where the access token expires, a refresh token comes into play. A refresh token is another credential that is issued to the user during the login process. It has a longer lifespan compared to the access token. When the access token expires, the user can use the refresh token to request a new access token without having to log in again. It's like using a special "renewal" card to extend the validity of your access pass.

On the client-side, meaning on the user's device or browser, both the access token and refresh token need to be stored securely. Storing them securely means keeping them in a place where other websites or applications cannot access or manipulate them. This prevents potential attackers from stealing the tokens and impersonating the user.

One common approach is to store the tokens in browser storage mechanisms, such as localStorage or sessionStorage. These storage options are specific to the browser and the website or app domain, and they provide a way to keep the tokens secure from other websites.

Another option is to store the tokens in HTTP-only cookies. These are special cookies that can only be accessed by the server and are not accessible to client-side JavaScript. By using HTTP-only cookies, the tokens can be automatically sent with each request to the server, making it easier to handle token-based authentication.

In summary, access tokens are like digital passes that prove a user's identity and permissions. They have a limited lifespan and are used to access protected resources. Refresh tokens are longer-lived credentials used to obtain new access tokens when they expire. Both tokens need to be stored securely on the client-side using methods like browser storage or HTTP-only cookies.</p>
</div>

<div className='p-2'>
<p className='text-2xl px-5 font-bold'>2. Compare SQL and NoSQL databases ?</p>
<p className='px-6 py-3'><span className='font-bold text-purple-800 italic'>Answer : </span> 
<h2 className='font-bold my-2 '>SQL Databases:</h2>
  <ul className='list-disc list-inside'>
    <li>SQL databases, also known as relational databases, organize data into structured tables with predefined schemas.</li>
    <li>They use a structured query language (SQL) to interact with the data.</li>
    <li>SQL databases are great for handling structured and consistent data, such as financial transactions or user profiles.</li>
    <li>They enforce strong data consistency and support complex relationships between tables through the use of foreign keys.</li>
    <li>SQL databases are known for their ability to handle complex queries and provide powerful data manipulation capabilities.</li>
    <li>They are suitable for applications that require strict data integrity and need to ensure ACID (Atomicity, Consistency, Isolation, Durability) properties.</li>
    <li>Examples of SQL databases include MySQL, PostgreSQL, and Oracle.</li>
  </ul>

  <h2 className='font-bold my-2'>NoSQL Databases:</h2>
  <ul className='list-disc list-inside'>
    <li>NoSQL databases, also called non-relational databases, store data in a more flexible and dynamic way.</li>
    <li>They do not require a fixed schema, allowing for easier scalability and accommodating evolving data structures.</li>
    <li>NoSQL databases are ideal for handling unstructured or semi-structured data, such as social media posts or sensor data.</li>
    <li>They provide high scalability and performance by distributing data across multiple servers.</li>
    <li>NoSQL databases are designed to handle large amounts of data and heavy read/write workloads efficiently.</li>
    <li>They often prioritize availability and partition tolerance over strict data consistency, following the CAP theorem (Consistency, Availability, Partition tolerance).</li>
    <li>NoSQL databases come in different types, including document stores (e.g., MongoDB), key-value stores (e.g., Redis), and columnar databases (e.g., Cassandra).</li>
  </ul>


</p>
</div>

<div className='p-2'>
<p className='text-2xl px-5 font-bold'>3. What is express js? What is Next JS ?</p> 
<p className='px-6 py-3'><span className='font-bold text-purple-800 italic'>Answer : </span>
Express.js is a web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of features and tools that make it easier to handle various aspects of web development, such as routing, middleware, and handling requests and responses.<br></br><br></br>
Express.js is known for its simplicity and minimalistic approach, allowing developers to quickly create robust and scalable web applications. It offers a straightforward and flexible routing system, which enables you to define routes for different URLs and handle incoming requests accordingly. You can easily handle HTTP methods like GET, POST, PUT, and DELETE, and perform tasks such as retrieving data from a database, processing user input, or rendering dynamic web pages.<br></br><br></br>
Next.js, on the other hand, is a framework built on top of React.js that focuses on server-rendered React applications. It provides a powerful set of features to build static and dynamic websites with ease. Next.js combines the benefits of server-side rendering (SSR) and client-side rendering (CSR) to offer a great developer experience and optimal performance.

With Next.js, you can create a blog website by leveraging its routing system, which automatically maps URLs to React components. You can create pages for different sections of your blog, such as the homepage, blog posts, and about page. Next.js supports both static generation and server-side rendering, allowing you to generate static pages at build time or fetch data dynamically during runtime.<br></br><br></br>
Next.js also offers features like automatic code splitting, which optimizes the loading of your website by loading only the necessary JavaScript code for each page. It provides built-in CSS and Sass support, making it easier to style your components. Additionally, Next.js supports API routes, enabling you to create serverless functions to handle server-side logic or interact with a database.

In summary, Express.js is a web application framework for Node.js that simplifies backend development, while Next.js is a React framework that facilitates server-rendered applications. By combining the two, you can create a powerful and efficient blog website with a great user experience.

</p>
</div>




<div className='p-2'>
<p className='text-2xl px-5 font-bold'>4. What is MongoDB aggregate and how does it work ?</p> 
<p className='px-6 py-3'><span className='font-bold text-purple-800 italic'>Answer : </span>
magine you have a large collection of documents in your database, and you want to answer questions like "What is the total sales for each product?" or "How many customers have purchased more than 100 items?" Aggregate lets you do this.

Think of the aggregate as a pipeline, where you have a series of steps (called stages) that you can connect together to process your data. Each stage does a specific task and passes the results to the next stage.

For example, let's say you have a collection of sales records. You can start by using the $match stage to filter the records and only keep those that meet certain conditions, like sales made in a specific month.

Next, you can use the $group stage to group the filtered records by product and calculate the total sales for each product. This stage will take all the records with the same product and combine them together, so you end up with a result that shows the total sales for each product.

You can further refine your results using other stages like $sort to sort the products based on sales, $limit to limit the number of results, or $project to choose specific fields to include in the output.

By chaining these stages together, you can perform complex operations on your data and get meaningful insights.

Overall, MongoDB's aggregate is a powerful tool that helps you analyze and transform your data using a series of stages. It allows you to answer questions and perform calculations on your data in a flexible and efficient way.


</p>
</div>






        </div>
    );
};

export default Blogs;