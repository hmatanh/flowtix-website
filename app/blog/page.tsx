import { posts } from "@/lib/posts";
import { BlogClient } from "./BlogClient";

// Server component: strips heavy body JSX before passing to the client
// component. Reduces blog listing client bundle from ~1.5MB to under 200KB.
export default function BlogPage() {
  const postsMeta = posts.map(
    ({ body: _body, toc: _toc, ...meta }) => meta
  );
  return <BlogClient posts={postsMeta} />;
}
