interface Props {
  className: string;
  key?: number;
  title: string;
  src: string;
}

const Iframe: React.FC<Props> = ({ className, key, title, src }) => {
  return (
    <iframe
      className={className}
      key={key}
      title={title}
      src={src}
      loading="lazy"
    ></iframe>
  );
};

export default Iframe;
