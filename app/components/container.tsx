export default function Container({ containername, children, className = "" }) {
  return (
    <div
      className={
        containername === "projects"
          ? "flex flex-col"
          : containername === "section"
            ? "flex flex-col navigation gap-4 mt-3 bg-silver-base rounded-md w-full h-full"
            : "flex"
      }
    >
      <section
        id={containername}
        className={
          containername === ""
            ? `${containername}-container bg-silver-base rounded-md`
            : containername === "section"
              ? `${containername}-container `
              : `${containername}-container bg-silver-base rounded-md mt-3`
        }
      >
        <div className={`${containername}-title ml-6 mt-6`}>
          {containername}
        </div>
        {["contact", "about"].includes(containername) ? (
          <div className="mt-5 ml-6 mr-6 mb-6">{children}</div>
        ) : containername === "section" ? (
          <div className="flex flex-col lg:ml-6 gap-1 mt-3">{children}</div>
        ) : (
          children
        )}
      </section>
    </div>
  );
}
