import Link from "next/link";

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the content of the first blog post.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "This is the content of the second blog post.",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content: "This is the content of the third   blog post.",
    },
    {
      id: 4,
      title: "Fourth Blog Post",
      content: "This is the content of the fourth blog post.",
    },
    {
      id: 5,
      title: "Fifth Blog Post",
      content: "This is the content of the fifth blog post.",
    },
    {
      id: 6,
      title: "Sixth Blog Post",
      content: "This is the content of the sixth blog post.",
    },
    {
      id: 7,
      title: "Seventh Blog Post",
      content: "This is the content of the seventh blog post.",
    },
    {
      id: 8,
      title: "Eighth Blog Post",
      content: "This is the content of the eighth blog post.",
    },
    {
      id: 9,
      title: "Ninth Blog Post",
      content: "This is the content of the ninth blog post.",
    },
    {
      id: 10,
      title: "Tenth Blog Post",
      content: "This is the content of the tenth blog post.",
    }
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Blogs</h1>
      <ul className="flex flex-col gap-5 px-10 py-3 text-white w-full max-w-md">
        {blogs.map((blog) => (
          <li key={blog.id} className="w-full">
            {/* Move styles to Link and add 'block' to fill the li */}
            <Link
              href={`/blog/${blog.id}`}
              className="block mb-6 bg-black/10 p-4 cursor-pointer hover:bg-purple-700/10 transition-colors duration-300 text-2xl font-semibold text-purple-600 rounded-md"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}