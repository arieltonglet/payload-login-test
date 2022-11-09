import { LOGIN, LOGOUT, ME } from "./user";

export const fetchMe = async (): Promise<{ email: string }> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ME,
      }),
      credentials: "include",
    }
  ).then((res) => res.json());

  if (errors) {
    console.error(JSON.stringify(errors));
    throw new Error();
  }

  return data.meUser.user;
};

export const logIn = async (
  email: string,
  password: string
): Promise<{ email: string }> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: LOGIN,
        variables: {
          email,
          password,
        },
      }),
      credentials: "include",
    }
  ).then((res) => res.json());

  if (errors) {
    console.error(JSON.stringify(errors));
    throw new Error();
  }

  return data.loginUser.user;
};
export const logOut = async (): Promise<void> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: LOGOUT,
      }),
      credentials: "include",
    }
  ).then((res) => res.json());

  if (errors) {
    console.error(JSON.stringify(errors));
    throw new Error();
  }

  return;
};
