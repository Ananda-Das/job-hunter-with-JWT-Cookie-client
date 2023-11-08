// import React from 'react';

import PageTitle from "../../components/PageTitle";

const Blogs = () => {
  return (
    <div className="py-7">
      <PageTitle title="JobHunter | Blog" />
      <h1 className="text-5xl text-center underline font-extrabold">BloG Page</h1>

      <div className="space-y-5 mt-7">
        <div>
          <h3 className="text-3xl font-bold">What is Access Token?</h3>
          <p className="text-base">
            <span className="font-bold">Answer:</span>To enable token-based authentication and grant application access to an API, access tokens are
            utilized. After a user authenticates and grants access, the application gets an access token. It then uses the access token as a
            credential when it makes a request to the target API.{" "}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">What is Refresh Token?</h3>
          <p className="text-base">
            <span className="font-bold">Answer:</span>A unique key known as a refresh token allows a client of an API or service to obtain fresh
            access tokens without having the user log in completely. Stated differently, an application is able to trade in a working refresh token
            for a fresh access token. The service could also return a new refresh token in addition to the updated access token.{" "}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">What is express js?</h3>
          <p className="text-base">
            <span className="font-bold">Answer:</span>Express is a web application framework for Node.js that offers a wide range of functionality for
            developing mobile and online apps. It is employed in the development of hybrid, multipage, and single-page web applications. It is a layer
            that assists in managing servers and routes and is developed on top of Node.js.{" "}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">What is Nest JS?</h3>
          <p className="text-base">
            <span className="font-bold">Answer:</span>A well-liked open-source back-end framework for TypeScript and Node.js server-side applications
            is called NestJS. Its goal is to give developers of server-side applications a strong foundation by utilizing established patterns and
            best practices from other frameworks, such Angular, Express.js, and others.With the help of the flexible and modular NestJS framework,
            developers may quickly divide their code into smaller, reusable modules. Additionally, it has a strong dependency injection mechanism that
            makes managing the dependencies and application components easier. Additionally, NestJS integrates with various Node.js modules and
            utilities and supports a number of server-side rendering methods.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
