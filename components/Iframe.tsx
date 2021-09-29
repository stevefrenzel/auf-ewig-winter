interface Props {
  key: number;
  title: string;
  src: string;
}

const Iframe: React.FC<Props> = ({ key, title, src }) => {
  return <iframe key={key} title={title} src={src} loading="lazy"></iframe>;
};

export default Iframe;
