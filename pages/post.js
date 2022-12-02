import ReactMarkdown from "react-markdown";

export default function Post({ post }) {
  return (
    <ReactMarkdown
      className="mt-12"
      components={{
        h1: ({node, ...props}) => <h1 className="text-2xl font-bold my-2" {...props}/>,
        h2: ({node, ...props}) => <h1 className="text-xl font-semibold my-2" {...props}/>,
        p: ({node, ...props}) => <p className="my-2" {...props}/>,
        code: ({node, ...props}) => <code className="px-1 bg-slate-200 rounded-lg" {...props}/>,
        pre: ({node, ...props}) => <pre className="p-1 bg-slate-200 rounded-lg" {...props}/>
      }}
    >
      {post}
    </ReactMarkdown>
  );
}


export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080/sample.md");
  const text = await response.text()
  // console.log(text);
  return {
    props: {
      post: text
    }
  }
}