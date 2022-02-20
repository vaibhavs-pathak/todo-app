export const Layout = (props) => {
  return (
    <div>
      <main>
        {props.header}
        {props.children}
      </main>
      {props.footer}
    </div>
  );
};