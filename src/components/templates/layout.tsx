import React, { FC } from "react";

type Props = { name: string };

export const Layout: FC<Props> = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  );
};

export default Layout;
