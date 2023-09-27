const Forward = (props: any) => {
  return (
    <h2 className={`mb-3 text-2xl font-semibold`}>
      {`${props.text} `}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
  );
};

const Back = () => {
  return (
    <h2 className={` text-2xl font-semibold`}>
      <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
        &lt;-
      </span>
      Go back{" "}
    </h2>
  );
};

export { Forward, Back };
