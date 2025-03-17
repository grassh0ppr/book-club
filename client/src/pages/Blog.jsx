import styles from "./Blog.module.css";
export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the Book Club blog!</p>
      <p>
        Here you can read about the latest book club news, events, and more.
      </p>
      <div className={styles.marquee}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className={styles.blogPost}>
      <h2>Title of piece</h2>
      <h3>Author</h3>
      <p>
        Content goes here... Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Expedita dolores maxime, molestias quas, quaerat, esse rerum quod
        dicta voluptate error iusto officia perferendis nostrum sint ipsa. Ullam
        culpa sed voluptates!
      </p>
      <div className={styles.sources}>
        <a href="https://www.example.com">Read more</a> |{" "}
        <a href="https://www.example.com">Source</a>
      </div>
    </div>
  );
}
