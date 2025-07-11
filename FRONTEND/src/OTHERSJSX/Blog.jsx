import { useState, useEffect } from "react";
import "./Blog.css";

export default function Blog() {
  const Blogs = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1629299342269-b2e20c444c05?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tinubu Moves to Revoke Illegal Land that",
      content:
        " that Iran’s refusal to sign a nuclear disarmament deal had led the country down a.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1631888718423-082c9f5b0206?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "You know, there are people who believe ",
      content:
        "I said it over and over again! Everyone should immediately evacuate Tehran!",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Catholic You know, there are things that",
      content:
        " and we are grateful that he’s given us the audience today to come in and say hello to him",
    },
  ];

  return (
    <>
      <div className="blog-overal-div">
        <nav className="blog-nav">
          <h2>From Our Blog</h2>
        </nav>
        <div className="blog-grid-div">
          {Blogs.map((blog) => (
            <div key={blog.id} className="blog-grid shadow-xl">
              <div className="blogGrid blgrid1">
                <img src={blog.image} className="blgrid1-img" />
              </div>
              <div className="blogGrid blgrid2">
                <div>
                  <h2>{blog.title}</h2>
                  <p>{blog.content}</p>
                  <button>View More and forget →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
