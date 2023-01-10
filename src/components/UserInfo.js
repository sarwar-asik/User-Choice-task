import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const [users, setuser] = useState([]);

  useEffect(() => {
    axios.get(`     https://task-server-ebon.vercel.app/users`).then((data) => {
      console.log(data.data);
      setuser(data.data);
    });
  }, []);
  //   console.log(users);

  const EditUser = (user) => {
    navigate(`/editUser/${user?.name}`, { state: user });
    // console.log(user);
  };
  return (
    <div>
      <div class="relative max-w-[60%] shadow-2xl bg-slate-400 bg-opacity-[0.4] text-blue-100  overflow-x-auto mx-auto rounded-lg">
        <table class="w-full text-sm text-left text-gray-100 dark:text-gray-400">
          <thead class=" text-gray-200 uppercase dark:bg-gray-700 dark:text-gray-400 text-xl">
            <tr>
              <th scope="col" class="px-6 py-3">
                User
              </th>
              <th scope="col" class="px-6 py-3">
                Sector
              </th>
              <th scope="col" class="px-6 py-3">
                Terms
              </th>

              <th scope="col" class="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr class=" border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    {user?.name}
                  </th>
                  <td class="px-6 py-4">{user?.sector}</td>
                  <td class="px-6 py-4">{user?.terms}</td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => EditUser(user)}
                      class="font-medium font-mono text-blue-200 dark:text-blue-500 hover:underline"
                    >
                      Edit Info
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
