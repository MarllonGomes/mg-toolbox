import Link from 'next/link';

export default function ToolCard(props) {
  return (
    <Link href={props.link}>
      <a className="rounded p-5 shadow-lg">
        <h2 className="font-red">{props.title}</h2>
        <p>{props.description}</p>
      </a>
    </Link>
  );
}