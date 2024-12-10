import React from "react";


const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Top Romantic Honeymoon Destinations in Jammu Kashmir: Luxury Resorts & Historical Places",
      description:
        "Explore top romantic honeymoon spots in Jammu Kashmir, from luxury resorts to historic sites...",
      date: "2024-08-23",
      author: "Ankita Goyal",
      image: "/images/blog3.jpg",
    },
    {
      id: 2,
      title: "Explore Gulmarg: Top Activities & Travel Guide",
      description:
        "Explore Gulmarg, Jammu Kashmir – a top tourist spot with stunning landscapes, skiing, trekking, and more. Discover...",
      date: "2024-08-21",
      author: "Ankita Goyal",
      image: "/images/blog1.webp", 
    },
    {
      id: 3,
      title: "Top 10 Must-Visit Places in Jammu Kashmir",
      description:
        "Explore the top 10 must-visit places in Jammu Kashmir, featuring scenic landscapes, hidden gems, and...",
      date: "2024-08-20",
      author: "Ankita Goyal",
      image: "/images/blog2.webp", 
    },
  ];

  return (
    <div className="blog-list px-100">
      {blogs.map((blog) => (
        <div className="blog-item" key={blog.id}>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-info">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <div className={`blog-footer ${blog.id===2 || blog.id ===3 ?'hide-footer' : ''}`}>
              <span>{blog.date}</span>
              <span>{blog.author}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
