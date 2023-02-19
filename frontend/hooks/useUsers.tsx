import { useQuery } from "@apollo/client";
import { User } from "../types/types";
import { GET_USERS } from "../graphql";

import { useEffect, useState } from "react";

const useUsers = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!data) return;

    if (data.getUsers) {
      const users = data.getUsers.map((user: User) => {
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          mbti: user.mbti,
          city: user.city,
          province: user.province,
          country: user.country,
          age: user.age,
        };
      });

      setUsers(users);
    }
  }, [data]);

  return { loading, error, users };
};

export default useUsers;
