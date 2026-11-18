export default function Container({ containername, children }) {
  return (
    <section
      id={containername}
      className={`${containername}-container bg-silver-base rounded-md mt-3`}
    >
      <div className={`${containername}-title ml-6 mt-6`}>{containername}</div>
      {["contact", "about"].includes(containername) ? (
        <div className="mt-5 ml-6 mr-6 mb-6">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
